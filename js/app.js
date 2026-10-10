/* PushExcel: logika aplikasi (tanpa dependensi) */
(function () {
  'use strict';
  var DATA = window.DATA, XL = window.XL;
  var lessons = DATA.lessons, cats = DATA.cats;
  var byId = {}, catOf = {}, order = [];
  lessons.forEach(function (l) { byId[l.id] = l; });
  cats.forEach(function (c) { catOf[c.id] = c; });
  cats.forEach(function (c) { lessons.forEach(function (l) { if (l.cat === c.id) order.push(l); }); });
  var totalImgs = lessons.reduce(function (n, l) { return n + l.gambar.length; }, 0);

  /* ---------- Util ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* abaikan */ } }
  };
  function emit(type, d) { d = d || {}; d.type = type; document.dispatchEvent(new CustomEvent('pe', { detail: d })); }
  var done = new Set(store.get('be_done', []));
  var openCats = new Set();
  function saveDone() { store.set('be_done', Array.from(done)); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function copyText(t, ok) {
    function fallback() {
      var ta = document.createElement('textarea'); ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); ok(); } catch (e) { /* abaikan */ } document.body.removeChild(ta);
    }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(t).then(ok, fallback); else fallback();
  }

  /* ---------- Tema ---------- */
  var root = document.documentElement;
  var savedTheme = store.get('be_theme', null);
  if (savedTheme) root.setAttribute('data-theme', savedTheme);
  $('#themeBtn').addEventListener('click', function () {
    var cur = root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next); store.set('be_theme', next);
  });

  /* ---------- Sidebar ---------- */
  function renderTree(activeId) {
    var cur = activeId && byId[activeId];
    $('#tree').className = 'tree';
    $('#tree').innerHTML = cats.map(function (c) {
      var ls = lessons.filter(function (l) { return l.cat === c.id; });
      var nd = ls.filter(function (l) { return done.has(l.id); }).length;
      var open = openCats.has(c.id) || (cur && cur.cat === c.id);
      return '<details data-c="' + c.id + '"' + (open ? ' open' : '') + '><summary>' + esc(c.nama) + '<span class="n">' + nd + '/' + ls.length + '</span></summary><ul>' +
        ls.map(function (l) {
          return '<li><a href="#/materi/' + l.id + '"' + (l.id === activeId ? ' aria-current="page"' : '') + '>' + esc(l.judul) +
            (done.has(l.id) ? '<span class="tick" aria-label="selesai">&#10003;</span>' : '') + '</a></li>';
        }).join('') + '</ul></details>';
    }).join('');
    var act = $('#tree a[aria-current="page"]');
    if (act && act.scrollIntoView) { var box = $('#side'); var r = act.getBoundingClientRect(), br = box.getBoundingClientRect(); if (r.top < br.top || r.bottom > br.bottom) act.scrollIntoView({ block: 'center' }); }
  }
  $('#tree').addEventListener('toggle', function (e) {
    var d = e.target; if (!d.dataset || !d.dataset.c) return;
    if (d.open) openCats.add(d.dataset.c); else openCats.delete(d.dataset.c);
  }, true);

  function setNav(open) {
    document.body.classList.toggle('nav-open', open);
    $('#menuBtn').setAttribute('aria-expanded', open ? 'true' : 'false');
    $('#scrim').hidden = !open;
  }
  $('#menuBtn').addEventListener('click', function () { setNav(!document.body.classList.contains('nav-open')); });
  $('#scrim').addEventListener('click', function () { setNav(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && document.body.classList.contains('nav-open')) setNav(false); });

  /* ---------- Pencarian ---------- */
  var index = lessons.map(function (l) {
    var hay = [l.judul, l.ringkas, l.kata || '', l.sintaks || '', l.id, catOf[l.cat].nama].join(' ').toLowerCase();
    return { l: l, hay: hay, title: l.judul.toLowerCase() };
  });
  function search(q) {
    var toks = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!toks.length) return [];
    var res = [];
    index.forEach(function (it) {
      var s = 0;
      for (var i = 0; i < toks.length; i++) {
        var t = toks[i];
        if (it.hay.indexOf(t) < 0) return;
        if (it.title.indexOf(t) === 0) s += 6; else if (it.title.indexOf(t) > 0) s += 4;
        if ((it.l.kata || '').toLowerCase().split(/\s+/).indexOf(t) >= 0) s += 3;
        s += 1;
      }
      res.push({ l: it.l, s: s });
    });
    res.sort(function (a, b) { return b.s - a.s; });
    return res.slice(0, 8).map(function (r) { return r.l; });
  }
  var qIn = $('#q'), hits = $('#hits'), hitSel = -1, hitList = [];
  function renderHits() {
    var v = qIn.value.trim();
    if (!v) { hits.hidden = true; qIn.setAttribute('aria-expanded', 'false'); return; }
    hitList = search(v); hitSel = hitList.length ? 0 : -1;
    hits.innerHTML = hitList.length ? hitList.map(function (l, i) {
      return '<li role="option" id="hit' + i + '" aria-selected="' + (i === 0) + '"><a href="#/materi/' + l.id + '">' + esc(l.judul) + '<small>' + esc(catOf[l.cat].nama) + '</small></a></li>';
    }).join('') : '<li class="none">Tidak ada materi yang cocok. Coba kata lain, misalnya nama fungsi.</li>';
    hits.hidden = false; qIn.setAttribute('aria-expanded', 'true');
  }
  function moveHit(d) {
    if (!hitList.length) return;
    hitSel = (hitSel + d + hitList.length) % hitList.length;
    $$('li[role=option]', hits).forEach(function (li, i) { li.setAttribute('aria-selected', i === hitSel ? 'true' : 'false'); });
    qIn.setAttribute('aria-activedescendant', 'hit' + hitSel);
  }
  qIn.addEventListener('input', renderHits);
  qIn.addEventListener('focus', renderHits);
  qIn.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); moveHit(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); moveHit(-1); }
    else if (e.key === 'Enter' && hitSel >= 0) { e.preventDefault(); location.hash = '#/materi/' + hitList[hitSel].id; closeHits(true); }
    else if (e.key === 'Escape') { closeHits(true); }
  });
  function closeHits(clear) { hits.hidden = true; qIn.setAttribute('aria-expanded', 'false'); if (clear) { qIn.value = ''; qIn.blur(); } }
  document.addEventListener('click', function (e) { if (!e.target.closest('.fxbar')) hits.hidden = true; else if (e.target.closest('.hits a')) closeHits(true); });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) && !document.activeElement.isContentEditable) { e.preventDefault(); qIn.focus(); }
  });

  /* ---------- Lembar kerja interaktif ---------- */
  var REF_RX = /(?<![A-Za-z0-9_.])\$?([A-Za-z]{1,3})\$?(\d+)(?::\$?([A-Za-z]{1,3})\$?(\d+))?(?![A-Za-z0-9_(])/g;
  function shiftRow(raw, dr) {
    return raw.split(/("[^"]*")/).map(function (p, i) {
      return i % 2 ? p : p.replace(/(?<![A-Za-z0-9_.])(\$?)([A-Za-z]{1,3})(\$?)(\d+)(?![A-Za-z0-9_(])/g, function (m, d1, c, d2, r) { return d2 ? m : d1 + c + (parseInt(r, 10) + dr); });
    }).join('');
  }
  function mountSheet(host, demo, o) {
    o = o || {};
    var P = XL.parseAddr(demo.sel);
    var cols = o.cols || Math.max(4, P.c, demo.data.reduce(function (m, r) { return Math.max(m, r.length); }, 0));
    var rows = o.rows || (Math.max(demo.data.length, P.r) + 1);
    var sheet, sel, id = 'sh' + Math.random().toString(36).slice(2, 7);
    var canFill = !o.noFill && (demo.data.length > P.r || o.rows);
    var head = '<tr><th scope="col"></th>';
    for (var c = 1; c <= cols; c++) head += '<th scope="col" data-c="' + XL.numToCol(c) + '">' + XL.numToCol(c) + '</th>';
    head += '</tr>';
    var body = '';
    for (var r = 1; r <= rows; r++) {
      body += '<tr><th scope="row" class="rh" data-r="' + r + '">' + r + '</th>';
      for (c = 1; c <= cols; c++) { var a = XL.numToCol(c) + r; body += '<td data-a="' + a + '" tabindex="-1" role="gridcell"></td>'; }
      body += '</tr>';
    }
    var chips = (demo.coba || []).map(function (cb, i) {
      return '<button type="button" class="chip" data-i="' + i + '" aria-pressed="false">' + esc(cb[0]) + (cb[1] ? '<small>' + esc(cb[1]) + '</small>' : '') + '</button>';
    }).join('');
    host.innerHTML = '<div class="sheetbox">' +
      '<div class="fbar"><span class="name" aria-live="off"></span><span class="fxl" aria-hidden="true">fx</span>' +
      '<input id="' + id + '" type="text" aria-label="Bilah rumus untuk sel terpilih" autocomplete="off" autocapitalize="off" spellcheck="false">' +
      '<button type="button" class="go">Enter</button></div>' +
      '<div class="gridwrap"><table class="sheet" role="grid" aria-label="Lembar kerja latihan"><thead>' + head + '</thead><tbody>' + body + '</tbody></table></div>' +
      '<div class="readout" role="status" aria-live="polite"></div>' +
      '<div class="sheetfoot">' + (chips ? '<span class="lbl">Coba rumus:</span>' + chips : '') +
      (canFill ? '<button type="button" class="chip fill" title="Salin rumus sel terpilih ke baris di bawahnya">Isi ke bawah</button>' : '') +
      '<button type="button" class="chip reset">Atur ulang</button></div>' +
      (demo.catatan ? '<p class="sheetnote">' + esc(demo.catatan) + '</p>' : '') + '</div>';
    var input = $('input', host), tbl = $('table.sheet', host), nameEl = $('.name', host), readout = $('.readout', host);
    var tds = {}; $$('td', host).forEach(function (td) { tds[td.dataset.a] = td; });

    function init() {
      sheet = XL.sheetFromGrid(demo.data);
      if (demo.rumus) sheet.setRaw(demo.sel, demo.rumus);
      $$('.chip[data-i]', host).forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
      sel = demo.sel; refresh(); select(demo.sel, false);
    }
    function refresh() {
      for (var a in tds) {
        var td = tds[a], v = sheet.value(a), raw = sheet.getRaw(a);
        td.textContent = sheet.text(a);
        var cls = '';
        if (v && typeof v === 'object' && v.code) cls = 'err';
        else if (typeof v === 'number') cls = 'num';
        else if (typeof v === 'boolean') cls = 'bool';
        if (raw.charAt(0) === '=') cls += ' fm';
        td.className = cls;
      }
      mark();
    }
    function mark() {
      $$('td', host).forEach(function (td) { td.classList.remove('r0', 'r1', 'r2', 'r3', 'active'); });
      $$('th', host).forEach(function (th) { th.classList.remove('sel'); });
      var raw = sheet.getRaw(sel).replace(/"[^"]*"/g, '""'), k = 0, m;
      if (raw.charAt(0) === '=') {
        REF_RX.lastIndex = 0;
        while ((m = REF_RX.exec(raw))) {
          var c1 = XL.colToNum(m[1]), r1 = parseInt(m[2], 10), c2 = m[3] ? XL.colToNum(m[3]) : c1, r2 = m[4] ? parseInt(m[4], 10) : r1;
          for (var cc = Math.min(c1, c2); cc <= Math.max(c1, c2); cc++) for (var rr = Math.min(r1, r2); rr <= Math.max(r1, r2); rr++) {
            var t = tds[XL.numToCol(cc) + rr]; if (t) t.classList.add('r' + (k % 4));
          }
          k++;
        }
      }
      var p = XL.parseAddr(sel);
      tds[sel].classList.add('active');
      var ch = $('th[data-c="' + XL.numToCol(p.c) + '"]', host), rh = $('th[data-r="' + p.r + '"]', host);
      if (ch) ch.classList.add('sel'); if (rh) rh.classList.add('sel');
    }
    function select(a, focus) {
      if (!tds[a]) return;
      if (sel && tds[sel]) tds[sel].tabIndex = -1;
      sel = a; tds[a].tabIndex = 0;
      nameEl.textContent = a; input.value = sheet.getRaw(a);
      mark(); report();
      if (focus) tds[a].focus();
    }
    function report() {
      var raw = sheet.getRaw(sel), t = sheet.text(sel);
      readout.innerHTML = raw === '' ? 'Sel <b>' + sel + '</b> kosong.' :
        (raw.charAt(0) === '=' ? 'Hasil di <b>' + sel + '</b>: <b>' + esc(t === '' ? '(kosong)' : t) + '</b>' : 'Isi sel <b>' + sel + '</b>: <b>' + esc(t) + '</b>');
    }
    function commit() {
      var raw = input.value;
      sheet.setRaw(sel, raw); refresh(); report();
      var td = tds[sel], v = sheet.value(sel);
      td.classList.remove('flash'); void td.offsetWidth; td.classList.add('flash');
      emit('commit', { raw: raw, text: sheet.text(sel), err: (v && typeof v === 'object' && v.code) ? v.code : null, sel: sel });
    }
    function move(dc, dr) {
      var p = XL.parseAddr(sel), nc = Math.min(cols, Math.max(1, p.c + dc)), nr = Math.min(rows, Math.max(1, p.r + dr));
      select(XL.numToCol(nc) + nr, true);
    }
    tbl.addEventListener('click', function (e) { var td = e.target.closest('td'); if (td) select(td.dataset.a, true); });
    tbl.addEventListener('keydown', function (e) {
      var td = e.target.closest('td'); if (!td) return;
      var k = e.key;
      if (k === 'ArrowRight') { e.preventDefault(); move(1, 0); }
      else if (k === 'ArrowLeft') { e.preventDefault(); move(-1, 0); }
      else if (k === 'ArrowDown') { e.preventDefault(); move(0, 1); }
      else if (k === 'ArrowUp') { e.preventDefault(); move(0, -1); }
      else if (k === 'Enter' || k === 'F2') { e.preventDefault(); input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
      else if (k === 'Delete' || k === 'Backspace') { e.preventDefault(); sheet.setRaw(sel, ''); input.value = ''; refresh(); report(); }
      else if (k.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) { input.value = ''; input.focus(); }
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); commit(); move(0, 0); }
      else if (e.key === 'Escape') { input.value = sheet.getRaw(sel); tds[sel].focus(); }
    });
    input.addEventListener('blur', function () { if (input.value !== sheet.getRaw(sel)) commit(); });
    input.addEventListener('focus', function () { if (!o.noSelectAll) { try { input.select(); } catch (e) { /* abaikan */ } } });
    $('.go', host).addEventListener('click', function () { commit(); tds[sel].focus(); });
    $$('.chip[data-i]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        var cb = demo.coba[+b.dataset.i];
        $$('.chip[data-i]', host).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        select(demo.sel, false); input.value = cb[0]; commit(); mark();
      });
    });
    var fill = $('.fill', host);
    if (fill) fill.addEventListener('click', function () {
      var raw = sheet.getRaw(sel); if (!raw) return;
      var p = XL.parseAddr(sel), last = o.fillTo || demo.data.length;
      for (var rr = p.r + 1; rr <= Math.min(last, rows); rr++) sheet.setRaw(XL.numToCol(p.c) + rr, raw.charAt(0) === '=' ? shiftRow(raw, rr - p.r) : raw);
      refresh(); report();
    });
    $('.reset', host).addEventListener('click', init);
    init();
    return { input: input, commit: commit, select: select, sheet: function () { return sheet; }, sel: function () { return sel; }, reset: init };
  }

  /* ---------- Kuis ---------- */
  function renderQuestion(host, q, opt) {
    opt = opt || {};
    var items = q.opsi.map(function (t, i) { return { t: t, ok: i === q.jawab }; });
    if (opt.shuffle) items = shuffle(items);
    host.innerHTML = '<div class="quiz"><p class="q">' + esc(q.q) + '</p><div class="opts" role="group" aria-label="Pilihan jawaban">' +
      items.map(function (it, i) { return '<button type="button" class="opt" data-i="' + i + '"><span class="k">' + 'ABCD'[i] + '</span><span>' + esc(it.t) + '</span></button>'; }).join('') +
      '</div><div class="explain" hidden role="status"></div></div>';
    var btns = $$('.opt', host), ex = $('.explain', host);
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        var it = items[+b.dataset.i];
        btns.forEach(function (x, i) { x.disabled = true; if (items[i].ok) x.classList.add('ok'); });
        if (!it.ok) b.classList.add('no');
        ex.hidden = false;
        ex.innerHTML = '<b>' + (it.ok ? 'Benar.' : 'Belum tepat.') + '</b> ' + esc(q.bahas);
        emit('answer', { ok: it.ok, mixed: !!opt.shuffle });
        if (opt.onAnswer) opt.onAnswer(it.ok);
      });
    });
  }

  /* ---------- Lightbox ---------- */
  var lb = $('#lightbox'), lbList = [], lbIdx = 0;
  function lbShow() {
    var it = lbList[lbIdx];
    $('#lbImg').src = 'images/' + it.src; $('#lbImg').alt = it.alt;
    $('#lbCap').textContent = it.cap + ' (' + (lbIdx + 1) + ' dari ' + lbList.length + ')';
    $('#lbPrev').hidden = $('#lbNext').hidden = lbList.length < 2;
  }
  function openLightbox(list, i) { lbList = list; lbIdx = i; lbShow(); if (lb.showModal) lb.showModal(); else lb.setAttribute('open', ''); }
  $('#lbPrev').addEventListener('click', function () { lbIdx = (lbIdx - 1 + lbList.length) % lbList.length; lbShow(); });
  $('#lbNext').addEventListener('click', function () { lbIdx = (lbIdx + 1) % lbList.length; lbShow(); });
  lb.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') $('#lbPrev').click(); else if (e.key === 'ArrowRight') $('#lbNext').click(); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });

  /* ---------- Tampilan ---------- */
  var app = $('#app');
  function setTitle(t) { document.title = t ? t + ' | PushExcel' : 'PushExcel'; }
  function catProgress(c) {
    var ls = lessons.filter(function (l) { return l.cat === c.id; });
    var nd = ls.filter(function (l) { return done.has(l.id); }).length;
    return { total: ls.length, done: nd, first: ls[0] };
  }

  function viewHome() {
    setTitle('');
    var last = store.get('be_last', null), nextL = null;
    if (last && byId[last]) { var i = order.indexOf(byId[last]); for (var k = 1; k <= order.length; k++) { var cand = order[(i + k) % order.length]; if (!done.has(cand.id)) { nextL = cand; break; } } }
    var firstUndone = order.filter(function (l) { return !done.has(l.id); })[0];
    var primary = nextL || firstUndone || order[0];
    var started = done.size > 0 || last;
    app.innerHTML =
      '<section class="hero"><div>' +
      '<h1 tabindex="-1">Belajar rumus Excel dengan mengetiknya sendiri</h1>' +
      '<p class="lead">Setiap materi punya lembar kerja mini yang bisa kamu ubah, langkah praktik, dan tangkapan layar dari Excel yang sebenarnya.</p>' +
      '<div class="starts"><a class="btn" href="#/materi/' + primary.id + '">' + (started ? 'Lanjutkan: ' + esc(primary.judul.split(':')[0]) : 'Mulai belajar') + '</a>' +
      '<a class="btn ghost" href="#/lab">Buka lab rumus</a></div>' +
      '<p class="statline"><span><b>' + lessons.length + '</b> materi</span><span><b>' + totalImgs + '</b> tangkapan layar</span><span><b>' + XL.functions.length + '</b> fungsi bisa dicoba</span><span><b>' + done.size + '</b> selesai</span></p>' +
      '</div><div id="heroSheet"></div></section>' +
      '<h2>Pilih topik</h2><div class="catlist">' +
      cats.map(function (c) {
        var p = catProgress(c);
        return '<a class="catrow' + (p.total && p.done === p.total ? ' full' : '') + '" href="#/kategori/' + c.id + '"><span class="col" aria-hidden="true">' + XL.numToCol(cats.indexOf(c) + 1) + '</span><span class="ct"><strong>' + esc(c.nama) + '</strong><span class="d">' + esc(c.ket) +
          '</span><span class="bar" aria-hidden="true"><i style="width:' + (p.total ? Math.round(p.done / p.total * 100) : 0) + '%"></i></span></span><span class="cnt">' + p.done + ' dari ' + p.total + '<small>selesai</small></span></a>';
      }).join('') + '</div>' +
      '<h2>Latihan administrasi</h2><div class="catlist"><a class="catrow" href="latihan.html"><span class="col" aria-hidden="true">+</span><span class="ct"><strong>Latihan administrasi perkantoran</strong><span class="d">Soal absensi, stok, gaji, faktur, komisi sales, PPDB, sampai laporan laba rugi. Unduh file Excel atau CSV, lalu cocokkan dengan kunci.</span></span><span class="cnt">24 paket<small>295 soal</small></span></a></div>';
    mountSheet($('#heroSheet'), {
      data: [['Barang', 'Harga', 'Jumlah'], ['Pensil', 3000, 5], ['Buku', 8000, 3], ['Penggaris', 5000, 2]],
      sel: 'D2', rumus: '=B2*C2',
      coba: [['=B2*C2', 'Harga x jumlah'], ['=SUM(B2:B4)', 'Jumlah harga'], ['=MAX(B2:B4)', 'Termahal'], ['=IF(B2>=5000,"Mahal","Murah")', 'Keputusan']],
      catatan: 'Klik sel mana saja, ketik rumus di kotak fx, lalu tekan Enter. Sel yang dipakai rumus diberi warna.'
    }, { noSelectAll: false });
  }

  function viewCategory(id) {
    var c = catOf[id]; if (!c) return viewNotFound();
    setTitle(c.nama);
    var ls = lessons.filter(function (l) { return l.cat === id; });
    app.innerHTML = '<nav class="crumbs" aria-label="Jejak halaman"><a href="#/">Beranda</a> / ' + esc(c.nama) + '</nav>' +
      '<h1 tabindex="-1">' + esc(c.nama) + '</h1><p class="lead" style="color:var(--muted)">' + esc(c.ket) + '</p>' +
      '<ul class="list">' + ls.map(function (l) {
        return '<li><a href="#/materi/' + l.id + '"><span><strong>' + esc(l.judul) + '</strong><span class="d">' + esc(l.ringkas) + '</span></span>' + (done.has(l.id) ? '<span class="tick" aria-label="selesai">&#10003;</span>' : '') + '</a></li>';
      }).join('') + '</ul>';
    renderTree(null);
  }

  function viewLesson(id) {
    var l = byId[id]; if (!l) return viewNotFound();
    var c = catOf[l.cat], i = order.indexOf(l), prev = order[i - 1], next = order[i + 1];
    store.set('be_last', id);
    setTitle(l.judul);
    var h = '<article class="lesson"><nav class="crumbs" aria-label="Jejak halaman"><a href="#/">Beranda</a> / <a href="#/kategori/' + c.id + '">' + esc(c.nama) + '</a></nav>' +
      '<h1 tabindex="-1">' + esc(l.judul) + '</h1><p class="lead">' + esc(l.ringkas) + '</p>';
    if (l.sintaks) h += '<div class="syntax"><button type="button" class="chip copy" id="copyBtn">Salin</button><pre>' + esc(l.sintaks) + '</pre></div>';
    if (l.argumen) h += '<table class="args"><tbody>' + l.argumen.map(function (a) { return '<tr><th scope="row">' + esc(a[0]) + '</th><td>' + esc(a[1]) + '</td></tr>'; }).join('') + '</tbody></table>';
    if (l.demo) h += '<h2>Coba sendiri</h2><div id="demoHost"></div>';
    if (l.langkah) h += '<h2>Langkah praktik <span class="stepcount" id="stepCount"></span></h2><ol class="steps">' + l.langkah.map(function (s, k) { return '<li><label><input type="checkbox" data-k="' + k + '"><span>' + esc(s) + '</span></label></li>'; }).join('') + '</ol>';
    if (l.tips) h += '<div class="tips" role="note">' + l.tips.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') + '</div>';
    if (l.gambar.length) {
      h += '<h2>Tangkapan layar praktik (' + l.gambar.length + ')</h2><div class="shots">' + l.gambar.map(function (g, k) {
        return '<figure class="shot"><button type="button" data-k="' + k + '" aria-label="Perbesar gambar ' + (k + 1) + '"><img loading="lazy" decoding="async" src="images/' + g + '" alt="Tangkapan layar praktik ' + esc(l.judul) + ', gambar ' + (k + 1) + '"></button><figcaption>Gambar ' + (k + 1) + ' dari ' + l.gambar.length + '</figcaption></figure>';
      }).join('') + '</div>';
    }
    if (l.kuis) h += '<h2>Cek pemahaman</h2><div id="quizHost"></div>';
    h += '<div class="finish"><button type="button" class="btn ghost" id="doneBtn" aria-pressed="' + done.has(id) + '">' + (done.has(id) ? 'Sudah selesai' : 'Tandai selesai') + '</button>' +
      '<a href="#/lab">Latihan bebas di lab rumus</a></div>' +
      '<div class="pn">' + (prev ? '<a class="prev" href="#/materi/' + prev.id + '"><small>Sebelumnya</small>' + esc(prev.judul) + '</a>' : '<span></span>') +
      (next ? '<a class="next" href="#/materi/' + next.id + '"><small>Berikutnya</small>' + esc(next.judul) + '</a>' : '') + '</div></article>';
    app.innerHTML = h;
    if (l.demo) mountSheet($('#demoHost'), l.demo);
    if (l.kuis) renderQuestion($('#quizHost'), l.kuis);
    var sd = store.get('be_steps', {}), mine = sd[id] || [];
    function stepSync() {
      var boxes = $$('.steps input', app), n = 0;
      boxes.forEach(function (b) { var on = mine.indexOf(+b.dataset.k) >= 0; b.checked = on; b.closest('li').classList.toggle('on', on); if (on) n++; });
      var sc = $('#stepCount'); if (sc) sc.textContent = '(' + n + ' dari ' + boxes.length + ')';
      return { n: n, total: boxes.length };
    }
    stepSync();
    $$('.steps input', app).forEach(function (b) {
      b.addEventListener('change', function () {
        var k = +b.dataset.k, at = mine.indexOf(k);
        if (b.checked && at < 0) mine.push(k); else if (!b.checked && at >= 0) mine.splice(at, 1);
        sd[id] = mine; store.set('be_steps', sd);
        var r = stepSync(); emit('steps', { id: id, n: r.n, total: r.total, checked: b.checked });
      });
    });
    var cb = $('#copyBtn');
    if (cb) cb.addEventListener('click', function () { copyText(l.sintaks, function () { cb.textContent = 'Tersalin'; setTimeout(function () { cb.textContent = 'Salin'; }, 1500); }); });
    $$('.shot button', app).forEach(function (b) {
      b.addEventListener('click', function () {
        openLightbox(l.gambar.map(function (g, k) { return { src: g, alt: 'Tangkapan layar ' + l.judul + ' ' + (k + 1), cap: l.judul }; }), +b.dataset.k);
      });
    });
    var db = $('#doneBtn');
    db.addEventListener('click', function () {
      if (done.has(id)) done.delete(id); else done.add(id);
      saveDone();
      var on = done.has(id); db.setAttribute('aria-pressed', on); db.textContent = on ? 'Sudah selesai' : 'Tandai selesai';
      renderTree(id);
      emit('done', { id: id, on: on });
    });
    renderTree(id);
  }

  var LAB = [
    ['Nama', 'Matematika', 'IPA', 'B.Indo', 'Total', 'Rata-rata', '', 'Batas', 'Predikat'],
    ['Antonio', 80, 75, 85, '', '', '', 0, 'D'],
    ['Romansyah', 70, 85, 80, '', '', '', 60, 'C'],
    ['Devi', 75, 70, 90, '', '', '', 75, 'B'],
    ['Bagus', 85, 77, 80, '', '', '', 90, 'A'],
    ['Maulana', 90, 88, 75, '', '', '', '', ''],
    ['Citra', 65, 72, 68, '', '', '', '', ''],
    ['Dewi', 95, 91, 89, '', '', '', '', '']
  ];
  function viewLab() {
    setTitle('Lab rumus');
    var fns = XL.functions;
    app.innerHTML = '<nav class="crumbs" aria-label="Jejak halaman"><a href="#/">Beranda</a> / Lab rumus</nav><h1 tabindex="-1">Lab rumus</h1>' +
      '<p class="lead" style="color:var(--muted)">Lembar kerja bebas. Tabel di kiri adalah nilai siswa, tabel di kanan (H dan I) adalah batas predikat. Ketik rumus apa saja di kotak fx.</p>' +
      '<div id="labHost"></div>' +
      '<h2>Idenya</h2><ul class="steps"><li>Isi E2 dengan <code>=SUM(B2:D2)</code>, lalu tekan <b>Isi ke bawah</b>.</li><li>Isi F2 dengan <code>=ROUND(AVERAGE(B2:D2),1)</code>.</li><li>Cari predikat Antonio: <code>=VLOOKUP(F2,$H$2:$I$5,2,TRUE)</code>.</li><li>Hitung yang lulus: <code>=COUNTIF(F2:F8,"&gt;=75")</code>.</li></ul>' +
      '<h2>Fungsi yang didukung (' + fns.length + ')</h2><p style="color:var(--muted)">Klik nama fungsi untuk menyisipkannya ke kotak fx.</p><div class="fnlist">' +
      fns.map(function (f) { return '<button type="button" class="chip" data-f="' + f + '">' + f + '</button>'; }).join('') + '</div>' +
      '<p class="sheetnote" style="padding:0">Mesin rumus ini berjalan di browser dan dibuat untuk belajar. Pada kasus yang tidak lazim, hasilnya bisa berbeda dari Excel.</p>';
    var lab = mountSheet($('#labHost'), { data: LAB, sel: 'E2', rumus: '=SUM(B2:D2)' }, { cols: 9, rows: 14, fillTo: 8 });
    $$('.fnlist .chip', app).forEach(function (b) {
      b.addEventListener('click', function () {
        var v = lab.input.value; lab.input.value = (v.charAt(0) === '=' ? v : '=') + b.dataset.f + '(';
        lab.input.focus(); lab.input.setSelectionRange(lab.input.value.length, lab.input.value.length);
      });
    });
    renderTree(null);
  }

  function viewQuiz() {
    setTitle('Kuis');
    var pool = lessons.filter(function (l) { return l.kuis; });
    var N = 10, qs = shuffle(pool).slice(0, N), idx = 0, score = 0, wrong = [];
    var best = store.get('be_best', null);
    function intro() {
      app.innerHTML = '<nav class="crumbs" aria-label="Jejak halaman"><a href="#/">Beranda</a> / Kuis</nav><h1 tabindex="-1">Kuis campuran</h1>' +
        '<p class="lead" style="color:var(--muted)">' + N + ' pertanyaan acak dari ' + pool.length + ' materi. Pilihan jawaban diacak setiap kali.' + (best !== null ? ' Skor terbaikmu: ' + best + ' dari ' + N + '.' : '') + '</p>' +
        '<button type="button" class="btn" id="startQ">Mulai kuis</button>';
      $('#startQ').addEventListener('click', function () { qs = shuffle(pool).slice(0, N); idx = 0; score = 0; wrong = []; ask(); });
      var h = $('h1', app); if (h) h.focus();
    }
    function ask() {
      var l = qs[idx];
      app.innerHTML = '<nav class="crumbs" aria-label="Jejak halaman"><a href="#/">Beranda</a> / <a href="#/kuis">Kuis</a></nav><div class="quizhead"><span>Pertanyaan ' + (idx + 1) + ' dari ' + N + '</span><span>Skor ' + score + '</span></div>' +
        '<div id="qHost"></div><div class="finish" id="qNav" hidden><button type="button" class="btn" id="nextQ">' + (idx + 1 < N ? 'Pertanyaan berikutnya' : 'Lihat hasil') + '</button><a href="#/materi/' + l.id + '">Buka materi: ' + esc(l.judul.split(':')[0]) + '</a></div>';
      renderQuestion($('#qHost'), l.kuis, { shuffle: true, onAnswer: function (ok) { if (ok) score++; else wrong.push(l); $('#qNav').hidden = false; $('#nextQ').focus(); } });
      $('#nextQ').addEventListener('click', function () { idx++; if (idx < N) ask(); else finish(); });
    }
    function finish() {
      if (best === null || score > best) { best = score; store.set('be_best', best); }
      emit('quizEnd', { score: score, total: N });
      app.innerHTML = '<h1 tabindex="-1">Hasil kuis</h1><p class="score">' + score + ' <span style="font-size:1.2rem;color:var(--muted)">dari ' + N + '</span></p>' +
        (wrong.length ? '<p>Materi yang perlu diulang:</p><ul class="review">' + wrong.map(function (l) { return '<li><a href="#/materi/' + l.id + '">' + esc(l.judul) + '</a></li>'; }).join('') + '</ul>' : '<p>Semua jawabanmu benar.</p>') +
        '<button type="button" class="btn" id="again">Ulangi dengan soal baru</button>';
      $('#again').addEventListener('click', function () { qs = shuffle(pool).slice(0, N); idx = 0; score = 0; wrong = []; ask(); });
      $('h1', app).focus();
    }
    intro(); renderTree(null);
  }

  function viewGallery() {
    setTitle('Galeri tangkapan layar');
    var all = [];
    lessons.forEach(function (l) { l.gambar.forEach(function (g, k) { all.push({ src: g, l: l, k: k }); }); });
    var PAGE = 48, shown = PAGE, flt = { cat: '', q: '' }, cur = all;
    app.innerHTML = '<nav class="crumbs" aria-label="Jejak halaman"><a href="#/">Beranda</a> / Galeri</nav><h1 tabindex="-1">Galeri tangkapan layar</h1>' +
      '<p class="lead" style="color:var(--muted)">Semua ' + totalImgs + ' gambar praktik, dikelompokkan sesuai materi. Klik gambar untuk memperbesar.</p>' +
      '<div class="toolbar"><label class="sr" for="gCat">Topik</label><select id="gCat"><option value="">Semua topik</option>' +
      cats.map(function (c) { return '<option value="' + c.id + '">' + esc(c.nama) + '</option>'; }).join('') + '</select>' +
      '<label class="sr" for="gQ">Cari materi</label><input id="gQ" type="search" placeholder="Cari nama materi" autocomplete="off"></div>' +
      '<div class="shots" id="gGrid"></div><div class="finish" style="border:0"><button type="button" class="btn ghost" id="more">Tampilkan lebih banyak</button><span id="gCount" style="color:var(--muted)"></span></div>';
    function draw() {
      cur = all.filter(function (x) { return (!flt.cat || x.l.cat === flt.cat) && (!flt.q || x.l.judul.toLowerCase().indexOf(flt.q) >= 0 || (x.l.kata || '').indexOf(flt.q) >= 0); });
      var part = cur.slice(0, shown);
      $('#gGrid').innerHTML = part.length ? part.map(function (x, i) {
        return '<figure class="shot"><button type="button" data-i="' + i + '" aria-label="Perbesar: ' + esc(x.l.judul) + '"><img loading="lazy" decoding="async" src="images/' + x.src + '" alt="Tangkapan layar ' + esc(x.l.judul) + ', gambar ' + (x.k + 1) + '"></button><figcaption><a href="#/materi/' + x.l.id + '">' + esc(x.l.judul.split(':')[0]) + '</a></figcaption></figure>';
      }).join('') : '<div class="empty">Tidak ada gambar yang cocok dengan filter ini.</div>';
      $('#more').hidden = cur.length <= shown;
      $('#gCount').textContent = 'Menampilkan ' + part.length + ' dari ' + cur.length;
    }
    $('#gCat').addEventListener('change', function (e) { flt.cat = e.target.value; shown = PAGE; draw(); });
    $('#gQ').addEventListener('input', function (e) { flt.q = e.target.value.trim().toLowerCase(); shown = PAGE; draw(); });
    $('#more').addEventListener('click', function () { shown += PAGE; draw(); });
    $('#gGrid').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-i]'); if (!b) return;
      openLightbox(cur.map(function (x) { return { src: x.src, alt: 'Tangkapan layar ' + x.l.judul, cap: x.l.judul }; }), +b.dataset.i);
    });
    draw(); renderTree(null);
  }

  function viewNotFound() {
    setTitle('Halaman tidak ditemukan');
    app.innerHTML = '<h1 tabindex="-1">Halaman tidak ditemukan</h1><p>Alamat ini tidak cocok dengan materi mana pun. <a href="#/">Kembali ke beranda</a> atau pakai kotak pencarian di atas.</p>';
    renderTree(null);
  }

  /* ---------- Router ---------- */
  function route() {
    var parts = location.hash.replace(/^#\/?/, '').split('/');
    var a = parts[0], b = decodeURIComponent(parts[1] || '');
    setNav(false);
    $$('.toplinks a, .sidelinks a').forEach(function (x) { x.removeAttribute('aria-current'); if (x.getAttribute('href') === '#/' + a) x.setAttribute('aria-current', 'page'); });
    if (a === 'materi') viewLesson(b);
    else if (a === 'kategori') viewCategory(b);
    else if (a === 'lab') viewLab();
    else if (a === 'kuis') viewQuiz();
    else if (a === 'galeri') viewGallery();
    else if (a === '' ) { viewHome(); renderTree(null); }
    else viewNotFound();
    window.scrollTo(0, 0);
    document.body.setAttribute('data-page', a || 'home'); readUpdate();
    emit('route', { name: a || 'home', id: b });
    var h1 = $('h1', app); if (h1 && a !== '') { h1.setAttribute('tabindex', '-1'); }
  }
  var readbar = $('#readbar');
  function readUpdate() { var h = document.documentElement.scrollHeight - innerHeight; readbar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, scrollY / h) : 0) + ')'; }
  window.addEventListener('scroll', readUpdate, { passive: true }); window.addEventListener('resize', readUpdate);
  window.addEventListener('hashchange', route);
  $('#footNote').textContent = 'Situs ini berisi ' + lessons.length + ' materi dan ' + totalImgs + ' tangkapan layar praktik. Rumus pada kotak latihan dihitung oleh mesin mini di browser, jadi pada kasus khusus hasilnya bisa berbeda dari Excel.';
  route();
})();
