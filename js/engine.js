/* Mesin rumus mini untuk Belajar Excel.
   Pemisah argumen "," atau ";" keduanya diterima. Desimal memakai titik. */
(function (root) {
  'use strict';

  /* ---------- Galat ---------- */
  function XlErr(code) { this.code = code; }
  XlErr.prototype.toString = function () { return this.code; };
  var ERR = {
    DIV0: new XlErr('#DIV/0!'), VALUE: new XlErr('#VALUE!'), NAME: new XlErr('#NAME?'),
    NA: new XlErr('#N/A'), REF: new XlErr('#REF!'), NUM: new XlErr('#NUM!')
  };
  var isErr = function (v) { return v instanceof XlErr; };
  function isRng(v) { return !!v && v.rng === true; }

  /* ---------- Alamat sel ---------- */
  function colToNum(s) { var n = 0; s = s.toUpperCase(); for (var i = 0; i < s.length; i++) n = n * 26 + (s.charCodeAt(i) - 64); return n; }
  function numToCol(n) { var s = ''; while (n > 0) { var m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - 1) / 26); } return s; }
  function parseAddr(a) {
    var m = /^\$?([A-Za-z]{1,3})\$?(\d+)$/.exec(a);
    if (!m) return null;
    return { c: colToNum(m[1]), r: parseInt(m[2], 10) };
  }
  function addrOf(c, r) { return numToCol(c) + r; }

  /* ---------- Tanggal ---------- */
  var EPOCH = Date.UTC(1899, 11, 30);
  function toSerial(y, m, d) { return Math.round((Date.UTC(y, m - 1, d) - EPOCH) / 86400000); }
  function fromSerial(n) { var dt = new Date(EPOCH + Math.floor(n) * 86400000); return { y: dt.getUTCFullYear(), m: dt.getUTCMonth() + 1, d: dt.getUTCDate(), w: dt.getUTCDay() }; }
  var HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  var BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  function pad(n, w) { n = String(n); while (n.length < w) n = '0' + n; return n; }
  function fmtDate(n) { var p = fromSerial(n); return pad(p.d, 2) + '/' + pad(p.m, 2) + '/' + p.y; }

  /* ---------- Konversi tipe ---------- */
  function unr(v) {
    if (isErr(v)) throw v;
    if (isRng(v)) { if (v.rows.length === 1 && v.rows[0].length === 1) v = v.rows[0][0]; else throw ERR.VALUE; if (isErr(v)) throw v; }
    return v;
  }
  function toNum(v) {
    v = unr(v);
    if (v === null || v === undefined || v === '') return 0;
    if (typeof v === 'number') return v;
    if (typeof v === 'boolean') return v ? 1 : 0;
    if (typeof v === 'string') {
      var t = v.trim();
      if (t !== '' && !isNaN(Number(t))) return Number(t);
      var dm = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(t);
      if (dm) return toSerial(+dm[3], +dm[2], +dm[1]);
    }
    throw ERR.VALUE;
  }
  function toStr(v) {
    v = unr(v);
    if (v === null || v === undefined) return '';
    if (typeof v === 'boolean') return v ? 'TRUE' : 'FALSE';
    if (typeof v === 'number') return fmtNum(v);
    return String(v);
  }
  function toBool(v) {
    v = unr(v);
    if (typeof v === 'boolean') return v;
    if (typeof v === 'number') return v !== 0;
    if (v === null || v === undefined || v === '') return false;
    if (typeof v === 'string') { var u = v.toUpperCase(); if (u === 'TRUE') return true; if (u === 'FALSE') return false; }
    throw ERR.VALUE;
  }
  function fmtNum(n) {
    if (!isFinite(n)) return '#NUM!';
    if (Number.isInteger(n)) return String(n);
    return String(Number(n.toPrecision(12)));
  }

  /* ---------- Tokenizer ---------- */
  function tokenize(src) {
    var t = [], i = 0, n = src.length, m;
    while (i < n) {
      var ch = src[i];
      if (/\s/.test(ch)) { i++; continue; }
      if (ch === '"') {
        var s = ''; i++;
        while (i < n) { if (src[i] === '"') { if (src[i + 1] === '"') { s += '"'; i += 2; continue; } break; } s += src[i++]; }
        if (i >= n) throw ERR.VALUE;
        i++; t.push({ k: 'str', v: s }); continue;
      }
      var rest = src.slice(i);
      if ((m = /^(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?/.exec(rest))) { t.push({ k: 'num', v: parseFloat(m[0]) }); i += m[0].length; continue; }
      if ((m = /^\$?[A-Za-z]{1,3}\$?\d+(?![A-Za-z0-9_(])/.exec(rest))) { t.push({ k: 'ref', v: m[0].replace(/\$/g, '').toUpperCase() }); i += m[0].length; continue; }
      if ((m = /^[A-Za-z_][A-Za-z0-9_.]*/.exec(rest))) {
        var id = m[0]; i += id.length;
        if (src[i] === '(') t.push({ k: 'fn', v: id.toUpperCase() });
        else if (/^(TRUE|FALSE)$/i.test(id)) t.push({ k: 'bool', v: id.toUpperCase() === 'TRUE' });
        else t.push({ k: 'name', v: id });
        continue;
      }
      if ((m = /^(<=|>=|<>)/.exec(rest))) { t.push({ k: 'op', v: m[0] }); i += 2; continue; }
      if ('+-*/^&=<>(),;:%'.indexOf(ch) >= 0) { t.push({ k: 'op', v: ch === ';' ? ',' : ch }); i++; continue; }
      throw ERR.NAME;
    }
    return t;
  }

  /* ---------- Parser ---------- */
  function parse(src) {
    var tk = tokenize(src), p = 0;
    var isOp = function (v) { var x = tk[p]; return !!x && x.k === 'op' && x.v === v; };
    function expr() { return cmp(); }
    function cmp() {
      var l = cat();
      while (tk[p] && tk[p].k === 'op' && ['=', '<>', '<', '>', '<=', '>='].indexOf(tk[p].v) >= 0) { var o = tk[p++].v; l = { t: 'bin', o: o, l: l, r: cat() }; }
      return l;
    }
    function cat() { var l = add(); while (isOp('&')) { p++; l = { t: 'bin', o: '&', l: l, r: add() }; } return l; }
    function add() { var l = mul(); while (isOp('+') || isOp('-')) { var o = tk[p++].v; l = { t: 'bin', o: o, l: l, r: mul() }; } return l; }
    function mul() { var l = pow(); while (isOp('*') || isOp('/')) { var o = tk[p++].v; l = { t: 'bin', o: o, l: l, r: pow() }; } return l; }
    function pow() { var l = unary(); while (isOp('^')) { p++; l = { t: 'bin', o: '^', l: l, r: unary() }; } return l; }
    function unary() {
      if (isOp('-')) { p++; return { t: 'neg', e: unary() }; }
      if (isOp('+')) { p++; return unary(); }
      return post();
    }
    function post() { var e = prim(); while (isOp('%')) { p++; e = { t: 'pct', e: e }; } return e; }
    function prim() {
      var x = tk[p++];
      if (!x) throw ERR.VALUE;
      if (x.k === 'num' || x.k === 'str' || x.k === 'bool') return { t: 'lit', v: x.v };
      if (x.k === 'ref') {
        if (isOp(':')) {
          p++; var y = tk[p++];
          if (!y || y.k !== 'ref') throw ERR.REF;
          var a = parseAddr(x.v), b = parseAddr(y.v);
          return { t: 'range', c1: Math.min(a.c, b.c), r1: Math.min(a.r, b.r), c2: Math.max(a.c, b.c), r2: Math.max(a.r, b.r) };
        }
        var q = parseAddr(x.v); return { t: 'ref', c: q.c, r: q.r };
      }
      if (x.k === 'fn') {
        p++; /* lewati "(" */
        var args = [];
        if (isOp(')')) { p++; return { t: 'fn', n: x.v, a: args }; }
        while (true) {
          if (isOp(',') || isOp(')')) args.push({ t: 'lit', v: null, omitted: true });
          else args.push(expr());
          if (isOp(',')) { p++; continue; }
          if (isOp(')')) { p++; break; }
          throw ERR.VALUE;
        }
        return { t: 'fn', n: x.v, a: args };
      }
      if (x.k === 'name') throw ERR.NAME;
      if (x.k === 'op' && x.v === '(') { var e = expr(); if (!isOp(')')) throw ERR.VALUE; p++; return e; }
      throw ERR.VALUE;
    }
    var ast = expr();
    if (p < tk.length) throw ERR.VALUE;
    return ast;
  }

  /* ---------- Perbandingan & kriteria ---------- */
  function typeRank(v) { if (typeof v === 'number') return 0; if (typeof v === 'string') return 1; if (typeof v === 'boolean') return 2; return 0; }
  function compare(a, b) {
    if (a === null || a === undefined) a = (typeof b === 'string') ? '' : (typeof b === 'boolean' ? false : 0);
    if (b === null || b === undefined) b = (typeof a === 'string') ? '' : (typeof a === 'boolean' ? false : 0);
    var ra = typeRank(a), rb = typeRank(b);
    if (ra !== rb) return ra < rb ? -1 : 1;
    if (typeof a === 'string') { a = a.toLowerCase(); b = b.toLowerCase(); }
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function wildRx(s) {
    return new RegExp('^' + s.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.') + '$', 'i');
  }
  function makeCrit(c) {
    c = unr(c);
    if (typeof c === 'number' || typeof c === 'boolean') return function (v) { return typeof v === typeof c && compare(v, c) === 0; };
    c = toStr(c);
    var m = /^(<=|>=|<>|<|>|=)?(.*)$/.exec(c), op = m[1] || '=', rhs = m[2];
    var num = rhs.trim() !== '' && !isNaN(Number(rhs)) ? Number(rhs) : null;
    return function (v) {
      if (isErr(v)) return false;
      if (num !== null) {
        if (typeof v !== 'number') return op === '<>';
        switch (op) { case '=': return v === num; case '<>': return v !== num; case '<': return v < num; case '>': return v > num; case '<=': return v <= num; case '>=': return v >= num; }
      }
      if (rhs === '' && (op === '=' || op === '<>')) { var blank = (v === null || v === ''); return op === '=' ? blank : !blank; }
      var s = (v === null || v === undefined) ? '' : (typeof v === 'string' ? v : toStr(v));
      if (op === '=' || op === '<>') {
        var eq = (/[*?]/.test(rhs)) ? wildRx(rhs).test(s) : s.toLowerCase() === rhs.toLowerCase();
        return op === '=' ? eq : !eq;
      }
      if (typeof v !== 'string') return false;
      var cc = compare(s, rhs);
      return op === '<' ? cc < 0 : op === '>' ? cc > 0 : op === '<=' ? cc <= 0 : cc >= 0;
    };
  }

  /* ---------- Util fungsi ---------- */
  function flat(v) { if (isRng(v)) { var o = []; v.rows.forEach(function (r) { r.forEach(function (x) { o.push(x); }); }); return o; } return [v]; }
  function nums(args) {
    var o = [];
    args.forEach(function (a) {
      if (isRng(a)) { flat(a).forEach(function (x) { if (isErr(x)) throw x; if (typeof x === 'number') o.push(x); }); }
      else { if (isErr(a)) throw a; if (a === null || a === undefined) return; o.push(toNum(a)); }
    });
    return o;
  }
  function needRng(v) { if (isErr(v)) throw v; if (!isRng(v)) throw ERR.VALUE; return v; }
  function round(n, d, mode) {
    var f = Math.pow(10, d), x = Number((Math.abs(n) * f).toPrecision(14)), s = n < 0 ? -1 : 1;
    if (mode === 'up') x = Math.ceil(x); else if (mode === 'down') x = Math.floor(x); else x = Math.floor(x + 0.5);
    return s * x / f;
  }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a; }
  function weekdayOf(serial, type) {
    var w = fromSerial(serial).w;
    if (type === 1) return w + 1;
    if (type === 2) return ((w + 6) % 7) + 1;
    if (type === 3) return (w + 6) % 7;
    throw ERR.NUM;
  }
  function isWorkday(s, hol) { var w = fromSerial(s).w; return w !== 0 && w !== 6 && hol.indexOf(s) < 0; }
  function addMonths(serial, k) {
    var p = fromSerial(serial), tot = p.y * 12 + (p.m - 1) + k, y = Math.floor(tot / 12), m = tot - y * 12 + 1;
    var last = new Date(Date.UTC(y, m, 0)).getUTCDate();
    return toSerial(y, m, Math.min(p.d, last));
  }
  function fmtText(v, f) {
    v = unr(v);
    if (typeof v === 'string' && isNaN(Number(v))) return v;
    var n = toNum(v);
    if (/[dmy]/i.test(f.replace(/"[^"]*"/g, '')) && !/[#0]/.test(f)) {
      var p = fromSerial(n);
      return f.replace(/yyyy|yy|mmmm|mmm|mm|m|dddd|ddd|dd|d/gi, function (t) {
        switch (t.toLowerCase()) {
          case 'yyyy': return p.y; case 'yy': return pad(p.y % 100, 2);
          case 'mmmm': return BULAN[p.m - 1]; case 'mmm': return BULAN[p.m - 1].slice(0, 3);
          case 'mm': return pad(p.m, 2); case 'm': return p.m;
          case 'dddd': return HARI[p.w]; case 'ddd': return HARI[p.w].slice(0, 3);
          case 'dd': return pad(p.d, 2); case 'd': return p.d;
        }
      });
    }
    var lits = [], pat = f.replace(/"([^"]*)"/g, function (_, s) { lits.push(s); return '\u0001'; });
    if (/%/.test(pat)) n *= 100;
    var core = /[#0.,]+/.exec(pat);
    if (!core) return f.replace(/"/g, '');
    var cs = core[0], dec = cs.indexOf('.') >= 0 ? cs.split('.')[1].replace(/[^0#]/g, '').length : 0;
    var intPart = cs.split('.')[0], minInt = (intPart.match(/0/g) || []).length, grp = intPart.indexOf(',') >= 0;
    var neg = n < 0, x = round(Math.abs(n), dec, 'r'), s2 = x.toFixed(dec), ip = s2.split('.')[0], fp = s2.split('.')[1] || '';
    while (ip.length < minInt) ip = '0' + ip;
    if (grp) ip = ip.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    var body = ip + (dec ? '.' + fp : ''), li = 0;
    var res = pat.replace(core[0], body).replace(/\u0001/g, function () { return lits[li++] || ''; });
    return (neg && x !== 0 ? '-' : '') + res;
  }
  function financeFV(r, n, pmt, pv, type) {
    if (r === 0) return -(pv + pmt * n);
    var g = Math.pow(1 + r, n);
    return -(pv * g + pmt * (1 + r * type) * (g - 1) / r);
  }
  function financePMT(r, n, pv, fv, type) {
    if (r === 0) return -(pv + fv) / n;
    var g = Math.pow(1 + r, n);
    return -(fv + pv * g) * r / ((1 + r * type) * (g - 1));
  }
  function irr(vals, guess) {
    var r = guess === undefined ? 0.1 : guess;
    for (var it = 0; it < 200; it++) {
      var f = 0, d = 0;
      for (var i = 0; i < vals.length; i++) { f += vals[i] / Math.pow(1 + r, i); d -= i * vals[i] / Math.pow(1 + r, i + 1); }
      if (d === 0) throw ERR.NUM;
      var nr = r - f / d;
      if (Math.abs(nr - r) < 1e-10) return nr;
      r = nr;
    }
    throw ERR.NUM;
  }
  function dbParts(a) {
    var db = needRng(a[0]), crit = needRng(a[2]), fld = unr(a[1]);
    var heads = db.rows[0].map(function (h) { return toStr(h).toLowerCase(); });
    var fi = typeof fld === 'number' ? fld - 1 : heads.indexOf(toStr(fld).toLowerCase());
    if (fi < 0 || fi >= heads.length) throw ERR.VALUE;
    var ch = crit.rows[0].map(function (h) { return toStr(h).toLowerCase(); }), conds = [];
    for (var r = 1; r < crit.rows.length; r++) {
      var row = [];
      for (var c = 0; c < ch.length; c++) {
        var cv = crit.rows[r][c];
        if (cv === null || cv === '') continue;
        var idx = heads.indexOf(ch[c]); if (idx < 0) throw ERR.VALUE;
        row.push({ idx: idx, f: makeCrit(cv) });
      }
      conds.push(row);
    }
    var out = [];
    for (var k = 1; k < db.rows.length; k++) {
      var rv = db.rows[k];
      var ok = !conds.length || conds.some(function (cs) { return cs.every(function (cd) { return cd.f(rv[cd.idx]); }); });
      if (ok) out.push(rv[fi]);
    }
    return out;
  }
  function matchPos(v, arr, type) {
    var i, best = -1;
    if (type === 0) {
      var rx = (typeof v === 'string' && /[*?]/.test(v)) ? wildRx(v) : null;
      for (i = 0; i < arr.length; i++) {
        if (rx) { if (typeof arr[i] === 'string' && rx.test(arr[i])) return i; }
        else if (arr[i] !== null && typeof arr[i] === typeof v && compare(arr[i], v) === 0) return i;
      }
      return -1;
    }
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === null || typeRank(arr[i]) !== typeRank(v)) continue;
      var c = compare(arr[i], v);
      if (type === 1) { if (c <= 0) best = i; else break; }
      else { if (c >= 0) best = i; else break; }
    }
    return best;
  }
  function romanOf(n) {
    if (n < 0 || n > 3999) throw ERR.VALUE;
    var m = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']], s = '';
    m.forEach(function (p) { while (n >= p[0]) { s += p[1]; n -= p[0]; } });
    return s;
  }
  function arabicOf(s) {
    var v = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }, t = 0; s = s.toUpperCase();
    for (var i = 0; i < s.length; i++) { var a = v[s[i]], b = v[s[i + 1]]; if (!a) throw ERR.VALUE; t += (b && b > a) ? -a : a; }
    return t;
  }
  function sum(arr) { return arr.reduce(function (x, y) { return x + y; }, 0); }

  /* ---------- Fungsi ---------- */
  var F = {};
  /* Matematika & statistik */
  F.SUM = function (a) { return sum(nums(a)); };
  F.PRODUCT = function (a) { var n = nums(a); return n.length ? n.reduce(function (x, y) { return x * y; }, 1) : 0; };
  F.AVERAGE = function (a) { var n = nums(a); if (!n.length) throw ERR.DIV0; return sum(n) / n.length; };
  F.MAX = function (a) { var n = nums(a); return n.length ? Math.max.apply(null, n) : 0; };
  F.MIN = function (a) { var n = nums(a); return n.length ? Math.min.apply(null, n) : 0; };
  F.COUNT = function (a) {
    var c = 0;
    a.forEach(function (x) {
      if (isRng(x)) flat(x).forEach(function (y) { if (typeof y === 'number') c++; });
      else if (typeof x === 'number' || typeof x === 'boolean' || (typeof x === 'string' && x.trim() !== '' && !isNaN(Number(x)))) c++;
    });
    return c;
  };
  F.COUNTA = function (a) { var c = 0; a.forEach(function (x) { flat(x).forEach(function (y) { if (y !== null && y !== '' && y !== undefined) c++; }); }); return c; };
  F.COUNTBLANK = function (a) { return flat(needRng(a[0])).filter(function (y) { return y === null || y === ''; }).length; };
  F.COUNTIF = function (a) { var f = makeCrit(a[1]); return flat(needRng(a[0])).filter(f).length; };
  function multiCrit(a, start, sumRange) {
    var rs = [], fs = [], vals = sumRange ? flat(sumRange) : null, out = [];
    for (var i = start; i + 1 < a.length; i += 2) { rs.push(flat(needRng(a[i]))); fs.push(makeCrit(a[i + 1])); }
    for (var k = 0; k < rs[0].length; k++) {
      var ok = true;
      for (var j = 0; j < rs.length; j++) if (!fs[j](rs[j][k])) { ok = false; break; }
      if (ok) out.push(vals ? vals[k] : k);
    }
    return out;
  }
  F.COUNTIFS = function (a) { return multiCrit(a, 0, null).length; };
  F.SUMIF = function (a) {
    var r = flat(needRng(a[0])), f = makeCrit(a[1]), s = a[2] !== undefined ? flat(needRng(a[2])) : r, t = 0;
    r.forEach(function (v, i) { if (f(v) && typeof s[i] === 'number') t += s[i]; });
    return t;
  };
  F.SUMIFS = function (a) { return sum(multiCrit(a, 1, needRng(a[0])).filter(function (x) { return typeof x === 'number'; })); };
  F.AVERAGEIF = function (a) {
    var r = flat(needRng(a[0])), f = makeCrit(a[1]), s = a[2] !== undefined ? flat(needRng(a[2])) : r, t = 0, c = 0;
    r.forEach(function (v, i) { if (f(v) && typeof s[i] === 'number') { t += s[i]; c++; } });
    if (!c) throw ERR.DIV0; return t / c;
  };
  F.SUMPRODUCT = function (a) {
    var arrs = a.map(function (x) { return flat(needRng(x)).map(function (y) { return typeof y === 'number' ? y : 0; }); });
    var n = arrs[0].length; arrs.forEach(function (x) { if (x.length !== n) throw ERR.VALUE; });
    var t = 0; for (var i = 0; i < n; i++) { var p = 1; arrs.forEach(function (x) { p *= x[i]; }); t += p; }
    return t;
  };
  F.LARGE = function (a) { var n = nums([a[0]]).sort(function (x, y) { return y - x; }), k = toNum(a[1]); if (k < 1 || k > n.length) throw ERR.NUM; return n[k - 1]; };
  F.SMALL = function (a) { var n = nums([a[0]]).sort(function (x, y) { return x - y; }), k = toNum(a[1]); if (k < 1 || k > n.length) throw ERR.NUM; return n[k - 1]; };
  F.RANK = function (a) {
    var v = toNum(a[0]), n = nums([a[1]]), ord = a[2] === undefined ? 0 : toNum(a[2]);
    if (n.indexOf(v) < 0) throw ERR.NA;
    return 1 + n.filter(function (x) { return ord ? x < v : x > v; }).length;
  };
  F['RANK.EQ'] = F.RANK;
  F.MEDIAN = function (a) { var n = nums(a).sort(function (x, y) { return x - y; }); if (!n.length) throw ERR.NUM; var m = n.length >> 1; return n.length % 2 ? n[m] : (n[m - 1] + n[m]) / 2; };
  F.MODE = function (a) {
    var n = nums(a), best = null, bc = 1, cnt = {};
    n.forEach(function (x) { cnt[x] = (cnt[x] || 0) + 1; });
    n.forEach(function (x) { if (cnt[x] > bc) { bc = cnt[x]; best = x; } });
    if (best === null) throw ERR.NA; return best;
  };
  F['MODE.SNGL'] = F.MODE;
  F.PERCENTRANK = function (a) {
    var n = nums([a[0]]).sort(function (x, y) { return x - y; }), x = toNum(a[1]), sig = a[2] === undefined ? 3 : toNum(a[2]);
    if (!n.length || x < n[0] || x > n[n.length - 1]) throw ERR.NA;
    var i = 0; while (i < n.length - 1 && n[i + 1] <= x) i++;
    var r = n[i] === x ? i / (n.length - 1) : (i + (x - n[i]) / (n[i + 1] - n[i])) / (n.length - 1);
    var f = Math.pow(10, sig); return Math.floor(r * f + 1e-9) / f;
  };
  F.CORREL = function (a) {
    var x = flat(needRng(a[0])).filter(function (v) { return typeof v === 'number'; }), y = flat(needRng(a[1])).filter(function (v) { return typeof v === 'number'; });
    if (x.length !== y.length || !x.length) throw ERR.NA;
    var mx = sum(x) / x.length, my = sum(y) / y.length, sxy = 0, sxx = 0, syy = 0;
    x.forEach(function (v, i) { sxy += (v - mx) * (y[i] - my); sxx += (v - mx) * (v - mx); syy += (y[i] - my) * (y[i] - my); });
    if (!sxx || !syy) throw ERR.DIV0; return sxy / Math.sqrt(sxx * syy);
  };
  F.ABS = function (a) { return Math.abs(toNum(a[0])); };
  F.SQRT = function (a) { var n = toNum(a[0]); if (n < 0) throw ERR.NUM; return Math.sqrt(n); };
  F.POWER = function (a) { var r = Math.pow(toNum(a[0]), toNum(a[1])); if (!isFinite(r)) throw ERR.NUM; return r; };
  F.MOD = function (a) { var n = toNum(a[0]), d = toNum(a[1]); if (d === 0) throw ERR.DIV0; return n - d * Math.floor(n / d); };
  F.INT = function (a) { return Math.floor(toNum(a[0])); };
  F.TRUNC = function (a) { var d = a[1] === undefined ? 0 : toNum(a[1]), f = Math.pow(10, d); return Math.trunc(toNum(a[0]) * f) / f; };
  F.ROUND = function (a) { return round(toNum(a[0]), toNum(a[1]), 'r'); };
  F.ROUNDUP = function (a) { return round(toNum(a[0]), toNum(a[1]), 'up'); };
  F.ROUNDDOWN = function (a) { return round(toNum(a[0]), toNum(a[1]), 'down'); };
  F.EVEN = function (a) { var n = toNum(a[0]), s = n < 0 ? -1 : 1, x = Math.ceil(Math.abs(n)); if (x % 2) x++; return s * x; };
  F.ODD = function (a) { var n = toNum(a[0]), s = n < 0 ? -1 : 1, x = Math.ceil(Math.abs(n)); if (x % 2 === 0) x++; return s * x; };
  F.ISEVEN = function (a) { return Math.floor(Math.abs(toNum(a[0]))) % 2 === 0; };
  F.ISODD = function (a) { return Math.floor(Math.abs(toNum(a[0]))) % 2 === 1; };
  F.LOG = function (a) { var n = toNum(a[0]), b = a[1] === undefined ? 10 : toNum(a[1]); if (n <= 0 || b <= 0 || b === 1) throw ERR.NUM; return Math.log(n) / Math.log(b); };
  F.LOG10 = function (a) { var n = toNum(a[0]); if (n <= 0) throw ERR.NUM; return Math.log(n) / Math.LN10; };
  F.LN = function (a) { var n = toNum(a[0]); if (n <= 0) throw ERR.NUM; return Math.log(n); };
  F.EXP = function (a) { return Math.exp(toNum(a[0])); };
  F.PI = function () { return Math.PI; };
  F.SIN = function (a) { return Math.sin(toNum(a[0])); };
  F.COS = function (a) { return Math.cos(toNum(a[0])); };
  F.TAN = function (a) { return Math.tan(toNum(a[0])); };
  F.ASIN = function (a) { var n = toNum(a[0]); if (n < -1 || n > 1) throw ERR.NUM; return Math.asin(n); };
  F.ACOS = function (a) { var n = toNum(a[0]); if (n < -1 || n > 1) throw ERR.NUM; return Math.acos(n); };
  F.ATAN = function (a) { return Math.atan(toNum(a[0])); };
  F.RADIANS = function (a) { return toNum(a[0]) * Math.PI / 180; };
  F.DEGREES = function (a) { return toNum(a[0]) * 180 / Math.PI; };
  F.FACT = function (a) { var n = Math.floor(toNum(a[0])); if (n < 0) throw ERR.NUM; var r = 1; for (var i = 2; i <= n; i++) r *= i; return r; };
  F.GCD = function (a) { return nums(a).reduce(function (x, y) { return gcd(x, y); }, 0); };
  F.LCM = function (a) { return nums(a).reduce(function (x, y) { return x * y / (gcd(x, y) || 1); }, 1); };
  F.RAND = function () { return Math.random(); };
  F.RANDBETWEEN = function (a) { var lo = toNum(a[0]), hi = toNum(a[1]); return lo + Math.floor(Math.random() * (hi - lo + 1)); };
  F.ROMAN = function (a) { return romanOf(Math.floor(toNum(a[0]))); };
  F.ARABIC = function (a) { return arabicOf(toStr(a[0])); };
  F.DEC2BIN = function (a) { return Math.floor(toNum(a[0])).toString(2); };
  F.DEC2OCT = function (a) { return Math.floor(toNum(a[0])).toString(8); };
  F.DEC2HEX = function (a) { return Math.floor(toNum(a[0])).toString(16).toUpperCase(); };
  F.BIN2DEC = function (a) { return parseInt(toStr(a[0]), 2); };
  F.OCT2DEC = function (a) { return parseInt(toStr(a[0]), 8); };
  F.HEX2DEC = function (a) { return parseInt(toStr(a[0]), 16); };
  /* Logika */
  F.AND = function (a) { var all = []; a.forEach(function (x) { flat(x).forEach(function (y) { if (y !== null && y !== '') all.push(toBool(y)); }); }); return all.every(Boolean); };
  F.OR = function (a) { var all = []; a.forEach(function (x) { flat(x).forEach(function (y) { if (y !== null && y !== '') all.push(toBool(y)); }); }); return all.some(Boolean); };
  F.NOT = function (a) { return !toBool(a[0]); };
  F.TRUE = function () { return true; };
  F.FALSE = function () { return false; };
  F.ISNUMBER = function (a) { return typeof a[0] === 'number'; };
  F.ISTEXT = function (a) { return typeof a[0] === 'string'; };
  F.ISBLANK = function (a) { return a[0] === null; };
  F.ISERROR = function (a) { return isErr(a[0]); };
  F.ISNA = function (a) { return a[0] === ERR.NA; };
  /* Teks */
  F.LEFT = function (a) { var n = a[1] === undefined ? 1 : toNum(a[1]); if (n < 0) throw ERR.VALUE; return toStr(a[0]).slice(0, n); };
  F.RIGHT = function (a) { var n = a[1] === undefined ? 1 : toNum(a[1]); if (n < 0) throw ERR.VALUE; var s = toStr(a[0]); return n === 0 ? '' : s.slice(-n); };
  F.MID = function (a) { var s = toStr(a[0]), st = toNum(a[1]), n = toNum(a[2]); if (st < 1 || n < 0) throw ERR.VALUE; return s.substr(st - 1, n); };
  F.LEN = function (a) { return toStr(a[0]).length; };
  F.UPPER = function (a) { return toStr(a[0]).toUpperCase(); };
  F.LOWER = function (a) { return toStr(a[0]).toLowerCase(); };
  F.PROPER = function (a) { return toStr(a[0]).toLowerCase().replace(/(^|[^A-Za-z\u00C0-\u024F])([A-Za-z\u00C0-\u024F])/g, function (_, p, c) { return p + c.toUpperCase(); }); };
  F.TRIM = function (a) { return toStr(a[0]).replace(/\s+/g, ' ').trim(); };
  F.REPT = function (a) { var n = toNum(a[1]); if (n < 0) throw ERR.VALUE; return new Array(Math.floor(n) + 1).join(toStr(a[0])); };
  F.CONCATENATE = function (a) { return a.map(function (x) { return flat(x).map(toStr).join(''); }).join(''); };
  F.CONCAT = F.CONCATENATE;
  F.TEXTJOIN = function (a) {
    var d = toStr(a[0]), ig = toBool(a[1]), parts = [];
    a.slice(2).forEach(function (x) { flat(x).forEach(function (y) { var s = toStr(y); if (ig && s === '') return; parts.push(s); }); });
    return parts.join(d);
  };
  F.FIND = function (a) { var f = toStr(a[0]), s = toStr(a[1]), st = a[2] === undefined ? 1 : toNum(a[2]); if (st < 1) throw ERR.VALUE; var i = s.indexOf(f, st - 1); if (i < 0) throw ERR.VALUE; return i + 1; };
  F.SEARCH = function (a) { var f = toStr(a[0]).toLowerCase(), s = toStr(a[1]).toLowerCase(), st = a[2] === undefined ? 1 : toNum(a[2]); if (st < 1) throw ERR.VALUE; var i = s.indexOf(f, st - 1); if (i < 0) throw ERR.VALUE; return i + 1; };
  F.SUBSTITUTE = function (a) {
    var s = toStr(a[0]), o = toStr(a[1]), n = toStr(a[2]), inst = a[3] === undefined ? 0 : toNum(a[3]);
    if (o === '') return s;
    if (!inst) return s.split(o).join(n);
    var idx = -1, k = 0; while (k < inst) { idx = s.indexOf(o, idx + 1); if (idx < 0) return s; k++; }
    return s.slice(0, idx) + n + s.slice(idx + o.length);
  };
  F.EXACT = function (a) { return toStr(a[0]) === toStr(a[1]); };
  F.VALUE = function (a) {
    var v = unr(a[0]); if (typeof v === 'number') return v;
    var s = toStr(v).trim(), pc = /^(-?[\d.]+)%$/.exec(s); if (pc) return Number(pc[1]) / 100;
    return toNum(s);
  };
  F.TEXT = function (a) { return fmtText(a[0], toStr(a[1])); };
  F.CHAR = function (a) { return String.fromCharCode(toNum(a[0])); };
  F.CODE = function (a) { return toStr(a[0]).charCodeAt(0); };
  /* Lookup & referensi */
  F.VLOOKUP = function (a) {
    var t = needRng(a[1]), ci = toNum(a[2]), ap = a[3] === undefined ? true : toBool(a[3]);
    if (ci < 1 || ci > t.rows[0].length) throw ERR.REF;
    var col = t.rows.map(function (r) { return r[0]; }), i = matchPos(unr(a[0]), col, ap ? 1 : 0);
    if (i < 0) throw ERR.NA; return t.rows[i][ci - 1];
  };
  F.HLOOKUP = function (a) {
    var t = needRng(a[1]), ri = toNum(a[2]), ap = a[3] === undefined ? true : toBool(a[3]);
    if (ri < 1 || ri > t.rows.length) throw ERR.REF;
    var i = matchPos(unr(a[0]), t.rows[0], ap ? 1 : 0); if (i < 0) throw ERR.NA; return t.rows[ri - 1][i];
  };
  F.MATCH = function (a) { var arr = flat(needRng(a[1])), type = a[2] === undefined ? 1 : toNum(a[2]), i = matchPos(unr(a[0]), arr, type); if (i < 0) throw ERR.NA; return i + 1; };
  F.INDEX = function (a) {
    var t = needRng(a[0]), r = a[1] === undefined ? 0 : toNum(a[1]), c = a[2] === undefined ? 0 : toNum(a[2]);
    if (t.rows.length === 1 && a[2] === undefined) { c = r; r = 1; }
    if (t.rows[0].length === 1 && a[2] === undefined) { c = 1; }
    if (r < 1 || r > t.rows.length || c < 1 || c > t.rows[0].length) throw ERR.REF;
    return t.rows[r - 1][c - 1];
  };
  F.LOOKUP = function (a) { var arr = flat(needRng(a[1])), res = flat(needRng(a[2] === undefined ? a[1] : a[2])), i = matchPos(unr(a[0]), arr, 1); if (i < 0) throw ERR.NA; return res[i]; };
  F.CHOOSE = function (a) { var i = Math.floor(toNum(a[0])); if (i < 1 || i >= a.length) throw ERR.VALUE; return a[i]; };
  F.ROWS = function (a) { return needRng(a[0]).rows.length; };
  F.COLUMNS = function (a) { return needRng(a[0]).rows[0].length; };
  F.ADDRESS = function (a) {
    var r = toNum(a[0]), c = toNum(a[1]), t = a[2] === undefined ? 1 : toNum(a[2]), cs = numToCol(c);
    return t === 1 ? '$' + cs + '$' + r : t === 2 ? cs + '$' + r : t === 3 ? '$' + cs + r : cs + r;
  };
  F.AREAS = function () { return 1; };
  /* Tanggal & waktu */
  F.TODAY = function () { var d = new Date(); return toSerial(d.getFullYear(), d.getMonth() + 1, d.getDate()); };
  F.NOW = function () { var d = new Date(); return toSerial(d.getFullYear(), d.getMonth() + 1, d.getDate()) + (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds()) / 86400; };
  F.DATE = function (a) { return toSerial(toNum(a[0]), toNum(a[1]), toNum(a[2])); };
  F.DAY = function (a) { return fromSerial(toNum(a[0])).d; };
  F.MONTH = function (a) { return fromSerial(toNum(a[0])).m; };
  F.YEAR = function (a) { return fromSerial(toNum(a[0])).y; };
  F.WEEKDAY = function (a) { return weekdayOf(Math.floor(toNum(a[0])), a[1] === undefined ? 1 : toNum(a[1])); };
  F.WEEKNUM = function (a) {
    var s = Math.floor(toNum(a[0])), p = fromSerial(s), jan1 = toSerial(p.y, 1, 1), j = fromSerial(jan1).w;
    return Math.floor((s - jan1 + j) / 7) + 1;
  };
  F.HOUR = function (a) { var f = toNum(a[0]); f -= Math.floor(f); return Math.floor(Math.round(f * 86400) / 3600) % 24; };
  F.MINUTE = function (a) { var f = toNum(a[0]); f -= Math.floor(f); return Math.floor(Math.round(f * 86400) / 60) % 60; };
  F.SECOND = function (a) { var f = toNum(a[0]); f -= Math.floor(f); return Math.round(f * 86400) % 60; };
  F.TIME = function (a) { return (toNum(a[0]) * 3600 + toNum(a[1]) * 60 + toNum(a[2])) / 86400; };
  F.DAYS = function (a) { return Math.floor(toNum(a[0])) - Math.floor(toNum(a[1])); };
  F.EDATE = function (a) { return addMonths(Math.floor(toNum(a[0])), toNum(a[1])); };
  F.EOMONTH = function (a) { var s = addMonths(Math.floor(toNum(a[0])), toNum(a[1])), p = fromSerial(s); return toSerial(p.y, p.m + 1, 0); };
  F.DATEDIF = function (a) {
    var s = Math.floor(toNum(a[0])), e = Math.floor(toNum(a[1])), u = toStr(a[2]).toUpperCase();
    if (e < s) throw ERR.NUM;
    var p = fromSerial(s), q = fromSerial(e), mo = (q.y - p.y) * 12 + (q.m - p.m) - (q.d < p.d ? 1 : 0);
    if (u === 'D') return e - s; if (u === 'M') return mo; if (u === 'Y') return Math.floor(mo / 12);
    throw ERR.NUM;
  };
  F.NETWORKDAYS = function (a) {
    var s = Math.floor(toNum(a[0])), e = Math.floor(toNum(a[1])), hol = a[2] === undefined ? [] : nums([a[2]]), sign = 1;
    if (e < s) { var t = s; s = e; e = t; sign = -1; }
    var c = 0; for (var d = s; d <= e; d++) if (isWorkday(d, hol)) c++;
    return sign * c;
  };
  F.WORKDAY = function (a) {
    var d = Math.floor(toNum(a[0])), n = toNum(a[1]), hol = a[2] === undefined ? [] : nums([a[2]]), step = n < 0 ? -1 : 1;
    while (n !== 0) { d += step; if (isWorkday(d, hol)) n -= step; }
    return d;
  };
  /* Keuangan */
  F.PMT = function (a) { return financePMT(toNum(a[0]), toNum(a[1]), toNum(a[2]), a[3] === undefined ? 0 : toNum(a[3]), a[4] === undefined ? 0 : toNum(a[4])); };
  F.FV = function (a) { return financeFV(toNum(a[0]), toNum(a[1]), toNum(a[2]), a[3] === undefined ? 0 : toNum(a[3]), a[4] === undefined ? 0 : toNum(a[4])); };
  F.PV = function (a) {
    var r = toNum(a[0]), n = toNum(a[1]), pmt = toNum(a[2]), fv = a[3] === undefined ? 0 : toNum(a[3]), t = a[4] === undefined ? 0 : toNum(a[4]);
    if (r === 0) return -(fv + pmt * n);
    var g = Math.pow(1 + r, n); return -(fv + pmt * (1 + r * t) * (g - 1) / r) / g;
  };
  F.NPER = function (a) {
    var r = toNum(a[0]), pmt = toNum(a[1]), pv = toNum(a[2]), fv = a[3] === undefined ? 0 : toNum(a[3]), t = a[4] === undefined ? 0 : toNum(a[4]);
    if (r === 0) return -(pv + fv) / pmt;
    var x = pmt * (1 + r * t), q = (x - fv * r) / (x + pv * r);
    if (q <= 0) throw ERR.NUM; return Math.log(q) / Math.log(1 + r);
  };
  F.RATE = function (a) {
    var n = toNum(a[0]), pmt = toNum(a[1]), pv = toNum(a[2]), fv = a[3] === undefined ? 0 : toNum(a[3]), t = a[4] === undefined ? 0 : toNum(a[4]), r = 0.1;
    function f(x) { var g = Math.pow(1 + x, n); return pv * g + pmt * (1 + x * t) * (g - 1) / x + fv; }
    for (var i = 0; i < 200; i++) {
      var h = 1e-7, fx = f(r), d = (f(r + h) - fx) / h;
      if (!d || !isFinite(d)) throw ERR.NUM;
      var nr = r - fx / d; if (Math.abs(nr - r) < 1e-12) return nr; r = nr;
    }
    throw ERR.NUM;
  };
  F.NPV = function (a) { var r = toNum(a[0]), v = nums(a.slice(1)), t = 0; v.forEach(function (x, i) { t += x / Math.pow(1 + r, i + 1); }); return t; };
  F.IRR = function (a) { return irr(nums([a[0]]), a[1] === undefined ? undefined : toNum(a[1])); };
  F.SLN = function (a) { var c = toNum(a[0]), s = toNum(a[1]), l = toNum(a[2]); if (!l) throw ERR.DIV0; return (c - s) / l; };
  F.SYD = function (a) { var c = toNum(a[0]), s = toNum(a[1]), l = toNum(a[2]), p = toNum(a[3]); return (c - s) * (l - p + 1) * 2 / (l * (l + 1)); };
  F.DDB = function (a) {
    var c = toNum(a[0]), s = toNum(a[1]), l = toNum(a[2]), p = toNum(a[3]), f = a[4] === undefined ? 2 : toNum(a[4]), bv = c, dep = 0;
    for (var i = 1; i <= p; i++) { dep = Math.min(bv * f / l, Math.max(bv - s, 0)); bv -= dep; }
    return dep;
  };
  F.EFFECT = function (a) { var r = toNum(a[0]), n = Math.floor(toNum(a[1])); return Math.pow(1 + r / n, n) - 1; };
  F.NOMINAL = function (a) { var r = toNum(a[0]), n = Math.floor(toNum(a[1])); return n * (Math.pow(1 + r, 1 / n) - 1); };
  F.IPMT = function (a) {
    var r = toNum(a[0]), per = toNum(a[1]), n = toNum(a[2]), pv = toNum(a[3]), fv = a[4] === undefined ? 0 : toNum(a[4]), t = a[5] === undefined ? 0 : toNum(a[5]);
    if (per < 1 || per > n) throw ERR.NUM;
    var pmt = financePMT(r, n, pv, fv, t);
    if (t === 1) return per === 1 ? 0 : financeFV(r, per - 2, pmt, pv, 1) * r;
    return financeFV(r, per - 1, pmt, pv, 0) * r;
  };
  F.PPMT = function (a) {
    var r = toNum(a[0]), n = toNum(a[2]), pv = toNum(a[3]), fv = a[4] === undefined ? 0 : toNum(a[4]), t = a[5] === undefined ? 0 : toNum(a[5]);
    return financePMT(r, n, pv, fv, t) - F.IPMT(a);
  };
  /* Database */
  F.DSUM = function (a) { return sum(dbParts(a).filter(function (x) { return typeof x === 'number'; })); };
  F.DCOUNT = function (a) { return dbParts(a).filter(function (x) { return typeof x === 'number'; }).length; };
  F.DCOUNTA = function (a) { return dbParts(a).filter(function (x) { return x !== null && x !== ''; }).length; };
  F.DMAX = function (a) { var n = dbParts(a).filter(function (x) { return typeof x === 'number'; }); return n.length ? Math.max.apply(null, n) : 0; };
  F.DMIN = function (a) { var n = dbParts(a).filter(function (x) { return typeof x === 'number'; }); return n.length ? Math.min.apply(null, n) : 0; };
  F.DAVERAGE = function (a) { var n = dbParts(a).filter(function (x) { return typeof x === 'number'; }); if (!n.length) throw ERR.DIV0; return sum(n) / n.length; };
  F.DGET = function (a) { var r = dbParts(a); if (!r.length) throw ERR.VALUE; if (r.length > 1) throw ERR.NUM; return r[0]; };

  var LAZY = { IF: 1, IFERROR: 1, IFS: 1, ISERROR: 1, ISNA: 1, ROW: 1, COLUMN: 1 };

  /* ---------- Lembar kerja ---------- */
  function Sheet(raw) {
    this.raw = {}; this.cache = {}; this.fmt = {}; this.asts = {}; this.busy = {};
    if (raw) for (var k in raw) this.setRaw(k, raw[k]);
  }
  Sheet.prototype.setRaw = function (addr, text) {
    addr = addr.toUpperCase();
    if (text === null || text === undefined || text === '') delete this.raw[addr]; else this.raw[addr] = String(text);
    this.cache = {}; this.fmt = {};
  };
  Sheet.prototype.getRaw = function (addr) { var r = this.raw[addr.toUpperCase()]; return r === undefined ? '' : r; };
  function literal(txt) {
    var t = txt.trim();
    if (t === '') return { v: null };
    if (/^[-+]?(\d+\.?\d*|\.\d+)([eE][-+]?\d+)?$/.test(t)) return { v: parseFloat(t) };
    if (/^[-+]?(\d+\.?\d*|\.\d+)%$/.test(t)) return { v: parseFloat(t) / 100, f: 'pct' };
    var dm = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(t);
    if (dm) return { v: toSerial(+dm[3], +dm[2], +dm[1]), f: 'date' };
    if (/^TRUE$/i.test(t)) return { v: true };
    if (/^FALSE$/i.test(t)) return { v: false };
    return { v: txt };
  }
  Sheet.prototype.value = function (addr) {
    addr = addr.toUpperCase();
    if (addr in this.cache) return this.cache[addr];
    var raw = this.raw[addr], out;
    if (raw === undefined) out = null;
    else if (raw.charAt(0) === '=') {
      if (this.busy[addr]) return ERR.REF;
      this.busy[addr] = true;
      try {
        var ast = this.asts[raw] || (this.asts[raw] = parse(raw.slice(1)));
        out = ev(ast, { sheet: this, cur: parseAddr(addr) });
        if (isRng(out)) out = out.rows[0][0];
        if (out === undefined) out = null;
      } catch (e) { if (e instanceof XlErr) out = e; else { this.busy[addr] = false; throw e; } }
      this.busy[addr] = false;
    } else {
      var lit = literal(raw); out = lit.v; if (lit.f) this.fmt[addr] = lit.f;
    }
    this.cache[addr] = out;
    return out;
  };
  var DATEFN = /^=\s*(DATE|TODAY|EDATE|EOMONTH|WORKDAY)\s*\(/i;
  Sheet.prototype.text = function (addr) {
    addr = addr.toUpperCase();
    var v = this.value(addr), raw = this.raw[addr] || '';
    if (isErr(v)) return v.code;
    if (v === null) return '';
    if (typeof v === 'number') {
      if (this.fmt[addr] === 'date' || DATEFN.test(raw)) return fmtDate(v);
      if (this.fmt[addr] === 'pct') return fmtNum(Math.round(v * 1e10) / 1e8) + '%';
      return fmtNum(v);
    }
    return toStr(v);
  };

  /* ---------- Evaluasi AST ---------- */
  function getRange(ctx, n) {
    var rows = [];
    for (var r = n.r1; r <= n.r2; r++) { var row = []; for (var c = n.c1; c <= n.c2; c++) row.push(ctx.sheet.value(addrOf(c, r))); rows.push(row); }
    return { rng: true, rows: rows, r1: n.r1, c1: n.c1, r2: n.r2, c2: n.c2 };
  }
  function arith(o, a, b) {
    var x = toNum(a), y = toNum(b);
    switch (o) {
      case '+': return x + y; case '-': return x - y; case '*': return x * y;
      case '/': if (y === 0) throw ERR.DIV0; return x / y;
      case '^': var r = Math.pow(x, y); if (!isFinite(r) || isNaN(r)) throw ERR.NUM; return r;
    }
  }
  function cells(v) { return v.rows.length * v.rows[0].length; }
  function mapRng(v, f) {
    return { rng: true, r1: v.r1, c1: v.c1, r2: v.r2, c2: v.c2, rows: v.rows.map(function (row) { return row.map(function (x) { try { return f(x); } catch (e) { if (e instanceof XlErr) return e; throw e; } }); }) };
  }
  function binop(o, l, r) {
    l = unr(l); r = unr(r);
    if (o === '&') return toStr(l) + toStr(r);
    if (['=', '<>', '<', '>', '<=', '>='].indexOf(o) >= 0) {
      var c = compare(l, r);
      switch (o) { case '=': return c === 0; case '<>': return c !== 0; case '<': return c < 0; case '>': return c > 0; case '<=': return c <= 0; case '>=': return c >= 0; }
    }
    return arith(o, l, r);
  }
  function broadcast(o, a, b) {
    var ar = isRng(a) ? a.rows : [[a]], br = isRng(b) ? b.rows : [[b]];
    var h = Math.max(ar.length, br.length), w = Math.max(ar[0].length, br[0].length), rows = [];
    for (var i = 0; i < h; i++) {
      var row = [];
      for (var j = 0; j < w; j++) {
        var x = ar.length === 1 ? ar[0][ar[0].length === 1 ? 0 : j] : ar[i][ar[i].length === 1 ? 0 : j];
        var y = br.length === 1 ? br[0][br[0].length === 1 ? 0 : j] : br[i][br[i].length === 1 ? 0 : j];
        try { row.push(binop(o, x, y)); } catch (e) { if (e instanceof XlErr) row.push(e); else throw e; }
      }
      rows.push(row);
    }
    return { rng: true, rows: rows, r1: 1, c1: 1, r2: h, c2: w };
  }
  function ev(n, ctx) {
    switch (n.t) {
      case 'lit': return n.v;
      case 'ref': return ctx.sheet.value(addrOf(n.c, n.r));
      case 'range': return getRange(ctx, n);
      case 'neg': {
        var nv = ev(n.e, ctx);
        if (isRng(nv) && cells(nv) > 1) return mapRng(nv, function (x) { return -toNum(x); });
        return -toNum(nv);
      }
      case 'pct': return toNum(ev(n.e, ctx)) / 100;
      case 'bin':
        var l0 = ev(n.l, ctx), r0 = ev(n.r, ctx);
        if ((isRng(l0) && cells(l0) > 1) || (isRng(r0) && cells(r0) > 1)) return broadcast(n.o, l0, r0);
        var l = unr(l0), r = unr(r0);
        if (n.o === '&') return toStr(l) + toStr(r);
        if (['=', '<>', '<', '>', '<=', '>='].indexOf(n.o) >= 0) {
          var c = compare(l, r);
          switch (n.o) { case '=': return c === 0; case '<>': return c !== 0; case '<': return c < 0; case '>': return c > 0; case '<=': return c <= 0; case '>=': return c >= 0; }
        }
        return arith(n.o, l, r);
      case 'fn': return callFn(n, ctx);
    }
    throw ERR.VALUE;
  }
  function safeEv(node, ctx) { try { return ev(node, ctx); } catch (e) { if (e instanceof XlErr) return e; throw e; } }
  function callFn(n, ctx) {
    var name = n.n, a = n.a, i;
    if (name === 'IF') {
      if (a.length < 2 || a.length > 3) throw ERR.VALUE;
      if (toBool(ev(a[0], ctx))) return a[1].omitted ? 0 : ev(a[1], ctx);
      if (a.length < 3) return false;
      return a[2].omitted ? 0 : ev(a[2], ctx);
    }
    if (name === 'IFERROR') {
      var v = safeEv(a[0], ctx); if (isRng(v)) v = unr(v);
      return isErr(v) ? ev(a[1], ctx) : v;
    }
    if (name === 'IFS') {
      for (i = 0; i + 1 < a.length; i += 2) if (toBool(ev(a[i], ctx))) return ev(a[i + 1], ctx);
      throw ERR.NA;
    }
    if (name === 'ISERROR' || name === 'ISNA') {
      var w = safeEv(a[0], ctx); if (isRng(w) && w.rows.length === 1 && w.rows[0].length === 1) w = w.rows[0][0];
      return name === 'ISERROR' ? isErr(w) : w === ERR.NA;
    }
    if (name === 'ROW' || name === 'COLUMN') {
      if (!a.length) return name === 'ROW' ? ctx.cur.r : ctx.cur.c;
      var x = a[0];
      if (x.t === 'ref') return name === 'ROW' ? x.r : x.c;
      if (x.t === 'range') return name === 'ROW' ? x.r1 : x.c1;
      throw ERR.VALUE;
    }
    if ((name === 'ROWS' || name === 'COLUMNS') && a[0] && a[0].t === 'ref') return 1;
    var fn = F[name];
    if (!fn) throw ERR.NAME;
    var args = a.map(function (x) { return x.omitted ? undefined : ev(x, ctx); });
    return fn(args, ctx);
  }

  /* ---------- API ---------- */
  var API = {
    Sheet: Sheet, ERR: ERR, parseAddr: parseAddr, addrOf: addrOf, numToCol: numToCol, colToNum: colToNum,
    fromSerial: fromSerial, toSerial: toSerial, fmtDate: fmtDate,
    functions: Object.keys(F).concat(['IF', 'IFERROR', 'IFS', 'ISERROR', 'ISNA', 'ROW', 'COLUMN']).sort(),
    sheetFromGrid: function (grid) {
      var s = new Sheet();
      grid.forEach(function (row, ri) { row.forEach(function (v, ci) { if (v !== null && v !== undefined && v !== '') s.setRaw(addrOf(1 + ci, 1 + ri), v); }); });
      return s;
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = API; else root.XL = API;
})(typeof window !== 'undefined' ? window : this);
