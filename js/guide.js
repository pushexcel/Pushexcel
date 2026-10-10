/* PushExcel: pemandu belajar (gelembung pesan + foto pemandu).
   Ganti nama/foto di objek GUIDE di bawah ini. */
(function () {
  'use strict';
  var DATA = window.DATA; if (!DATA) return;

  var GUIDE = {
    nama: 'Kak Ayu',
    foto: 'images/pemandu.svg'   /* ganti dengan 'images/pemandu.jpg' bila punya foto sendiri */
  };

  /* ---------- Data & penyimpanan ---------- */
  var lessons = DATA.lessons, cats = DATA.cats, byId = {}, catOf = {}, order = [];
  lessons.forEach(function (l) { byId[l.id] = l; });
  cats.forEach(function (c) { catOf[c.id] = c; });
  cats.forEach(function (c) { lessons.forEach(function (l) { if (l.cat === c.id) order.push(l); }); });

  var KEY = 'be_guide';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  var S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* abaikan */ } }
  function doneSet() { try { return new Set(JSON.parse(localStorage.getItem('be_done')) || []); } catch (e) { return new Set(); } }
  function lastId() { try { return JSON.parse(localStorage.getItem('be_last')); } catch (e) { return null; } }

  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function $(s, r) { return (r || document).querySelector(s); }
  function shortTitle(l) { return l.judul.split(':')[0]; }

  /* Hari belajar berturut-turut */
  (function streak() {
    function ymd(d) { return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
    var now = new Date(), today = ymd(now), y = ymd(new Date(now.getTime() - 86400000));
    if (S.last !== today) { S.streak = (S.last === y) ? (S.streak || 0) + 1 : 1; S.last = today; save(); }
  })();

  /* ---------- DOM ---------- */
  var root = document.createElement('div');
  root.className = 'guide';
  root.innerHTML =
    '<div class="bubble" id="gBubble" role="status" aria-live="polite" hidden></div>' +
    '<button type="button" class="avatar" id="gAvatar" aria-label="' + esc(GUIDE.nama) + ', pemandu belajar. Buka menu bantuan" aria-haspopup="true">' +
    '<img src="' + GUIDE.foto + '" alt="" width="64" height="64" draggable="false"><i class="dot" aria-hidden="true"></i><b class="badge" hidden aria-hidden="true">1</b></button>';
  document.body.appendChild(root);
  var bub = $('#gBubble'), avatar = $('#gAvatar'), badge = $('.badge', root);
  var ring = document.createElement('div'); ring.className = 'tour-ring'; ring.hidden = true; document.body.appendChild(ring);
  var cnv = document.createElement('canvas'); cnv.id = 'confetti'; cnv.setAttribute('aria-hidden', 'true'); document.body.appendChild(cnv);

  var cur = null, pending = null, hideT = null, typeT = null, talkT = null, seen = {};
  var R = { name: 'home', id: '' }, interacted = false, okCount = 0, qStreak = 0, nudgeT = null, io = [];
  var tour = null, wantTour = false;

  function setBadge(on) { badge.hidden = !on; }

  /* ---------- Menampilkan pesan ---------- */
  function say(m) {
    if (m.key) { if (seen[m.key] && !m.again) return; seen[m.key] = 1; }
    if (S.quiet && !m.force) { pending = m; setBadge(true); return; }
    present(m);
  }
  function present(m) {
    clearTimeout(hideT); clearTimeout(typeT);
    cur = m; pending = null; setBadge(false);
    bub.hidden = false; root.classList.add('talk');
    var len = String(m.html || '').replace(/<[^>]*>/g, '').length;
    if (m.instant || reduced) { render(m); return; }
    bub.className = 'bubble typing';
    bub.innerHTML = '<span class="dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="sr">' + esc(GUIDE.nama) + ' sedang mengetik</span>';
    typeT = setTimeout(function () { render(m); }, Math.min(650, 240 + len * 4));
  }
  function render(m) {
    bub.className = 'bubble in' + (m.menu ? ' menu' : '');
    var h = '<div class="bhead"><span class="bname">' + esc(GUIDE.nama) + '</span><button type="button" class="bx" aria-label="Tutup pesan">&times;</button></div>' +
      '<div class="btext">' + (m.html || '') + '</div>';
    if (m.input) h += '<form class="bform"><label class="sr" for="gName">Namamu</label><input id="gName" type="text" maxlength="24" placeholder="Ketik namamu" autocomplete="given-name"><button type="submit" class="gbtn pri">Simpan</button></form>';
    if (m.actions && m.actions.length) {
      h += '<div class="bact">' + m.actions.map(function (a, i) {
        return '<button type="button" class="gbtn' + (a.primary ? ' pri' : '') + '" data-i="' + i + '">' + esc(a.label) + '</button>';
      }).join('') + '</div>';
    }
    bub.innerHTML = h;
    $('.bx', bub).addEventListener('click', function () { hide(true); });
    if (m.actions) {
      Array.prototype.forEach.call(bub.querySelectorAll('.bact .gbtn'), function (b) {
        b.addEventListener('click', function () {
          var a = m.actions[+b.dataset.i];
          if (!a.keep) hide(false);
          if (a.href) location.hash = a.href;
          if (a.fn) a.fn();
        });
      });
    }
    var f = $('.bform', bub);
    if (f) {
      var inp = $('input', f);
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        var v = inp.value.trim().replace(/\s+/g, ' ');
        if (!v) { inp.focus(); return; }
        S.name = v; save(); afterName();
      });
      var skip = document.createElement('button'); skip.type = 'button'; skip.className = 'gbtn'; skip.textContent = 'Lewati';
      skip.addEventListener('click', function () { hide(false); }); f.appendChild(skip);
      setTimeout(function () { try { inp.focus({ preventScroll: true }); } catch (e) { /* abaikan */ } }, 60);
    }
    clearTimeout(talkT); talkT = setTimeout(function () { root.classList.remove('talk'); }, 1100);
    if (m.ttl) {
      var arm = function () { clearTimeout(hideT); hideT = setTimeout(function () { hide(false); }, m.ttl); };
      arm();
      bub.onmouseenter = bub.onfocusin = function () { clearTimeout(hideT); };
      bub.onmouseleave = bub.onfocusout = function () { if (cur === m) arm(); };
    } else { bub.onmouseenter = bub.onfocusin = bub.onmouseleave = bub.onfocusout = null; }
  }
  function hide(byUser) {
    clearTimeout(hideT); clearTimeout(typeT);
    bub.hidden = true; cur = null; root.classList.remove('talk');
    if (tour && byUser) endTour(true);
  }

  /* ---------- Nama & sapaan ---------- */
  function nm() { return S.name ? ', ' + esc(S.name) : ''; }
  function salam() {
    var h = new Date().getHours();
    return h >= 4 && h < 11 ? 'Selamat pagi' : h < 15 ? 'Selamat siang' : h < 18 ? 'Selamat sore' : 'Selamat malam';
  }
  function afterName() {
    present({
      html: 'Senang berkenalan, <b>' + esc(S.name) + '</b>! Mau kuajak tur singkat sekitar setengah menit?',
      instant: true,
      actions: [{ label: 'Ya, ajak tur', primary: true, fn: startTour }, { label: 'Nanti saja', fn: function () { S.tourDone = true; save(); } }]
    });
  }
  function nextUndone() {
    var d = doneSet(), last = lastId(), start = last && byId[last] ? order.indexOf(byId[last]) : -1, i, c;
    for (i = 1; i <= order.length; i++) { c = order[(start + i + order.length) % order.length]; if (!d.has(c.id)) return c; }
    return null;
  }

  /* ---------- Per halaman ---------- */
  function clearPage() {
    clearTimeout(nudgeT); io.forEach(function (o) { o.disconnect(); }); io = [];
    interacted = false; okCount = 0;
  }
  function watch(sel, fn) {
    var el = $(sel); if (!el || !('IntersectionObserver' in window)) return;
    var o = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { fn(); o.disconnect(); } }); }, { threshold: 0.6 });
    o.observe(el); io.push(o);
  }
  function go(sel) { var e = $(sel); if (e) e.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }); }

  function onRoute(d) {
    R = { name: d.name, id: d.id || '' }; clearPage();
    if (tour) endTour(true);
    var k = d.name;
    if (k === 'home' && wantTour) { wantTour = false; setTimeout(beginTour, 80); return; }
    if (k === 'home') return home();
    if (k === 'kategori') return category(d.id);
    if (k === 'materi') return lesson(d.id);
    if (k === 'lab') return say({ html: 'Ini lembar bebas. Coba isi <b>E2</b> dengan <code>=SUM(B2:D2)</code>, lalu tekan <b>Isi ke bawah</b>. Daftar fungsi ada di bagian bawah halaman.', ttl: 12000, key: 'lab' });
    if (k === 'kuis') return say({ html: 'Sepuluh soal acak. Salah itu wajar, pembahasannya muncul setiap kali kamu menjawab.', ttl: 8000, key: 'kuis' });
    if (k === 'galeri') return say({ html: 'Klik gambar mana saja untuk memperbesar, lalu geser dengan tombol panah di keyboard.', ttl: 8000, key: 'galeri' });
  }

  function home() {
    if (!S.name && !S.asked) {
      S.asked = true; save();
      return say({ html: 'Hai! Aku <b>' + esc(GUIDE.nama) + '</b>, pemandu belajarmu di PushExcel. Siapa namamu?', input: true, key: 'welcome' });
    }
    var d = doneSet(), n = d.size, nx = nextUndone(), acts = [];
    var t = salam() + nm() + '! ';
    if (n === 0) {
      t += 'Belum ada materi yang selesai. Pemula biasanya mulai dari rumus pertama.';
      acts.push({ label: 'Mulai dari dasar', primary: true, href: '#/materi/' + order[0].id });
    } else {
      t += 'Kamu sudah menyelesaikan <b>' + n + '</b> dari ' + lessons.length + ' materi' + (S.streak > 1 ? ', dan ini hari ke-<b>' + S.streak + '</b> berturut-turut' : '') + '.';
      if (nx) acts.push({ label: 'Lanjut: ' + shortTitle(nx), primary: true, href: '#/materi/' + nx.id });
    }
    if (!S.tourDone) acts.push({ label: 'Tur singkat', fn: startTour });
    else acts.push({ label: 'Buka lab rumus', href: '#/lab' });
    say({ html: t, actions: acts, key: 'home', ttl: 14000 });
  }

  function category(id) {
    var c = catOf[id]; if (!c) return;
    var ls = lessons.filter(function (l) { return l.cat === id; }), d = doneSet();
    var left = ls.filter(function (l) { return !d.has(l.id); });
    var t = '<b>' + esc(c.nama) + '</b> berisi ' + ls.length + ' materi. ' + (left.length ? 'Kamu sudah selesai ' + (ls.length - left.length) + ', tersisa ' + left.length + '.' : 'Semuanya sudah kamu selesaikan. Hebat!');
    say({ html: t, ttl: 9000, key: 'cat-' + id, actions: left.length ? [{ label: 'Buka ' + (left.length === ls.length ? 'materi pertama' : 'materi berikutnya'), primary: true, href: '#/materi/' + left[0].id }] : [] });
  }

  function lesson(id) {
    var l = byId[id]; if (!l) return;
    var t = 'Di sini kamu belajar <b>' + esc(shortTitle(l)) + '</b>. ', acts = [];
    if (l.demo) {
      t += 'Mulai dari bagian <b>Coba sendiri</b>: klik sel, ubah rumusnya, lalu tekan Enter.';
      acts.push({ label: 'Ke lembar latihan', primary: true, fn: function () { go('#demoHost'); } });
    } else if (l.langkah) {
      t += 'Materi ini dipraktikkan langsung di Excel. Ikuti langkahnya dan centang satu per satu.';
      acts.push({ label: 'Ke langkah praktik', primary: true, fn: function () { go('.steps'); } });
    }
    say({ html: t, actions: acts, ttl: 12000, key: 'l-' + id });

    if (l.demo) nudgeT = setTimeout(function () {
      if (!interacted && R.id === id) say({ html: 'Belum coba? Klik salah satu tombol di <b>Coba rumus</b>. Hasilnya langsung muncul di tabel.', ttl: 9000, key: 'nudge-' + id });
    }, 35000);
    watch('#quizHost', function () { say({ html: 'Satu soal kecil untuk mengecek pemahamanmu. Tenang, boleh salah.', ttl: 7000, key: 'qh-' + id }); });
    watch('.finish', function () {
      if (doneSet().has(id)) return;
      say({ html: 'Sudah paham? Tandai selesai supaya progresmu tersimpan.', ttl: 10000, key: 'fin-' + id,
        actions: [{ label: 'Tandai selesai', primary: true, fn: function () { var b = $('#doneBtn'); if (b && b.getAttribute('aria-pressed') !== 'true') b.click(); } }] });
    });
  }

  /* ---------- Reaksi terhadap aksi ---------- */
  var ERR = {
    '#DIV/0!': 'Muncul <b>#DIV/0!</b> karena ada pembagian dengan nol atau sel kosong. Periksa sel yang menjadi pembagi.',
    '#NAME?': 'Muncul <b>#NAME?</b>. Excel tidak mengenali sebuah nama di rumusmu. Biasanya nama fungsi salah ketik, atau teks lupa diberi tanda kutip.',
    '#VALUE!': 'Muncul <b>#VALUE!</b>. Ada nilai yang jenisnya tidak cocok, misalnya teks ikut dihitung seperti angka.',
    '#REF!': 'Muncul <b>#REF!</b>. Rujukan selnya tidak valid, mungkin barisnya terhapus atau alamatnya di luar tabel.',
    '#N/A': 'Muncul <b>#N/A</b>. Nilai yang dicari tidak ada di tabel. Cek ejaannya, atau periksa argumen pencocokan.',
    '#NUM!': 'Muncul <b>#NUM!</b>. Angkanya tidak valid untuk fungsi ini, misalnya akar dari bilangan negatif.'
  };
  var CHEER = ['Hasilnya <b>%s</b>. Coba ubah satu angka di tabel dan lihat hasilnya ikut berubah.',
    'Tepat. Sekarang ganti rumusnya sedikit, misalnya rentang selnya, dan bandingkan hasilnya.',
    'Mantap. Perhatikan sel berwarna di tabel: itulah sel yang dipakai rumusmu.',
    'Bagus, hasilnya <b>%s</b>. Coba tebak dulu hasilnya sebelum menekan Enter.'];

  function onCommit(d) {
    interacted = true;
    var raw = String(d.raw || '').trim(); if (!raw) return;
    if (raw.charAt(0) !== '=') {
      if (/^[A-Za-z]+\(/.test(raw)) say({ html: 'Itu dianggap teks biasa karena tidak diawali tanda <b>=</b>. Tambahkan = di depannya.', ttl: 9000, again: true, key: 'noeq' });
      return;
    }
    var flat = raw.replace(/"[^"]*"/g, '""');
    var open = (flat.match(/\(/g) || []).length, close = (flat.match(/\)/g) || []).length;
    if (open !== close) { say({ html: 'Tanda kurung belum seimbang: ada ' + open + ' pembuka dan ' + close + ' penutup. Itu sebabnya hasilnya error.', ttl: 10000, again: true, key: 'par' }); return; }
    if (d.err) { say({ html: ERR[d.err] || 'Rumusmu menghasilkan <b>' + esc(d.err) + '</b>. Periksa penulisan dan alamat selnya.', ttl: 14000, again: true, key: 'err' }); return; }
    okCount++;
    if (okCount === 1) say({ html: CHEER[0].replace('%s', esc(d.text || '')), ttl: 9000, again: true, key: 'ok1-' + R.id });
    else if (okCount % 4 === 0) { var m = pick(CHEER.slice(1)); say({ html: m.replace('%s', esc(d.text || '')), ttl: 8000, again: true, key: 'okn' }); }
  }

  var YES = ['Tepat sekali!', 'Benar. Pertahankan!', 'Betul, kamu cepat menangkapnya.', 'Yes, jawabanmu benar!'];
  var NO = ['Belum tepat, tidak apa-apa. Baca pembahasannya dulu.', 'Hampir. Pembahasan di bawah soal akan membantu.', 'Salah itu bagian dari belajar. Lihat pembahasannya ya.'];
  function onAnswer(d) {
    if (d.ok) { qStreak++; } else { qStreak = 0; }
    if (d.ok && qStreak > 0 && qStreak % 3 === 0) { say({ html: '<b>' + qStreak + ' jawaban benar</b> berturut-turut. Kamu sedang di jalur yang bagus!', ttl: 6000, again: true, key: 'qs' }); confetti(40); return; }
    say({ html: d.ok ? pick(YES) : pick(NO), ttl: 6000, again: true, key: 'qa', instant: true });
  }
  function onQuizEnd(d) {
    qStreak = 0;
    var r = d.score / d.total, t;
    if (r === 1) { t = 'Sempurna' + nm() + '! Semua benar.'; confetti(110); }
    else if (r >= 0.7) { t = 'Bagus sekali, ' + d.score + ' dari ' + d.total + '. Ulangi materi yang masih keliru lalu coba lagi.'; confetti(60); }
    else if (r >= 0.4) { t = d.score + ' dari ' + d.total + '. Sudah separuh jalan. Buka materi yang disarankan di bawah, lalu ulangi kuisnya.'; }
    else { t = 'Skor ' + d.score + ' dari ' + d.total + ' tidak masalah. Mulai dari materi dasar, lalu coba lagi pelan-pelan.'; }
    say({ html: t, ttl: 12000, again: true, key: 'qe' });
  }

  var MILESTONE = { 1: 'Materi pertama selesai. Awal yang bagus!', 5: 'Lima materi selesai. Kebiasaan belajarmu mulai terbentuk.', 10: 'Sepuluh materi! Kamu sudah melewati banyak rumus penting.', 25: 'Dua puluh lima materi selesai. Kamu sudah jauh melangkah.', 50: 'Lima puluh materi, separuh perjalanan lebih!', 100: 'Seratus materi selesai. Luar biasa!' };
  function onDone(d) {
    updateProg();
    if (!d.on) return;
    var ds = doneSet(), n = ds.size, l = byId[d.id], c = l && catOf[l.cat];
    var catAll = c && lessons.filter(function (x) { return x.cat === c.id; }).every(function (x) { return ds.has(x.id); });
    var t, big = false;
    if (n === lessons.length) { t = 'Semua <b>' + n + '</b> materi selesai' + nm() + '. Kamu sudah menamatkan PushExcel!'; big = true; }
    else if (catAll) { t = 'Topik <b>' + esc(c.nama) + '</b> tuntas semua!'; big = true; }
    else if (MILESTONE[n]) { t = MILESTONE[n]; big = true; }
    else t = pick(['Tersimpan. Satu materi lagi selesai.', 'Materi selesai' + nm() + '. Lanjut selagi semangat?', 'Mantap, progresmu bertambah jadi ' + n + ' materi.']);
    var nx = nextUndone(), acts = [];
    if (nx) acts.push({ label: 'Berikutnya: ' + shortTitle(nx), primary: true, href: '#/materi/' + nx.id });
    say({ html: t, actions: acts, ttl: 12000, again: true, key: 'done', instant: true });
    confetti(big ? 130 : 36);
  }
  function onSteps(d) {
    interacted = true;
    if (d.checked && d.n === d.total && !doneSet().has(d.id)) {
      say({ html: 'Semua langkah sudah dicentang. Tandai materi ini selesai?', ttl: 10000, again: true, key: 'steps-' + d.id,
        actions: [{ label: 'Tandai selesai', primary: true, fn: function () { var b = $('#doneBtn'); if (b && b.getAttribute('aria-pressed') !== 'true') b.click(); } }] });
    }
  }

  /* ---------- Progres di header ---------- */
  var progBtn = $('#progBtn'), progTxt = $('#progTxt'), progVal = progBtn && $('.val', progBtn);
  function updateProg() {
    if (!progBtn) return;
    var n = doneSet().size, t = lessons.length, C = 2 * Math.PI * 10;
    progTxt.textContent = n + '/' + t;
    progVal.style.strokeDasharray = C; progVal.style.strokeDashoffset = C * (1 - n / t);
    progBtn.setAttribute('aria-label', 'Progres belajar: ' + n + ' dari ' + t + ' materi selesai');
  }
  function summary() {
    var n = doneSet().size, t = lessons.length, nx = nextUndone();
    present({
      html: 'Progresmu' + nm() + ': <b>' + n + '</b> dari ' + t + ' materi selesai (' + Math.round(n / t * 100) + '%). Hari belajar berturut-turut: <b>' + (S.streak || 1) + '</b>.',
      instant: true, ttl: 14000,
      actions: nx ? [{ label: 'Lanjut: ' + shortTitle(nx), primary: true, href: '#/materi/' + nx.id }] : []
    });
  }
  if (progBtn) progBtn.addEventListener('click', summary);
  updateProg();

  /* ---------- Menu & petunjuk ---------- */
  function hint() {
    var l = R.name === 'materi' ? byId[R.id] : null, t;
    if (l) {
      t = l.demo ? 'Di <b>Coba sendiri</b>, klik sel lalu ketik rumus di kotak fx. Tombol <b>Coba rumus</b> mengisi contoh untukmu, dan <b>Atur ulang</b> mengembalikan tabel.'
                 : 'Ikuti <b>Langkah praktik</b> di Excel-mu sendiri sambil melihat tangkapan layar. Klik gambar untuk memperbesar.';
      if (l.sintaks) t += ' Tombol <b>Salin</b> menyalin sintaksnya.';
    }
    else if (R.name === 'lab') t = 'Klik nama fungsi di bawah lembar untuk menyisipkannya ke kotak fx. Panah di keyboard memindahkan sel, Delete menghapus isinya.';
    else if (R.name === 'kuis') t = 'Pilih satu jawaban. Setelah itu pembahasan muncul dan kamu bisa lanjut ke soal berikutnya.';
    else if (R.name === 'galeri') t = 'Pilih topik atau ketik nama materi untuk menyaring gambar. Klik gambar untuk memperbesar.';
    else if (R.name === 'kategori') t = 'Pilih satu materi dari daftar. Tanda centang berarti materi itu sudah kamu selesaikan.';
    else t = 'Klik sel di lembar mini, ketik rumus, lalu Enter. Tekan <b>/</b> kapan saja untuk mencari materi, atau pilih topik di bawah.';
    present({ html: t, instant: true, ttl: 16000 });
  }
  function menu() {
    if (cur && cur.menu) { hide(false); return; }
    if (pending) { present(pending); return; }
    present({
      html: 'Hai' + nm() + '! Ada yang bisa kubantu?', instant: true, menu: true,
      actions: [
        { label: 'Petunjuk halaman ini', fn: hint },
        { label: 'Tur singkat', fn: startTour },
        { label: 'Progres belajarku', fn: summary },
        { label: S.quiet ? 'Nyalakan komentar otomatis' : 'Diam dulu, jangan komentar otomatis', fn: function () {
          S.quiet = !S.quiet; save(); pending = null; setBadge(false);
          present({ html: S.quiet ? 'Oke, aku diam dulu. Klik fotoku kalau butuh bantuan.' : 'Siap, aku akan memberi komentar lagi.', instant: true, ttl: 4000, force: true });
        } },
        { label: S.name ? 'Ganti namaku' : 'Perkenalkan dirimu', fn: function () {
          present({ html: 'Siapa namamu?', input: true, instant: true });
        } }
      ]
    });
  }
  avatar.addEventListener('click', menu);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && cur && !document.body.classList.contains('nav-open') && (root.contains(document.activeElement) || tour)) { hide(true); avatar.focus(); }
  });

  /* ---------- Tur ---------- */
  function visible(el) { return el && el.getClientRects().length > 0; }
  function tourSteps() {
    var small = window.innerWidth <= 960, s = [];
    s.push({ el: '#q', t: 'Cari rumus atau topik di sini, misalnya <b>VLOOKUP</b>. Dari mana saja, tekan <b>/</b> untuk langsung mengetik.' });
    s.push({ el: small ? '#menuBtn' : '#side', t: 'Semua materi dikelompokkan per topik. Tanda centang muncul di materi yang sudah kamu selesaikan.' });
    s.push({ el: '.toplinks', t: '<b>Lab rumus</b> untuk latihan bebas, <b>Kuis</b> untuk menguji diri, dan <b>Galeri</b> untuk melihat semua tangkapan layar.' });
    s.push({ el: '#heroSheet', t: 'Ini lembar kerja mini. Klik sel, ubah rumus di kotak fx, lalu tekan Enter. Sel yang dipakai rumus diberi warna.' });
    s.push({ el: '#progBtn', t: 'Progres belajarmu terlihat di sini. Klik kapan saja untuk ringkasan.' });
    s.push({ el: '#themeBtn', t: 'Mata lelah? Ganti ke tema gelap lewat tombol ini.' });
    return s.filter(function (x) { return visible($(x.el)); });
  }
  function beginTour() {
    var steps = tourSteps(); if (!steps.length) return;
    tour = { steps: steps, i: 0 }; tourStep();
  }
  function startTour() {
    if (R.name !== 'home') { wantTour = true; location.hash = '#/'; return; }
    beginTour();
  }
  function placeRing() {
    if (!tour) return;
    var el = $(tour.steps[tour.i].el); if (!visible(el)) return;
    var r = el.getBoundingClientRect(), p = 6;
    ring.style.left = (r.left - p) + 'px'; ring.style.top = (r.top - p) + 'px';
    ring.style.width = (r.width + 2 * p) + 'px'; ring.style.height = (r.height + 2 * p) + 'px';
  }
  function tourStep() {
    var st = tour.steps[tour.i], el = $(st.el), last = tour.i === tour.steps.length - 1;
    if (el && !el.closest('.top, .side') && el.scrollIntoView) el.scrollIntoView({ block: 'center', behavior: 'auto' });
    ring.hidden = false; placeRing(); setTimeout(placeRing, 120);
    present({
      html: '<small class="tcount">Langkah ' + (tour.i + 1) + ' dari ' + tour.steps.length + '</small>' + st.t, instant: true,
      actions: [
        { label: last ? 'Selesai' : 'Lanjut', primary: true, keep: true, fn: function () { if (last) endTour(false); else { tour.i++; tourStep(); } } },
        { label: 'Lewati tur', fn: function () { endTour(true); } }
      ]
    });
    var b = $('.bact .pri', bub); if (b) b.focus({ preventScroll: true });
  }
  function endTour(silent) {
    if (!tour) return; tour = null; ring.hidden = true; S.tourDone = true; save();
    if (!silent) present({ html: 'Selesai! Sekarang coba ketik rumus di lembar mini, atau pilih topik yang kamu suka.', instant: true, ttl: 7000 });
  }
  window.addEventListener('resize', placeRing); window.addEventListener('scroll', placeRing, { passive: true });

  /* ---------- Konfeti ---------- */
  var fx = null;
  function confetti(n) {
    if (reduced) return;
    var c = cnv, g = c.getContext('2d'), W = c.width = innerWidth, H = c.height = innerHeight;
    var cs = ['#0E7A43', '#FFD84D', '#2F6FEB', '#C2410C', '#7C3AED', '#3DBE7A'];
    var ox = W - 60, oy = H - 70, ps = [];
    for (var i = 0; i < n; i++) {
      var a = -Math.PI / 2 + (Math.random() - 0.5) * 1.5, v = 7 + Math.random() * 9;
      ps.push({ x: ox, y: oy, vx: Math.cos(a) * v - 2, vy: Math.sin(a) * v, w: 5 + Math.random() * 5, h: 3 + Math.random() * 4, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4, c: pick(cs), life: 0 });
    }
    cancelAnimationFrame(fx);
    (function tick() {
      g.clearRect(0, 0, W, H); var alive = 0;
      ps.forEach(function (p) {
        p.vy += 0.28; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life++;
        if (p.y < H + 20 && p.life < 150) {
          alive++; g.save(); g.translate(p.x, p.y); g.rotate(p.r); g.globalAlpha = Math.max(0, 1 - p.life / 150);
          g.fillStyle = p.c; g.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); g.restore();
        }
      });
      if (alive) fx = requestAnimationFrame(tick); else g.clearRect(0, 0, W, H);
    })();
  }

  /* ---------- Penerima kejadian dari app.js ---------- */
  document.addEventListener('pe', function (e) {
    var d = e.detail || {};
    if (d.type === 'route') onRoute(d);
    else if (d.type === 'commit') onCommit(d);
    else if (d.type === 'answer') onAnswer(d);
    else if (d.type === 'quizEnd') onQuizEnd(d);
    else if (d.type === 'done') onDone(d);
    else if (d.type === 'steps') onSteps(d);
  });
  window.addEventListener('storage', updateProg);
  window.Guide = { say: say, tour: startTour, hint: hint };
})();
