window.DATA = {
 "cats": [
  {
   "id": "dasar",
   "nama": "Dasar Excel",
   "ket": "Sel, rumus pertama, format angka, dan kebiasaan kerja yang rapi."
  },
  {
   "id": "data",
   "nama": "Olah Data",
   "ket": "Urutkan, saring, validasi, pivot, dan merapikan data."
  },
  {
   "id": "rumus",
   "nama": "Rumus Dasar & Statistik",
   "ket": "SUM, MAX, AVERAGE, RANK, COUNTIF, dan kawan-kawannya."
  },
  {
   "id": "logika",
   "nama": "Logika dan IF",
   "ket": "Membuat Excel mengambil keputusan dari nilai sel."
  },
  {
   "id": "teks",
   "nama": "Fungsi Teks",
   "ket": "Memotong, menyambung, dan merapikan teks."
  },
  {
   "id": "lookup",
   "nama": "Pencarian & Referensi",
   "ket": "VLOOKUP, HLOOKUP, MATCH, dan fungsi alamat sel."
  },
  {
   "id": "tanggal",
   "nama": "Tanggal & Waktu",
   "ket": "Menghitung umur, selisih hari, hari kerja, dan jam."
  },
  {
   "id": "mate",
   "nama": "Matematika & Trigonometri",
   "ket": "Pembulatan, akar, logaritma, sudut, matriks, dan konversi."
  },
  {
   "id": "db",
   "nama": "Fungsi Database",
   "ket": "Menghitung dari tabel dengan rentang kriteria."
  },
  {
   "id": "uang",
   "nama": "Keuangan",
   "ket": "Cicilan, nilai masa depan, penyusutan, dan obligasi."
  },
  {
   "id": "macro",
   "nama": "Macro & VBA",
   "ket": "Merekam macro lalu menulis kode VBA sendiri."
  },
  {
   "id": "kasus",
   "nama": "Studi Kasus",
   "ket": "Gaji, IPK, absensi, pajak, invoice, dan kalender."
  }
 ],
 "lessons": [
  {
   "id": "rumus-pertama",
   "cat": "dasar",
   "judul": "Rumus pertama: awali dengan tanda sama dengan",
   "ringkas": "Setiap rumus Excel dimulai dengan =. Setelah itu kamu bisa memakai angka, alamat sel, dan operator hitung.",
   "sintaks": "=B2*C2",
   "argumen": [
    [
     "+  -  *  /",
     "Tambah, kurang, kali, bagi"
    ],
    [
     "^",
     "Pangkat, misalnya =2^3 menghasilkan 8"
    ],
    [
     "&",
     "Menyambung teks"
    ],
    [
     "B2",
     "Alamat sel: kolom B, baris 2"
    ]
   ],
   "langkah": [
    "Klik sel tempat hasil akan muncul, misalnya D2.",
    "Ketik = lalu klik sel Harga (B2), ketik *, lalu klik sel Jumlah (C2).",
    "Tekan Enter. Hasilnya muncul di sel, rumusnya tetap terlihat di formula bar.",
    "Seret gagang isian (kotak kecil di pojok kanan bawah sel) ke bawah untuk menyalin rumus ke baris lain."
   ],
   "tips": [
    "Pakai alamat sel, bukan angka langsung. Kalau harga berubah, hasil ikut berubah.",
    "Kalau muncul ####, kolomnya terlalu sempit. Lebarkan kolom."
   ],
   "demo": {
    "data": [
     [
      "Barang",
      "Harga",
      "Jumlah"
     ],
     [
      "Pensil",
      3000,
      5
     ],
     [
      "Buku",
      8000,
      3
     ],
     [
      "Penggaris",
      5000,
      2
     ]
    ],
    "sel": "D2",
    "rumus": "=B2*C2",
    "coba": [
     [
      "=B2*C2",
      "Harga x jumlah"
     ],
     [
      "=B2+C2",
      "Tambah (tidak masuk akal di sini)"
     ],
     [
      "=SUM(B2:B4)",
      "Total harga satuan"
     ]
    ],
    "catatan": "Ubah angka di tabel atau rumusnya, lalu tekan Enter."
   },
   "kuis": {
    "q": "Rumus apa yang benar untuk mengalikan isi sel B2 dengan C2?",
    "opsi": [
     "B2*C2",
     "=B2*C2",
     "=B2xC2",
     "'=B2*C2"
    ],
    "jawab": 1,
    "bahas": "Rumus harus diawali tanda =. Operator kali ditulis dengan tanda bintang."
   },
   "kata": "rumus dasar sel formula bar operator",
   "gambar": []
  },
  {
   "id": "perkalian",
   "cat": "dasar",
   "judul": "Perkalian: operator * dan fungsi PRODUCT",
   "ringkas": "Untuk mengalikan banyak sel sekaligus, PRODUCT lebih ringkas daripada menulis tanda * berulang kali.",
   "sintaks": "=PRODUCT(angka1; [angka2]; ...)",
   "argumen": [
    [
     "angka1",
     "Angka, sel, atau rentang pertama"
    ],
    [
     "angka2, ...",
     "Opsional, sampai 255 argumen"
    ]
   ],
   "langkah": [
    "Siapkan angka di beberapa sel, misalnya B2 sampai D2.",
    "Ketik =PRODUCT( lalu seret rentang B2:D2.",
    "Tutup kurung dan tekan Enter."
   ],
   "tips": [
    "Sel kosong dan teks dalam rentang diabaikan oleh PRODUCT, sedangkan operator * akan menghasilkan #VALUE! bila ada teks."
   ],
   "demo": {
    "data": [
     [
      "Panjang",
      "Lebar",
      "Tinggi",
      "Volume"
     ],
     [
      4,
      3,
      2,
      ""
     ],
     [
      10,
      5,
      2,
      ""
     ]
    ],
    "sel": "D2",
    "rumus": "=PRODUCT(A2:C2)",
    "coba": [
     [
      "=A2*B2*C2",
      "Operator *"
     ],
     [
      "=PRODUCT(A2:C2)",
      "PRODUCT"
     ]
    ]
   },
   "kuis": {
    "q": "Apa hasil =PRODUCT(2;3;4)?",
    "opsi": [
     "9",
     "24",
     "14",
     "234"
    ],
    "jawab": 1,
    "bahas": "2 x 3 x 4 = 24."
   },
   "kata": "perkalian product kali",
   "gambar": [
    "fungsi-argumen-product-300x183.jpg",
    "perkalian-dengan-microsoft-excel-1.jpg",
    "perkalian-dengan-microsoft-excel-2-300x152.jpg",
    "perkalian-dengan-microsoft-excel-3.jpg"
   ]
  },
  {
   "id": "pangkat",
   "cat": "dasar",
   "judul": "Pangkat, superscript, dan subscript",
   "ringkas": "Ada dua urusan berbeda: menghitung pangkat dengan rumus, dan menulis pangkat sebagai tampilan teks seperti m².",
   "sintaks": "=angka^pangkat   atau   =POWER(angka; pangkat)",
   "argumen": [
    [
     "angka",
     "Bilangan pokok"
    ],
    [
     "pangkat",
     "Bilangan pangkat"
    ]
   ],
   "langkah": [
    "Untuk menghitung: ketik =2^10 atau =POWER(2;10). Hasilnya 1024.",
    "Untuk menulis m²: klik sel, tekan F2, blok angka 2, buka Format Cells (Ctrl+1), centang Superscript.",
    "Subscript (seperti H₂O) memakai cara yang sama dengan mencentang Subscript."
   ],
   "tips": [
    "Superscript hanya mengubah tampilan teks. Excel tidak menghitungnya sebagai pangkat."
   ],
   "demo": {
    "data": [
     [
      "Bilangan",
      "Pangkat",
      "Hasil"
     ],
     [
      2,
      10,
      ""
     ],
     [
      5,
      3,
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=A2^B2",
    "coba": [
     [
      "=A2^B2",
      "Operator ^"
     ],
     [
      "=POWER(A2,B2)",
      "Fungsi POWER"
     ],
     [
      "=SQRT(A2)",
      "Akar kuadrat"
     ]
    ]
   },
   "kuis": {
    "q": "Apa hasil =3^2?",
    "opsi": [
     "6",
     "9",
     "5",
     "32"
    ],
    "jawab": 1,
    "bahas": "3 pangkat 2 = 3 x 3 = 9."
   },
   "kata": "pangkat kuadrat power superscript subscript",
   "gambar": [
    "mengetik-pangkat-1.jpg",
    "mengetik-pangkat-2-300x184.jpg",
    "mengetik-pangkat-3-300x270.jpg",
    "mengetik-pangkat-4.jpg",
    "subscripts-1.jpg",
    "subscripts-2.jpg",
    "subscripts-3.jpg",
    "superscript-1.jpg",
    "superscript-2.jpg"
   ]
  },
  {
   "id": "copy-paste",
   "cat": "dasar",
   "judul": "Salin dan tempel (Paste Special)",
   "ringkas": "Paste Special memilih apa yang ditempel: nilai saja, rumus saja, format saja, atau hasil transpose.",
   "langkah": [
    "Pilih sel lalu tekan Ctrl+C.",
    "Klik sel tujuan, buka Home > Paste > Paste Special (atau Ctrl+Alt+V).",
    "Pilih Values untuk menempel hasil tanpa rumus, Formats untuk menyalin tampilan saja, atau Transpose untuk menukar baris dan kolom.",
    "Tekan OK."
   ],
   "tips": [
    "Setelah menempel Values, rumus asli hilang. Simpan salinan data sebelum mencobanya."
   ],
   "kuis": {
    "q": "Pilihan Paste Special mana yang menempel hasil rumus tanpa rumusnya?",
    "opsi": [
     "Formats",
     "Values",
     "Comments",
     "Validation"
    ],
    "jawab": 1,
    "bahas": "Values menempel nilai akhirnya saja."
   },
   "kata": "copy paste salin tempel paste special values",
   "gambar": []
  },
  {
   "id": "tombol-excel",
   "cat": "dasar",
   "judul": "Mengenal tombol-tombol di Ribbon",
   "ringkas": "Mengenal tab Home, Formulas, dan Data di Ribbon beserta tombol yang paling sering dipakai.",
   "langkah": [
    "Perhatikan tab Home: kelompok Font, Alignment, dan Number berisi pengaturan tampilan.",
    "Tab Formulas berisi pustaka fungsi dan tombol AutoSum.",
    "Tab Data berisi urutkan, filter, dan validasi.",
    "Arahkan kursor ke tombol untuk melihat keterangan singkatnya."
   ],
   "kuis": {
    "q": "Di tab mana tombol AutoSum berada selain Home?",
    "opsi": [
     "Insert",
     "Formulas",
     "View",
     "Review"
    ],
    "jawab": 1,
    "bahas": "AutoSum juga ada di tab Formulas."
   },
   "kata": "tombol ribbon toolbar",
   "gambar": []
  },
  {
   "id": "warna-sel",
   "cat": "dasar",
   "judul": "Mewarnai sel dan batas tabel",
   "ringkas": "Warna isian dan garis tepi membuat tabel mudah dibaca. Warna yang berubah otomatis dibahas di Conditional Formatting.",
   "langkah": [
    "Blok sel yang akan diwarnai.",
    "Home > Fill Color untuk warna latar, Font Color untuk warna huruf.",
    "Home > Borders untuk garis tepi.",
    "Gunakan Format Painter untuk menyalin tampilan ke sel lain."
   ],
   "kuis": {
    "q": "Alat apa yang menyalin tampilan satu sel ke sel lain?",
    "opsi": [
     "Find & Select",
     "Format Painter",
     "Flash Fill",
     "Freeze Panes"
    ],
    "jawab": 1,
    "bahas": "Format Painter menyalin format."
   },
   "kata": "warna sel fill color border",
   "gambar": [
    "tnd-warna-cel-1-300x163.jpg",
    "tnd-warna-cel-3-300x163.jpg",
    "warna-cell-pada-excel-1-300x157.jpg",
    "warna-cell-pada-excel-4-300x290.jpg",
    "warna-cell-pada-excel-4.jpg"
   ]
  },
  {
   "id": "nomor-urut",
   "cat": "dasar",
   "judul": "Nomor urut otomatis",
   "ringkas": "Nomor urut yang dibuat dengan rumus akan menyesuaikan diri ketika baris disisipkan atau dihapus.",
   "sintaks": "=ROW()-1",
   "argumen": [
    [
     "ROW()",
     "Nomor baris tempat rumus berada"
    ],
    [
     "-1",
     "Dikurangi jumlah baris judul di atasnya"
    ]
   ],
   "langkah": [
    "Letakkan judul tabel di baris 1, data mulai baris 2.",
    "Di A2 ketik =ROW()-1 lalu Enter.",
    "Seret gagang isian ke bawah. Nomor 1, 2, 3, ... muncul.",
    "Jika baris dihapus, nomor di bawahnya otomatis menyesuaikan."
   ],
   "tips": [
    "Cara lain: ketik 1 dan 2 di dua sel, blok keduanya, lalu seret gagang isian. Cara ini tidak otomatis menyesuaikan bila ada baris dihapus."
   ],
   "demo": {
    "data": [
     [
      "No",
      "Nama"
     ],
     [
      "",
      "Antonio"
     ],
     [
      "",
      "Romansyah"
     ],
     [
      "",
      "Devi"
     ],
     [
      "",
      "Bagus"
     ]
    ],
    "sel": "A2",
    "rumus": "=ROW()-1",
    "coba": [
     [
      "=ROW()-1",
      "Nomor urut"
     ],
     [
      "=COUNTA(B$2:B2)",
      "Nomor hanya bila nama terisi"
     ]
    ],
    "catatan": "Salin rumus ke A3 sampai A5 dengan mengetik ulang."
   },
   "kuis": {
    "q": "Mengapa =ROW()-1 dipakai di A2 untuk nomor urut?",
    "opsi": [
     "Karena baris 1 berisi judul",
     "Karena Excel mulai dari nol",
     "Karena kolom A kosong",
     "Supaya hasilnya negatif"
    ],
    "jawab": 0,
    "bahas": "ROW() di baris 2 bernilai 2, dikurangi 1 menjadi nomor 1."
   },
   "kata": "nomor urut otomatis row",
   "gambar": [
    "data-1-pengaturan-nomor-urut-265x300.jpg",
    "data-2-pengaturan-nomor-urut-293x300.jpg",
    "gambar-pengaturan-rentang-angka-otomatis-281x300.jpg",
    "nomor-urut-otomatis-1.jpg",
    "nomor-urut-otomatis-2.jpg"
   ]
  },
  {
   "id": "penomoran-gabungan",
   "cat": "dasar",
   "judul": "Penomoran gabungan teks dan angka",
   "ringkas": "Format seperti KD-001 atau NIS/2026/015 dibuat dengan menyambung teks dan angka yang diformat dengan TEXT.",
   "sintaks": "=\"KD-\"&TEXT(ROW()-1;\"000\")",
   "argumen": [
    [
     "&",
     "Menyambung teks"
    ],
    [
     "TEXT(angka; \"000\")",
     "Mengubah angka menjadi teks tiga digit dengan nol di depan"
    ]
   ],
   "langkah": [
    "Ketik =\"KD-\"&TEXT(ROW()-1;\"000\") di sel pertama.",
    "Tekan Enter, hasilnya KD-001.",
    "Seret ke bawah untuk KD-002, KD-003, dan seterusnya."
   ],
   "demo": {
    "data": [
     [
      "Kode"
     ],
     [
      ""
     ],
     [
      ""
     ],
     [
      ""
     ]
    ],
    "sel": "A2",
    "rumus": "=\"KD-\"&TEXT(ROW()-1,\"000\")",
    "coba": [
     [
      "=\"KD-\"&TEXT(ROW()-1,\"000\")",
      "KD-001"
     ],
     [
      "=\"NIS/2026/\"&TEXT(ROW()-1,\"00\")",
      "NIS/2026/01"
     ]
    ]
   },
   "kuis": {
    "q": "Apa hasil =\"A\"&TEXT(7;\"000\")?",
    "opsi": [
     "A7",
     "A007",
     "A0007",
     "7A"
    ],
    "jawab": 1,
    "bahas": "Format \"000\" membuat angka 7 menjadi 007."
   },
   "kata": "penomoran gabungan teks angka kode",
   "gambar": [
    "data-1-mengatur-penomoran-gabungan-teks-dan-angka-300x238.jpg",
    "data-2-mengatur-penomoran-gabungan-teks-dan-angka-300x263.jpg",
    "data-3-mengatur-penomoran-gabungan-teks-dan-angka-300x274.jpg"
   ]
  },
  {
   "id": "angka-nol",
   "cat": "dasar",
   "judul": "Menampilkan angka nol di depan",
   "ringkas": "Excel membuang nol di depan angka, jadi 007 menjadi 7. Ada tiga cara menjaganya: format teks, apostrof, atau format kustom.",
   "sintaks": "=TEXT(angka; \"0000\")",
   "langkah": [
    "Cara 1: ubah format sel menjadi Text (Home > Number Format > Text) sebelum mengetik angka.",
    "Cara 2: ketik apostrof di depan angka, misalnya '007.",
    "Cara 3: Format Cells > Custom, tulis 000 agar angka selalu tiga digit.",
    "Cara 4: pakai rumus TEXT bila hasilnya akan disambung dengan teks lain."
   ],
   "tips": [
    "Angka berformat teks tidak bisa dijumlahkan dengan SUM. Pakai cara Custom bila angka masih perlu dihitung."
   ],
   "demo": {
    "data": [
     [
      "Angka",
      "Tampil"
     ],
     [
      7,
      ""
     ],
     [
      45,
      ""
     ],
     [
      123,
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=TEXT(A2,\"0000\")",
    "coba": [
     [
      "=TEXT(A2,\"0000\")",
      "Empat digit"
     ],
     [
      "=TEXT(A2,\"000\")",
      "Tiga digit"
     ]
    ]
   },
   "kuis": {
    "q": "Cara mana yang tetap membuat angkanya bisa dijumlahkan?",
    "opsi": [
     "Format Text",
     "Apostrof di depan",
     "Format Custom 000",
     "Spasi di depan"
    ],
    "jawab": 2,
    "bahas": "Format Custom hanya mengubah tampilan; nilainya tetap angka."
   },
   "kata": "nol di depan leading zero text",
   "gambar": [
    "cara-1-menampilkan-nol-dengan-format-teks-285x300.jpg",
    "contoh-penulisan-nol-dengan-tanda-koma-236x300.jpg",
    "hasil-pengaturan-dengan-format-teks-278x300.jpg"
   ]
  },
  {
   "id": "desimal",
   "cat": "dasar",
   "judul": "Mengatur jumlah desimal",
   "ringkas": "Tombol Increase Decimal dan Decrease Decimal mengubah tampilan, bukan nilai yang disimpan. Untuk mengubah nilainya, pakai ROUND.",
   "langkah": [
    "Blok sel angka.",
    "Home > Increase Decimal untuk menambah angka di belakang koma, Decrease Decimal untuk menguranginya.",
    "Bila hasil harus benar-benar dibulatkan, pakai =ROUND(sel; jumlah_desimal)."
   ],
   "kuis": {
    "q": "Apakah Decrease Decimal mengubah nilai yang tersimpan di sel?",
    "opsi": [
     "Ya",
     "Tidak, hanya tampilannya",
     "Hanya untuk teks",
     "Hanya pada kolom A"
    ],
    "jawab": 1,
    "bahas": "Nilai asli tetap utuh; hanya tampilannya yang dibulatkan."
   },
   "kata": "desimal decimal increase decrease",
   "gambar": [
    "4-8-gmbr-increase-decimal.jpg",
    "gambar-decrease-decimal.jpg"
   ]
  },
  {
   "id": "cetak-judul",
   "cat": "dasar",
   "judul": "Mengatur halaman cetak dan judul berulang",
   "ringkas": "Tabel panjang akan terpotong ke beberapa halaman. Print Titles mengulang baris judul di setiap halaman.",
   "langkah": [
    "Page Layout > Print Titles.",
    "Di Rows to repeat at top, klik kotaknya lalu klik baris judul (misalnya $1:$1).",
    "Klik Print Preview untuk memeriksa hasilnya.",
    "Atur margin dan orientasi (Portrait atau Landscape) bila tabel terlalu lebar."
   ],
   "kuis": {
    "q": "Fitur mana yang mengulang baris judul di tiap halaman cetak?",
    "opsi": [
     "Freeze Panes",
     "Print Titles",
     "Page Break",
     "Header"
    ],
    "jawab": 1,
    "bahas": "Print Titles di tab Page Layout."
   },
   "kata": "cetak print judul halaman",
   "gambar": [
    "cara-1-mencetak-judul-sama-tiap-halaman-300x95.jpg",
    "cara-2-mencetak-judul-sama-tiap-halaman-300x253.jpg",
    "contoh-dokumen-sebelum-diatur-300x199.jpg",
    "contoh-dokumen-sesudah-diatur-300x207.jpg"
   ]
  },
  {
   "id": "freeze-panes",
   "cat": "dasar",
   "judul": "Freeze Panes: mengunci baris dan kolom",
   "ringkas": "Judul tabel tetap terlihat ketika kamu menggulir ke bawah atau ke samping.",
   "langkah": [
    "Klik sel tepat di bawah baris dan di kanan kolom yang ingin dikunci.",
    "View > Freeze Panes > Freeze Panes.",
    "Untuk hanya mengunci baris pertama, pilih Freeze Top Row.",
    "Untuk membatalkan, pilih Unfreeze Panes."
   ],
   "kuis": {
    "q": "Untuk mengunci baris 1 dan kolom A sekaligus, sel mana yang dipilih sebelum Freeze Panes?",
    "opsi": [
     "A1",
     "B2",
     "A2",
     "C3"
    ],
    "jawab": 1,
    "bahas": "Freeze Panes mengunci semua yang ada di atas dan di kiri sel terpilih."
   },
   "kata": "freeze panes kunci baris kolom",
   "gambar": [
    "freeze-panes-pada-excel-1.jpg",
    "freeze-panes-pada-excel-2.jpg",
    "freeze-panes-pada-excel-3.jpg",
    "freeze-panes-pada-excel-4.jpg"
   ]
  },
  {
   "id": "link-antar-file",
   "cat": "dasar",
   "judul": "Menghubungkan data antar sheet dan antar file",
   "ringkas": "Rumus bisa mengambil nilai dari sheet atau file lain. Hasilnya ikut berubah saat data sumber berubah.",
   "sintaks": "=Sheet2!B5   atau   ='[Data.xlsx]Sheet1'!$B$5",
   "langkah": [
    "Buka kedua file. Gunakan View > View Side by Side agar keduanya tampil bersamaan.",
    "Di file tujuan ketik =, lalu pindah ke file sumber dan klik sel yang diambil.",
    "Tekan Enter. Excel menuliskan alamat lengkapnya.",
    "Bila file sumber dipindah, gunakan Data > Edit Links untuk memperbaiki hubungan."
   ],
   "tips": [
    "Jangan ganti nama atau pindahkan file sumber tanpa memperbarui link."
   ],
   "kuis": {
    "q": "Tanda apa yang memisahkan nama sheet dan alamat sel?",
    "opsi": [
     "!",
     "#",
     "$",
     "@"
    ],
    "jawab": 0,
    "bahas": "Contoh: Sheet2!B5."
   },
   "kata": "link file sheet eksternal referensi",
   "gambar": [
    "data-1-membuat-link-di-excel-300x276.jpg",
    "data-2-membuat-link-di-excel-174x300.jpg",
    "data-3-membuat-link-di-excel-300x164.jpg",
    "gambar-1-data-utama-link-dengan-rumus-300x273.jpg",
    "gambar-1-menampilkan-dua-file-bersamaan-300x203.jpg",
    "gambar-1-tampilan-office-button-advanced-300x246.jpg",
    "gambar-2-data-lain-link-dengan-rumus-300x158.jpg",
    "gambar-2-menampilkan-dua-file-bersamaan-300x167.jpg",
    "gambar-3-hasil-penerapan-link-dengan-rumus-300x98.jpg"
   ]
  },
  {
   "id": "pindah-sheet",
   "cat": "dasar",
   "judul": "Memindahkan dan menyalin sheet ke file lain",
   "ringkas": "Move or Copy memindahkan seluruh sheet beserta isinya ke workbook lain.",
   "langkah": [
    "Klik kanan tab sheet > Move or Copy.",
    "Pilih workbook tujuan di To book.",
    "Centang Create a copy bila sheet asli harus tetap ada.",
    "Tekan OK."
   ],
   "kuis": {
    "q": "Centang apa yang menjaga sheet asli tetap ada setelah dipindah?",
    "opsi": [
     "Create a copy",
     "Before sheet",
     "New book",
     "Protect"
    ],
    "jawab": 0,
    "bahas": "Create a copy membuat salinan."
   },
   "kata": "pindah sheet move copy workbook",
   "gambar": [
    "gambar-dokumen-1-memindah-sheet-ke-file-lain.jpg",
    "gambar-dokumen-2-memindah-sheet-ke-file-lain.jpg",
    "ikon-move-or-copy.jpg"
   ]
  },
  {
   "id": "kontrol-formulir",
   "cat": "dasar",
   "judul": "Combo Box dan Option Button",
   "ringkas": "Kontrol formulir memudahkan pengisi memilih nilai dari daftar atau opsi, lalu hasilnya dipakai oleh rumus.",
   "langkah": [
    "Aktifkan tab Developer (File > Options > Customize Ribbon).",
    "Developer > Insert > Combo Box (Form Controls), lalu gambar di lembar kerja.",
    "Klik kanan > Format Control: isi Input range (daftar pilihan) dan Cell link (sel penampung nomor pilihan).",
    "Pakai =INDEX(daftar; sel_link) untuk menampilkan pilihan yang dipilih.",
    "Option Button bekerja sama: setiap tombol mengisi Cell link dengan angka urutannya."
   ],
   "kuis": {
    "q": "Apa yang disimpan di Cell link pada Combo Box?",
    "opsi": [
     "Teks pilihan",
     "Nomor urut pilihan",
     "Warna sel",
     "Nama sheet"
    ],
    "jawab": 1,
    "bahas": "Cell link menyimpan nomor urut pilihan; ambil teksnya dengan INDEX."
   },
   "kata": "combo box option button form control developer",
   "gambar": [
    "option-botton-excel-1.jpg",
    "option-botton-excel-2-300x196.jpg",
    "option-botton-excel-3.jpg",
    "option-botton-excel-4.jpg",
    "option-botton-excel-5.jpg"
   ]
  },
  {
   "id": "hapus-ganda",
   "cat": "data",
   "judul": "Menghapus data ganda (duplikat)",
   "ringkas": "Remove Duplicates membuang baris yang isinya sama berdasarkan kolom yang kamu pilih.",
   "langkah": [
    "Blok tabel data.",
    "Data > Remove Duplicates.",
    "Centang kolom yang dijadikan penentu duplikat.",
    "Tekan OK. Excel melaporkan berapa baris yang dihapus."
   ],
   "tips": [
    "Simpan salinan sebelum menghapus. Tindakan ini mengubah data aslinya."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Kelas"
     ],
     [
      "Devi",
      "7A"
     ],
     [
      "Bagus",
      "7B"
     ],
     [
      "Devi",
      "7A"
     ],
     [
      "Maulana",
      "7C"
     ]
    ],
    "sel": "D2",
    "rumus": "=COUNTIF(A$2:A2,A2)",
    "coba": [
     [
      "=COUNTIF(A$2:A2,A2)",
      "Angka lebih dari 1 berarti duplikat"
     ],
     [
      "=IF(COUNTIF(A$2:A2,A2)>1,\"Ganda\",\"Unik\")",
      "Penanda"
     ]
    ],
    "catatan": "Salin rumus ke D3:D5 untuk melihat penanda duplikat."
   },
   "kuis": {
    "q": "Menu mana yang membuang baris duplikat?",
    "opsi": [
     "Data > Remove Duplicates",
     "Home > Clear",
     "Insert > Table",
     "View > Freeze"
    ],
    "jawab": 0,
    "bahas": "Remove Duplicates ada di tab Data."
   },
   "kata": "duplikat ganda remove duplicates",
   "gambar": [
    "menghapus-data-ganda-1-300x228.jpg",
    "menghapus-data-ganda-2-300x204.jpg"
   ]
  },
  {
   "id": "hapus-baris",
   "cat": "data",
   "judul": "Menghapus banyak baris sekaligus",
   "ringkas": "Hapus baris yang berselang-seling atau kosong dengan bantuan filter atau Go To Special, bukan satu per satu.",
   "langkah": [
    "Blok kolom yang mengandung sel kosong.",
    "Tekan F5 > Special > Blanks > OK.",
    "Klik kanan salah satu sel terpilih > Delete > Entire row.",
    "Atau gunakan filter pada kolom tertentu, pilih baris yang tampil, lalu hapus."
   ],
   "kuis": {
    "q": "Tombol F5 > Special > Blanks dipakai untuk apa?",
    "opsi": [
     "Memilih semua sel kosong",
     "Menghapus semua angka",
     "Mengurutkan data",
     "Membuat grafik"
    ],
    "jawab": 0,
    "bahas": "Fitur ini memilih seluruh sel kosong di area terpilih."
   },
   "kata": "hapus baris blanks go to special",
   "gambar": [
    "data-1-menghapus-baris-bersamaan-300x173.jpg",
    "data-2-menghapus-baris-bersamaan-300x124.jpg",
    "data-3-menghapus-baris-bersamaan-300x130.jpg"
   ]
  },
  {
   "id": "urutkan",
   "cat": "data",
   "judul": "Mengurutkan data (Sort)",
   "ringkas": "Urutkan data dari kecil ke besar, abjad, atau gabungan beberapa kolom.",
   "langkah": [
    "Klik satu sel di dalam tabel.",
    "Data > Sort.",
    "Pilih kolom di Sort by dan arah urutan (A to Z atau Z to A).",
    "Tambah tingkat dengan Add Level, misalnya urut kelas lalu nilai.",
    "Pastikan My data has headers tercentang bila ada baris judul."
   ],
   "kuis": {
    "q": "Agar baris judul tidak ikut terurut, kamu harus...",
    "opsi": [
     "Mencentang My data has headers",
     "Menghapus judul",
     "Menyembunyikan kolom",
     "Mengunci baris"
    ],
    "jawab": 0,
    "bahas": "Opsi tersebut membuat Excel memperlakukan baris pertama sebagai judul."
   },
   "kata": "sort urutkan ascending descending",
   "gambar": [
    "mengurutkan-data-1-300x200.jpg",
    "mengurutkan-data-2-300x184.jpg",
    "mengurutkan-data-3-300x137.jpg",
    "mengurutkan-data-4-300x137.jpg",
    "mengurutkan-data-5-300x202.jpg"
   ]
  },
  {
   "id": "filter",
   "cat": "data",
   "judul": "Filter: menampilkan data tertentu",
   "ringkas": "AutoFilter menyembunyikan baris yang tidak cocok dengan syarat, tanpa menghapusnya.",
   "langkah": [
    "Klik sel di dalam tabel.",
    "Data > Filter (atau Ctrl+Shift+L).",
    "Klik panah di judul kolom, lalu centang nilai yang ingin ditampilkan.",
    "Gunakan Text Filters atau Number Filters untuk syarat seperti 'lebih besar dari'.",
    "Klik Filter lagi untuk mematikannya."
   ],
   "kuis": {
    "q": "Apa yang terjadi pada baris yang tidak lolos filter?",
    "opsi": [
     "Dihapus permanen",
     "Disembunyikan",
     "Diubah warnanya",
     "Dipindah ke sheet baru"
    ],
    "jawab": 1,
    "bahas": "Baris hanya disembunyikan dan tampil lagi saat filter dibersihkan."
   },
   "kata": "filter autofilter saring",
   "gambar": [
    "data-1-fasilitas-filter-pada-excel-300x173.jpg",
    "data-2-fasilitas-filter-pada-excel-300x259.jpg",
    "data-3-fasilitas-filter-pada-excel-300x126.jpg"
   ]
  },
  {
   "id": "validasi",
   "cat": "data",
   "judul": "Data Validation: membatasi isian",
   "ringkas": "Validation mencegah salah ketik dengan membatasi isi sel pada angka tertentu, tanggal, atau daftar pilihan.",
   "langkah": [
    "Blok sel yang akan dibatasi.",
    "Data > Data Validation.",
    "Di Allow pilih Whole number, Decimal, List, Date, dan seterusnya.",
    "Isi batas atau sumber daftar (misalnya A1:A5).",
    "Tab Input Message dan Error Alert dipakai untuk pesan petunjuk dan peringatan."
   ],
   "tips": [
    "Pilihan List menampilkan panah drop-down di sel."
   ],
   "kuis": {
    "q": "Pilihan Allow mana yang membuat drop-down di sel?",
    "opsi": [
     "Whole number",
     "List",
     "Date",
     "Text length"
    ],
    "jawab": 1,
    "bahas": "List menghasilkan daftar pilihan."
   },
   "kata": "validation validasi dropdown daftar",
   "gambar": [
    "image001.jpg",
    "image002.jpg",
    "image003.jpg",
    "image004.jpg",
    "image005.jpg",
    "image006.jpg",
    "image007.jpg",
    "image008.jpg",
    "validation-data-1.jpg",
    "validation-data-2.jpg",
    "validation-data-3.jpg",
    "validation-data-4.jpg",
    "validation-data-5.jpg",
    "validation-data-6.jpg",
    "validation-data-7-a.jpg",
    "validation-data-7-b.jpg",
    "validation-data-8.jpg"
   ]
  },
  {
   "id": "proteksi",
   "cat": "data",
   "judul": "Proteksi sheet dan workbook",
   "ringkas": "Proteksi mengunci rumus agar tidak terhapus tidak sengaja, dan dapat dilengkapi kata sandi.",
   "langkah": [
    "Blok sel yang boleh diubah, buka Format Cells > Protection, hilangkan centang Locked.",
    "Review > Protect Sheet.",
    "Isi kata sandi (opsional) dan pilih tindakan yang masih diizinkan.",
    "Untuk melindungi struktur sheet, gunakan Review > Protect Workbook."
   ],
   "tips": [
    "Kata sandi yang lupa sulit dipulihkan. Catat di tempat aman."
   ],
   "kuis": {
    "q": "Sel yang tetap bisa diubah setelah Protect Sheet adalah sel yang...",
    "opsi": [
     "Berwarna kuning",
     "Tidak dicentang Locked",
     "Berisi angka",
     "Di kolom A"
    ],
    "jawab": 1,
    "bahas": "Sel dengan Locked dimatikan tetap bisa diedit."
   },
   "kata": "proteksi protect password kunci",
   "gambar": [
    "protect-workbook-2.jpg",
    "protect-workbook-3.jpg",
    "protect-workbook-4.jpg",
    "protect-workbook.jpg",
    "proteksi-sheet-1-300x141.jpg",
    "proteksi-sheet-2.jpg",
    "proteksi-sheet-3-258x300.jpg",
    "proteksi-sheet-4-300x182.jpg",
    "proteksi-sheet-5-300x50.jpg",
    "proteksi-sheet-6-300x202.jpg",
    "proteksi-sheet-7.jpg"
   ]
  },
  {
   "id": "cond-format",
   "cat": "data",
   "judul": "Conditional Formatting: warna otomatis",
   "ringkas": "Sel berwarna sendiri ketika memenuhi syarat, misalnya nilai di bawah 70 menjadi merah.",
   "langkah": [
    "Blok sel nilai.",
    "Home > Conditional Formatting > Highlight Cells Rules > Less Than.",
    "Isi 70 dan pilih warna.",
    "Untuk syarat berbasis rumus, pilih New Rule > Use a formula."
   ],
   "tips": [
    "Hapus aturan lewat Conditional Formatting > Clear Rules."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Nilai",
      "Status"
     ],
     [
      "Antonio",
      80,
      ""
     ],
     [
      "Romansyah",
      65,
      ""
     ],
     [
      "Devi",
      72,
      ""
     ],
     [
      "Bagus",
      55,
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=IF(B2<70,\"Perlu remedial\",\"Tuntas\")",
    "coba": [
     [
      "=IF(B2<70,\"Perlu remedial\",\"Tuntas\")",
      "Syarat yang sama dengan aturan warna"
     ]
    ],
    "catatan": "Aturan Conditional Formatting memakai syarat logika yang sama dengan IF."
   },
   "kuis": {
    "q": "Aturan mana yang mewarnai sel bernilai kurang dari 70?",
    "opsi": [
     "Greater Than 70",
     "Less Than 70",
     "Equal To 70",
     "Between 70 and 100"
    ],
    "jawab": 1,
    "bahas": "Less Than berarti lebih kecil dari."
   },
   "kata": "conditional formatting warna otomatis",
   "gambar": [
    "conditional-formatting-1-300x88.jpg",
    "conditional-formatting-2.jpg",
    "conditional-formatting-3-300x290.jpg",
    "conditional-formatting-4-300x290.jpg",
    "conditional-formatting-5-300x88.jpg",
    "image001-300x180.jpg",
    "image002-243x300.jpg",
    "image003-300x242.jpg",
    "image004-224x300.jpg",
    "image005-300x178.jpg"
   ]
  },
  {
   "id": "consolidate",
   "cat": "data",
   "judul": "Consolidate: menggabungkan beberapa tabel",
   "ringkas": "Consolidate menjumlahkan (atau menghitung rata-rata, dan sebagainya) data dari beberapa range atau sheet menjadi satu ringkasan.",
   "langkah": [
    "Siapkan sel tujuan.",
    "Data > Consolidate.",
    "Pilih fungsi (Sum, Average, ...) di Function.",
    "Klik Reference, blok range pertama, lalu Add. Ulangi untuk range lain.",
    "Centang Top row dan Left column bila ingin mencocokkan berdasarkan label."
   ],
   "kuis": {
    "q": "Centang Left column pada Consolidate berguna untuk...",
    "opsi": [
     "Mencocokkan data lewat label baris",
     "Mengunci kolom",
     "Menyembunyikan kolom",
     "Mengurutkan kolom"
    ],
    "jawab": 0,
    "bahas": "Label di kolom kiri dipakai untuk mencocokkan baris dari tiap sumber."
   },
   "kata": "consolidate gabung konsolidasi",
   "gambar": [
    "fitur-consolidate-1-287x300.jpg",
    "fitur-consolidate-2.jpg",
    "fitur-consolidate-3-300x207.jpg",
    "fitur-consolidate-4-300x151.jpg"
   ]
  },
  {
   "id": "pivot",
   "cat": "data",
   "judul": "PivotTable: meringkas data besar",
   "ringkas": "PivotTable meringkas ribuan baris menjadi tabel ringkasan hanya dengan menyeret kolom.",
   "langkah": [
    "Klik sel di dalam data (data harus punya judul kolom).",
    "Insert > PivotTable > OK.",
    "Seret kolom kategori ke Rows, kolom angka ke Values.",
    "Klik kanan angka di Values > Value Field Settings untuk mengganti Sum menjadi Count atau Average.",
    "Setelah data berubah, klik kanan > Refresh."
   ],
   "kuis": {
    "q": "Setelah data sumber berubah, apa yang harus dilakukan pada PivotTable?",
    "opsi": [
     "Refresh",
     "Hapus",
     "Urutkan",
     "Protect"
    ],
    "jawab": 0,
    "bahas": "Pivot tidak otomatis ikut berubah; Refresh memperbaruinya."
   },
   "kata": "pivot table ringkasan",
   "gambar": [
    "funsi-pivottable-excel-1-300x221.jpg",
    "funsi-pivottable-excel-2-300x287.jpg",
    "funsi-pivottable-excel-3-300x218.jpg",
    "funsi-pivottable-excel-4-147x300.jpg",
    "funsi-pivottable-excel-5-300x223.jpg"
   ]
  },
  {
   "id": "subtotal",
   "cat": "data",
   "judul": "Subtotal: ringkasan per kelompok",
   "ringkas": "Fungsi SUBTOTAL dan fitur Subtotal menyisipkan total per kelompok data yang sudah terurut.",
   "sintaks": "=SUBTOTAL(nomor_fungsi; rentang)",
   "argumen": [
    [
     "nomor_fungsi",
     "1=AVERAGE, 2=COUNT, 4=MAX, 5=MIN, 9=SUM"
    ],
    [
     "rentang",
     "Sel yang dihitung"
    ]
   ],
   "langkah": [
    "Urutkan data berdasarkan kolom pengelompokan.",
    "Data > Subtotal.",
    "Pilih kolom At each change in, fungsi, dan kolom yang dihitung.",
    "Tombol angka 1, 2, 3 di kiri lembar kerja meringkas atau memperluas tampilan."
   ],
   "kuis": {
    "q": "Nomor fungsi mana pada SUBTOTAL yang menjumlah?",
    "opsi": [
     "1",
     "9",
     "4",
     "2"
    ],
    "jawab": 1,
    "bahas": "9 untuk SUM."
   },
   "kata": "subtotal total kelompok",
   "gambar": [
    "penggunaan-fungsi-subtotal-excel-1-300x261.jpg",
    "penggunaan-fungsi-subtotal-excel-2-300x222.jpg",
    "penggunaan-fungsi-subtotal-excel-3-240x300.jpg",
    "penggunaan-fungsi-subtotal-excel-4-300x201.jpg",
    "penggunaan-fungsi-subtotal-excel-5-300x135.jpg",
    "penggunaan-fungsi-subtotal-excel-6-300x202.jpg"
   ]
  },
  {
   "id": "what-if",
   "cat": "data",
   "judul": "Data Table (What-If Analysis)",
   "ringkas": "Data Table menghitung satu rumus berulang kali dengan nilai masukan berbeda, misalnya cicilan pada berbagai suku bunga.",
   "langkah": [
    "Susun rumus di sudut kiri atas tabel, nilai masukan di kolom (atau baris) di sampingnya.",
    "Blok seluruh tabel.",
    "Data > What-If Analysis > Data Table.",
    "Isi Column input cell dengan sel masukan yang dipakai rumus (atau Row input cell untuk deret baris).",
    "Tekan OK."
   ],
   "kuis": {
    "q": "Untuk nilai masukan yang berderet ke bawah, kotak mana yang diisi?",
    "opsi": [
     "Row input cell",
     "Column input cell",
     "Keduanya",
     "Tidak ada"
    ],
    "jawab": 1,
    "bahas": "Deret ke bawah (kolom) memakai Column input cell."
   },
   "kata": "data table what-if analysis",
   "gambar": [
    "data-table.jpg"
   ]
  },
  {
   "id": "diagram",
   "cat": "data",
   "judul": "Membuat diagram (grafik)",
   "ringkas": "Grafik mengubah angka menjadi gambar yang lebih mudah dibandingkan.",
   "langkah": [
    "Blok data beserta judul kolom dan baris.",
    "Insert > pilih jenis grafik: Column, Line, Pie, dan sebagainya.",
    "Klik grafik, lalu gunakan Chart Design untuk mengganti gaya dan warna.",
    "Tambahkan judul dan label data lewat tombol + di samping grafik."
   ],
   "tips": [
    "Pie cocok untuk bagian dari keseluruhan; Line cocok untuk perubahan dari waktu ke waktu."
   ],
   "kuis": {
    "q": "Jenis grafik yang cocok untuk tren dari waktu ke waktu adalah...",
    "opsi": [
     "Pie",
     "Line",
     "Radar",
     "Donut"
    ],
    "jawab": 1,
    "bahas": "Line menunjukkan perubahan terhadap waktu."
   },
   "kata": "diagram grafik chart",
   "gambar": [
    "diagram-dg-excel-1-300x161.jpg",
    "diagram-dg-excel-4-300x91.jpg",
    "diagram-dg-excel-5-300x90.jpg"
   ]
  },
  {
   "id": "transpose",
   "cat": "data",
   "judul": "Mengubah baris menjadi kolom (Transpose)",
   "ringkas": "Transpose menukar posisi baris dan kolom tanpa mengetik ulang.",
   "langkah": [
    "Blok dan salin (Ctrl+C) data asal.",
    "Klik sel tujuan.",
    "Home > Paste > Paste Special > centang Transpose > OK."
   ],
   "kuis": {
    "q": "Opsi Paste Special untuk menukar baris dan kolom adalah...",
    "opsi": [
     "Transpose",
     "Skip blanks",
     "Values",
     "Formats"
    ],
    "jawab": 0,
    "bahas": "Transpose."
   },
   "kata": "transpose baris kolom",
   "gambar": [
    "data-baris-menjadi-data-kolom-excel-1-300x99.jpg",
    "data-baris-menjadi-data-kolom-excel-2-300x168.jpg",
    "data-baris-menjadi-data-kolom-excel-3-300x191.jpg",
    "data-baris-menjadi-data-kolom-excel-4-300x267.jpg",
    "data-baris-menjadi-data-kolom-excel-5.jpg"
   ]
  },
  {
   "id": "pecah-teks",
   "cat": "data",
   "judul": "Memecah teks ke beberapa kolom",
   "ringkas": "Text to Columns memotong teks panjang menjadi kolom terpisah berdasarkan pemisah, misalnya koma atau spasi.",
   "langkah": [
    "Blok kolom yang berisi teks gabungan.",
    "Data > Text to Columns.",
    "Pilih Delimited bila ada pemisah, atau Fixed width bila lebar tetap.",
    "Centang pemisah (Comma, Space, ...), lalu Next dan Finish.",
    "Pastikan kolom di sebelah kanan kosong agar tidak tertimpa."
   ],
   "demo": {
    "data": [
     [
      "Nama lengkap",
      "Depan",
      "Belakang"
     ],
     [
      "Budi Santoso",
      "",
      ""
     ],
     [
      "Siti Aminah",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=LEFT(A2,FIND(\" \",A2)-1)",
    "coba": [
     [
      "=LEFT(A2,FIND(\" \",A2)-1)",
      "Kata pertama"
     ],
     [
      "=MID(A2,FIND(\" \",A2)+1,50)",
      "Sisanya"
     ]
    ],
    "catatan": "Rumus ini adalah alternatif Text to Columns yang tetap hidup bila data berubah."
   },
   "kuis": {
    "q": "Pilihan mana untuk teks yang dipisah koma?",
    "opsi": [
     "Fixed width",
     "Delimited",
     "Wrap Text",
     "Merge"
    ],
    "jawab": 1,
    "bahas": "Delimited memakai pemisah seperti koma."
   },
   "kata": "text to columns pecah teks delimiter",
   "gambar": [
    "mecah-teks-1-300x161.jpg",
    "mecah-teks-2-300x191.jpg",
    "mecah-teks-3-300x229.jpg",
    "mecah-teks-4-300x229.jpg",
    "mecah-teks-5-300x229.jpg",
    "mecah-teks-6-300x131.jpg"
   ]
  },
  {
   "id": "npwp",
   "cat": "data",
   "judul": "Mengubah format NPWP",
   "ringkas": "Nomor NPWP memiliki pola titik dan strip. Format ini bisa dibuat dengan format kustom atau rumus teks.",
   "langkah": [
    "Simpan nomor sebagai teks agar nol di depan tidak hilang.",
    "Format Cells > Custom, tulis pola 00.000.000.0-000.000 untuk angka 15 digit.",
    "Alternatif: susun dengan LEFT, MID, dan RIGHT lalu sambung memakai &."
   ],
   "demo": {
    "data": [
     [
      "NPWP 15 digit"
     ],
     [
      "123456789012345"
     ]
    ],
    "sel": "B2",
    "rumus": "=LEFT(A2,2)&\".\"&MID(A2,3,3)&\".\"&MID(A2,6,3)&\".\"&MID(A2,9,1)&\"-\"&MID(A2,10,3)&\".\"&RIGHT(A2,3)",
    "catatan": "Pola: 2-3-3-1-3-3 digit."
   },
   "kuis": {
    "q": "Fungsi apa yang mengambil beberapa karakter dari tengah teks?",
    "opsi": [
     "LEFT",
     "MID",
     "RIGHT",
     "LEN"
    ],
    "jawab": 1,
    "bahas": "MID."
   },
   "kata": "npwp format nomor",
   "gambar": [
    "merubah-format-npwp-1.jpg"
   ]
  },
  {
   "id": "currency",
   "cat": "data",
   "judul": "Format Currency dan Accounting",
   "ringkas": "Currency menempelkan simbol mata uang dekat angka; Accounting meluruskan simbol di tepi kiri sel.",
   "langkah": [
    "Blok sel angka.",
    "Home > Number Format > Currency atau Accounting.",
    "Ubah simbol (misalnya Rp) lewat Format Cells > Number > Currency > Symbol.",
    "Atur jumlah desimal sesuai kebutuhan."
   ],
   "kuis": {
    "q": "Perbedaan utama Accounting dibanding Currency?",
    "opsi": [
     "Simbol rata di tepi kiri sel",
     "Tidak bisa dijumlah",
     "Selalu merah",
     "Memakai huruf miring"
    ],
    "jawab": 0,
    "bahas": "Accounting meluruskan simbol dan desimal antar baris."
   },
   "kata": "currency accounting mata uang rupiah",
   "gambar": [
    "currency-dan-accounting.jpg"
   ]
  },
  {
   "id": "nomor-acak",
   "cat": "data",
   "judul": "Membuat nomor acak",
   "ringkas": "RAND dan RANDBETWEEN menghasilkan angka acak yang berubah setiap lembar kerja dihitung ulang.",
   "sintaks": "=RANDBETWEEN(bawah; atas)",
   "argumen": [
    [
     "bawah",
     "Bilangan bulat terkecil"
    ],
    [
     "atas",
     "Bilangan bulat terbesar"
    ]
   ],
   "langkah": [
    "Ketik =RANDBETWEEN(1;100) lalu Enter.",
    "Tekan F9 untuk mengacak ulang.",
    "Untuk membekukan hasil, salin lalu Paste Special > Values."
   ],
   "demo": {
    "data": [
     [
      "Undian"
     ],
     [
      ""
     ]
    ],
    "sel": "A2",
    "rumus": "=RANDBETWEEN(1,100)",
    "coba": [
     [
      "=RANDBETWEEN(1,100)",
      "1 sampai 100"
     ],
     [
      "=RAND()",
      "Desimal 0 sampai 1"
     ]
    ],
    "catatan": "Ketik ulang rumus untuk memperoleh angka baru."
   },
   "kuis": {
    "q": "Apa yang menjaga angka acak tetap?",
    "opsi": [
     "Tekan F9",
     "Paste Special > Values",
     "Mengurutkan",
     "Menyembunyikan baris"
    ],
    "jawab": 1,
    "bahas": "Menempel sebagai Values menghapus rumus acaknya."
   },
   "kata": "acak random randbetween",
   "gambar": [
    "hasil-perumusan-279x300.jpg",
    "membuat-nomor-acak-1-300x232.jpg",
    "membuat-nomor-acak-2-300x266.jpg",
    "membuat-nomor-acak-3-300x137.jpg",
    "membuat-nomor-acak-4-300x233.jpg",
    "membuat-nomor-acak-5-300x231.jpg",
    "tabel-1-data-300x250.jpg"
   ]
  },
  {
   "id": "sum",
   "cat": "rumus",
   "judul": "SUM: menjumlahkan",
   "ringkas": "SUM menjumlahkan semua angka dalam satu atau beberapa rentang. Ini fungsi yang paling sering dipakai.",
   "sintaks": "=SUM(angka1; [angka2]; ...)",
   "argumen": [
    [
     "angka1",
     "Sel, rentang, atau angka pertama"
    ],
    [
     "angka2, ...",
     "Opsional, tambahan sel atau rentang"
    ]
   ],
   "langkah": [
    "Klik sel di bawah deretan angka.",
    "Ketik =SUM( lalu seret sel yang dijumlahkan.",
    "Tutup kurung dan tekan Enter. Pintasan: Alt+= langsung membuat SUM.",
    "Seret rumus ke samping atau ke bawah untuk total kolom atau baris lain."
   ],
   "tips": [
    "Teks dan sel kosong dalam rentang diabaikan.",
    "Total ke samping dan ke bawah memakai pola yang sama; alamat sel menyesuaikan saat disalin."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Matematika",
      "IPA",
      "B.Indo"
     ],
     [
      "Antonio",
      80,
      75,
      85
     ],
     [
      "Romansyah",
      70,
      85,
      80
     ],
     [
      "Devi",
      75,
      70,
      90
     ],
     [
      "Bagus",
      85,
      77,
      80
     ],
     [
      "Maulana",
      90,
      88,
      75
     ]
    ],
    "sel": "E2",
    "rumus": "=SUM(B2:D2)",
    "coba": [
     [
      "=SUM(B2:D2)",
      "Total nilai Antonio"
     ],
     [
      "=SUM(B2:B6)",
      "Total kolom Matematika"
     ],
     [
      "=SUM(B2:B6,D2:D6)",
      "Dua rentang sekaligus"
     ]
    ],
    "catatan": "Salin rumus ke E3:E6 dengan mengetik ulang untuk baris lain."
   },
   "kuis": {
    "q": "Pintasan keyboard untuk memasukkan AutoSum adalah...",
    "opsi": [
     "Alt+=",
     "Ctrl+S",
     "Shift+F3",
     "Ctrl+="
    ],
    "jawab": 0,
    "bahas": "Alt+= menulis rumus SUM otomatis."
   },
   "kata": "sum jumlah total penjumlahan",
   "gambar": [
    "fungsi-sum-pada-excel.jpg",
    "gambar-1-1.jpg",
    "gambar-1-2-300x35.jpg",
    "gambar-2-1.jpg",
    "gambar-2-2-300x127.jpg",
    "gambar-3-2-300x127.jpg",
    "gambar-4-2-300x127.jpg",
    "gambar-4-3rumus-kebawah-300x120.jpg",
    "gambar-5-2hasil-rumus-sum-300x116.jpg",
    "gambar-5-3hassil-rumus-kebawah-300x121.jpg"
   ]
  },
  {
   "id": "max",
   "cat": "rumus",
   "judul": "MAX: nilai terbesar",
   "ringkas": "MAX mengambil angka terbesar dari sekumpulan sel.",
   "sintaks": "=MAX(angka1; [angka2]; ...)",
   "argumen": [
    [
     "angka1",
     "Sel atau rentang pertama"
    ],
    [
     "angka2, ...",
     "Opsional"
    ]
   ],
   "langkah": [
    "Siapkan deretan angka.",
    "Klik sel hasil, ketik =MAX( lalu seret rentang.",
    "Tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Matematika",
      "IPA",
      "B.Indo"
     ],
     [
      "Antonio",
      80,
      75,
      85
     ],
     [
      "Romansyah",
      70,
      85,
      80
     ],
     [
      "Devi",
      75,
      70,
      90
     ],
     [
      "Bagus",
      85,
      77,
      80
     ],
     [
      "Maulana",
      90,
      88,
      75
     ]
    ],
    "sel": "F2",
    "rumus": "=MAX(B2:B6)",
    "coba": [
     [
      "=MAX(B2:B6)",
      "Matematika tertinggi"
     ],
     [
      "=MAX(B2:D6)",
      "Nilai tertinggi seluruh tabel"
     ],
     [
      "=INDEX(A2:A6,MATCH(MAX(B2:B6),B2:B6,0))",
      "Nama pemilik nilai tertinggi"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =MAX(4;9;2)?",
    "opsi": [
     "2",
     "4",
     "9",
     "15"
    ],
    "jawab": 2,
    "bahas": "MAX mengambil angka terbesar."
   },
   "kata": "max maksimum terbesar tertinggi",
   "gambar": [
    "1-4-contoh-data-rumus-max-300x158.jpg",
    "2-4-mengoperasikan-rumus-max-300x156.jpg",
    "3-4-penulisan-rumus-max-2-300x153.jpg",
    "4-4-hasil-aplikasi-rumus-max-300x156.jpg"
   ]
  },
  {
   "id": "min",
   "cat": "rumus",
   "judul": "MIN: nilai terkecil",
   "ringkas": "MIN mengambil angka terkecil.",
   "sintaks": "=MIN(angka1; [angka2]; ...)",
   "argumen": [
    [
     "angka1",
     "Sel atau rentang pertama"
    ],
    [
     "angka2, ...",
     "Opsional"
    ]
   ],
   "langkah": [
    "Klik sel hasil.",
    "Ketik =MIN( lalu seret rentang.",
    "Tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Matematika",
      "IPA",
      "B.Indo"
     ],
     [
      "Antonio",
      80,
      75,
      85
     ],
     [
      "Romansyah",
      70,
      85,
      80
     ],
     [
      "Devi",
      75,
      70,
      90
     ],
     [
      "Bagus",
      85,
      77,
      80
     ],
     [
      "Maulana",
      90,
      88,
      75
     ]
    ],
    "sel": "F2",
    "rumus": "=MIN(B2:B6)",
    "coba": [
     [
      "=MIN(B2:B6)",
      "Matematika terendah"
     ],
     [
      "=MIN(B2:D6)",
      "Terendah di seluruh tabel"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =MIN(4;9;2)?",
    "opsi": [
     "2",
     "4",
     "9",
     "0"
    ],
    "jawab": 0,
    "bahas": "MIN mengambil angka terkecil."
   },
   "kata": "min minimum terkecil terendah",
   "gambar": [
    "5-4-hasil-mengoperasikan-rumus-min-300x124.jpg",
    "rumus-min-excel-contoh-1.jpg",
    "rumus-min-excel-contoh-2.jpg",
    "rumus-min-excel-data.jpg"
   ]
  },
  {
   "id": "average",
   "cat": "rumus",
   "judul": "AVERAGE: rata-rata",
   "ringkas": "AVERAGE menjumlahkan lalu membagi dengan banyaknya angka. Sel kosong dan teks diabaikan.",
   "sintaks": "=AVERAGE(angka1; [angka2]; ...)",
   "argumen": [
    [
     "angka1",
     "Sel atau rentang pertama"
    ],
    [
     "angka2, ...",
     "Opsional"
    ]
   ],
   "langkah": [
    "Klik sel hasil.",
    "Ketik =AVERAGE( lalu seret nilai.",
    "Tekan Enter. Atur desimal bila perlu."
   ],
   "tips": [
    "Sel berisi 0 ikut dihitung, sel kosong tidak. Hati-hati dengan data yang belum diisi."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Matematika",
      "IPA",
      "B.Indo"
     ],
     [
      "Antonio",
      80,
      75,
      85
     ],
     [
      "Romansyah",
      70,
      85,
      80
     ],
     [
      "Devi",
      75,
      70,
      90
     ],
     [
      "Bagus",
      85,
      77,
      80
     ],
     [
      "Maulana",
      90,
      88,
      75
     ]
    ],
    "sel": "E2",
    "rumus": "=AVERAGE(B2:D2)",
    "coba": [
     [
      "=AVERAGE(B2:D2)",
      "Rata-rata Antonio"
     ],
     [
      "=ROUND(AVERAGE(B2:D2),1)",
      "Dibulatkan 1 desimal"
     ],
     [
      "=AVERAGE(B2:B6)",
      "Rata-rata kolom Matematika"
     ]
    ]
   },
   "kuis": {
    "q": "Rata-rata dari 70, 80, 90 adalah...",
    "opsi": [
     "70",
     "80",
     "90",
     "240"
    ],
    "jawab": 1,
    "bahas": "240 dibagi 3 = 80."
   },
   "kata": "average rata-rata mean",
   "gambar": [
    "gambar-1-3average-300x136.jpg",
    "gambar-2-3average-300x125.jpg",
    "gambar-3-3average1-300x125.jpg",
    "gambar-6-3-hasil-rumus-average-300x124.jpg"
   ]
  },
  {
   "id": "count",
   "cat": "rumus",
   "judul": "COUNT, COUNTA, dan COUNTBLANK",
   "ringkas": "COUNT menghitung sel berisi angka, COUNTA menghitung sel yang tidak kosong, dan COUNTBLANK menghitung sel kosong.",
   "sintaks": "=COUNT(rentang)   =COUNTA(rentang)   =COUNTBLANK(rentang)",
   "argumen": [
    [
     "rentang",
     "Sel yang dihitung"
    ]
   ],
   "langkah": [
    "Pilih sel hasil.",
    "Ketik fungsi lalu seret rentang.",
    "Bandingkan hasil ketiga fungsi untuk rentang yang sama."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Nilai"
     ],
     [
      "Antonio",
      80
     ],
     [
      "Romansyah",
      ""
     ],
     [
      "Devi",
      "hadir"
     ],
     [
      "Bagus",
      85
     ]
    ],
    "sel": "D2",
    "rumus": "=COUNT(B2:B5)",
    "coba": [
     [
      "=COUNT(B2:B5)",
      "Hanya angka"
     ],
     [
      "=COUNTA(B2:B5)",
      "Semua yang terisi"
     ],
     [
      "=COUNTBLANK(B2:B5)",
      "Sel kosong"
     ]
    ]
   },
   "kuis": {
    "q": "Fungsi mana yang menghitung sel kosong?",
    "opsi": [
     "COUNT",
     "COUNTA",
     "COUNTBLANK",
     "COUNTIF"
    ],
    "jawab": 2,
    "bahas": "COUNTBLANK."
   },
   "kata": "count counta countblank hitung jumlah data",
   "gambar": [
    "1-5-hasil-rumus-coun-300x180.jpg",
    "rumus-countblank-excel-21-300x192.jpg",
    "rumus-countblank-excel-300x212.jpg"
   ]
  },
  {
   "id": "countif",
   "cat": "rumus",
   "judul": "COUNTIF: menghitung sel yang memenuhi syarat",
   "ringkas": "COUNTIF menghitung berapa sel yang cocok dengan satu syarat, misalnya jumlah nilai di atas 75.",
   "sintaks": "=COUNTIF(rentang; kriteria)",
   "argumen": [
    [
     "rentang",
     "Sel yang diperiksa"
    ],
    [
     "kriteria",
     "Angka, teks, atau syarat seperti \">75\""
    ]
   ],
   "langkah": [
    "Ketik =COUNTIF( lalu seret rentang.",
    "Beri tanda ; atau , lalu tulis kriteria dalam tanda kutip, misalnya \">75\".",
    "Tekan Enter."
   ],
   "tips": [
    "Operator perbandingan harus berada di dalam tanda kutip: \">=70\".",
    "Gunakan * sebagai pengganti banyak karakter, misalnya \"A*\"."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Matematika",
      "IPA",
      "B.Indo"
     ],
     [
      "Antonio",
      80,
      75,
      85
     ],
     [
      "Romansyah",
      70,
      85,
      80
     ],
     [
      "Devi",
      75,
      70,
      90
     ],
     [
      "Bagus",
      85,
      77,
      80
     ],
     [
      "Maulana",
      90,
      88,
      75
     ]
    ],
    "sel": "F2",
    "rumus": "=COUNTIF(B2:B6,\">=80\")",
    "coba": [
     [
      "=COUNTIF(B2:B6,\">=80\")",
      "Nilai Matematika 80 ke atas"
     ],
     [
      "=COUNTIF(A2:A6,\"B*\")",
      "Nama berawalan B"
     ],
     [
      "=COUNTIF(C2:C6,\"<75\")",
      "IPA di bawah 75"
     ]
    ]
   },
   "kuis": {
    "q": "Rumus mana yang menghitung sel bernilai di atas 75?",
    "opsi": [
     "=COUNTIF(A1:A5;>75)",
     "=COUNTIF(A1:A5;\">75\")",
     "=COUNT(A1:A5>75)",
     "=IF(A1:A5>75)"
    ],
    "jawab": 1,
    "bahas": "Kriteria berisi operator harus diapit tanda kutip."
   },
   "kata": "countif hitung kondisi syarat",
   "gambar": [
    "data-rumus-countif-300x240.jpg",
    "function-arguments-countif-300x150.jpg"
   ]
  },
  {
   "id": "sumif",
   "cat": "rumus",
   "judul": "SUMIF: menjumlahkan dengan syarat",
   "ringkas": "SUMIF menjumlahkan angka hanya dari baris yang memenuhi syarat.",
   "sintaks": "=SUMIF(rentang; kriteria; [rentang_jumlah])",
   "argumen": [
    [
     "rentang",
     "Sel yang diperiksa terhadap kriteria"
    ],
    [
     "kriteria",
     "Syarat"
    ],
    [
     "rentang_jumlah",
     "Sel yang dijumlahkan; jika dikosongkan, rentang itu sendiri"
    ]
   ],
   "langkah": [
    "Ketik =SUMIF( lalu blok kolom yang diperiksa.",
    "Tulis kriteria dalam tanda kutip.",
    "Blok kolom yang dijumlahkan, tutup kurung, Enter."
   ],
   "demo": {
    "data": [
     [
      "Kategori",
      "Penjualan"
     ],
     [
      "Alat tulis",
      50000
     ],
     [
      "Buku",
      120000
     ],
     [
      "Alat tulis",
      30000
     ],
     [
      "Buku",
      80000
     ]
    ],
    "sel": "D2",
    "rumus": "=SUMIF(A2:A5,\"Buku\",B2:B5)",
    "coba": [
     [
      "=SUMIF(A2:A5,\"Buku\",B2:B5)",
      "Total penjualan buku"
     ],
     [
      "=SUMIF(B2:B5,\">60000\")",
      "Penjualan di atas 60.000"
     ],
     [
      "=SUMIFS(B2:B5,A2:A5,\"Alat tulis\",B2:B5,\">40000\")",
      "Dua syarat sekaligus"
     ]
    ]
   },
   "kuis": {
    "q": "Argumen ketiga SUMIF berisi...",
    "opsi": [
     "Kriteria",
     "Rentang yang dijumlahkan",
     "Tanggal",
     "Nama sheet"
    ],
    "jawab": 1,
    "bahas": "Rentang yang akan dijumlahkan."
   },
   "kata": "sumif jumlah kondisi syarat",
   "gambar": [
    "data-sumif-300x266.jpg",
    "function-arguments-sumif-300x174.jpg"
   ]
  },
  {
   "id": "averageif",
   "cat": "rumus",
   "judul": "AVERAGEIF: rata-rata dengan syarat",
   "ringkas": "AVERAGEIF menghitung rata-rata hanya dari sel yang memenuhi syarat.",
   "sintaks": "=AVERAGEIF(rentang; kriteria; [rentang_rata2])",
   "argumen": [
    [
     "rentang",
     "Sel yang diperiksa"
    ],
    [
     "kriteria",
     "Syarat"
    ],
    [
     "rentang_rata2",
     "Sel yang dirata-ratakan"
    ]
   ],
   "langkah": [
    "Ketik =AVERAGEIF( lalu pilih rentang yang diperiksa.",
    "Tulis kriteria dalam tanda kutip.",
    "Pilih rentang yang dirata-ratakan lalu tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Kelas",
      "Nilai"
     ],
     [
      "7A",
      80
     ],
     [
      "7B",
      70
     ],
     [
      "7A",
      90
     ],
     [
      "7B",
      60
     ]
    ],
    "sel": "D2",
    "rumus": "=AVERAGEIF(A2:A5,\"7A\",B2:B5)",
    "coba": [
     [
      "=AVERAGEIF(A2:A5,\"7A\",B2:B5)",
      "Rata-rata kelas 7A"
     ],
     [
      "=AVERAGEIF(B2:B5,\">=70\")",
      "Rata-rata nilai 70 ke atas"
     ]
    ]
   },
   "kuis": {
    "q": "Kapan AVERAGEIF menghasilkan #DIV/0!?",
    "opsi": [
     "Bila tidak ada sel yang cocok",
     "Bila ada teks",
     "Bila rentang terlalu besar",
     "Tidak pernah"
    ],
    "jawab": 0,
    "bahas": "Tidak ada sel yang memenuhi syarat berarti tidak ada yang dirata-ratakan."
   },
   "kata": "averageif rata-rata kondisi",
   "gambar": [
    "averageif-1-300x295.jpg",
    "averageif-2-300x296.jpg",
    "averageif-3-300x300.jpg",
    "averageif-4-300x296.jpg"
   ]
  },
  {
   "id": "rank",
   "cat": "rumus",
   "judul": "RANK: peringkat",
   "ringkas": "RANK menentukan urutan peringkat sebuah angka di antara angka lain.",
   "sintaks": "=RANK(angka; rentang; [urutan])",
   "argumen": [
    [
     "angka",
     "Nilai yang dicari peringkatnya"
    ],
    [
     "rentang",
     "Seluruh nilai pembanding, kunci dengan $"
    ],
    [
     "urutan",
     "0 atau kosong = terbesar peringkat 1; 1 = terkecil peringkat 1"
    ]
   ],
   "langkah": [
    "Hitung total atau rata-rata tiap siswa.",
    "Di sel peringkat ketik =RANK(E2;$E$2:$E$6).",
    "Tanda $ mengunci rentang agar tidak bergeser saat rumus disalin ke bawah.",
    "Seret ke bawah."
   ],
   "tips": [
    "Dua nilai sama menghasilkan peringkat yang sama, dan peringkat berikutnya dilewati."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Total"
     ],
     [
      "Antonio",
      240
     ],
     [
      "Romansyah",
      235
     ],
     [
      "Devi",
      235
     ],
     [
      "Bagus",
      242
     ],
     [
      "Maulana",
      253
     ]
    ],
    "sel": "C2",
    "rumus": "=RANK(B2,$B$2:$B$6)",
    "coba": [
     [
      "=RANK(B2,$B$2:$B$6)",
      "Peringkat dari terbesar"
     ],
     [
      "=RANK(B2,$B$2:$B$6,1)",
      "Peringkat dari terkecil"
     ]
    ],
    "catatan": "Perhatikan Romansyah dan Devi yang sama-sama peringkat 4."
   },
   "kuis": {
    "q": "Mengapa rentang pada RANK ditulis $B$2:$B$6?",
    "opsi": [
     "Agar rentang tidak bergeser saat disalin",
     "Agar hasilnya rupiah",
     "Agar tidak bisa diedit",
     "Agar hasilnya desimal"
    ],
    "jawab": 0,
    "bahas": "Tanda $ mengunci alamat."
   },
   "kata": "rank peringkat ranking juara",
   "gambar": [
    "5-5-hasil-rumus-rank-2-300x179.jpg",
    "gambar-2-5-rumus-1-300x169.jpg",
    "gambar-3-5-hasil-rumus-1-300x179.jpg",
    "gambar-4-5-rumus-2-300x182.jpg"
   ]
  },
  {
   "id": "large",
   "cat": "rumus",
   "judul": "LARGE dan SMALL: nilai ke-n",
   "ringkas": "LARGE mengambil nilai terbesar ke-k, SMALL mengambil nilai terkecil ke-k.",
   "sintaks": "=LARGE(rentang; k)   =SMALL(rentang; k)",
   "argumen": [
    [
     "rentang",
     "Kumpulan angka"
    ],
    [
     "k",
     "Urutan yang diminta (1 = terbesar atau terkecil)"
    ]
   ],
   "langkah": [
    "Ketik =LARGE( lalu pilih rentang.",
    "Isi k, misalnya 2 untuk nilai kedua terbesar.",
    "Tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Matematika",
      "IPA",
      "B.Indo"
     ],
     [
      "Antonio",
      80,
      75,
      85
     ],
     [
      "Romansyah",
      70,
      85,
      80
     ],
     [
      "Devi",
      75,
      70,
      90
     ],
     [
      "Bagus",
      85,
      77,
      80
     ],
     [
      "Maulana",
      90,
      88,
      75
     ]
    ],
    "sel": "F2",
    "rumus": "=LARGE(B2:B6,2)",
    "coba": [
     [
      "=LARGE(B2:B6,2)",
      "Kedua terbesar"
     ],
     [
      "=SMALL(B2:B6,2)",
      "Kedua terkecil"
     ],
     [
      "=LARGE(B2:B6,1)+LARGE(B2:B6,2)",
      "Jumlah dua terbesar"
     ]
    ]
   },
   "kuis": {
    "q": "=LARGE(A1:A5;1) sama dengan...",
    "opsi": [
     "MIN",
     "MAX",
     "AVERAGE",
     "COUNT"
    ],
    "jawab": 1,
    "bahas": "Terbesar ke-1 adalah MAX."
   },
   "kata": "large small terbesar kedua ke-n",
   "gambar": [
    "rumus-excel-large-1.jpg",
    "rumus-excel-large-2.jpg",
    "rumus-excel-large-3.jpg",
    "rumus-excel-large-data-300x173.jpg"
   ]
  },
  {
   "id": "percentrank",
   "cat": "rumus",
   "judul": "PERCENTRANK: posisi persentase",
   "ringkas": "PERCENTRANK menunjukkan posisi sebuah nilai sebagai persentase dari seluruh data, dari 0 sampai 1.",
   "sintaks": "=PERCENTRANK(rentang; x; [digit])",
   "argumen": [
    [
     "rentang",
     "Kumpulan data"
    ],
    [
     "x",
     "Nilai yang dicari posisinya"
    ],
    [
     "digit",
     "Opsional, jumlah angka signifikan (default 3)"
    ]
   ],
   "langkah": [
    "Ketik =PERCENTRANK( lalu pilih rentang data.",
    "Isi x dengan nilai atau sel yang dinilai.",
    "Ubah format sel menjadi Percentage bila ingin tampil sebagai persen."
   ],
   "demo": {
    "data": [
     [
      "Nilai"
     ],
     [
      60
     ],
     [
      70
     ],
     [
      80
     ],
     [
      90
     ],
     [
      100
     ]
    ],
    "sel": "C2",
    "rumus": "=PERCENTRANK(A2:A6,80)",
    "coba": [
     [
      "=PERCENTRANK(A2:A6,80)",
      "Posisi nilai 80"
     ],
     [
      "=PERCENTRANK(A2:A6,90)",
      "Posisi nilai 90"
     ]
    ]
   },
   "kuis": {
    "q": "Nilai PERCENTRANK selalu berada di antara...",
    "opsi": [
     "0 dan 1",
     "1 dan 100",
     "-1 dan 1",
     "0 dan 10"
    ],
    "jawab": 0,
    "bahas": "Hasilnya pecahan dari 0 sampai 1."
   },
   "kata": "percentrank persentil posisi",
   "gambar": [
    "percentrank-1-300x129.jpg",
    "percentrank-2-300x130.jpg",
    "percentrank-3-300x130.jpg"
   ]
  },
  {
   "id": "sumproduct",
   "cat": "rumus",
   "judul": "SUMPRODUCT: kali lalu jumlah",
   "ringkas": "SUMPRODUCT mengalikan pasangan sel yang sejajar lalu menjumlahkannya, cocok untuk total harga atau nilai berbobot.",
   "sintaks": "=SUMPRODUCT(rentang1; [rentang2]; ...)",
   "argumen": [
    [
     "rentang1",
     "Deret angka pertama"
    ],
    [
     "rentang2",
     "Deret kedua dengan ukuran sama"
    ]
   ],
   "langkah": [
    "Pastikan setiap rentang memiliki jumlah baris yang sama.",
    "Ketik =SUMPRODUCT( lalu pilih rentang harga, koma, rentang jumlah.",
    "Tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Barang",
      "Harga",
      "Jumlah"
     ],
     [
      "Pensil",
      3000,
      5
     ],
     [
      "Buku",
      8000,
      3
     ],
     [
      "Penggaris",
      5000,
      2
     ]
    ],
    "sel": "E2",
    "rumus": "=SUMPRODUCT(B2:B4,C2:C4)",
    "coba": [
     [
      "=SUMPRODUCT(B2:B4,C2:C4)",
      "Total belanja"
     ],
     [
      "=SUM(B2:B4)",
      "Bandingkan: hanya total harga"
     ]
    ],
    "catatan": "Hasil sama dengan menjumlah kolom Harga x Jumlah."
   },
   "kuis": {
    "q": "Apa hasil =SUMPRODUCT({1;2};{3;4}) secara konsep?",
    "opsi": [
     "1x3 + 2x4",
     "1+2+3+4",
     "1x2x3x4",
     "3-1 + 4-2"
    ],
    "jawab": 0,
    "bahas": "Mengalikan pasangan lalu menjumlah: 3 + 8 = 11."
   },
   "kata": "sumproduct kali jumlah bobot",
   "gambar": [
    "sumproduct-1.jpg",
    "sumproduct-2-300x254.jpg",
    "sumproduct-3-300x253.jpg",
    "sumproduct-4-300x222.jpg"
   ]
  },
  {
   "id": "korelasi",
   "cat": "rumus",
   "judul": "CORREL: korelasi dua data",
   "ringkas": "CORREL mengukur seberapa kuat dua deret data bergerak bersama, dari -1 sampai 1.",
   "sintaks": "=CORREL(data1; data2)",
   "argumen": [
    [
     "data1",
     "Deret angka pertama"
    ],
    [
     "data2",
     "Deret angka kedua, jumlahnya sama"
    ]
   ],
   "langkah": [
    "Susun dua deret data berdampingan.",
    "Ketik =CORREL( lalu pilih deret pertama dan kedua.",
    "Mendekati 1 berarti naik bersama, mendekati -1 berarti berlawanan, mendekati 0 berarti tidak berhubungan."
   ],
   "demo": {
    "data": [
     [
      "Jam belajar",
      "Nilai"
     ],
     [
      1,
      55
     ],
     [
      2,
      60
     ],
     [
      3,
      70
     ],
     [
      4,
      78
     ],
     [
      5,
      90
     ]
    ],
    "sel": "D2",
    "rumus": "=CORREL(A2:A6,B2:B6)",
    "coba": [
     [
      "=CORREL(A2:A6,B2:B6)",
      "Korelasi jam belajar dan nilai"
     ]
    ]
   },
   "kuis": {
    "q": "Korelasi mendekati -1 berarti...",
    "opsi": [
     "Dua data bergerak berlawanan",
     "Dua data sama",
     "Tidak ada data",
     "Data rusak"
    ],
    "jawab": 0,
    "bahas": "Naiknya satu data diikuti turunnya data lain."
   },
   "kata": "korelasi correl statistik",
   "gambar": [
    "korelasi-1-300x246.jpg",
    "korelasi-2-300x282.jpg"
   ]
  },
  {
   "id": "if-tunggal",
   "cat": "logika",
   "judul": "IF: memilih satu dari dua hasil",
   "ringkas": "IF memeriksa sebuah syarat, lalu memberi satu hasil bila benar dan hasil lain bila salah.",
   "sintaks": "=IF(syarat; hasil_jika_benar; hasil_jika_salah)",
   "argumen": [
    [
     "syarat",
     "Pernyataan yang bernilai benar atau salah, misalnya B2>=75"
    ],
    [
     "hasil_jika_benar",
     "Nilai bila syarat terpenuhi"
    ],
    [
     "hasil_jika_salah",
     "Nilai bila syarat tidak terpenuhi"
    ]
   ],
   "langkah": [
    "Tentukan syaratnya, misalnya nilai minimal 75 untuk lulus.",
    "Di sel hasil ketik =IF(B2>=75;\"Lulus\";\"Remedial\").",
    "Tekan Enter lalu seret ke bawah.",
    "Teks hasil harus diapit tanda kutip; angka tidak."
   ],
   "tips": [
    "Operator pembanding: = , <> (tidak sama), < , > , <= , >= ."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Nilai",
      "Keterangan"
     ],
     [
      "Antonio",
      80,
      ""
     ],
     [
      "Romansyah",
      70,
      ""
     ],
     [
      "Devi",
      75,
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=IF(B2>=75,\"Lulus\",\"Remedial\")",
    "coba": [
     [
      "=IF(B2>=75,\"Lulus\",\"Remedial\")",
      "Lulus atau remedial"
     ],
     [
      "=IF(B2>=75,B2,75)",
      "Nilai minimal 75"
     ],
     [
      "=IF(B2=\"\",\"\",IF(B2>=75,\"Lulus\",\"Remedial\"))",
      "Kosongkan bila nilai belum ada"
     ]
    ]
   },
   "kuis": {
    "q": "Mengapa kata Lulus harus diapit tanda kutip di dalam IF?",
    "opsi": [
     "Karena itu teks",
     "Karena itu angka",
     "Karena itu rumus",
     "Tidak perlu"
    ],
    "jawab": 0,
    "bahas": "Teks literal ditulis di antara tanda kutip."
   },
   "kata": "if jika logika kondisi lulus",
   "gambar": [
    "1-7-gambar-data-if-300x133.jpg",
    "2-7-hasil-fungsi-if-300x135.jpg",
    "contoh-rumus-if-excel-tunggal-2.jpg",
    "contoh-rumus-if-excel-tunggal.jpg",
    "fungsi-argumen-if-300x160.jpg"
   ]
  },
  {
   "id": "if-ganda",
   "cat": "logika",
   "judul": "IF bertingkat dan kombinasi AND, OR",
   "ringkas": "Untuk lebih dari dua kemungkinan, letakkan IF di dalam IF. AND dan OR membantu menggabungkan beberapa syarat.",
   "sintaks": "=IF(syarat1; hasil1; IF(syarat2; hasil2; hasil_lain))",
   "argumen": [
    [
     "AND(a; b)",
     "Benar bila semua syarat benar"
    ],
    [
     "OR(a; b)",
     "Benar bila salah satu benar"
    ]
   ],
   "langkah": [
    "Urutkan syarat dari yang paling ketat atau paling tinggi.",
    "Contoh predikat: =IF(B2>=85;\"A\";IF(B2>=75;\"B\";IF(B2>=65;\"C\";\"D\"))).",
    "Untuk dua syarat sekaligus: =IF(AND(B2>=75;C2>=75);\"Lulus\";\"Gagal\").",
    "Periksa jumlah kurung buka dan kurung tutup sama banyak."
   ],
   "tips": [
    "Excel 2007 ke atas mengizinkan sampai 64 tingkat IF; sebelumnya hanya 7.",
    "Fungsi IFS (Excel 2019 ke atas) menyederhanakan IF bertingkat."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Nilai",
      "Predikat"
     ],
     [
      "Antonio",
      88,
      ""
     ],
     [
      "Romansyah",
      76,
      ""
     ],
     [
      "Devi",
      67,
      ""
     ],
     [
      "Bagus",
      50,
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=IF(B2>=85,\"A\",IF(B2>=75,\"B\",IF(B2>=65,\"C\",\"D\")))",
    "coba": [
     [
      "=IF(B2>=85,\"A\",IF(B2>=75,\"B\",IF(B2>=65,\"C\",\"D\")))",
      "Predikat A sampai D"
     ],
     [
      "=IF(AND(B2>=70,B2<=90),\"Tengah\",\"Luar\")",
      "AND dua syarat"
     ],
     [
      "=IFS(B2>=85,\"A\",B2>=75,\"B\",B2>=65,\"C\",TRUE,\"D\")",
      "Versi IFS"
     ]
    ],
    "catatan": "Coba ubah batas nilainya."
   },
   "kuis": {
    "q": "Mengapa syarat IF bertingkat sebaiknya diurutkan dari nilai terbesar?",
    "opsi": [
     "Karena Excel berhenti di syarat pertama yang benar",
     "Agar rumus lebih pendek",
     "Agar tidak butuh kurung",
     "Tidak ada pengaruh"
    ],
    "jawab": 0,
    "bahas": "Syarat pertama yang benar langsung dipakai; urutan salah menghasilkan hasil keliru."
   },
   "kata": "if bertingkat nested and or predikat nilai",
   "gambar": [
    "1-8-aplikasi-if-ganda-300x133.jpg",
    "1-8-aplikasi-if-ganda.jpg",
    "1-9-contoh-data.jpg",
    "2-8-4-syarat-5pilihan-300x106.jpg",
    "2-9-hasilrumus.jpg",
    "3-8-contoh-lain-300x290.jpg"
   ]
  },
  {
   "id": "left",
   "cat": "teks",
   "judul": "LEFT: mengambil karakter dari kiri",
   "ringkas": "LEFT memotong sejumlah karakter dari awal teks, misalnya mengambil kode jenjang dari nomor induk.",
   "sintaks": "=LEFT(teks; [jumlah_karakter])",
   "argumen": [
    [
     "teks",
     "Teks atau sel sumber"
    ],
    [
     "jumlah_karakter",
     "Banyak karakter dari kiri; kosong berarti 1"
    ]
   ],
   "langkah": [
    "Klik sel hasil.",
    "Ketik =LEFT( lalu klik sel sumber.",
    "Isi jumlah karakter, misalnya 3.",
    "Tekan Enter dan seret ke bawah."
   ],
   "tips": [
    "Hasil LEFT selalu berupa teks, bahkan bila yang diambil angka. Bungkus dengan VALUE bila ingin menghitungnya."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Hasil"
     ],
     [
      "SMP-2026-0015",
      ""
     ],
     [
      "SMA-2025-0102",
      ""
     ],
     [
      "SD-2024-0007",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=LEFT(A2,3)",
    "coba": [
     [
      "=LEFT(A2,3)",
      "Tiga karakter pertama"
     ],
     [
      "=LEFT(A2,FIND(\"-\",A2)-1)",
      "Sampai tanda strip pertama"
     ],
     [
      "=VALUE(MID(A2,5,4))",
      "Angka tahun"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =LEFT(\"EXCEL\";2)?",
    "opsi": [
     "EX",
     "XC",
     "EL",
     "CE"
    ],
    "jawab": 0,
    "bahas": "Dua karakter pertama."
   },
   "kata": "left kiri potong teks",
   "gambar": [
    "fungsi-left-001.jpg",
    "fungsi-left.jpg",
    "g-1-left-300x135.jpg",
    "g-2-functions-arguments-left-300x152.jpg"
   ]
  },
  {
   "id": "right",
   "cat": "teks",
   "judul": "RIGHT: mengambil karakter dari kanan",
   "ringkas": "RIGHT memotong karakter dari akhir teks, cocok untuk mengambil nomor urut di ujung kode.",
   "sintaks": "=RIGHT(teks; [jumlah_karakter])",
   "argumen": [
    [
     "teks",
     "Teks atau sel sumber"
    ],
    [
     "jumlah_karakter",
     "Banyak karakter dari kanan"
    ]
   ],
   "langkah": [
    "Klik sel hasil.",
    "Ketik =RIGHT( lalu klik sel sumber.",
    "Isi jumlah karakter dan tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Hasil"
     ],
     [
      "SMP-2026-0015",
      ""
     ],
     [
      "SMA-2025-0102",
      ""
     ],
     [
      "SD-2024-0007",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=RIGHT(A2,4)",
    "coba": [
     [
      "=RIGHT(A2,4)",
      "Empat karakter terakhir"
     ],
     [
      "=VALUE(RIGHT(A2,4))+1",
      "Nomor berikutnya"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =RIGHT(\"EXCEL\";2)?",
    "opsi": [
     "EX",
     "CE",
     "EL",
     "XC"
    ],
    "jawab": 2,
    "bahas": "Dua karakter terakhir."
   },
   "kata": "right kanan potong teks",
   "gambar": [
    "fungsi-right-001.jpg",
    "fungsi-right.jpg",
    "g-6-function-arg-right-300x160.jpg",
    "g-7-right-teks-300x176.jpg",
    "g-8-right-angka-300x238.jpg"
   ]
  },
  {
   "id": "mid",
   "cat": "teks",
   "judul": "MID: mengambil karakter dari tengah",
   "ringkas": "MID mengambil sejumlah karakter mulai dari posisi tertentu.",
   "sintaks": "=MID(teks; mulai; jumlah_karakter)",
   "argumen": [
    [
     "teks",
     "Teks sumber"
    ],
    [
     "mulai",
     "Posisi karakter pertama yang diambil (dimulai dari 1)"
    ],
    [
     "jumlah_karakter",
     "Banyaknya karakter"
    ]
   ],
   "langkah": [
    "Hitung posisi awal karakter yang diambil.",
    "Ketik =MID( lalu sel, posisi awal, jumlah karakter.",
    "Tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Hasil"
     ],
     [
      "SMP-2026-0015",
      ""
     ],
     [
      "SMA-2025-0102",
      ""
     ],
     [
      "SD-2024-0007",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=MID(A2,5,4)",
    "coba": [
     [
      "=MID(A2,5,4)",
      "Empat karakter mulai posisi 5"
     ],
     [
      "=MID(A2,FIND(\"-\",A2)+1,4)",
      "Posisi dicari otomatis"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =MID(\"INDONESIA\";3;4)?",
    "opsi": [
     "DONE",
     "NDON",
     "ONES",
     "INDO"
    ],
    "jawab": 0,
    "bahas": "Mulai dari karakter ke-3 (D), ambil 4: DONE."
   },
   "kata": "mid tengah potong teks",
   "gambar": [
    "fungsi-mid-001.jpg",
    "fungsi-mid.jpg",
    "g-3-mid-teks-300x284.jpg",
    "g-4-mid-angka-300x240.jpg",
    "g-5-function-arg-mid-300x164.jpg"
   ]
  },
  {
   "id": "len",
   "cat": "teks",
   "judul": "LEN: menghitung panjang teks",
   "ringkas": "LEN menghitung jumlah karakter termasuk spasi. Berguna untuk memeriksa panjang kode atau nomor.",
   "sintaks": "=LEN(teks)",
   "argumen": [
    [
     "teks",
     "Teks atau sel"
    ]
   ],
   "langkah": [
    "Ketik =LEN( lalu klik sel.",
    "Tekan Enter. Spasi di awal atau akhir ikut terhitung."
   ],
   "tips": [
    "Gabungkan dengan TRIM untuk membuang spasi berlebih sebelum menghitung."
   ],
   "demo": {
    "data": [
     [
      "Nama lengkap",
      "Hasil"
     ],
     [
      "budi santoso",
      ""
     ],
     [
      "SITI NURHALIZA",
      ""
     ],
     [
      "Ahmad Dhani",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=LEN(A2)",
    "coba": [
     [
      "=LEN(A2)",
      "Panjang teks"
     ],
     [
      "=LEN(TRIM(A2))",
      "Panjang tanpa spasi berlebih"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =LEN(\"Excel Dasar\")?",
    "opsi": [
     "10",
     "11",
     "12",
     "9"
    ],
    "jawab": 1,
    "bahas": "Termasuk satu spasi: 5 + 1 + 5 = 11."
   },
   "kata": "len panjang karakter",
   "gambar": [
    "fungsi-argumen-len-300x119.jpg",
    "rumus-len-300x112.jpg"
   ]
  },
  {
   "id": "huruf",
   "cat": "teks",
   "judul": "UPPER, LOWER, dan PROPER: mengubah huruf",
   "ringkas": "UPPER menjadi huruf besar, LOWER huruf kecil, PROPER huruf kapital di awal tiap kata.",
   "sintaks": "=UPPER(teks)   =LOWER(teks)   =PROPER(teks)",
   "argumen": [
    [
     "teks",
     "Teks atau sel sumber"
    ]
   ],
   "langkah": [
    "Ketik fungsi lalu klik sel yang berisi nama.",
    "Tekan Enter dan seret ke bawah.",
    "Salin hasilnya, lalu Paste Special > Values bila ingin menimpa data asli."
   ],
   "demo": {
    "data": [
     [
      "Nama lengkap",
      "Hasil"
     ],
     [
      "budi santoso",
      ""
     ],
     [
      "SITI NURHALIZA",
      ""
     ],
     [
      "Ahmad Dhani",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=PROPER(A2)",
    "coba": [
     [
      "=PROPER(A2)",
      "Kapital tiap kata"
     ],
     [
      "=UPPER(A2)",
      "HURUF BESAR"
     ],
     [
      "=LOWER(A2)",
      "huruf kecil"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =PROPER(\"budi santoso\")?",
    "opsi": [
     "BUDI SANTOSO",
     "Budi Santoso",
     "budi santoso",
     "Budi santoso"
    ],
    "jawab": 1,
    "bahas": "PROPER mengkapitalkan huruf pertama tiap kata."
   },
   "kata": "upper lower proper huruf besar kecil kapital",
   "gambar": [
    "g-1-upper.jpg",
    "g-2-lower.jpg",
    "g-3-proper-a.jpg",
    "g-4-proper-b.jpg",
    "merubah-huruf-besar-menjadi-kecil-1.jpg",
    "merubah-huruf-besar-menjadi-kecil-2.jpg"
   ]
  },
  {
   "id": "text-value",
   "cat": "teks",
   "judul": "TEXT dan VALUE: angka menjadi teks dan sebaliknya",
   "ringkas": "TEXT memformat angka atau tanggal menjadi teks dengan pola tertentu. VALUE mengubah teks berbentuk angka kembali menjadi angka.",
   "sintaks": "=TEXT(nilai; \"format\")   =VALUE(teks)",
   "argumen": [
    [
     "nilai",
     "Angka atau tanggal"
    ],
    [
     "format",
     "Pola, misalnya \"000\", \"#,##0\", \"dd/mm/yyyy\", \"dddd\""
    ],
    [
     "teks",
     "Teks yang tampak seperti angka"
    ]
   ],
   "langkah": [
    "Contoh TEXT: =TEXT(1234567;\"#,##0\") menghasilkan 1,234,567.",
    "Contoh hari: =TEXT(A2;\"dddd\") menghasilkan nama hari.",
    "VALUE: =VALUE(\"250\")+1 menghasilkan 251.",
    "Pakai & untuk menyisipkan hasil TEXT ke dalam kalimat."
   ],
   "demo": {
    "data": [
     [
      "Tanggal",
      "Nilai",
      "Hasil"
     ],
     [
      "02/10/2026",
      7,
      ""
     ],
     [
      "15/08/2026",
      45,
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=TEXT(A2,\"dddd, dd mmmm yyyy\")",
    "coba": [
     [
      "=TEXT(A2,\"dddd, dd mmmm yyyy\")",
      "Hari dan tanggal Indonesia"
     ],
     [
      "=TEXT(B2,\"000\")",
      "Tiga digit"
     ],
     [
      "=TEXT(1234567.5,\"#,##0.00\")",
      "Pemisah ribuan"
     ],
     [
      "=VALUE(\"250\")+1",
      "Teks menjadi angka"
     ]
    ],
    "catatan": "Format TEXT memakai titik untuk desimal dan koma untuk ribuan."
   },
   "kuis": {
    "q": "Hasil =TEXT(5;\"000\")?",
    "opsi": [
     "5",
     "005",
     "500",
     "0005"
    ],
    "jawab": 1,
    "bahas": "Format 000 mengisi nol di depan sampai tiga digit."
   },
   "kata": "text value format angka teks",
   "gambar": [
    "fungsi-text-pada-excel-300x120.jpg",
    "g-1-function-argument-text.jpg",
    "g-2-hasil-rumus-text.jpg",
    "g-3-function-argument-value.jpg",
    "g-4-hasil-rumus-value.jpg"
   ]
  },
  {
   "id": "rept",
   "cat": "teks",
   "judul": "REPT: mengulang teks",
   "ringkas": "REPT menulis sebuah karakter berkali-kali, berguna untuk diagram batang sederhana atau garis pemisah.",
   "sintaks": "=REPT(teks; jumlah)",
   "argumen": [
    [
     "teks",
     "Teks yang diulang"
    ],
    [
     "jumlah",
     "Berapa kali diulang"
    ]
   ],
   "langkah": [
    "Ketik =REPT(\"|\";B2) untuk membuat batang sepanjang nilai B2.",
    "Atur font menjadi yang rapat agar batang tampak rata."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Nilai",
      "Batang"
     ],
     [
      "Antonio",
      8,
      ""
     ],
     [
      "Devi",
      5,
      ""
     ],
     [
      "Bagus",
      10,
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=REPT(\"|\",B2)",
    "coba": [
     [
      "=REPT(\"|\",B2)",
      "Batang"
     ],
     [
      "=REPT(\"*\",B2)",
      "Bintang"
     ],
     [
      "=REPT(\"★\",B2)",
      "Bintang penuh"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =REPT(\"ab\";3)?",
    "opsi": [
     "ababab",
     "aaabbb",
     "ab3",
     "abbbb"
    ],
    "jawab": 0,
    "bahas": "Mengulang teks tiga kali."
   },
   "kata": "rept ulang karakter diagram",
   "gambar": [
    "contoh-rumus-rept-dalam-excel-300x138.jpg",
    "rumus-excel-rept-300x97.jpg"
   ]
  },
  {
   "id": "find",
   "cat": "teks",
   "judul": "FIND dan SEARCH: mencari posisi teks",
   "ringkas": "FIND dan SEARCH menghasilkan posisi sebuah teks di dalam teks lain. FIND membedakan huruf besar kecil, SEARCH tidak.",
   "sintaks": "=FIND(dicari; dalam_teks; [mulai])",
   "argumen": [
    [
     "dicari",
     "Teks yang dicari"
    ],
    [
     "dalam_teks",
     "Teks sumber"
    ],
    [
     "mulai",
     "Posisi awal pencarian, default 1"
    ]
   ],
   "langkah": [
    "Ketik =FIND(\" \";A2) untuk mencari spasi pertama.",
    "Gabungkan dengan LEFT atau MID untuk memotong teks di titik tersebut."
   ],
   "demo": {
    "data": [
     [
      "Nama lengkap",
      "Hasil"
     ],
     [
      "budi santoso",
      ""
     ],
     [
      "SITI NURHALIZA",
      ""
     ],
     [
      "Ahmad Dhani",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=FIND(\" \",A2)",
    "coba": [
     [
      "=FIND(\" \",A2)",
      "Posisi spasi"
     ],
     [
      "=SEARCH(\"SANTOSO\",A2)",
      "Tidak peka huruf besar"
     ],
     [
      "=LEFT(A2,FIND(\" \",A2)-1)",
      "Kata pertama"
     ]
    ]
   },
   "kuis": {
    "q": "Apa yang terjadi bila FIND tidak menemukan teksnya?",
    "opsi": [
     "#VALUE!",
     "0",
     "Kosong",
     "FALSE"
    ],
    "jawab": 0,
    "bahas": "Hasilnya galat #VALUE!. Bungkus dengan IFERROR."
   },
   "kata": "find search cari posisi",
   "gambar": [
    "membuat-fungsi-find-pada-excel-1-300x124.jpg",
    "membuat-fungsi-find-pada-excel-2-300x142.jpg",
    "membuat-fungsi-find-pada-excel-3-300x139.jpg"
   ]
  },
  {
   "id": "substitute",
   "cat": "teks",
   "judul": "SUBSTITUTE: mengganti teks",
   "ringkas": "SUBSTITUTE mengganti bagian tertentu dari teks dengan teks lain, tanpa mengubah posisi lain.",
   "sintaks": "=SUBSTITUTE(teks; lama; baru; [urutan])",
   "argumen": [
    [
     "teks",
     "Teks sumber"
    ],
    [
     "lama",
     "Bagian yang diganti"
    ],
    [
     "baru",
     "Penggantinya"
    ],
    [
     "urutan",
     "Opsional, hanya ganti kemunculan ke-n"
    ]
   ],
   "langkah": [
    "Ketik =SUBSTITUTE(A2;\"-\";\"/\") untuk mengubah semua strip menjadi garis miring.",
    "Tambahkan angka urutan bila hanya ingin mengganti kemunculan tertentu."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Hasil"
     ],
     [
      "SMP-2026-0015",
      ""
     ],
     [
      "SMA-2025-0102",
      ""
     ],
     [
      "SD-2024-0007",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=SUBSTITUTE(A2,\"-\",\"/\")",
    "coba": [
     [
      "=SUBSTITUTE(A2,\"-\",\"/\")",
      "Semua strip"
     ],
     [
      "=SUBSTITUTE(A2,\"-\",\"\",1)",
      "Strip pertama dihapus"
     ],
     [
      "=SUBSTITUTE(A2,\"-\",\"\")",
      "Hapus semua strip"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =SUBSTITUTE(\"a-b-c\";\"-\";\"\")?",
    "opsi": [
     "abc",
     "a-b-c",
     "a b c",
     "-"
    ],
    "jawab": 0,
    "bahas": "Semua strip diganti dengan teks kosong."
   },
   "kata": "substitute ganti teks",
   "gambar": [
    "rumus-subtitle-excel-penulisan-300x197.jpg",
    "rumus-subtitle-excel.jpg"
   ]
  },
  {
   "id": "menambah-kata",
   "cat": "teks",
   "judul": "Menambah kata pada banyak sel",
   "ringkas": "Operator & menyambung teks tetap dengan isi sel, misalnya menambahkan kata Kelas di depan huruf kelas.",
   "sintaks": "=\"Kelas \"&A2",
   "langkah": [
    "Ketik =\"Kelas \"&A2 di sel kosong.",
    "Tekan Enter lalu seret ke bawah.",
    "Salin hasilnya dan tempel sebagai Values bila ingin mengganti data aslinya."
   ],
   "demo": {
    "data": [
     [
      "Kelas",
      "Lengkap"
     ],
     [
      "7A",
      ""
     ],
     [
      "7B",
      ""
     ],
     [
      "8A",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=\"Kelas \"&A2",
    "coba": [
     [
      "=\"Kelas \"&A2",
      "Tambah di depan"
     ],
     [
      "=A2&\" - Reguler\"",
      "Tambah di belakang"
     ],
     [
      "=CONCATENATE(\"Kelas \",A2)",
      "Dengan CONCATENATE"
     ]
    ]
   },
   "kuis": {
    "q": "Operator apa yang menyambung teks?",
    "opsi": [
     "+",
     "&",
     "#",
     "$"
    ],
    "jawab": 1,
    "bahas": "Ampersand (&)."
   },
   "kata": "tambah kata sambung concatenate gabung",
   "gambar": [
    "data-1-menambah-kata-pada-dokumen-excel-300x121.jpg",
    "data-2-menambah-kata-pada-dokumen-excel.jpg",
    "data-3-menambah-kata-pada-dokumen-excel-300x142.jpg"
   ]
  },
  {
   "id": "terbilang",
   "cat": "teks",
   "judul": "Angka terbilang di Excel",
   "ringkas": "Mengubah angka menjadi tulisan (misalnya 250 menjadi dua ratus lima puluh). Excel tidak punya fungsi bawaan, jadi dibuat dengan tabel bantu atau macro VBA.",
   "langkah": [
    "Cara tabel bantu: buat daftar 0 sampai 9 beserta namanya (nol, satu, dua, ...), lalu ambil per digit dengan MID dan VLOOKUP.",
    "Cara macro: simpan fungsi VBA bernama Terbilang di modul, lalu panggil =Terbilang(A1) seperti fungsi biasa.",
    "Untuk huruf kapital di awal kata, bungkus hasil dengan PROPER; untuk kapital di awal kalimat, gabungkan UPPER(LEFT()) dan LOWER(MID()).",
    "Simpan file sebagai .xlsm bila memakai macro."
   ],
   "tips": [
    "Tangkapan layar di bawah menunjukkan langkah dan hasil akhirnya."
   ],
   "kuis": {
    "q": "Mengapa file dengan fungsi Terbilang harus disimpan sebagai .xlsm?",
    "opsi": [
     "Karena memuat macro",
     "Karena berisi gambar",
     "Karena ukurannya besar",
     "Karena memakai PROPER"
    ],
    "jawab": 0,
    "bahas": ".xlsm adalah format workbook yang mendukung macro."
   },
   "kata": "terbilang angka huruf",
   "gambar": [
    "angka-terbilang-pada-excel-dengan-huruf-kapital-pada-awal-kata.jpg",
    "angka-terbilang-pada-excel-dengan-huruf-kapital.jpg",
    "angka-terbilang-pada-excel.jpg",
    "data-tabel-169x300.jpg"
   ]
  },
  {
   "id": "vlookup",
   "cat": "lookup",
   "judul": "VLOOKUP: mencari data ke bawah",
   "ringkas": "VLOOKUP mencari sebuah nilai di kolom pertama sebuah tabel, lalu mengambil data dari kolom lain di baris yang sama.",
   "sintaks": "=VLOOKUP(dicari; tabel; kolom_ke; [persis])",
   "argumen": [
    [
     "dicari",
     "Nilai yang dicari, harus ada di kolom pertama tabel"
    ],
    [
     "tabel",
     "Seluruh tabel, kunci dengan $"
    ],
    [
     "kolom_ke",
     "Nomor kolom yang diambil, dihitung dari kolom pertama tabel"
    ],
    [
     "persis",
     "FALSE = harus sama persis; TRUE atau kosong = perkiraan terdekat (tabel harus terurut)"
    ]
   ],
   "langkah": [
    "Pastikan nilai kunci ada di kolom paling kiri tabel.",
    "Ketik =VLOOKUP( lalu klik sel kunci.",
    "Blok tabel dan tekan F4 agar menjadi $A$2:$C$5.",
    "Isi nomor kolom, lalu FALSE untuk pencarian persis. Tekan Enter."
   ],
   "tips": [
    "Hampir selalu pakai FALSE kecuali sedang mencari rentang nilai.",
    "#N/A berarti kunci tidak ditemukan. Periksa spasi tersembunyi atau beda format."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Barang",
      "Harga"
     ],
     [
      "A01",
      "Pensil",
      3000
     ],
     [
      "A02",
      "Buku",
      8000
     ],
     [
      "A03",
      "Penggaris",
      5000
     ],
     [
      "A04",
      "Penghapus",
      2000
     ],
     [],
     [
      "Cari kode:",
      "A03"
     ],
     [
      "Nama barang:",
      ""
     ]
    ],
    "sel": "B8",
    "rumus": "=VLOOKUP(B7,A2:C5,2,FALSE)",
    "coba": [
     [
      "=VLOOKUP(B7,A2:C5,2,FALSE)",
      "Nama barang"
     ],
     [
      "=VLOOKUP(B7,A2:C5,3,FALSE)",
      "Harga"
     ],
     [
      "=VLOOKUP(\"A99\",A2:C5,2,FALSE)",
      "Kunci tidak ada"
     ],
     [
      "=IFERROR(VLOOKUP(\"A99\",A2:C5,2,FALSE),\"Tidak ditemukan\")",
      "Dengan IFERROR"
     ]
    ],
    "catatan": "Ganti isi B7 dengan A01 atau A04 lalu lihat hasilnya."
   },
   "kuis": {
    "q": "Argumen keempat VLOOKUP sebaiknya diisi apa untuk pencarian yang harus persis?",
    "opsi": [
     "TRUE",
     "FALSE",
     "0.5",
     "1"
    ],
    "jawab": 1,
    "bahas": "FALSE atau 0 meminta kecocokan persis."
   },
   "kata": "vlookup cari tabel kolom",
   "gambar": [
    "g-1-vlookup-300x256.jpg",
    "g-2-argumentvlookup-300x168.jpg",
    "rumus-vlookup-excel.jpg",
    "tabel-harga-300x160.jpg",
    "vlookup-laporan-1-300x180.jpg",
    "vlookup-laporan-2.jpg",
    "vlookup-laporan-3.jpg",
    "vlookup-laporan-4-300x124.jpg",
    "vlookup-laporan-5-300x109.jpg",
    "vlookup-laporan-6-300x110.jpg",
    "vlookup-laporan-7-300x94.jpg",
    "vlookup-laporan-8-300x94.jpg",
    "vlookup-laporan-9-300x95.jpg",
    "vlookup-laporan-menggunakan-auto-fill-300x107.jpg"
   ]
  },
  {
   "id": "hlookup",
   "cat": "lookup",
   "judul": "HLOOKUP: mencari data ke samping",
   "ringkas": "HLOOKUP sama dengan VLOOKUP, tetapi tabelnya disusun mendatar: kunci ada di baris paling atas.",
   "sintaks": "=HLOOKUP(dicari; tabel; baris_ke; [persis])",
   "argumen": [
    [
     "dicari",
     "Nilai yang dicari di baris pertama"
    ],
    [
     "tabel",
     "Seluruh tabel"
    ],
    [
     "baris_ke",
     "Nomor baris yang diambil"
    ],
    [
     "persis",
     "FALSE untuk persis"
    ]
   ],
   "langkah": [
    "Pastikan kunci berada di baris paling atas tabel.",
    "Ketik =HLOOKUP( lalu kunci, tabel, nomor baris, FALSE.",
    "Tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "A01",
      "A02",
      "A03"
     ],
     [
      "Barang",
      "Pensil",
      "Buku",
      "Penggaris"
     ],
     [
      "Harga",
      3000,
      8000,
      5000
     ],
     [],
     [
      "Cari kode:",
      "A02"
     ],
     [
      "Harga:",
      ""
     ]
    ],
    "sel": "B6",
    "rumus": "=HLOOKUP(B5,A1:D3,3,FALSE)",
    "coba": [
     [
      "=HLOOKUP(B5,A1:D3,3,FALSE)",
      "Harga"
     ],
     [
      "=HLOOKUP(B5,A1:D3,2,FALSE)",
      "Nama barang"
     ]
    ]
   },
   "kuis": {
    "q": "HLOOKUP mencari kunci di...",
    "opsi": [
     "Kolom pertama",
     "Baris pertama",
     "Sel terakhir",
     "Sheet lain"
    ],
    "jawab": 1,
    "bahas": "Baris paling atas."
   },
   "kata": "hlookup cari mendatar baris",
   "gambar": [
    "g3-hasilrumushlookup-300x165.jpg",
    "g-1-data-hlookup-300x161.jpg",
    "g-2-argumenthlookup-300x174.jpg",
    "rumus-hlookup-excel-1.jpg",
    "rumus-hlookup-excel-2.jpg",
    "rumus-hlookup-excel-3.jpg",
    "rumus-hlookup-excel-4.jpg",
    "rumus-hlookup-excel-5.jpg",
    "rumus-hlookup-excel-6.jpg",
    "rumus-hlookup-excel-7.jpg",
    "rumus-hlookup-excel-8.jpg"
   ]
  },
  {
   "id": "match-index",
   "cat": "lookup",
   "judul": "MATCH dan INDEX: pasangan pencari fleksibel",
   "ringkas": "MATCH menemukan posisi sebuah nilai dalam deretan. INDEX mengambil isi sel pada posisi tertentu. Berdua, keduanya bisa mencari ke kiri, sesuatu yang tidak bisa dilakukan VLOOKUP.",
   "sintaks": "=MATCH(dicari; deret; [tipe])   =INDEX(rentang; baris; [kolom])",
   "argumen": [
    [
     "tipe",
     "0 = persis, 1 = terbesar yang tidak lebih dari nilai (terurut naik), -1 = terkecil yang tidak kurang dari nilai (terurut turun)"
    ],
    [
     "baris",
     "Nomor baris dalam rentang"
    ],
    [
     "kolom",
     "Nomor kolom dalam rentang"
    ]
   ],
   "langkah": [
    "Ketik =MATCH(nilai; kolom_kunci; 0) untuk memperoleh nomor baris.",
    "Bungkus dengan INDEX: =INDEX(kolom_hasil; MATCH(...)).",
    "Rentang kolom_hasil dan kolom_kunci boleh berada di sisi mana saja."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Barang",
      "Harga"
     ],
     [
      "A01",
      "Pensil",
      3000
     ],
     [
      "A02",
      "Buku",
      8000
     ],
     [
      "A03",
      "Penggaris",
      5000
     ],
     [
      "A04",
      "Penghapus",
      2000
     ],
     [],
     [
      "Cari nama:",
      "Buku"
     ],
     [
      "Kode:",
      ""
     ]
    ],
    "sel": "B8",
    "rumus": "=INDEX(A2:A5,MATCH(B7,B2:B5,0))",
    "coba": [
     [
      "=MATCH(B7,B2:B5,0)",
      "Posisi"
     ],
     [
      "=INDEX(A2:A5,MATCH(B7,B2:B5,0))",
      "Kode (mencari ke kiri)"
     ],
     [
      "=INDEX(C2:C5,MATCH(B7,B2:B5,0))",
      "Harga"
     ]
    ]
   },
   "kuis": {
    "q": "Tipe pencocokan MATCH yang mencari nilai persis adalah...",
    "opsi": [
     "0",
     "1",
     "-1",
     "2"
    ],
    "jawab": 0,
    "bahas": "Isi 0 untuk pencocokan persis."
   },
   "kata": "match index cari posisi",
   "gambar": [
    "contoh-fungsi-match.jpg",
    "fungsi-match.jpg"
   ]
  },
  {
   "id": "choose",
   "cat": "lookup",
   "judul": "CHOOSE: memilih dari daftar",
   "ringkas": "CHOOSE mengembalikan item ke-n dari daftar nilai yang kamu tulis langsung di rumus. Cocok untuk memberi nama pada angka 1 sampai 7.",
   "sintaks": "=CHOOSE(nomor; nilai1; nilai2; ...)",
   "argumen": [
    [
     "nomor",
     "Angka 1, 2, 3, ... yang menentukan pilihan"
    ],
    [
     "nilai1, nilai2, ...",
     "Daftar pilihan"
    ]
   ],
   "langkah": [
    "Ketik =CHOOSE(A2;\"Senin\";\"Selasa\";\"Rabu\").",
    "Nomor di luar jumlah pilihan menghasilkan #VALUE!."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Hari"
     ],
     [
      1,
      ""
     ],
     [
      3,
      ""
     ],
     [
      5,
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=CHOOSE(A2,\"Senin\",\"Selasa\",\"Rabu\",\"Kamis\",\"Jumat\")",
    "coba": [
     [
      "=CHOOSE(A2,\"Senin\",\"Selasa\",\"Rabu\",\"Kamis\",\"Jumat\")",
      "Nama hari"
     ],
     [
      "=CHOOSE(2,A2,A3,A4)",
      "Ambil sel ke-2"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =CHOOSE(2;\"x\";\"y\";\"z\")?",
    "opsi": [
     "x",
     "y",
     "z",
     "2"
    ],
    "jawab": 1,
    "bahas": "Item kedua."
   },
   "kata": "choose pilih daftar",
   "gambar": [
    "fungsi-argumen-choose-300x172.jpg",
    "fungsi-choose-excel-300x112.jpg"
   ]
  },
  {
   "id": "alamat-sel",
   "cat": "lookup",
   "judul": "ADDRESS, ROW, COLUMN, ROWS, COLUMNS, AREAS",
   "ringkas": "Kumpulan fungsi yang menanyakan posisi: nomor baris atau kolom, jumlah baris atau kolom, dan alamat sel dalam bentuk teks.",
   "sintaks": "=ADDRESS(baris; kolom; [jenis])  =ROW([sel])  =COLUMN([sel])  =ROWS(rentang)  =COLUMNS(rentang)",
   "argumen": [
    [
     "jenis",
     "1 = $A$1, 2 = A$1, 3 = $A1, 4 = A1"
    ]
   ],
   "langkah": [
    "=ROW(C5) menghasilkan 5, =COLUMN(C5) menghasilkan 3.",
    "=ROWS(A1:B10) menghasilkan 10, =COLUMNS(A1:B10) menghasilkan 2.",
    "=ADDRESS(2;3) menghasilkan teks $C$2.",
    "AREAS menghitung berapa area dalam sebuah referensi."
   ],
   "demo": {
    "data": [
     [
      "A",
      "B",
      "C"
     ],
     [
      1,
      2,
      3
     ],
     [
      4,
      5,
      6
     ]
    ],
    "sel": "E2",
    "rumus": "=ADDRESS(2,3)",
    "coba": [
     [
      "=ADDRESS(2,3)",
      "Teks alamat $C$2"
     ],
     [
      "=ADDRESS(2,3,4)",
      "Relatif C2"
     ],
     [
      "=ROW(C3)",
      "Nomor baris"
     ],
     [
      "=COLUMN(C3)",
      "Nomor kolom"
     ],
     [
      "=ROWS(A1:C3)",
      "Jumlah baris"
     ],
     [
      "=COLUMNS(A1:C3)",
      "Jumlah kolom"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =COLUMN(D1)?",
    "opsi": [
     "1",
     "3",
     "4",
     "D"
    ],
    "jawab": 2,
    "bahas": "Kolom D adalah kolom ke-4."
   },
   "kata": "address row column rows columns areas alamat",
   "gambar": [
    "areas-1.jpg",
    "areas-2.jpg",
    "column-1-1.jpg",
    "column-2-atau-columns-1.jpg",
    "columns-2.jpg",
    "fungsi-address-pada-excel-300x125.jpg",
    "row-1-001.jpg",
    "row-1.jpg",
    "row-2.jpg",
    "rows-2.jpg"
   ]
  },
  {
   "id": "lookup-jurusan",
   "cat": "lookup",
   "judul": "Lookup untuk laporan: jurusan dan tarif",
   "ringkas": "Contoh kasus: tabel tiket kereta yang mengambil jurusan dan harga dari tabel data memakai kode.",
   "langkah": [
    "Siapkan tabel referensi berisi kode, nama, jurusan, dan harga tiap kelas.",
    "Di laporan, ambil jurusan dengan VLOOKUP berdasarkan kode kereta.",
    "Pilih kolom tarif dengan IF atau MATCH sesuai kelas (Eksekutif, Bisnis, Ekonomi).",
    "Gunakan IFERROR agar kode yang tidak ada tidak menampilkan #N/A."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Kereta",
      "Jurusan",
      "Eksekutif",
      "Bisnis",
      "Ekonomi"
     ],
     [
      1,
      "Argo Anggrek",
      "Jakarta",
      350000,
      200000,
      150000
     ],
     [
      2,
      "Argo Lawu",
      "Semarang",
      300000,
      175000,
      125000
     ],
     [
      3,
      "Bima",
      "Yogyakarta",
      275000,
      150000,
      85000
     ],
     [],
     [
      "Kode:",
      2
     ],
     [
      "Kelas:",
      "Bisnis"
     ],
     [
      "Tarif:",
      ""
     ]
    ],
    "sel": "B8",
    "rumus": "=INDEX(D2:F4,MATCH(B6,A2:A4,0),MATCH(B7,D1:F1,0))",
    "coba": [
     [
      "=INDEX(D2:F4,MATCH(B6,A2:A4,0),MATCH(B7,D1:F1,0))",
      "Tarif dari dua penelusuran"
     ],
     [
      "=VLOOKUP(B6,A2:C4,3,FALSE)",
      "Jurusan"
     ]
    ],
    "catatan": "Ubah kode dan kelas untuk memeriksa tarif."
   },
   "kuis": {
    "q": "Kombinasi apa yang mencari berdasarkan baris dan kolom sekaligus?",
    "opsi": [
     "INDEX + MATCH + MATCH",
     "SUM + IF",
     "LEFT + MID",
     "COUNT + RANK"
    ],
    "jawab": 0,
    "bahas": "Satu MATCH untuk baris dan satu untuk kolom."
   },
   "kata": "lookup jurusan tiket kereta tarif",
   "gambar": [
    "contoh-data-300x85.jpg",
    "contoh-data-300x214.jpg",
    "data-mencari-jurusan-300x100.jpg",
    "hasil-penggunaan-rumus-300x228.jpg",
    "hasil-rumus-jurusan-dll-300x102.jpg",
    "rumus-mencari-kelas-300x99.jpg",
    "tabel-data-jurusan-300x221.jpg"
   ]
  },
  {
   "id": "tanggal-dasar",
   "cat": "tanggal",
   "judul": "Cara Excel menyimpan tanggal",
   "ringkas": "Excel menyimpan tanggal sebagai nomor urut hari sejak 1 Januari 1900. Karena itu tanggal bisa dikurangkan atau ditambah seperti angka biasa.",
   "sintaks": "=DATE(tahun; bulan; hari)   =TODAY()   =NOW()",
   "argumen": [
    [
     "DATE",
     "Membuat tanggal dari tiga angka"
    ],
    [
     "TODAY()",
     "Tanggal hari ini, berubah tiap hari"
    ],
    [
     "NOW()",
     "Tanggal dan jam saat ini"
    ]
   ],
   "langkah": [
    "Ketik tanggal dengan pola sesuai pengaturan regional, misalnya 02/10/2026.",
    "Bila tampil sebagai angka, ubah format sel menjadi Short Date.",
    "Hitung selisih dengan pengurangan: =B2-A2.",
    "=A2+30 menghasilkan tanggal 30 hari setelah A2."
   ],
   "demo": {
    "data": [
     [
      "Tanggal",
      "Tambah 30 hari"
     ],
     [
      "02/10/2026",
      ""
     ],
     [
      "15/08/2026",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=A2+30",
    "coba": [
     [
      "=A2+30",
      "30 hari kemudian"
     ],
     [
      "=DATE(2026,12,25)",
      "Natal 2026"
     ],
     [
      "=EDATE(A2,1)",
      "Bulan depan"
     ],
     [
      "=EOMONTH(A2,0)",
      "Akhir bulan"
     ],
     [
      "=A2",
      "Tampilan tanggal"
     ]
    ],
    "catatan": "Format tanggal: dd/mm/yyyy."
   },
   "kuis": {
    "q": "Bagaimana Excel menyimpan tanggal?",
    "opsi": [
     "Sebagai teks",
     "Sebagai nomor urut hari",
     "Sebagai gambar",
     "Sebagai tiga sel"
    ],
    "jawab": 1,
    "bahas": "Sebagai nomor urut, sehingga bisa dihitung."
   },
   "kata": "tanggal date today now serial",
   "gambar": [
    "date-dan-time-5.jpg",
    "date-dan-time-6.jpg",
    "date-dan-time.jpg",
    "fungsi-dmy.jpg"
   ]
  },
  {
   "id": "day-month-year",
   "cat": "tanggal",
   "judul": "DAY, MONTH, YEAR: memecah tanggal",
   "ringkas": "Tiga fungsi ini mengambil hari, bulan, dan tahun dari sebuah tanggal.",
   "sintaks": "=DAY(tanggal)   =MONTH(tanggal)   =YEAR(tanggal)",
   "argumen": [
    [
     "tanggal",
     "Tanggal atau sel yang berisi tanggal"
    ]
   ],
   "langkah": [
    "Ketik =DAY(A2) untuk mendapat angka hari.",
    "=MONTH(A2) untuk bulan 1 sampai 12.",
    "=YEAR(A2) untuk tahun.",
    "Gabungkan dengan DATE untuk menyusun ulang, misalnya =DATE(YEAR(A2)+1;MONTH(A2);DAY(A2))."
   ],
   "demo": {
    "data": [
     [
      "Tanggal lahir",
      "Hari",
      "Bulan",
      "Tahun"
     ],
     [
      "15/08/2000",
      "",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=DAY(A2)",
    "coba": [
     [
      "=DAY(A2)",
      "Hari"
     ],
     [
      "=MONTH(A2)",
      "Bulan"
     ],
     [
      "=YEAR(A2)",
      "Tahun"
     ],
     [
      "=DATE(YEAR(A2)+17,MONTH(A2),DAY(A2))",
      "Ulang tahun ke-17"
     ],
     [
      "=TEXT(A2,\"mmmm\")",
      "Nama bulan"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =MONTH(DATE(2026;10;2))?",
    "opsi": [
     "2",
     "10",
     "2026",
     "1"
    ],
    "jawab": 1,
    "bahas": "Bulan Oktober adalah bulan ke-10."
   },
   "kata": "day month year hari bulan tahun",
   "gambar": [
    "fungsi-day.jpg",
    "fungsi-month.jpg",
    "fungsi-year.jpg"
   ]
  },
  {
   "id": "jam",
   "cat": "tanggal",
   "judul": "HOUR, MINUTE, SECOND: memecah jam",
   "ringkas": "Fungsi ini mengambil jam, menit, dan detik dari nilai waktu.",
   "sintaks": "=HOUR(waktu)   =MINUTE(waktu)   =SECOND(waktu)",
   "argumen": [
    [
     "waktu",
     "Nilai waktu, misalnya hasil TIME atau NOW"
    ]
   ],
   "langkah": [
    "Ketik =HOUR(A2) untuk jam (0 sampai 23).",
    "=MINUTE(A2) untuk menit (0 sampai 59).",
    "=SECOND(A2) untuk detik (0 sampai 59)."
   ],
   "demo": {
    "data": [
     [
      "Waktu",
      "Jam",
      "Menit",
      "Detik"
     ],
     [
      "=TIME(13,45,30)",
      "",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=HOUR(A2)",
    "coba": [
     [
      "=HOUR(A2)",
      "Jam"
     ],
     [
      "=MINUTE(A2)",
      "Menit"
     ],
     [
      "=SECOND(A2)",
      "Detik"
     ],
     [
      "=HOUR(A2)*60+MINUTE(A2)",
      "Total menit sejak tengah malam"
     ]
    ]
   },
   "kuis": {
    "q": "Rentang hasil HOUR adalah...",
    "opsi": [
     "1 sampai 12",
     "0 sampai 23",
     "0 sampai 59",
     "1 sampai 24"
    ],
    "jawab": 1,
    "bahas": "Jam dalam format 24 jam."
   },
   "kata": "hour minute second jam menit detik",
   "gambar": [
    "fungsi-hour.jpg",
    "fungsi-minute.jpg",
    "fungsi-second.jpg"
   ]
  },
  {
   "id": "weekday",
   "cat": "tanggal",
   "judul": "WEEKDAY: mengetahui hari dalam seminggu",
   "ringkas": "WEEKDAY mengubah tanggal menjadi nomor hari. Gabungkan dengan CHOOSE atau TEXT untuk menampilkan namanya.",
   "sintaks": "=WEEKDAY(tanggal; [tipe])",
   "argumen": [
    [
     "tanggal",
     "Tanggal"
    ],
    [
     "tipe",
     "1 = Minggu(1) sampai Sabtu(7), default; 2 = Senin(1) sampai Minggu(7)"
    ]
   ],
   "langkah": [
    "Ketik =WEEKDAY(A2;2) agar Senin bernilai 1.",
    "Ubah ke nama hari dengan =TEXT(A2;\"dddd\") atau =CHOOSE(WEEKDAY(A2;2);\"Senin\";\"Selasa\";...).",
    "Gunakan syarat WEEKDAY(A2;2)>5 untuk mendeteksi akhir pekan."
   ],
   "demo": {
    "data": [
     [
      "Tanggal",
      "No hari",
      "Nama hari"
     ],
     [
      "02/10/2026",
      "",
      ""
     ],
     [
      "03/10/2026",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=WEEKDAY(A2,2)",
    "coba": [
     [
      "=WEEKDAY(A2,2)",
      "Senin = 1"
     ],
     [
      "=WEEKDAY(A2)",
      "Minggu = 1"
     ],
     [
      "=TEXT(A2,\"dddd\")",
      "Nama hari"
     ],
     [
      "=IF(WEEKDAY(A2,2)>5,\"Akhir pekan\",\"Hari kerja\")",
      "Akhir pekan atau bukan"
     ]
    ]
   },
   "kuis": {
    "q": "Dengan WEEKDAY(tanggal;2), hari Minggu bernilai...",
    "opsi": [
     "1",
     "7",
     "0",
     "2"
    ],
    "jawab": 1,
    "bahas": "Tipe 2: Senin = 1 hingga Minggu = 7."
   },
   "kata": "weekday hari minggu senin",
   "gambar": [
    "hari-weekday-2.jpg",
    "hari-weekday.jpg",
    "hari.jpg"
   ]
  },
  {
   "id": "selisih-hari",
   "cat": "tanggal",
   "judul": "Menghitung selisih hari, bulan, dan tahun",
   "ringkas": "Pengurangan sederhana menghasilkan jumlah hari. Untuk bulan atau tahun penuh (misalnya umur), pakai DATEDIF.",
   "sintaks": "=DATEDIF(awal; akhir; \"satuan\")",
   "argumen": [
    [
     "awal",
     "Tanggal mulai"
    ],
    [
     "akhir",
     "Tanggal akhir, tidak boleh lebih kecil"
    ],
    [
     "\"Y\"  \"M\"  \"D\"",
     "Satuan: tahun, bulan, atau hari penuh"
    ]
   ],
   "langkah": [
    "Selisih hari: =B2-A2 (format hasil sebagai General).",
    "Umur: =DATEDIF(A2;TODAY();\"Y\").",
    "Masa kerja bulan: =DATEDIF(A2;B2;\"M\")."
   ],
   "tips": [
    "DATEDIF tidak muncul di daftar fungsi, tetapi tetap berfungsi bila diketik langsung."
   ],
   "demo": {
    "data": [
     [
      "Tanggal lahir",
      "Tanggal acuan",
      "Umur"
     ],
     [
      "15/08/2000",
      "02/10/2026",
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=DATEDIF(A2,B2,\"Y\")",
    "coba": [
     [
      "=DATEDIF(A2,B2,\"Y\")",
      "Tahun penuh"
     ],
     [
      "=DATEDIF(A2,B2,\"M\")",
      "Bulan penuh"
     ],
     [
      "=B2-A2",
      "Selisih hari"
     ],
     [
      "=DAYS(B2,A2)",
      "DAYS"
     ]
    ]
   },
   "kuis": {
    "q": "Argumen satuan \"Y\" pada DATEDIF berarti...",
    "opsi": [
     "Tahun penuh",
     "Hari",
     "Bulan",
     "Minggu"
    ],
    "jawab": 0,
    "bahas": "Y = year."
   },
   "kata": "datedif selisih hari umur masa kerja",
   "gambar": [
    "hasil-rumus-rentang-hari-300x166.jpg"
   ]
  },
  {
   "id": "networkdays",
   "cat": "tanggal",
   "judul": "NETWORKDAYS: menghitung hari kerja",
   "ringkas": "NETWORKDAYS menghitung jumlah hari kerja (Senin sampai Jumat) di antara dua tanggal dan dapat mengecualikan hari libur.",
   "sintaks": "=NETWORKDAYS(awal; akhir; [libur])",
   "argumen": [
    [
     "awal",
     "Tanggal mulai"
    ],
    [
     "akhir",
     "Tanggal selesai"
    ],
    [
     "libur",
     "Rentang tanggal libur (opsional)"
    ]
   ],
   "langkah": [
    "Tulis daftar hari libur di beberapa sel.",
    "Ketik =NETWORKDAYS( lalu tanggal awal, tanggal akhir, dan rentang libur.",
    "Tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Mulai",
      "Selesai",
      "Hari kerja"
     ],
     [
      "01/10/2026",
      "31/10/2026",
      ""
     ],
     [],
     [
      "Libur"
     ],
     [
      "17/10/2026"
     ]
    ],
    "sel": "C2",
    "rumus": "=NETWORKDAYS(A2,B2)",
    "coba": [
     [
      "=NETWORKDAYS(A2,B2)",
      "Tanpa libur"
     ],
     [
      "=NETWORKDAYS(A2,B2,A5)",
      "Dikurangi satu hari libur"
     ],
     [
      "=WORKDAY(A2,10)",
      "Sepuluh hari kerja setelah awal"
     ]
    ]
   },
   "kuis": {
    "q": "Hari yang dihitung NETWORKDAYS sebagai hari kerja adalah...",
    "opsi": [
     "Senin sampai Jumat",
     "Senin sampai Sabtu",
     "Setiap hari",
     "Selasa sampai Sabtu"
    ],
    "jawab": 0,
    "bahas": "Sabtu dan Minggu tidak dihitung."
   },
   "kata": "networkdays hari kerja libur",
   "gambar": [
    "networksday-1-300x98.jpg",
    "networksday-2-238x300.jpg",
    "networksday-3-300x226.jpg",
    "networksday-4-300x123.jpg",
    "networksday-5-300x97.jpg",
    "networksday-6-300x99.jpg"
   ]
  },
  {
   "id": "weeknum",
   "cat": "tanggal",
   "judul": "WEEKNUM: nomor minggu",
   "ringkas": "WEEKNUM menghasilkan nomor minggu dalam setahun, berguna untuk laporan mingguan.",
   "sintaks": "=WEEKNUM(tanggal; [tipe])",
   "argumen": [
    [
     "tanggal",
     "Tanggal"
    ],
    [
     "tipe",
     "1 = minggu mulai Minggu (default); 2 = minggu mulai Senin"
    ]
   ],
   "langkah": [
    "Ketik =WEEKNUM(A2) lalu Enter.",
    "Minggu yang memuat 1 Januari dihitung sebagai minggu ke-1."
   ],
   "demo": {
    "data": [
     [
      "Tanggal",
      "Minggu ke"
     ],
     [
      "02/10/2026",
      ""
     ],
     [
      "01/01/2026",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=WEEKNUM(A2)",
    "coba": [
     [
      "=WEEKNUM(A2)",
      "Nomor minggu"
     ]
    ]
   },
   "kuis": {
    "q": "Pada sistem default, minggu ke-1 adalah minggu yang memuat...",
    "opsi": [
     "1 Januari",
     "Hari Senin pertama",
     "1 Februari",
     "Tanggal 7 Januari"
    ],
    "jawab": 0,
    "bahas": "Minggu yang memuat 1 Januari."
   },
   "kata": "weeknum minggu ke",
   "gambar": [
    "39-fungsi-weeknum-excel.jpg"
   ]
  },
  {
   "id": "hijriyah",
   "cat": "tanggal",
   "judul": "Kalender Hijriyah",
   "ringkas": "Tangkapan layar menunjukkan cara menampilkan tanggal dalam kalender Hijriyah di Excel.",
   "langkah": [
    "Ketik tanggal Masehi di sel.",
    "Buka Format Cells (Ctrl+1) > Date.",
    "Pilih tipe kalender Hijri bila tersedia di pengaturan regional komputer.",
    "Ikuti tangkapan layar di bawah untuk melihat urutan klik dan hasilnya."
   ],
   "kuis": {
    "q": "Pengaturan tampilan kalender dilakukan melalui...",
    "opsi": [
     "Format Cells",
     "Insert Chart",
     "Data Validation",
     "Sort"
    ],
    "jawab": 0,
    "bahas": "Format Cells > Date."
   },
   "kata": "hijriyah kalender islam",
   "gambar": [
    "kalender-hijriyah-1.jpg",
    "kalender-hijriyah-2.jpg"
   ]
  },
  {
   "id": "abs-sqrt",
   "cat": "mate",
   "judul": "ABS dan SQRT: harga mutlak dan akar",
   "ringkas": "ABS membuang tanda negatif. SQRT menghitung akar kuadrat dan memberi #NUM! bila angkanya negatif.",
   "sintaks": "=ABS(angka)   =SQRT(angka)",
   "argumen": [
    [
     "angka",
     "Bilangan atau sel"
    ]
   ],
   "langkah": [
    "=ABS(-12) menghasilkan 12.",
    "=SQRT(81) menghasilkan 9.",
    "Untuk akar dari angka yang mungkin negatif, pakai =SQRT(ABS(A2))."
   ],
   "demo": {
    "data": [
     [
      "Angka",
      "ABS",
      "Akar"
     ],
     [
      -16,
      "",
      ""
     ],
     [
      25,
      "",
      ""
     ],
     [
      81,
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=ABS(A2)",
    "coba": [
     [
      "=ABS(A2)",
      "Harga mutlak"
     ],
     [
      "=SQRT(ABS(A2))",
      "Akar dari harga mutlak"
     ],
     [
      "=SQRT(A2)",
      "Galat bila negatif"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =SQRT(-9)?",
    "opsi": [
     "3",
     "-3",
     "#NUM!",
     "0"
    ],
    "jawab": 2,
    "bahas": "Akar bilangan negatif tidak terdefinisi: #NUM!."
   },
   "kata": "abs sqrt akar mutlak",
   "gambar": [
    "function-arg-abs.jpg",
    "function-arg-sqrt-300x137.jpg",
    "fungsi-abs.jpg",
    "hasil-sqrt-abs-300x154.jpg",
    "rumus-sqrt-300x192.jpg",
    "sqrt-angka-negatif-300x166.jpg"
   ]
  },
  {
   "id": "round",
   "cat": "mate",
   "judul": "ROUND, ROUNDUP, ROUNDDOWN: pembulatan",
   "ringkas": "ROUND membulatkan seperti biasa, ROUNDUP selalu ke atas, ROUNDDOWN selalu ke bawah (menjauh dari atau mendekat ke nol).",
   "sintaks": "=ROUND(angka; digit)",
   "argumen": [
    [
     "angka",
     "Bilangan yang dibulatkan"
    ],
    [
     "digit",
     "Jumlah desimal. Negatif membulatkan ke puluhan, ratusan, dst."
    ]
   ],
   "langkah": [
    "=ROUND(2,345;2) menghasilkan 2,35.",
    "=ROUND(1234;-2) menghasilkan 1200.",
    "=ROUNDUP(2,341;2) menghasilkan 2,35.",
    "=ROUNDDOWN(2,349;2) menghasilkan 2,34."
   ],
   "demo": {
    "data": [
     [
      "Angka",
      "ROUND",
      "ROUNDUP",
      "ROUNDDOWN"
     ],
     [
      2.345,
      "",
      "",
      ""
     ],
     [
      1234.5678,
      "",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=ROUND(A2,2)",
    "coba": [
     [
      "=ROUND(A2,2)",
      "Dua desimal"
     ],
     [
      "=ROUNDUP(A2,2)",
      "Ke atas"
     ],
     [
      "=ROUNDDOWN(A2,2)",
      "Ke bawah"
     ],
     [
      "=ROUND(A2,-2)",
      "Ke ratusan"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =ROUNDDOWN(7,89;1)?",
    "opsi": [
     "7,8",
     "7,9",
     "8",
     "7"
    ],
    "jawab": 0,
    "bahas": "Dipotong ke bawah pada satu desimal."
   },
   "kata": "round roundup rounddown bulat",
   "gambar": [
    "data-dan-rumus-roundroundup-dll-300x137.jpg",
    "function-arg-round-300x161.jpg",
    "function-arg-rounddown-300x160.jpg",
    "function-arg-roundup-300x161.jpg"
   ]
  },
  {
   "id": "int",
   "cat": "mate",
   "judul": "INT: bagian bulat",
   "ringkas": "INT membulatkan ke bawah menjadi bilangan bulat terdekat yang tidak lebih besar dari angkanya.",
   "sintaks": "=INT(angka)",
   "argumen": [
    [
     "angka",
     "Bilangan"
    ]
   ],
   "langkah": [
    "=INT(8,9) menghasilkan 8.",
    "=INT(-8,1) menghasilkan -9 (membulat ke bawah).",
    "Untuk hanya membuang desimal tanpa melihat tanda, pakai TRUNC."
   ],
   "demo": {
    "data": [
     [
      "Angka",
      "INT",
      "TRUNC"
     ],
     [
      8.9,
      "",
      ""
     ],
     [
      -8.1,
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=INT(A2)",
    "coba": [
     [
      "=INT(A2)",
      "INT"
     ],
     [
      "=TRUNC(A2)",
      "TRUNC"
     ],
     [
      "=MOD(A2,1)",
      "Sisa desimal"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =INT(-2,5)?",
    "opsi": [
     "-2",
     "-3",
     "-2,5",
     "2"
    ],
    "jawab": 1,
    "bahas": "INT membulatkan ke bawah, yaitu -3."
   },
   "kata": "int bulat integer",
   "gambar": [
    "rumus-int-data.jpg"
   ]
  },
  {
   "id": "log",
   "cat": "mate",
   "judul": "LOG, LN, LOG10: logaritma",
   "ringkas": "LOG menghitung logaritma dengan basis pilihan (default 10). LN memakai basis e. LOG10 selalu basis 10.",
   "sintaks": "=LOG(angka; [basis])   =LN(angka)   =LOG10(angka)",
   "argumen": [
    [
     "angka",
     "Bilangan positif"
    ],
    [
     "basis",
     "Basis logaritma, default 10"
    ]
   ],
   "langkah": [
    "=LOG(1000) menghasilkan 3.",
    "=LOG(8;2) menghasilkan 3.",
    "=LN(EXP(1)) menghasilkan 1."
   ],
   "demo": {
    "data": [
     [
      "Angka",
      "LOG",
      "LN",
      "LOG basis 2"
     ],
     [
      8,
      "",
      "",
      ""
     ],
     [
      1000,
      "",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=LOG(A2)",
    "coba": [
     [
      "=LOG(A2)",
      "Basis 10"
     ],
     [
      "=LN(A2)",
      "Basis e"
     ],
     [
      "=LOG(A2,2)",
      "Basis 2"
     ],
     [
      "=LOG10(A2)",
      "LOG10"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =LOG(100)?",
    "opsi": [
     "1",
     "2",
     "10",
     "100"
    ],
    "jawab": 1,
    "bahas": "10 pangkat 2 = 100."
   },
   "kata": "log ln logaritma",
   "gambar": [
    "data-dan-hasil-rumus-lnloglog-10.jpg",
    "function-arg-log-10.jpg",
    "function-arg-log.jpg"
   ]
  },
  {
   "id": "trigonometri",
   "cat": "mate",
   "judul": "SIN, COS, TAN dan kebalikannya",
   "ringkas": "Fungsi trigonometri Excel bekerja dalam radian. Ubah derajat menjadi radian dengan RADIANS sebelum menghitung.",
   "sintaks": "=SIN(RADIANS(derajat))   =ASIN(nilai)   =DEGREES(radian)",
   "argumen": [
    [
     "derajat",
     "Sudut dalam derajat"
    ],
    [
     "RADIANS()",
     "Mengubah derajat menjadi radian"
    ],
    [
     "DEGREES()",
     "Mengubah radian menjadi derajat"
    ]
   ],
   "langkah": [
    "=SIN(RADIANS(30)) menghasilkan 0,5.",
    "=COS(RADIANS(60)) juga menghasilkan 0,5.",
    "=DEGREES(ASIN(0,5)) menghasilkan 30.",
    "ASIN, ACOS, ATAN adalah fungsi kebalikan dan menghasilkan radian."
   ],
   "demo": {
    "data": [
     [
      "Sudut",
      "SIN",
      "COS",
      "TAN"
     ],
     [
      30,
      "",
      "",
      ""
     ],
     [
      45,
      "",
      "",
      ""
     ],
     [
      60,
      "",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=SIN(RADIANS(A2))",
    "coba": [
     [
      "=SIN(RADIANS(A2))",
      "SIN"
     ],
     [
      "=COS(RADIANS(A2))",
      "COS"
     ],
     [
      "=TAN(RADIANS(A2))",
      "TAN"
     ],
     [
      "=DEGREES(ASIN(0.5))",
      "ASIN kembali ke derajat"
     ]
    ],
    "catatan": "Kolom sudut dalam derajat."
   },
   "kuis": {
    "q": "Mengapa SIN(30) tidak menghasilkan 0,5 di Excel?",
    "opsi": [
     "Excel membaca 30 sebagai radian",
     "Excel salah hitung",
     "SIN hanya untuk 0 sampai 1",
     "Perlu tanda $"
    ],
    "jawab": 0,
    "bahas": "Gunakan RADIANS(30)."
   },
   "kata": "sin cos tan asin acos atan trigonometri sudut",
   "gambar": [
    "contoh-data-cos.jpg",
    "contoh-data-sin.jpg",
    "contoh-data-tan.jpg",
    "contoh-rumus-acosasinatan-300x174.jpg",
    "function-argument-cos.jpg",
    "function-argument-sin.jpg",
    "function-argument-tan.jpg",
    "fungsi-asin.jpg",
    "fungsi-asinh-1.jpg",
    "rumus-asin.jpg",
    "rumus-asinh.jpg"
   ]
  },
  {
   "id": "even-odd",
   "cat": "mate",
   "judul": "EVEN, ODD, ISEVEN, ISODD",
   "ringkas": "EVEN dan ODD membulatkan ke bilangan genap atau ganjil terdekat (menjauhi nol). ISEVEN dan ISODD menjawab benar atau salah.",
   "sintaks": "=EVEN(angka)   =ODD(angka)   =ISEVEN(angka)   =ISODD(angka)",
   "argumen": [
    [
     "angka",
     "Bilangan yang diperiksa"
    ]
   ],
   "langkah": [
    "=EVEN(3) menghasilkan 4.",
    "=ODD(4) menghasilkan 5.",
    "=ISEVEN(8) menghasilkan TRUE.",
    "Pakai =IF(ISEVEN(A2);\"Genap\";\"Ganjil\") untuk teks."
   ],
   "demo": {
    "data": [
     [
      "Angka",
      "EVEN",
      "ODD",
      "Jenis"
     ],
     [
      3,
      "",
      "",
      ""
     ],
     [
      8,
      "",
      "",
      ""
     ],
     [
      11,
      "",
      "",
      ""
     ]
    ],
    "sel": "D2",
    "rumus": "=IF(ISEVEN(A2),\"Genap\",\"Ganjil\")",
    "coba": [
     [
      "=IF(ISEVEN(A2),\"Genap\",\"Ganjil\")",
      "Penanda"
     ],
     [
      "=EVEN(A2)",
      "EVEN"
     ],
     [
      "=ODD(A2)",
      "ODD"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =ODD(4)?",
    "opsi": [
     "3",
     "4",
     "5",
     "6"
    ],
    "jawab": 2,
    "bahas": "Dibulatkan ke ganjil terdekat menjauhi nol: 5."
   },
   "kata": "even odd genap ganjil",
   "gambar": [
    "fungsi-argumen-odd.jpg",
    "fungsi-argument-even-300x137.jpg",
    "hasil-rumus-even-dan-odd-300x249.jpg",
    "iseven-1-1024x334.jpg",
    "iseven-2.jpg",
    "isood-1.jpg",
    "isood-2-1024x445.jpg"
   ]
  },
  {
   "id": "roman",
   "cat": "mate",
   "judul": "ROMAN dan ARABIC: angka Romawi",
   "ringkas": "ROMAN mengubah angka biasa menjadi Romawi, ARABIC mengubah sebaliknya.",
   "sintaks": "=ROMAN(angka)   =ARABIC(teks)",
   "argumen": [
    [
     "angka",
     "Bilangan 0 sampai 3999"
    ],
    [
     "teks",
     "Angka Romawi, misalnya \"XIV\""
    ]
   ],
   "langkah": [
    "=ROMAN(2026) menghasilkan MMXXVI.",
    "=ARABIC(\"XIV\") menghasilkan 14."
   ],
   "demo": {
    "data": [
     [
      "Angka",
      "Romawi"
     ],
     [
      14,
      ""
     ],
     [
      1994,
      ""
     ],
     [
      2026,
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=ROMAN(A2)",
    "coba": [
     [
      "=ROMAN(A2)",
      "Angka Romawi"
     ],
     [
      "=ARABIC(\"MCMXCIV\")",
      "Kembali ke angka"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =ROMAN(9)?",
    "opsi": [
     "VIIII",
     "IX",
     "XI",
     "IV"
    ],
    "jawab": 1,
    "bahas": "9 ditulis IX."
   },
   "kata": "roman arabic romawi",
   "gambar": [
    "arabic-2.jpg",
    "arabic.jpg",
    "contoh-data-rumus-roman-300x135.jpg",
    "fungsi-argumen-roman-300x165.jpg"
   ]
  },
  {
   "id": "fpb-kpk",
   "cat": "mate",
   "judul": "GCD dan LCM: FPB dan KPK",
   "ringkas": "GCD mencari faktor persekutuan terbesar (FPB), LCM mencari kelipatan persekutuan terkecil (KPK).",
   "sintaks": "=GCD(a; b; ...)   =LCM(a; b; ...)",
   "argumen": [
    [
     "a, b, ...",
     "Bilangan bulat positif"
    ]
   ],
   "langkah": [
    "=GCD(12;18) menghasilkan 6.",
    "=LCM(4;6) menghasilkan 12.",
    "Keduanya menerima lebih dari dua bilangan."
   ],
   "demo": {
    "data": [
     [
      "a",
      "b",
      "FPB",
      "KPK"
     ],
     [
      12,
      18,
      "",
      ""
     ],
     [
      8,
      20,
      "",
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=GCD(A2,B2)",
    "coba": [
     [
      "=GCD(A2,B2)",
      "FPB"
     ],
     [
      "=LCM(A2,B2)",
      "KPK"
     ],
     [
      "=A2*B2/GCD(A2,B2)",
      "KPK lewat FPB"
     ]
    ]
   },
   "kuis": {
    "q": "FPB dari 12 dan 18 adalah...",
    "opsi": [
     "3",
     "6",
     "12",
     "36"
    ],
    "jawab": 1,
    "bahas": "Faktor terbesar yang membagi keduanya adalah 6."
   },
   "kata": "gcd lcm fpb kpk",
   "gambar": [
    "faktor-persekutuan-1-300x180.jpg",
    "faktor-persekutuan-2-300x184.jpg",
    "kelipatan-persekutuan-1-300x194.jpg",
    "kelipatan-persekutuan-2-300x190.jpg",
    "rumus-fpb-matematika-1.jpg",
    "rumus-fpb-matematika-2.jpg",
    "rumus-fpb-matematika-3.jpg",
    "rumus-fpb-matematika-4.jpg"
   ]
  },
  {
   "id": "matriks",
   "cat": "mate",
   "judul": "MMULT dan matriks",
   "ringkas": "MMULT mengalikan dua matriks. Hasilnya berupa array, sehingga harus dimasukkan sebagai array formula.",
   "sintaks": "=MMULT(matriks1; matriks2)",
   "argumen": [
    [
     "matriks1",
     "Matriks pertama"
    ],
    [
     "matriks2",
     "Matriks kedua; jumlah barisnya harus sama dengan jumlah kolom matriks pertama"
    ]
   ],
   "langkah": [
    "Blok area hasil seukuran hasil perkalian (baris matriks 1 x kolom matriks 2).",
    "Ketik =MMULT( lalu pilih matriks pertama dan kedua.",
    "Excel 365 langsung menampilkan hasil; versi lama perlu Ctrl+Shift+Enter."
   ],
   "kuis": {
    "q": "Syarat dua matriks bisa dikalikan adalah...",
    "opsi": [
     "Kolom matriks 1 = baris matriks 2",
     "Baris sama",
     "Ukuran sama persis",
     "Hanya berisi angka bulat"
    ],
    "jawab": 0,
    "bahas": "Jumlah kolom matriks pertama harus sama dengan jumlah baris matriks kedua."
   },
   "kata": "mmult matriks perkalian",
   "gambar": [
    "contoh-data-mmult-300x125.jpg",
    "fungsi-argumen-mmult-300x140.jpg",
    "matrik-excel1.jpg",
    "matrik-excel2-300x93.jpg",
    "matrik-excel3.jpg",
    "matrik-excel4.jpg"
   ]
  },
  {
   "id": "konversi",
   "cat": "mate",
   "judul": "CONVERT dan konversi bilangan",
   "ringkas": "CONVERT mengubah satuan (misalnya km ke mil). Fungsi DEC2BIN, DEC2OCT, DEC2HEX mengubah bilangan desimal ke sistem bilangan lain.",
   "sintaks": "=CONVERT(angka; \"dari\"; \"ke\")   =DEC2OCT(angka)",
   "argumen": [
    [
     "angka",
     "Nilai"
    ],
    [
     "dari, ke",
     "Kode satuan, misalnya \"km\", \"mi\", \"kg\", \"lbm\""
    ]
   ],
   "langkah": [
    "=CONVERT(10;\"km\";\"mi\") menghasilkan sekitar 6,21.",
    "=DEC2OCT(64) menghasilkan 100.",
    "=DEC2BIN(10) menghasilkan 1010, =DEC2HEX(255) menghasilkan FF."
   ],
   "demo": {
    "data": [
     [
      "Desimal",
      "Biner",
      "Oktal",
      "Heksa"
     ],
     [
      10,
      "",
      "",
      ""
     ],
     [
      64,
      "",
      "",
      ""
     ],
     [
      255,
      "",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=DEC2BIN(A2)",
    "coba": [
     [
      "=DEC2BIN(A2)",
      "Biner"
     ],
     [
      "=DEC2OCT(A2)",
      "Oktal"
     ],
     [
      "=DEC2HEX(A2)",
      "Heksadesimal"
     ],
     [
      "=OCT2DEC(DEC2OCT(A2))",
      "Desimal ke oktal lalu kembali"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =DEC2BIN(5)?",
    "opsi": [
     "11",
     "101",
     "110",
     "1000"
    ],
    "jawab": 1,
    "bahas": "5 = 4 + 1 sehingga biner 101."
   },
   "kata": "convert konversi desimal oktal biner heksa",
   "gambar": [
    "fungsi-convert-1-300x158.jpg",
    "fungsi-convert-2-300x160.jpg",
    "fungsi-convert-3-300x159.jpg",
    "merubah-desimal-ke-oktal-1-300x190.jpg",
    "merubah-desimal-ke-oktal-2-300x189.jpg",
    "merubah-desimal-ke-oktal-3-300x190.jpg"
   ]
  },
  {
   "id": "dsum-dcount",
   "cat": "db",
   "judul": "DSUM dan DCOUNT: jumlah dan banyak data dengan kriteria",
   "ringkas": "Fungsi database bekerja pada tabel yang punya baris judul, dan memakai rentang kriteria terpisah yang berisi judul kolom plus syaratnya.",
   "sintaks": "=DSUM(database; field; kriteria)   =DCOUNT(database; field; kriteria)",
   "argumen": [
    [
     "database",
     "Seluruh tabel termasuk baris judul"
    ],
    [
     "field",
     "Kolom yang dihitung: nama judulnya dalam tanda kutip, atau nomor kolom"
    ],
    [
     "kriteria",
     "Rentang dua baris atau lebih: judul kolom di atas, syarat di bawahnya"
    ]
   ],
   "langkah": [
    "Buat rentang kriteria di luar tabel. Baris pertama berisi judul kolom yang persis sama dengan tabel, baris di bawahnya berisi syarat.",
    "Ketik =DSUM( lalu blok tabel termasuk judul.",
    "Isi field dengan \"Gaji\" dan blok rentang kriteria.",
    "Syarat pada satu baris dihubungkan dengan DAN; syarat pada baris berbeda dihubungkan dengan ATAU."
   ],
   "tips": [
    "DCOUNT hanya menghitung sel berisi angka. Untuk menghitung sel terisi apa pun, pakai DCOUNTA."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Jabatan",
      "Gaji"
     ],
     [
      "A",
      "Manajer",
      9000000
     ],
     [
      "B",
      "Staf",
      5000000
     ],
     [
      "C",
      "Staf",
      5500000
     ],
     [
      "D",
      "Manajer",
      8000000
     ],
     [
      "E",
      "Staf",
      4800000
     ],
     [],
     [
      "Jabatan",
      "Gaji"
     ],
     [
      "Staf",
      ">=5000000"
     ]
    ],
    "sel": "G2",
    "rumus": "=DSUM(A1:C6,\"Gaji\",A8:B9)",
    "coba": [
     [
      "=DSUM(A1:C6,\"Gaji\",A8:B9)",
      "Total gaji Staf dengan gaji 5 juta ke atas"
     ],
     [
      "=DCOUNT(A1:C6,\"Gaji\",A8:B9)",
      "Banyaknya"
     ],
     [
      "=DAVERAGE(A1:C6,\"Gaji\",A8:A9)",
      "Rata-rata semua Staf (kriteria hanya Jabatan)"
     ]
    ],
    "catatan": "Ubah syarat di A9:B9, misalnya Manajer, lalu hitung ulang."
   },
   "kuis": {
    "q": "Apa yang harus identik antara tabel database dan rentang kriteria?",
    "opsi": [
     "Judul kolom",
     "Jumlah baris",
     "Warna sel",
     "Nama sheet"
    ],
    "jawab": 0,
    "bahas": "Judul kolom di rentang kriteria harus sama dengan judul di tabel."
   },
   "kata": "dsum dcount database kriteria",
   "gambar": [
    "contoh-data-dcount-300x182.jpg",
    "fungsi-argumen-dcount-300x154.jpg",
    "fungsi-argumen-dsum-300x148.jpg",
    "hasil-data-n-rumus-dcount-300x112.jpg",
    "rumus-statistik-database-pegawai-1-280x300.jpg",
    "rumus-statistik-database-pegawai-2-280x300.jpg"
   ]
  },
  {
   "id": "dmax-dmin",
   "cat": "db",
   "judul": "DMAX dan DMIN: tertinggi dan terendah dengan kriteria",
   "ringkas": "DMAX dan DMIN mengambil nilai terbesar atau terkecil hanya dari baris yang memenuhi kriteria.",
   "sintaks": "=DMAX(database; field; kriteria)   =DMIN(database; field; kriteria)",
   "argumen": [
    [
     "database",
     "Tabel beserta judul"
    ],
    [
     "field",
     "Kolom angka"
    ],
    [
     "kriteria",
     "Rentang kriteria"
    ]
   ],
   "langkah": [
    "Siapkan rentang kriteria, misalnya Pendidikan = S1.",
    "Ketik =DMAX( lalu pilih tabel, field, dan kriteria.",
    "Untuk terendah, ganti fungsi menjadi DMIN."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Jabatan",
      "Gaji"
     ],
     [
      "A",
      "Manajer",
      9000000
     ],
     [
      "B",
      "Staf",
      5000000
     ],
     [
      "C",
      "Staf",
      5500000
     ],
     [
      "D",
      "Manajer",
      8000000
     ],
     [
      "E",
      "Staf",
      4800000
     ],
     [],
     [
      "Jabatan",
      "Gaji"
     ],
     [
      "Staf",
      ">=5000000"
     ]
    ],
    "sel": "G2",
    "rumus": "=DMAX(A1:C6,\"Gaji\",A8:A9)",
    "coba": [
     [
      "=DMAX(A1:C6,\"Gaji\",A8:B9)",
      "Gaji tertinggi Staf (5 juta ke atas)"
     ],
     [
      "=DMIN(A1:C6,\"Gaji\",A8:B9)",
      "Gaji terendah di syarat yang sama"
     ]
    ],
    "catatan": "A8 berisi judul Jabatan tetapi A9 harus Staf agar kriteria bekerja."
   },
   "kuis": {
    "q": "DMAX mengambil nilai terbesar dari...",
    "opsi": [
     "Baris yang memenuhi kriteria",
     "Seluruh tabel",
     "Baris judul",
     "Kolom pertama"
    ],
    "jawab": 0,
    "bahas": "Hanya dari baris yang lolos kriteria."
   },
   "kata": "dmax dmin database tertinggi terendah",
   "gambar": [
    "contoh-data-dmax-300x184.jpg",
    "data-dmin-300x181.jpg",
    "fungsi-argumen-dmax-300x149.jpg",
    "fungsi-argumen-dmin-300x147.jpg",
    "gambar-2.jpg",
    "gambar-3.jpg",
    "gambar-4.jpg",
    "gambar-6.jpg",
    "hasil-rumus-dmin-300x102.jpg",
    "hasil-rumus-n-data-tabel-dmax-300x93.jpg"
   ]
  },
  {
   "id": "daverage",
   "cat": "db",
   "judul": "DAVERAGE: rata-rata dengan kriteria",
   "ringkas": "DAVERAGE menghitung rata-rata kolom angka dari baris yang memenuhi kriteria.",
   "sintaks": "=DAVERAGE(database; field; kriteria)",
   "argumen": [
    [
     "database",
     "Tabel beserta judul"
    ],
    [
     "field",
     "Kolom yang dirata-ratakan"
    ],
    [
     "kriteria",
     "Rentang kriteria"
    ]
   ],
   "langkah": [
    "Siapkan rentang kriteria.",
    "Ketik =DAVERAGE( lalu tabel, field, kriteria.",
    "Tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Jabatan",
      "Gaji"
     ],
     [
      "A",
      "Manajer",
      9000000
     ],
     [
      "B",
      "Staf",
      5000000
     ],
     [
      "C",
      "Staf",
      5500000
     ],
     [
      "D",
      "Manajer",
      8000000
     ],
     [
      "E",
      "Staf",
      4800000
     ],
     [],
     [
      "Jabatan",
      "Gaji"
     ],
     [
      "Staf",
      ">=5000000"
     ]
    ],
    "sel": "G2",
    "rumus": "=DAVERAGE(A1:C6,\"Gaji\",A8:B9)",
    "coba": [
     [
      "=DAVERAGE(A1:C6,\"Gaji\",A8:B9)",
      "Rata-rata gaji Staf 5 juta ke atas"
     ]
    ]
   },
   "kuis": {
    "q": "Apa hasil DAVERAGE bila tidak ada baris yang memenuhi kriteria?",
    "opsi": [
     "#DIV/0!",
     "0",
     "#N/A",
     "Kosong"
    ],
    "jawab": 0,
    "bahas": "Tidak ada angka yang dirata-ratakan."
   },
   "kata": "daverage rata-rata database",
   "gambar": [
    "contoh-data-300x164.jpg",
    "contoh-data-daverage-300x185.jpg",
    "fungsi-argumen-daverage-300x154.jpg",
    "hasil-rumus-daverage-300x56.jpg"
   ]
  },
  {
   "id": "dget-dvarp",
   "cat": "db",
   "judul": "DGET dan DVARP: mengambil satu nilai dan varians",
   "ringkas": "DGET mengambil satu nilai dari baris yang cocok dengan kriteria, dan harus ada tepat satu baris cocok. DVARP menghitung varians populasi.",
   "sintaks": "=DGET(database; field; kriteria)",
   "argumen": [
    [
     "database",
     "Tabel beserta judul"
    ],
    [
     "field",
     "Kolom yang diambil"
    ],
    [
     "kriteria",
     "Rentang kriteria yang hanya cocok dengan satu baris"
    ]
   ],
   "langkah": [
    "Buat kriteria yang unik, misalnya Kode = C.",
    "Ketik =DGET( lalu tabel, field, kriteria.",
    "Bila lebih dari satu baris cocok, hasilnya #NUM!; bila tidak ada, #VALUE!."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Jabatan",
      "Gaji"
     ],
     [
      "A",
      "Manajer",
      9000000
     ],
     [
      "B",
      "Staf",
      5000000
     ],
     [
      "C",
      "Staf",
      5500000
     ],
     [
      "D",
      "Manajer",
      8000000
     ],
     [
      "E",
      "Staf",
      4800000
     ],
     [],
     [
      "Kode"
     ],
     [
      "C"
     ]
    ],
    "sel": "E2",
    "rumus": "=DGET(A1:C6,\"Gaji\",A8:A9)",
    "coba": [
     [
      "=DGET(A1:C6,\"Gaji\",A8:A9)",
      "Gaji kode C"
     ],
     [
      "=DGET(A1:C6,\"Jabatan\",A8:A9)",
      "Jabatan kode C"
     ]
    ],
    "catatan": "Ganti isi A9 dengan kode lain."
   },
   "kuis": {
    "q": "DGET menghasilkan #NUM! bila...",
    "opsi": [
     "Lebih dari satu baris cocok",
     "Tidak ada yang cocok",
     "Field berupa teks",
     "Tabel kosong"
    ],
    "jawab": 0,
    "bahas": "DGET hanya boleh menemukan satu baris."
   },
   "kata": "dget dvarp database",
   "gambar": [
    "fungsi-dget.gif"
   ]
  },
  {
   "id": "pmt",
   "cat": "uang",
   "judul": "PMT: cicilan pinjaman per periode",
   "ringkas": "PMT menghitung angsuran tetap tiap periode untuk pinjaman dengan bunga tetap.",
   "sintaks": "=PMT(bunga; jumlah_periode; nilai_sekarang; [nilai_akhir]; [tipe])",
   "argumen": [
    [
     "bunga",
     "Suku bunga per periode (bunga tahunan / 12 untuk cicilan bulanan)"
    ],
    [
     "jumlah_periode",
     "Banyak cicilan"
    ],
    [
     "nilai_sekarang",
     "Jumlah pinjaman"
    ],
    [
     "nilai_akhir",
     "Sisa yang diinginkan, default 0"
    ],
    [
     "tipe",
     "0 = bayar akhir periode, 1 = awal periode"
    ]
   ],
   "langkah": [
    "Pastikan bunga dan jumlah periode memakai satuan yang sama: bunga bulanan untuk cicilan bulanan.",
    "Ketik =PMT(B2/12;B3*12;B1) bila bunga tahunan di B2, tenor tahun di B3, pinjaman di B1.",
    "Hasilnya negatif karena itu uang keluar. Tambahkan tanda minus di depan bila ingin angka positif."
   ],
   "tips": [
    "Jumlah total yang dibayar = cicilan x jumlah periode."
   ],
   "demo": {
    "data": [
     [
      "Pinjaman",
      10000000
     ],
     [
      "Bunga tahunan",
      "12%"
     ],
     [
      "Tenor (tahun)",
      1
     ],
     [
      "Cicilan/bulan",
      ""
     ],
     [
      "Total bayar",
      ""
     ]
    ],
    "sel": "B4",
    "rumus": "=-PMT(B2/12,B3*12,B1)",
    "coba": [
     [
      "=-PMT(B2/12,B3*12,B1)",
      "Cicilan per bulan"
     ],
     [
      "=-PMT(B2/12,B3*12,B1)*B3*12",
      "Total yang dibayar"
     ],
     [
      "=-PMT(B2/12,B3*12,B1)*B3*12-B1",
      "Total bunga"
     ]
    ],
    "catatan": "Ubah tenor menjadi 2 atau 3 untuk melihat pengaruhnya."
   },
   "kuis": {
    "q": "Untuk pinjaman bulanan dengan bunga 12% per tahun, argumen bunga PMT diisi...",
    "opsi": [
     "12%",
     "12%/12",
     "12%*12",
     "1"
    ],
    "jawab": 1,
    "bahas": "Bunga per periode: 12%/12 = 1% per bulan."
   },
   "kata": "pmt cicilan angsuran pinjaman kredit",
   "gambar": [
    "fungsi-finansial-pmt-1.jpg",
    "fungsi-finansial-rumus-pmt-2-300x165.jpg",
    "fungsi-finansial-rumus-pmt-3-300x222.jpg",
    "fungsi-finansial-rumus-pmt-4.jpg",
    "fungsi-finansial-rumus-pmt-5.jpg",
    "fungsi-finansial-rumus-pmt-8-300x177.jpg",
    "fungsi-finansial-rumus-pmt-9-300x157.jpg",
    "fungsi-finansial-rumus-pmt-61.jpg"
   ]
  },
  {
   "id": "rate",
   "cat": "uang",
   "judul": "RATE: mencari suku bunga kredit",
   "ringkas": "RATE menghitung suku bunga per periode bila diketahui cicilan, tenor, dan pinjaman.",
   "sintaks": "=RATE(jumlah_periode; cicilan; nilai_sekarang; [nilai_akhir]; [tipe])",
   "argumen": [
    [
     "jumlah_periode",
     "Banyak cicilan"
    ],
    [
     "cicilan",
     "Besar cicilan (negatif)"
    ],
    [
     "nilai_sekarang",
     "Pinjaman"
    ]
   ],
   "langkah": [
    "Ketik =RATE(12;-900000;10000000).",
    "Hasilnya bunga per bulan; kalikan 12 untuk bunga per tahun.",
    "Ubah format sel menjadi Percentage."
   ],
   "demo": {
    "data": [
     [
      "Pinjaman",
      10000000
     ],
     [
      "Tenor (bulan)",
      12
     ],
     [
      "Cicilan",
      900000
     ],
     [
      "Bunga/bulan",
      ""
     ],
     [
      "Bunga/tahun",
      ""
     ]
    ],
    "sel": "B4",
    "rumus": "=RATE(B2,-B3,B1)",
    "coba": [
     [
      "=RATE(B2,-B3,B1)",
      "Bunga per bulan"
     ],
     [
      "=RATE(B2,-B3,B1)*12",
      "Bunga per tahun"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil RATE untuk cicilan bulanan adalah bunga per...",
    "opsi": [
     "Bulan",
     "Tahun",
     "Hari",
     "Minggu"
    ],
    "jawab": 0,
    "bahas": "Sesuai satuan periode yang dimasukkan."
   },
   "kata": "rate bunga kredit suku bunga",
   "gambar": [
    "menentukan-presentase-bunga-kredit-dengan-excel-1-300x131.jpg",
    "menentukan-presentase-bunga-kredit-dengan-excel-2-300x109.jpg",
    "menentukan-presentase-bunga-kredit-dengan-excel-3-300x110.jpg",
    "menentukan-presentase-bunga-kredit-dengan-excel-4-300x108.jpg",
    "menentukan-presentase-bunga-kredit-dengan-excel-5-300x110.jpg"
   ]
  },
  {
   "id": "fv-pv",
   "cat": "uang",
   "judul": "FV, PV, NPER: nilai masa depan dan masa kini",
   "ringkas": "FV menghitung nilai tabungan di masa depan. PV menghitung nilai sekarang. NPER mencari berapa periode yang dibutuhkan.",
   "sintaks": "=FV(bunga; periode; setoran; [nilai_sekarang]; [tipe])",
   "argumen": [
    [
     "bunga",
     "Bunga per periode"
    ],
    [
     "periode",
     "Jumlah periode"
    ],
    [
     "setoran",
     "Setoran tetap tiap periode (negatif)"
    ],
    [
     "nilai_sekarang",
     "Saldo awal (negatif)"
    ]
   ],
   "langkah": [
    "Ketik =FV(5%;10;-1000000) untuk setoran 1 juta per tahun selama 10 tahun.",
    "Hasil positif karena itu uang yang kamu terima nanti.",
    "Cari lama menabung dengan NPER, dan nilai kini dengan PV."
   ],
   "demo": {
    "data": [
     [
      "Bunga/tahun",
      "5%"
     ],
     [
      "Tahun",
      10
     ],
     [
      "Setoran/tahun",
      1000000
     ],
     [
      "Saldo akhir",
      ""
     ]
    ],
    "sel": "B4",
    "rumus": "=FV(B1,B2,-B3)",
    "coba": [
     [
      "=FV(B1,B2,-B3)",
      "Saldo di akhir"
     ],
     [
      "=PV(B1,B2,-B3)",
      "Nilai sekarang dari setoran"
     ],
     [
      "=NPER(B1,-B3,0,15000000)",
      "Tahun untuk mencapai 15 juta"
     ]
    ]
   },
   "kuis": {
    "q": "Mengapa setoran pada FV sering ditulis negatif?",
    "opsi": [
     "Arus kas keluar bertanda negatif",
     "Supaya hasil lebih besar",
     "Aturan penulisan sel",
     "Karena bunga negatif"
    ],
    "jawab": 0,
    "bahas": "Excel memperlakukan uang keluar sebagai negatif."
   },
   "kata": "fv pv nper tabungan nilai masa depan",
   "gambar": [
    "fungsi-fv.jpg",
    "fungsi-nper.gif",
    "rumus-fv-fungsi-finansial-1-300x154.jpg",
    "rumus-fv-fungsi-finansial-2-300x153.jpg",
    "rumus-fv-fungsi-finansial-3-225x300.jpg",
    "rumus-fv-fungsi-finansial-4-300x173.jpg",
    "rumus-fv-fungsi-finansial-5-300x153.jpg"
   ]
  },
  {
   "id": "npv-irr",
   "cat": "uang",
   "judul": "NPV, IRR, MIRR, XIRR: menilai investasi",
   "ringkas": "NPV menghitung nilai sekarang dari arus kas masa depan. IRR mencari tingkat pengembalian yang membuat NPV nol.",
   "sintaks": "=NPV(tingkat; arus1; arus2; ...)   =IRR(arus; [tebakan])",
   "argumen": [
    [
     "tingkat",
     "Tingkat diskonto per periode"
    ],
    [
     "arus",
     "Arus kas; untuk IRR minimal satu negatif dan satu positif"
    ]
   ],
   "langkah": [
    "NPV hanya menghitung arus kas di akhir tiap periode. Investasi awal ditambahkan terpisah: =NPV(10%;B2:B4)+B1.",
    "IRR menerima deret arus kas termasuk investasi awal: =IRR(B1:B4).",
    "XIRR dipakai bila arus kas tidak terjadi pada selang waktu yang sama (ada kolom tanggal)."
   ],
   "demo": {
    "data": [
     [
      "Investasi awal",
      -1000
     ],
     [
      "Tahun 1",
      300
     ],
     [
      "Tahun 2",
      400
     ],
     [
      "Tahun 3",
      500
     ],
     [
      "NPV (10%)",
      ""
     ],
     [
      "IRR",
      ""
     ]
    ],
    "sel": "B5",
    "rumus": "=NPV(10%,B2:B4)+B1",
    "coba": [
     [
      "=NPV(10%,B2:B4)+B1",
      "NPV dengan investasi awal"
     ],
     [
      "=IRR(B1:B4)",
      "IRR"
     ]
    ]
   },
   "kuis": {
    "q": "IRR yang lebih tinggi dari biaya modal menandakan investasi...",
    "opsi": [
     "Layak dipertimbangkan",
     "Pasti rugi",
     "Tidak valid",
     "Tidak bisa dihitung"
    ],
    "jawab": 0,
    "bahas": "Pengembaliannya melebihi biaya modal."
   },
   "kata": "npv irr mirr xirr investasi",
   "gambar": [
    "fungsi-irr.jpg",
    "fungsi-mirr.gif",
    "fungsi-mirr.jpg",
    "fungsi-npv.jpg",
    "fungsi-xirr-pada-excel.jpg",
    "fungsi-xirr.jpg"
   ]
  },
  {
   "id": "penyusutan",
   "cat": "uang",
   "judul": "Penyusutan aset: SLN, SYD, DDB, DB",
   "ringkas": "Beberapa fungsi menghitung beban penyusutan aset per periode dengan metode berbeda.",
   "sintaks": "=SLN(biaya; sisa; umur)   =SYD(biaya; sisa; umur; periode)   =DDB(biaya; sisa; umur; periode)",
   "argumen": [
    [
     "biaya",
     "Harga perolehan"
    ],
    [
     "sisa",
     "Nilai sisa di akhir umur"
    ],
    [
     "umur",
     "Umur ekonomis (periode)"
    ],
    [
     "periode",
     "Periode yang dihitung"
    ]
   ],
   "langkah": [
    "SLN: garis lurus, beban sama tiap tahun.",
    "SYD: jumlah angka tahun, beban lebih besar di awal dan menurun.",
    "DDB: saldo menurun ganda, beban awal paling besar.",
    "DB: saldo menurun dengan tarif tetap. AMORDEGRC dan AMORLINC dipakai untuk akuntansi Prancis."
   ],
   "demo": {
    "data": [
     [
      "Biaya",
      10000000
     ],
     [
      "Sisa",
      1000000
     ],
     [
      "Umur",
      5
     ],
     [
      "SLN",
      ""
     ],
     [
      "SYD tahun 1",
      ""
     ],
     [
      "DDB tahun 1",
      ""
     ]
    ],
    "sel": "B4",
    "rumus": "=SLN(B1,B2,B3)",
    "coba": [
     [
      "=SLN(B1,B2,B3)",
      "Garis lurus"
     ],
     [
      "=SYD(B1,B2,B3,1)",
      "SYD tahun 1"
     ],
     [
      "=DDB(B1,B2,B3,1)",
      "DDB tahun 1"
     ],
     [
      "=SYD(B1,B2,B3,5)",
      "SYD tahun 5"
     ]
    ]
   },
   "kuis": {
    "q": "Metode mana yang beban penyusutannya sama tiap tahun?",
    "opsi": [
     "SLN",
     "SYD",
     "DDB",
     "DB"
    ],
    "jawab": 0,
    "bahas": "SLN = straight line."
   },
   "kata": "sln syd ddb db penyusutan depresiasi",
   "gambar": [
    "fungsi-amordegrc.gif",
    "fungsi-amordegrc.jpg",
    "fungsi-amorlinc.gif",
    "fungsi-amorlinc.jpg",
    "fungsi-db-1024x576.jpg",
    "fungsi-ddb.jpg",
    "fungsi-syd.jpg",
    "rumus-syd.jpg",
    "sln-1.jpg",
    "sln-2.jpg"
   ]
  },
  {
   "id": "bunga-pokok",
   "cat": "uang",
   "judul": "IPMT, PPMT, ISPMT, CUMIPMT, CUMPRINC",
   "ringkas": "Memisahkan setiap cicilan menjadi bagian bunga dan bagian pokok, atau menjumlahkannya untuk beberapa periode.",
   "sintaks": "=IPMT(bunga; periode_ke; jumlah_periode; pinjaman)   =PPMT(...)",
   "argumen": [
    [
     "periode_ke",
     "Cicilan yang ke berapa"
    ],
    [
     "jumlah_periode",
     "Total cicilan"
    ]
   ],
   "langkah": [
    "IPMT mengembalikan bagian bunga dari cicilan ke-n.",
    "PPMT mengembalikan bagian pokok.",
    "IPMT + PPMT = PMT.",
    "CUMIPMT dan CUMPRINC menjumlahkan bunga atau pokok untuk rentang periode."
   ],
   "demo": {
    "data": [
     [
      "Pinjaman",
      10000000
     ],
     [
      "Bunga/bulan",
      "1%"
     ],
     [
      "Tenor",
      12
     ],
     [
      "Cicilan",
      ""
     ],
     [
      "Bunga ke-1",
      ""
     ],
     [
      "Pokok ke-1",
      ""
     ]
    ],
    "sel": "B4",
    "rumus": "=-PMT(B2,B3,B1)",
    "coba": [
     [
      "=-PMT(B2,B3,B1)",
      "Cicilan"
     ],
     [
      "=-IPMT(B2,1,B3,B1)",
      "Bunga cicilan ke-1"
     ],
     [
      "=-PPMT(B2,1,B3,B1)",
      "Pokok cicilan ke-1"
     ],
     [
      "=-IPMT(B2,12,B3,B1)",
      "Bunga cicilan terakhir"
     ]
    ]
   },
   "kuis": {
    "q": "IPMT + PPMT pada periode yang sama sama dengan...",
    "opsi": [
     "PMT",
     "FV",
     "NPV",
     "RATE"
    ],
    "jawab": 0,
    "bahas": "Bunga ditambah pokok adalah satu cicilan."
   },
   "kata": "ipmt ppmt cumipmt cumprinc bunga pokok",
   "gambar": [
    "fungsi-cumipmt.jpg",
    "fungsi-cumprinc.jpg",
    "fungsi-ipmt.gif",
    "fungsi-ipmt.jpg",
    "fungsi-ispmt.jpg"
   ]
  },
  {
   "id": "bunga-efektif",
   "cat": "uang",
   "judul": "EFFECT, NOMINAL, FVSCHEDULE, DOLLARDE",
   "ringkas": "Mengubah bunga nominal menjadi efektif dan sebaliknya, serta menghitung pertumbuhan dengan bunga yang berubah-ubah.",
   "sintaks": "=EFFECT(nominal; per_tahun)   =NOMINAL(efektif; per_tahun)",
   "argumen": [
    [
     "nominal",
     "Bunga nominal tahunan"
    ],
    [
     "per_tahun",
     "Berapa kali bunga dimajemukkan dalam setahun"
    ]
   ],
   "langkah": [
    "=EFFECT(12%;12) menghasilkan bunga efektif sekitar 12,68%.",
    "=NOMINAL(12,68%;12) mengembalikannya ke 12%.",
    "FVSCHEDULE menghitung nilai akhir bila bunga tiap tahun berbeda."
   ],
   "demo": {
    "data": [
     [
      "Nominal",
      "12%"
     ],
     [
      "Per tahun",
      12
     ],
     [
      "Efektif",
      ""
     ]
    ],
    "sel": "B3",
    "rumus": "=EFFECT(B1,B2)",
    "coba": [
     [
      "=EFFECT(B1,B2)",
      "Bunga efektif"
     ],
     [
      "=NOMINAL(EFFECT(B1,B2),B2)",
      "Kembali ke nominal"
     ]
    ]
   },
   "kuis": {
    "q": "Bunga efektif dibanding nominal biasanya...",
    "opsi": [
     "Lebih besar bila dimajemukkan lebih dari sekali setahun",
     "Selalu lebih kecil",
     "Sama",
     "Negatif"
    ],
    "jawab": 0,
    "bahas": "Pemajemukan membuat bunga efektif lebih besar."
   },
   "kata": "effect nominal bunga efektif",
   "gambar": [
    "fungsi-dollarde.jpg",
    "fungsi-dollarfr.jpg",
    "fungsi-effect.jpg",
    "fungsi-fvschedule.jpg",
    "fungsi-nominal.jpg"
   ]
  },
  {
   "id": "obligasi",
   "cat": "uang",
   "judul": "Fungsi obligasi dan surat berharga",
   "ringkas": "Kelompok fungsi untuk menghitung harga, imbal hasil, bunga berjalan, dan kupon obligasi serta surat utang jangka pendek.",
   "sintaks": "=PRICE(penyelesaian; jatuh_tempo; kupon; imbal_hasil; penebusan; frekuensi)",
   "argumen": [
    [
     "penyelesaian",
     "Tanggal transaksi"
    ],
    [
     "jatuh_tempo",
     "Tanggal obligasi jatuh tempo"
    ],
    [
     "kupon",
     "Suku bunga kupon tahunan"
    ],
    [
     "imbal_hasil",
     "Imbal hasil tahunan"
    ],
    [
     "penebusan",
     "Nilai tebus per nominal 100"
    ],
    [
     "frekuensi",
     "1 = tahunan, 2 = semesteran, 4 = kuartalan"
    ]
   ],
   "langkah": [
    "PRICE: harga per nominal 100. YIELD: imbal hasil dari harga.",
    "ACCRINT dan ACCRINTM: bunga berjalan.",
    "COUPNUM, COUPNCD, COUPPCD, COUPDAYS: jumlah dan tanggal kupon.",
    "TBILLEQ, TBILLPRICE, TBILLYIELD: surat utang jangka pendek.",
    "Gunakan tangkapan layar di bawah untuk melihat isi argumen tiap fungsi."
   ],
   "tips": [
    "Tanggal pada fungsi ini harus diisi dengan DATE(), bukan teks."
   ],
   "kuis": {
    "q": "Frekuensi 2 pada fungsi obligasi berarti kupon dibayar...",
    "opsi": [
     "Setahun sekali",
     "Semesteran",
     "Kuartalan",
     "Bulanan"
    ],
    "jawab": 1,
    "bahas": "2 kali setahun."
   },
   "kata": "obligasi price yield accrint coup tbill",
   "gambar": [
    "fungsi-accrint.jpg",
    "fungsi-accrintm.gif",
    "fungsi-accrintm.jpg",
    "fungsi-coupdaybs.jpg",
    "fungsi-coupdays.jpg",
    "fungsi-coupdaysnc.jpg",
    "fungsi-coupncd.jpg",
    "fungsi-coupnum.jpg",
    "fungsi-couppcd.jpg",
    "fungsi-price-pada-excel.jpg",
    "fungsi-price.jpg",
    "fungsi-rumus-pricemat.jpg",
    "fungsi-rumus-received-pada-excel.jpg",
    "pricerdisc-1.jpg",
    "pricerdisc-2.jpg",
    "rumus-pricemat.jpg",
    "rumus-received-pada-excel.jpg",
    "tbilleq.jpg",
    "tbillprice.jpg",
    "tbillyield.jpg",
    "yield-1.jpg",
    "yield-2.jpg",
    "yielddisc1.jpg",
    "yielddisc2.jpg",
    "yieldmat-1.jpg",
    "yieldmat-2.jpg"
   ]
  },
  {
   "id": "macro-rekam",
   "cat": "macro",
   "judul": "Merekam macro pertama",
   "ringkas": "Macro adalah rangkaian langkah yang direkam lalu dijalankan ulang dengan satu klik. Excel menulis kode VBA-nya sendiri selama perekaman.",
   "langkah": [
    "Aktifkan tab Developer: File > Options > Customize Ribbon > centang Developer.",
    "Developer > Record Macro. Beri nama tanpa spasi, misalnya FormatTabel, dan pilih tombol pintas bila perlu.",
    "Lakukan langkah yang ingin direkam, misalnya menebalkan judul dan memberi warna.",
    "Klik Stop Recording.",
    "Jalankan lagi lewat Developer > Macros > Run, atau lewat tombol pintas.",
    "Simpan file sebagai Excel Macro-Enabled Workbook (.xlsm)."
   ],
   "tips": [
    "Rekam hanya langkah yang perlu. Gerakan yang salah ikut terekam.",
    "Aktifkan Use Relative References bila macro harus berlaku di sel mana pun, bukan hanya sel yang direkam."
   ],
   "kuis": {
    "q": "Format file yang menyimpan macro adalah...",
    "opsi": [
     ".xlsx",
     ".xlsm",
     ".csv",
     ".pdf"
    ],
    "jawab": 1,
    "bahas": ".xlsm = Macro-Enabled Workbook."
   },
   "kata": "macro rekam record developer",
   "gambar": [
    "1-mengaktifkan-fungsi-macro-excel-273x300.jpg",
    "1-record-untuk-macro-pada-excel-300x173.jpg",
    "1-tabel-data-excel-2010-300x244.jpg",
    "2-fungsi-macro-excel-300x230.jpg",
    "2-memunculakan-tab-developer-macro-300x117.jpg",
    "2-tabel-data-excel-2010-300x68.jpg",
    "3-fungsi-macro-excel-tab-developer-300x106.jpg",
    "3-memunculkan-kotak-isian-macro-pada-excel-300x247.jpg",
    "3-tabel-data-excel-2010-300x163.jpg",
    "4-menyambungkan-record-pada-macro-300x117.jpg",
    "4-tabel-data-excel-2010-300x256.jpg",
    "5-hasil-mentah-record-macro-300x173.jpg",
    "5-tabel-data-excel-2010-300x256.jpg",
    "6-macro-pada-excel-300x173.jpg",
    "6-tabel-data-excel-2010-300x164.jpg",
    "7-macor-pada-excel-300x289.jpg",
    "langkah-membuat-makro.jpg",
    "langkah-mengatur-rekam-makro.jpg",
    "macro-excel-1.jpg",
    "macro-excel-2.jpg",
    "macro-excel-tutorial-2.jpg",
    "macro-excel-tutorial-3.jpg",
    "macro-excel-tutorial-5.jpg",
    "macro-excel-tutorial.jpg",
    "membuat-macro-di-excel-2010-2.jpg",
    "membuat-macro-di-excel-2010-3.jpg",
    "membuat-macro-di-excel-2010-4.jpg",
    "membuat-macro-di-excel-2010-5.jpg",
    "membuat-macro-di-excel-2010.jpg",
    "tutorial-excel-macro-2.jpg",
    "tutorial-excel-macro-3.jpg",
    "tutorial-excel-macro-4.jpg",
    "tutorial-excel-macro-5.jpg",
    "tutorial-excel-macro-6.jpg",
    "tutorial-excel-macro-7.jpg",
    "tutorial-excel-macro.jpg",
    "tutorial-excelmacro-2.jpg",
    "tutorial-excelmacro.jpg"
   ]
  },
  {
   "id": "macro-error",
   "cat": "macro",
   "judul": "Mengatasi macro yang error",
   "ringkas": "Pesan seperti 'Macros have been disabled' atau galat saat dijalankan biasanya disebabkan pengaturan keamanan atau kode yang salah.",
   "langkah": [
    "Buka File > Options > Trust Center > Trust Center Settings > Macro Settings.",
    "Pilih Disable all macros with notification agar muncul pilihan Enable Content saat file dibuka.",
    "Untuk galat dalam kode, klik Debug; baris bermasalah akan disorot kuning.",
    "Perbaiki baris tersebut lalu tekan F5 untuk melanjutkan atau tombol Reset untuk berhenti."
   ],
   "tips": [
    "Hanya aktifkan macro dari file yang kamu percayai."
   ],
   "kuis": {
    "q": "Tombol yang membawa kamu ke baris kode yang bermasalah adalah...",
    "opsi": [
     "Debug",
     "End",
     "Help",
     "Cancel"
    ],
    "jawab": 0,
    "bahas": "Debug menyorot baris penyebab galat."
   },
   "kata": "macro error galat trust center",
   "gambar": [
    "mengatasi-program-macro-excel-yang-error-2.jpg",
    "mengatasi-program-macro-excel-yang-error-3.jpg",
    "mengatasi-program-macro-excel-yang-error-4.jpg",
    "mengatasi-program-macro-excel-yang-error-5.jpg",
    "mengatasi-program-macro-excel-yang-error.jpg"
   ]
  },
  {
   "id": "vba-editor",
   "cat": "macro",
   "judul": "Mengenal editor VBA",
   "ringkas": "Editor VBA (Alt+F11) adalah tempat menulis, membaca, dan mengubah kode macro.",
   "sintaks": "Sub NamaMacro()\n    ' kode di sini\nEnd Sub",
   "langkah": [
    "Tekan Alt+F11 untuk membuka editor.",
    "Pilih Insert > Module untuk membuat modul kosong.",
    "Tulis kode di antara Sub dan End Sub.",
    "Tekan F5 untuk menjalankan, atau jalankan dari Developer > Macros.",
    "Contoh: Range(\"A1\").Value = \"Halo\" mengisi sel A1."
   ],
   "tips": [
    "Komentar diawali tanda apostrof ' dan diabaikan saat dijalankan."
   ],
   "kuis": {
    "q": "Pintasan untuk membuka editor VBA adalah...",
    "opsi": [
     "Alt+F11",
     "Ctrl+F11",
     "Shift+F11",
     "F11"
    ],
    "jawab": 0,
    "bahas": "Alt+F11."
   },
   "kata": "vba editor modul sub alt f11",
   "gambar": [
    "belajar-vba-excel-2.gif",
    "belajar-vba-excel-3.gif",
    "belajar-vba-excel.gif",
    "macro-vba-excel-2.gif",
    "macro-vba-excel-3.gif",
    "macro-vba-excel-3.jpg",
    "macro-vba-excel-4.gif",
    "macro-vba-excel-5.gif",
    "macro-vba-excel-5.jpg",
    "macro-vba-excel-6.gif",
    "macro-vba-excel-7.gif",
    "macro-vba-excel-7.jpg",
    "macro-vba-excel-8.gif",
    "macro-vba-excel.gif",
    "menggunakan-macro-vba-excel-2.gif",
    "menggunakan-macro-vba-excel-3.gif",
    "menggunakan-macro-vba-excel-4.gif",
    "menggunakan-macro-vba-excel-4.jpg",
    "menggunakan-macro-vba-excel.gif",
    "menggunakan-macro-vba-excel.jpg",
    "vba-excel-2007-2.gif",
    "vba-excel-2007-2.jpg",
    "vba-excel-2007-3.jpg",
    "vba-excel-2007-4.jpg",
    "vba-excel-2007.jpg",
    "vba-macro-excel-2.gif",
    "vba-macro-excel-3.gif",
    "vba-macro-excel-programming.gif",
    "vba-macro-excel-programming.jpg",
    "vba-macro-excel.gif",
    "visual-basic-appliction-pada-excel-2.jpg",
    "visual-basic-appliction-pada-excel-3.jpg"
   ]
  },
  {
   "id": "vba-variabel",
   "cat": "macro",
   "judul": "Variabel dan Option Explicit",
   "ringkas": "Variabel menyimpan nilai sementara. Option Explicit memaksa setiap variabel dideklarasikan sehingga salah ketik langsung ketahuan.",
   "sintaks": "Dim nama As String\nDim umur As Integer",
   "langkah": [
    "Tulis Option Explicit di baris pertama modul.",
    "Deklarasikan variabel dengan Dim nama As Tipe.",
    "Variabel di dalam Sub hanya berlaku di Sub itu (lokal).",
    "Variabel di bagian atas modul berlaku untuk semua Sub di modul itu; Public berlaku untuk seluruh proyek."
   ],
   "tips": [
    "Tipe umum: String (teks), Integer dan Long (bilangan bulat), Double (desimal), Boolean (benar/salah)."
   ],
   "kuis": {
    "q": "Fungsi Option Explicit adalah...",
    "opsi": [
     "Mewajibkan deklarasi variabel",
     "Mempercepat macro",
     "Menyembunyikan kode",
     "Menghapus komentar"
    ],
    "jawab": 0,
    "bahas": "Variabel yang tidak dideklarasikan menimbulkan galat saat kompilasi."
   },
   "kata": "variabel dim option explicit scope",
   "gambar": [
    "mengenal-apa-itu-option-explicit-pada-macro-vba-excel-2.jpg",
    "mengenal-apa-itu-option-explicit-pada-macro-vba-excel-3.jpg",
    "mengenal-apa-itu-option-explicit-pada-macro-vba-excel-4.jpg",
    "mengenal-apa-itu-option-explicit-pada-macro-vba-excel-5.jpg",
    "mengenal-apa-itu-option-explicit-pada-macro-vba-excel.jpg",
    "mengenal-ruang-lingkup-variabel-pada-vba-macro-excel-2.jpg",
    "mengenal-ruang-lingkup-variabel-pada-vba-macro-excel-3.jpg",
    "mengenal-ruang-lingkup-variabel-pada-vba-macro-excel-4.jpg",
    "mengenal-ruang-lingkup-variabel-pada-vba-macro-excel-5.jpg",
    "mengenal-ruang-lingkup-variabel-pada-vba-macro-excel-6.jpg",
    "mengenal-ruang-lingkup-variabel-pada-vba-macro-excel-9.jpg",
    "mengenal-ruang-lingkup-variabel-pada-vba-macro-excel.jpg"
   ]
  },
  {
   "id": "vba-debug",
   "cat": "macro",
   "judul": "Debugging: menelusuri kesalahan kode",
   "ringkas": "Debugging menjalankan kode langkah demi langkah untuk menemukan sumber masalah.",
   "langkah": [
    "Klik di margin kiri baris kode untuk memasang breakpoint (titik merah).",
    "Jalankan macro; eksekusi berhenti di breakpoint.",
    "Tekan F8 untuk maju satu baris.",
    "Arahkan kursor ke variabel untuk melihat nilainya, atau buka Debug > Add Watch.",
    "Tekan F5 untuk melanjutkan sampai selesai."
   ],
   "kuis": {
    "q": "Tombol F8 di editor VBA berfungsi untuk...",
    "opsi": [
     "Menjalankan satu baris",
     "Menjalankan semua",
     "Menyimpan",
     "Menutup"
    ],
    "jawab": 0,
    "bahas": "F8 = Step Into."
   },
   "kata": "debug breakpoint f8 watch",
   "gambar": [
    "mengenal-debugging-pada-vba-macro-excel-programming-2.jpg",
    "mengenal-debugging-pada-vba-macro-excel-programming-3.jpg",
    "mengenal-debugging-pada-vba-macro-excel-programming-4.jpg",
    "mengenal-debugging-pada-vba-macro-excel-programming.jpg"
   ]
  },
  {
   "id": "vba-loop",
   "cat": "macro",
   "judul": "Perulangan: For Next dan Do While",
   "ringkas": "Loop mengulangi sekumpulan perintah. For cocok bila jumlah ulangan diketahui, Do While bila bergantung pada syarat.",
   "sintaks": "For i = 1 To 10\n    Cells(i, 1).Value = i\nNext i",
   "langkah": [
    "For i = 1 To 10 mengulang 10 kali dengan i = 1, 2, ..., 10.",
    "Cells(baris, kolom) menunjuk sel berdasarkan angka.",
    "Loop bersarang (di dalam loop) dipakai untuk mengisi tabel dua dimensi.",
    "Do While syarat ... Loop mengulang selama syarat benar; pastikan syarat suatu saat menjadi salah."
   ],
   "tips": [
    "Loop tanpa akhir dapat dihentikan dengan Ctrl+Break."
   ],
   "kuis": {
    "q": "Berapa kali loop For i = 1 To 5 berjalan?",
    "opsi": [
     "4",
     "5",
     "6",
     "1"
    ],
    "jawab": 1,
    "bahas": "i bernilai 1 sampai 5, jadi 5 kali."
   },
   "kata": "loop for next do while perulangan",
   "gambar": [
    "tutorial-excel-bagaimana-membuat-loop-menggunakan-vba-2.jpg",
    "tutorial-excel-bagaimana-membuat-loop-menggunakan-vba.jpg",
    "tutorial-vba-excel-untuk-triple-loop-dan-do-while-loop.jpg"
   ]
  },
  {
   "id": "vba-inputbox",
   "cat": "macro",
   "judul": "InputBox dan MsgBox",
   "ringkas": "InputBox meminta pengguna mengetik sesuatu, MsgBox menampilkan pesan.",
   "sintaks": "nama = InputBox(\"Siapa namamu?\")\nMsgBox \"Halo \" & nama",
   "langkah": [
    "Buat Sub baru di modul.",
    "Isi variabel dengan hasil InputBox.",
    "Tampilkan dengan MsgBox atau tulis ke sel: Range(\"A1\").Value = nama.",
    "Jalankan dengan F5."
   ],
   "kuis": {
    "q": "InputBox menghasilkan nilai bertipe...",
    "opsi": [
     "String (teks)",
     "Selalu angka",
     "Boolean",
     "Tanggal"
    ],
    "jawab": 0,
    "bahas": "Hasil InputBox berupa teks; ubah dengan CInt atau CDbl bila perlu angka."
   },
   "kata": "inputbox msgbox dialog",
   "gambar": [
    "belajar-vba-excel-untuk-membuat-input-box-2.jpg",
    "belajar-vba-excel-untuk-membuat-input-box-3.jpg",
    "belajar-vba-excel-untuk-membuat-input-box-4.jpg",
    "belajar-vba-excel-untuk-membuat-input-box.jpg",
    "input-box-1.jpg",
    "input-box-2-300x244.jpg",
    "input-box-3-300x174.jpg",
    "input-box-4.jpg",
    "input-box-5-300x127.jpg",
    "input-box-6-300x93.jpg"
   ]
  },
  {
   "id": "vba-tanggal",
   "cat": "macro",
   "judul": "VBA untuk tanggal dan waktu",
   "ringkas": "VBA punya fungsi Date, Time, Now, Format, DateAdd, dan DateDiff.",
   "sintaks": "Range(\"A1\").Value = Format(Now, \"dd/mm/yyyy hh:mm\")",
   "langkah": [
    "Date mengembalikan tanggal hari ini, Time jam sekarang, Now keduanya.",
    "Format(nilai, pola) mengatur tampilan.",
    "DateAdd(\"d\", 7, Date) menambah 7 hari.",
    "DateDiff(\"d\", awal, akhir) menghitung selisih hari."
   ],
   "kuis": {
    "q": "Fungsi VBA yang mengembalikan tanggal dan jam sekaligus adalah...",
    "opsi": [
     "Date",
     "Time",
     "Now",
     "Day"
    ],
    "jawab": 2,
    "bahas": "Now."
   },
   "kata": "vba tanggal waktu now date format",
   "gambar": [
    "contoh-vba-excel-untuk-membuat-tanggal-dan-waktu-2.jpg",
    "contoh-vba-excel-untuk-membuat-tanggal-dan-waktu-3.jpg",
    "contoh-vba-excel-untuk-membuat-tanggal-dan-waktu-4.jpg",
    "contoh-vba-excel-untuk-membuat-tanggal-dan-waktu-5.jpg",
    "contoh-vba-excel-untuk-membuat-tanggal-dan-waktu-6.jpg",
    "contoh-vba-excel-untuk-membuat-tanggal-dan-waktu.jpg"
   ]
  },
  {
   "id": "vba-string",
   "cat": "macro",
   "judul": "VBA untuk teks (manipulasi string)",
   "ringkas": "Fungsi teks VBA mirip dengan di lembar kerja: Left, Right, Mid, Len, UCase, LCase, Trim, Replace.",
   "sintaks": "MsgBox UCase(\"hi tim\")",
   "langkah": [
    "Left(\"Excel\", 2) mengembalikan Ex.",
    "Replace(teks, lama, baru) mengganti bagian teks.",
    "Gunakan & untuk menyambung dan vbCrLf untuk baris baru dalam MsgBox."
   ],
   "kuis": {
    "q": "Padanan VBA untuk UPPER di lembar kerja adalah...",
    "opsi": [
     "UCase",
     "Upper",
     "Caps",
     "Big"
    ],
    "jawab": 0,
    "bahas": "UCase."
   },
   "kata": "vba string teks ucase left mid",
   "gambar": [
    "manipulasi-string-2.jpg",
    "manipulasi-string-3.jpg",
    "manipulasi-string-4.jpg",
    "manipulasi-string-5.jpg",
    "manipulasi-string-6.jpg",
    "manipulasi-string.jpg"
   ]
  },
  {
   "id": "vba-formula",
   "cat": "macro",
   "judul": "Menulis rumus lewat VBA (Formula dan FormulaR1C1)",
   "ringkas": "VBA bisa menuliskan rumus ke sel. FormulaR1C1 memakai alamat relatif, berguna untuk rumus yang disalin ke banyak sel.",
   "sintaks": "Range(\"D4\").Formula = \"=B3*10\"\nRange(\"D4\").FormulaR1C1 = \"=R[-1]C[-2]*10\"",
   "langkah": [
    "Formula memakai alamat gaya A1.",
    "FormulaR1C1 memakai R untuk baris dan C untuk kolom; angka dalam kurung siku adalah selisih relatif.",
    "R[-1]C[-2] berarti satu baris ke atas dan dua kolom ke kiri."
   ],
   "kuis": {
    "q": "R[-1]C[0] menunjuk sel...",
    "opsi": [
     "Tepat di atas",
     "Tepat di bawah",
     "Di kiri",
     "Di kanan"
    ],
    "jawab": 0,
    "bahas": "-1 baris berarti satu baris ke atas, kolom sama."
   },
   "kata": "formula formular1c1 r1c1",
   "gambar": [
    "fungsi-formular1c1-2.jpg",
    "fungsi-formular1c1-3.jpg",
    "fungsi-formular1c1-4.jpg",
    "fungsi-formular1c1.jpg"
   ]
  },
  {
   "id": "vba-tombol",
   "cat": "macro",
   "judul": "Tombol macro dan form isian data",
   "ringkas": "Command Button di lembar kerja menjalankan macro ketika diklik. UserForm menyajikan formulir isian data yang rapi.",
   "langkah": [
    "Developer > Insert > Command Button (ActiveX Control), gambar di lembar kerja.",
    "Klik ganda tombol untuk membuka editor dan menulis kode Click-nya.",
    "Contoh tombol hapus: Range(\"A2:C100\").ClearContents.",
    "Untuk formulir, di editor pilih Insert > UserForm, tambahkan TextBox dan tombol Simpan.",
    "Kode Simpan menulis isi TextBox ke baris kosong berikutnya.",
    "Matikan Design Mode agar tombol bisa diklik."
   ],
   "tips": [
    "Tombol ActiveX hanya bekerja di Excel Windows."
   ],
   "kuis": {
    "q": "Mode yang harus dimatikan agar tombol ActiveX bisa diklik adalah...",
    "opsi": [
     "Design Mode",
     "Page Layout",
     "Protected View",
     "Safe Mode"
    ],
    "jawab": 0,
    "bahas": "Matikan Design Mode di tab Developer."
   },
   "kata": "tombol button userform isian data",
   "gambar": [
    "data-vba-1-300x148.jpg",
    "data-vba-2-300x155.jpg",
    "data-vba-3.jpg",
    "data-vba-4-300x142.jpg",
    "data-vba-5-300x84.jpg",
    "isian-data-1-300x157.jpg",
    "isian-data-2.jpg",
    "isian-data-3-300x191.jpg",
    "isian-data-4-300x121.jpg",
    "isian-data-5-300x208.jpg",
    "isian-data-6-300x189.jpg",
    "isian-data-7-300x178.jpg",
    "isian-data-8.jpg",
    "isian-data-9-300x213.jpg",
    "isian-data-10-300x191.jpg",
    "tombol-acak-1.jpg",
    "tombol-acak-2.jpg",
    "tombol-acak-3-300x203.jpg",
    "tombol-acak-4-300x158.jpg",
    "tombol-acak-5.jpg",
    "tombol-acak-6-300x277.jpg",
    "tombol-acak-7-300x273.jpg",
    "tombol-hapus-vba-1-300x134.jpg",
    "tombol-hapus-vba-2.jpg",
    "tombol-hapus-vba-3-300x172.jpg",
    "tombol-hapus-vba-4-300x84.jpg",
    "tombol-hapus-vba-5-300x100.jpg",
    "tombol-hapus-vba-6-300x170.jpg"
   ]
  },
  {
   "id": "barcode",
   "cat": "macro",
   "judul": "Membuat kode barcode di Excel",
   "ringkas": "Barcode dibuat dengan menginstal font barcode lalu mengubah format teks kode menjadi font tersebut.",
   "langkah": [
    "Instal font barcode (misalnya Code 39) di komputer.",
    "Ketik kode di sel, untuk Code 39 awali dan akhiri dengan tanda bintang: *12345*.",
    "Ubah font sel menjadi font barcode.",
    "Perbesar ukuran huruf agar mudah dipindai."
   ],
   "kuis": {
    "q": "Pada Code 39, kode diawali dan diakhiri dengan tanda...",
    "opsi": [
     "*",
     "#",
     "$",
     "%"
    ],
    "jawab": 0,
    "bahas": "Tanda bintang menjadi pembatas awal dan akhir."
   },
   "kata": "barcode kode font",
   "gambar": [
    "cara-membuat-kode-barcode-pada-excel.jpg",
    "kode-barcode-excel.jpg",
    "membuar-code-barcode-pada-excel.jpg"
   ]
  },
  {
   "id": "kasus-gaji",
   "cat": "kasus",
   "judul": "Menghitung gaji karyawan",
   "ringkas": "Gaji dihitung dari gaji pokok, tunjangan, lembur, dan potongan. Tunjangan sering bergantung pada golongan, sehingga VLOOKUP atau IF sangat membantu.",
   "langkah": [
    "Susun tabel golongan berisi gaji pokok dan tunjangan.",
    "Ambil gaji pokok dengan VLOOKUP berdasarkan golongan.",
    "Hitung tunjangan, misalnya persen dari gaji pokok.",
    "Total = gaji pokok + tunjangan + lembur - potongan.",
    "Format hasil sebagai Currency."
   ],
   "demo": {
    "data": [
     [
      "Golongan",
      "Gaji pokok",
      "Tunjangan %"
     ],
     [
      "I",
      3000000,
      "10%"
     ],
     [
      "II",
      4000000,
      "15%"
     ],
     [
      "III",
      5000000,
      "20%"
     ],
     [],
     [
      "Golongan:",
      "II"
     ],
     [
      "Gaji pokok:",
      ""
     ],
     [
      "Tunjangan:",
      ""
     ],
     [
      "Total:",
      ""
     ]
    ],
    "sel": "B7",
    "rumus": "=VLOOKUP(B6,A2:C4,2,FALSE)",
    "coba": [
     [
      "=VLOOKUP(B6,A2:C4,2,FALSE)",
      "Gaji pokok"
     ],
     [
      "=VLOOKUP(B6,A2:C4,2,FALSE)*VLOOKUP(B6,A2:C4,3,FALSE)",
      "Tunjangan"
     ],
     [
      "=VLOOKUP(B6,A2:C4,2,FALSE)*(1+VLOOKUP(B6,A2:C4,3,FALSE))",
      "Total"
     ]
    ],
    "catatan": "Ubah golongan di B6 menjadi I atau III."
   },
   "kuis": {
    "q": "Fungsi mana yang mengambil gaji pokok berdasarkan golongan?",
    "opsi": [
     "VLOOKUP",
     "LEFT",
     "RANK",
     "ROUND"
    ],
    "jawab": 0,
    "bahas": "VLOOKUP mencari golongan lalu mengambil gaji pokok."
   },
   "kata": "gaji karyawan payroll tunjangan",
   "gambar": [
    "menghitung-gaji-dengan-excel-1-300x106.jpg",
    "menghitung-gaji-dengan-excel-2-300x105.jpg",
    "menghitung-gaji-dengan-excel-3-300x105.jpg",
    "menghitung-gaji-dengan-excel-4-300x106.jpg",
    "menghitung-gaji-dengan-excel-5-300x105.jpg",
    "menghitung-gaji-dengan-excel-6-300x106.jpg"
   ]
  },
  {
   "id": "kasus-ipk",
   "cat": "kasus",
   "judul": "Menghitung IPK dan nilai raport",
   "ringkas": "IPK adalah rata-rata nilai mutu berbobot SKS. SUMPRODUCT dan SUM menghitungnya dalam satu rumus.",
   "sintaks": "=SUMPRODUCT(SKS; Nilai_mutu)/SUM(SKS)",
   "langkah": [
    "Ubah nilai huruf menjadi bobot (A = 4, B = 3, C = 2, D = 1) dengan VLOOKUP.",
    "Kalikan bobot dengan SKS tiap mata kuliah.",
    "Bagi jumlah hasil perkalian dengan jumlah SKS.",
    "Bulatkan dengan ROUND(…;2)."
   ],
   "demo": {
    "data": [
     [
      "Mata kuliah",
      "SKS",
      "Nilai mutu"
     ],
     [
      "Matematika",
      3,
      4
     ],
     [
      "Fisika",
      2,
      3
     ],
     [
      "Kimia",
      3,
      3
     ],
     [
      "Bahasa",
      2,
      4
     ],
     [],
     [
      "IPK",
      ""
     ]
    ],
    "sel": "B7",
    "rumus": "=ROUND(SUMPRODUCT(B2:B5,C2:C5)/SUM(B2:B5),2)",
    "coba": [
     [
      "=ROUND(SUMPRODUCT(B2:B5,C2:C5)/SUM(B2:B5),2)",
      "IPK"
     ],
     [
      "=SUM(B2:B5)",
      "Total SKS"
     ],
     [
      "=AVERAGE(C2:C5)",
      "Rata-rata biasa (tanpa bobot)"
     ]
    ]
   },
   "kuis": {
    "q": "Mengapa IPK tidak sama dengan rata-rata biasa nilai mutu?",
    "opsi": [
     "Karena memperhitungkan bobot SKS",
     "Karena dibulatkan",
     "Karena nilai huruf diabaikan",
     "Karena memakai SUM"
    ],
    "jawab": 0,
    "bahas": "Mata kuliah ber-SKS besar berpengaruh lebih besar."
   },
   "kata": "ipk raport nilai sks",
   "gambar": [
    "contoh-format-raport-300x208.jpg",
    "menghitung-ipk-dengan-excel-1-300x178.jpg",
    "menghitung-ipk-dengan-excel-2-300x194.jpg",
    "menghitung-ipk-dengan-excel-3-300x177.jpg",
    "menghitung-ipk-dengan-excel-4-300x177.jpg",
    "menghitung-ipk-dengan-excel-5-300x178.jpg",
    "menghitung-ipk-dengan-excel-6-300x177.jpg"
   ]
  },
  {
   "id": "kasus-absensi",
   "cat": "kasus",
   "judul": "Absensi siswa",
   "ringkas": "Rekap kehadiran memakai COUNTIF untuk menghitung jumlah hadir, sakit, izin, dan alpa tiap siswa.",
   "langkah": [
    "Isi kolom tanggal dengan kode: H (hadir), S (sakit), I (izin), A (alpa).",
    "Hitung hadir dengan =COUNTIF(B2:AF2;\"H\").",
    "Ulangi untuk S, I, dan A.",
    "Persentase kehadiran: =hadir/COUNTA(B2:AF2).",
    "Tambahkan Data Validation bagian List agar kode hanya H, S, I, atau A."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "1",
      "2",
      "3",
      "4",
      "5",
      "Hadir",
      "Sakit",
      "Persen"
     ],
     [
      "Antonio",
      "H",
      "H",
      "S",
      "H",
      "H",
      "",
      "",
      ""
     ],
     [
      "Devi",
      "H",
      "A",
      "H",
      "H",
      "I",
      "",
      "",
      ""
     ]
    ],
    "sel": "G2",
    "rumus": "=COUNTIF(B2:F2,\"H\")",
    "coba": [
     [
      "=COUNTIF(B2:F2,\"H\")",
      "Jumlah hadir"
     ],
     [
      "=COUNTIF(B2:F2,\"S\")",
      "Sakit"
     ],
     [
      "=COUNTIF(B2:F2,\"H\")/COUNTA(B2:F2)",
      "Proporsi hadir"
     ]
    ]
   },
   "kuis": {
    "q": "Rumus mana yang menghitung jumlah huruf H dalam B2:F2?",
    "opsi": [
     "=COUNTIF(B2:F2;\"H\")",
     "=SUM(B2:F2)",
     "=COUNT(B2:F2)",
     "=IF(B2:F2=\"H\")"
    ],
    "jawab": 0,
    "bahas": "COUNTIF menghitung sel yang sama dengan H."
   },
   "kata": "absensi kehadiran siswa countif",
   "gambar": [
    "absensi-siswa-dengan-excel-1-300x253.jpg",
    "absensi-siswa-dengan-excel-2-300x102.jpg",
    "absensi-siswa-dengan-excel-3-300x254.jpg",
    "absensi-siswa-dengan-excel-4.jpg",
    "absensi-siswa-dengan-excel-5-300x246.jpg",
    "absensi-siswa-dengan-excel-6-300x224.jpg",
    "absensi-siswa-dengan-excel-7-300x240.jpg",
    "absensi-siswa-dengan-excel-8-300x225.jpg",
    "absensi-siswa-dengan-excel-9-300x225.jpg"
   ]
  },
  {
   "id": "kasus-pajak",
   "cat": "kasus",
   "judul": "Menghitung pajak penghasilan (PPh 21)",
   "ringkas": "PPh 21 dihitung bertingkat: setiap bagian penghasilan dikenai tarif berbeda. Tabel tarif dan SUMPRODUCT atau IF bertingkat menghitung semuanya.",
   "langkah": [
    "Hitung Penghasilan Kena Pajak (PKP) = penghasilan setahun - PTKP.",
    "Siapkan tabel lapisan tarif (batas bawah, batas atas, persen).",
    "Untuk setiap lapisan, hitung bagian PKP yang masuk lapisan itu lalu kalikan dengan persennya.",
    "Jumlahkan semua lapisan.",
    "Periksa ketentuan tarif terbaru di situs resmi DJP karena dapat berubah."
   ],
   "tips": [
    "Tabel pada tangkapan layar adalah contoh dari materi sumber; selalu cek tarif yang berlaku saat ini."
   ],
   "demo": {
    "data": [
     [
      "PKP",
      60000000
     ],
     [
      "Lapisan 1 (0-60 jt, 5%)",
      ""
     ],
     [
      "Lapisan 2 (60-250 jt, 15%)",
      ""
     ],
     [
      "Pajak",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=MIN(B1,60000000)*5%",
    "coba": [
     [
      "=MIN(B1,60000000)*5%",
      "Lapisan 1"
     ],
     [
      "=MAX(MIN(B1,250000000)-60000000,0)*15%",
      "Lapisan 2"
     ],
     [
      "=MIN(B1,60000000)*5%+MAX(MIN(B1,250000000)-60000000,0)*15%",
      "Total pajak"
     ]
    ],
    "catatan": "Contoh dua lapisan saja untuk ilustrasi, bukan tarif resmi."
   },
   "kuis": {
    "q": "Pada pajak bertingkat, tarif lebih tinggi dikenakan pada...",
    "opsi": [
     "Hanya bagian penghasilan di lapisan itu",
     "Seluruh penghasilan",
     "Hanya penghasilan terkecil",
     "Tidak ada"
    ],
    "jawab": 0,
    "bahas": "Setiap lapisan dikenai tarifnya sendiri."
   },
   "kata": "pajak pph21 ptkp tarif",
   "gambar": [
    "menghitung-pajak-dengan-excel-1.jpg",
    "menghitung-pajak-dengan-excel-2.jpg",
    "menghitung-pajak-dengan-excel-3.jpg",
    "menghitung-pajak-dengan-excel-4.jpg",
    "menghitung-pajak-dengan-excel-6.jpg"
   ]
  },
  {
   "id": "kasus-invoice",
   "cat": "kasus",
   "judul": "Invoice dan billing",
   "ringkas": "Invoice menghitung subtotal tiap barang, diskon, pajak, dan total yang harus dibayar.",
   "langkah": [
    "Buat kolom barang, jumlah, harga satuan, dan subtotal (=jumlah*harga).",
    "Total = SUM subtotal.",
    "Diskon = total x persen; PPN = (total - diskon) x 11%.",
    "Total bayar = total - diskon + PPN.",
    "Ambil harga barang dari tabel harga dengan VLOOKUP agar tidak mengetik ulang.",
    "Atur area cetak agar muat satu halaman."
   ],
   "demo": {
    "data": [
     [
      "Barang",
      "Jumlah",
      "Harga",
      "Subtotal"
     ],
     [
      "Pensil",
      10,
      3000,
      "=B2*C2"
     ],
     [
      "Buku",
      5,
      8000,
      "=B3*C3"
     ],
     [
      "Penggaris",
      3,
      5000,
      "=B4*C4"
     ],
     [],
     [
      "Total",
      ""
     ],
     [
      "Diskon 5%",
      ""
     ],
     [
      "PPN 11%",
      ""
     ],
     [
      "Bayar",
      ""
     ]
    ],
    "sel": "B6",
    "rumus": "=SUM(D2:D4)",
    "coba": [
     [
      "=SUM(D2:D4)",
      "Total"
     ],
     [
      "=SUM(D2:D4)*5%",
      "Diskon 5%"
     ],
     [
      "=(SUM(D2:D4)-SUM(D2:D4)*5%)*11%",
      "PPN 11%"
     ],
     [
      "=SUM(D2:D4)*0.95*1.11",
      "Total bayar"
     ]
    ],
    "catatan": "Subtotal tiap barang sudah berisi rumus =jumlah x harga."
   },
   "kuis": {
    "q": "Subtotal tiap baris pada invoice dihitung dengan...",
    "opsi": [
     "Jumlah x harga",
     "Jumlah + harga",
     "Harga / jumlah",
     "Jumlah - harga"
    ],
    "jawab": 0,
    "bahas": "Perkalian."
   },
   "kata": "invoice billing faktur tagihan ppn",
   "gambar": [
    "billing-excel-1-300x149.jpg",
    "billing-excel-2-300x146.jpg",
    "billing-excel-3-300x147.jpg",
    "billing-excel-4-300x146.jpg",
    "excel-untuk-invoice-pembayaran-1-300x185.jpg",
    "excel-untuk-invoice-pembayaran-2-300x124.jpg",
    "excel-untuk-invoice-pembayaran-3.jpg",
    "excel-untuk-invoice-pembayaran-4.jpg",
    "excel-untuk-invoice-pembayaran-5-300x187.jpg",
    "excel-untuk-invoice-pembayaran-6-300x186.jpg",
    "excel-untuk-invoice-pembayaran-7-300x185.jpg"
   ]
  },
  {
   "id": "kasus-kartu-ujian",
   "cat": "kasus",
   "judul": "Kartu ujian otomatis",
   "ringkas": "Satu lembar data siswa diubah menjadi kartu ujian yang berubah otomatis saat nomor peserta dipilih, memakai VLOOKUP.",
   "langkah": [
    "Siapkan sheet data berisi nomor peserta, nama, kelas, ruang.",
    "Di sheet kartu, sediakan sel nomor peserta (bisa dengan Data Validation List).",
    "Isi nama dengan =VLOOKUP(nomor; Data!A:D; 2; FALSE), dan seterusnya untuk kolom lain.",
    "Atur area cetak agar satu kartu per halaman atau beberapa kartu per halaman."
   ],
   "demo": {
    "data": [
     [
      "No",
      "Nama",
      "Kelas",
      "Ruang"
     ],
     [
      101,
      "Antonio",
      "9A",
      "R1"
     ],
     [
      102,
      "Devi",
      "9B",
      "R2"
     ],
     [
      103,
      "Bagus",
      "9A",
      "R1"
     ],
     [],
     [
      "Nomor peserta:",
      102
     ],
     [
      "Nama:",
      ""
     ],
     [
      "Kelas:",
      ""
     ],
     [
      "Ruang:",
      ""
     ]
    ],
    "sel": "B7",
    "rumus": "=VLOOKUP(B6,A2:D4,2,FALSE)",
    "coba": [
     [
      "=VLOOKUP(B6,A2:D4,2,FALSE)",
      "Nama"
     ],
     [
      "=VLOOKUP(B6,A2:D4,3,FALSE)",
      "Kelas"
     ],
     [
      "=VLOOKUP(B6,A2:D4,4,FALSE)",
      "Ruang"
     ]
    ]
   },
   "kuis": {
    "q": "Fungsi apa yang mengambil data siswa berdasarkan nomor peserta?",
    "opsi": [
     "VLOOKUP",
     "SUMIF",
     "ROUND",
     "REPT"
    ],
    "jawab": 0,
    "bahas": "VLOOKUP."
   },
   "kata": "kartu ujian vlookup data siswa",
   "gambar": [
    "excel-untuk-kartu-ujian-1-300x199.jpg",
    "excel-untuk-kartu-ujian-2-300x215.jpg",
    "excel-untuk-kartu-ujian-3-300x91.jpg",
    "excel-untuk-kartu-ujian-4-300x84.jpg",
    "excel-untuk-kartu-ujian-5.jpg",
    "excel-untuk-kartu-ujian-6-300x95.jpg"
   ]
  },
  {
   "id": "kasus-jam-kerja",
   "cat": "kasus",
   "judul": "Menghitung jam kerja dan lembur",
   "ringkas": "Selisih dua jam dihitung dengan pengurangan lalu dikalikan 24 untuk mendapat jam desimal.",
   "sintaks": "=(jam_pulang - jam_masuk) * 24",
   "langkah": [
    "Ketik jam masuk dan jam pulang dalam format 08:00 dan 17:00.",
    "Selisih: =C2-B2 dengan format [h]:mm.",
    "Dalam jam desimal: =(C2-B2)*24.",
    "Lembur: =MAX(0;(C2-B2)*24-8) bila jam normal 8 jam."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Masuk",
      "Pulang",
      "Jam kerja",
      "Lembur"
     ],
     [
      "Antonio",
      "=TIME(8,0,0)",
      "=TIME(18,30,0)",
      "",
      ""
     ]
    ],
    "sel": "D2",
    "rumus": "=(C2-B2)*24",
    "coba": [
     [
      "=(C2-B2)*24",
      "Jam kerja"
     ],
     [
      "=MAX(0,(C2-B2)*24-8)",
      "Lembur di atas 8 jam"
     ],
     [
      "=HOUR(C2-B2)&\" jam \"&MINUTE(C2-B2)&\" menit\"",
      "Dalam kalimat"
     ]
    ]
   },
   "kuis": {
    "q": "Mengapa selisih waktu dikalikan 24?",
    "opsi": [
     "Karena Excel menyimpan jam sebagai pecahan hari",
     "Karena ada 24 sel",
     "Agar hasilnya persen",
     "Aturan wajib"
    ],
    "jawab": 0,
    "bahas": "Satu hari = 1, jadi satu jam = 1/24."
   },
   "kata": "jam kerja lembur selisih waktu",
   "gambar": [
    "menghitung-jam-kerja-dengan-excel-2-300x151.jpg",
    "menghitung-jam-kerja-dengan-excel-3-300x153.jpg",
    "nenghitung-jam-kerja-dengan-excel-1-300x152.jpg"
   ]
  },
  {
   "id": "kasus-kalender",
   "cat": "kasus",
   "judul": "Membuat kalender dengan Excel",
   "ringkas": "Kalender bulanan dibuat dengan kombinasi DATE, WEEKDAY, dan rumus yang mengisi tanggal otomatis berdasarkan bulan dan tahun yang dipilih.",
   "langkah": [
    "Sediakan sel tahun dan bulan.",
    "Tanggal awal bulan: =DATE(tahun;bulan;1).",
    "Tentukan kolom hari pertama dengan WEEKDAY.",
    "Isi tiap sel dengan tanggal dengan rumus yang menambah 1 hari, dan sembunyikan tanggal di luar bulan memakai IF(MONTH(...)=bulan; ...; \"\").",
    "Gunakan Conditional Formatting untuk menandai hari Minggu atau hari ini."
   ],
   "demo": {
    "data": [
     [
      "Tahun",
      2026
     ],
     [
      "Bulan",
      10
     ],
     [
      "Tanggal 1",
      ""
     ],
     [
      "Hari",
      ""
     ]
    ],
    "sel": "B3",
    "rumus": "=DATE(B1,B2,1)",
    "coba": [
     [
      "=DATE(B1,B2,1)",
      "Tanggal 1"
     ],
     [
      "=TEXT(DATE(B1,B2,1),\"dddd\")",
      "Hari pada tanggal 1"
     ],
     [
      "=EOMONTH(DATE(B1,B2,1),0)",
      "Akhir bulan"
     ],
     [
      "=DAY(EOMONTH(DATE(B1,B2,1),0))",
      "Jumlah hari"
     ]
    ]
   },
   "kuis": {
    "q": "Fungsi yang memberi tanggal terakhir sebuah bulan adalah...",
    "opsi": [
     "EOMONTH",
     "EDATE",
     "WEEKNUM",
     "DAYS"
    ],
    "jawab": 0,
    "bahas": "EOMONTH."
   },
   "kata": "kalender date weekday tanggal",
   "gambar": [
    "membuat-kalender-dengan-excel-1.jpg",
    "membuat-kalender-dengan-excel-2-300x270.jpg",
    "membuat-kalender-dengan-excel-3-300x148.jpg",
    "membuat-kalender-dengan-excel-4.jpg",
    "membuat-kalender-dengan-excel-5.jpg",
    "membuat-kalender-dengan-excel-6.jpg",
    "membuat-kalender-dengan-excel-7.jpg",
    "membuat-kalender-dengan-excel-8-300x149.jpg",
    "membuat-kalender-dengan-excel-9.jpg"
   ]
  },
  {
   "id": "kasus-dvd",
   "cat": "kasus",
   "judul": "Menghitung biaya sewa",
   "ringkas": "Tarif sewa dihitung dari lama sewa dengan tarif per hari, denda keterlambatan, dan diskon langganan.",
   "langkah": [
    "Hitung lama sewa: =tanggal_kembali - tanggal_pinjam.",
    "Biaya = lama x tarif per hari.",
    "Denda: =MAX(0;lama - batas)*denda_per_hari.",
    "Total = biaya + denda."
   ],
   "demo": {
    "data": [
     [
      "Pinjam",
      "02/10/2026"
     ],
     [
      "Kembali",
      "07/10/2026"
     ],
     [
      "Tarif/hari",
      3000
     ],
     [
      "Batas (hari)",
      3
     ],
     [
      "Denda/hari",
      1000
     ],
     [
      "Lama",
      ""
     ],
     [
      "Biaya",
      ""
     ],
     [
      "Denda",
      ""
     ],
     [
      "Total",
      ""
     ]
    ],
    "sel": "B6",
    "rumus": "=B2-B1",
    "coba": [
     [
      "=B2-B1",
      "Lama"
     ],
     [
      "=(B2-B1)*B3",
      "Biaya"
     ],
     [
      "=MAX(0,(B2-B1)-B4)*B5",
      "Denda"
     ],
     [
      "=(B2-B1)*B3+MAX(0,(B2-B1)-B4)*B5",
      "Total"
     ]
    ]
   },
   "kuis": {
    "q": "Fungsi MAX(0; x) pada denda dipakai agar...",
    "opsi": [
     "Denda tidak negatif",
     "Hasil dibulatkan",
     "Hasil tampil sebagai teks",
     "Denda selalu nol"
    ],
    "jawab": 0,
    "bahas": "Bila tidak terlambat, selisih negatif diganti 0."
   },
   "kata": "sewa dvd tarif denda",
   "gambar": [
    "menghitung-biaya-sewa-dvd-1-300x81.jpg",
    "menghitung-biaya-sewa-dvd-2-300x82.jpg",
    "menghitung-biaya-sewa-dvd-3-300x83.jpg"
   ]
  },
  {
   "id": "kasus-koreksi",
   "cat": "kasus",
   "judul": "Mengoreksi soal pilihan ganda",
   "ringkas": "Jawaban siswa dibandingkan dengan kunci jawaban, lalu skor dihitung dengan IF dan SUM atau SUMPRODUCT.",
   "langkah": [
    "Letakkan kunci jawaban di satu baris dan jawaban siswa di baris berikutnya.",
    "Benar: =IF(B3=B$2;1;0).",
    "Skor: =SUM(B4:K4)*10 untuk 10 soal.",
    "Atau satu rumus: =SUMPRODUCT(--(B3:K3=B2:K2))*10.",
    "Kunci jawaban dikunci dengan $ agar tidak bergeser."
   ],
   "demo": {
    "data": [
     [
      "Kunci",
      "A",
      "B",
      "C",
      "D",
      "A"
     ],
     [
      "Antonio",
      "A",
      "B",
      "C",
      "A",
      "A"
     ],
     [
      "Devi",
      "A",
      "C",
      "C",
      "D",
      "B"
     ]
    ],
    "sel": "G2",
    "rumus": "=SUMPRODUCT((B2:F2=B$1:F$1)*1)",
    "coba": [
     [
      "=SUMPRODUCT((B2:F2=B$1:F$1)*1)",
      "Jumlah benar"
     ],
     [
      "=SUMPRODUCT((B2:F2=B$1:F$1)*1)*20",
      "Skor (5 soal, @20)"
     ]
    ],
    "catatan": "Mulai dari G2, lalu coba ubah ke baris 3 dengan mengetik ulang."
   },
   "kuis": {
    "q": "Mengapa kunci jawaban dikunci dengan $ pada rumus koreksi?",
    "opsi": [
     "Agar tetap menunjuk baris kunci saat disalin",
     "Agar hasil rupiah",
     "Agar rumus lebih cepat",
     "Agar tampil merah"
    ],
    "jawab": 0,
    "bahas": "Alamat absolut tidak bergeser."
   },
   "kata": "koreksi pilihan ganda ujian skor",
   "gambar": [
    "koreksi-soal-pilihan-ganda-dengan-excel-1.jpg",
    "koreksi-soal-pilihan-ganda-dengan-excel-2-300x133.jpg",
    "koreksi-soal-pilihan-ganda-dengan-excel-3.jpg",
    "koreksi-soal-pilihan-ganda-dengan-excel-4.jpg",
    "koreksi-soal-pilihan-ganda-dengan-excel-5.jpg",
    "koreksi-soal-pilihan-ganda-dengan-excel-6-300x221.jpg"
   ]
  },
  {
   "id": "kasus-ttd",
   "cat": "kasus",
   "judul": "Kolom tanda tangan",
   "ringkas": "Membuat kolom tanda tangan berjenjang pada laporan, dengan sel digabung dan garis batas.",
   "langkah": [
    "Blok sel yang akan menjadi kotak tanda tangan.",
    "Home > Merge & Center untuk menyatukan.",
    "Atur tinggi baris agar cukup untuk tanda tangan.",
    "Beri garis batas lewat Borders.",
    "Tambahkan nama dan jabatan di baris bawahnya."
   ],
   "kuis": {
    "q": "Tombol yang menyatukan beberapa sel menjadi satu adalah...",
    "opsi": [
     "Merge & Center",
     "Wrap Text",
     "Format Painter",
     "Freeze"
    ],
    "jawab": 0,
    "bahas": "Merge & Center."
   },
   "kata": "tanda tangan merge sel laporan",
   "gambar": [
    "membuat-kolom-tanda-tangan-dengan-excel-1-300x189.jpg",
    "membuat-kolom-tanda-tangan-dengan-excel-2-300x190.jpg",
    "membuat-kolom-tanda-tangan-dengan-excel-3-300x192.jpg"
   ]
  },
  {
   "id": "kasus-laporan",
   "cat": "kasus",
   "judul": "Menyusun laporan keuangan",
   "ringkas": "Laporan keuangan sederhana: pemasukan, pengeluaran, dan saldo yang dijumlahkan dengan SUM dan SUMIF.",
   "langkah": [
    "Catat transaksi: tanggal, keterangan, kategori, pemasukan, pengeluaran.",
    "Saldo berjalan: =saldo_sebelumnya + pemasukan - pengeluaran.",
    "Ringkasan per kategori dengan SUMIF.",
    "Buat grafik dari ringkasan kategori."
   ],
   "demo": {
    "data": [
     [
      "Tanggal",
      "Kategori",
      "Masuk",
      "Keluar",
      "Saldo"
     ],
     [
      "01/10/2026",
      "Gaji",
      5000000,
      0,
      ""
     ],
     [
      "03/10/2026",
      "Makan",
      0,
      300000,
      ""
     ],
     [
      "05/10/2026",
      "Transport",
      0,
      150000,
      ""
     ]
    ],
    "sel": "E2",
    "rumus": "=C2-D2",
    "coba": [
     [
      "=C2-D2",
      "Saldo baris 1"
     ],
     [
      "=SUMIF(B2:B4,\"Makan\",D2:D4)",
      "Pengeluaran makan"
     ],
     [
      "=SUM(C2:C4)-SUM(D2:D4)",
      "Saldo akhir"
     ]
    ]
   },
   "kuis": {
    "q": "Saldo akhir sama dengan...",
    "opsi": [
     "Total masuk - total keluar",
     "Total masuk + total keluar",
     "Rata-rata masuk",
     "Jumlah baris"
    ],
    "jawab": 0,
    "bahas": "Pemasukan dikurangi pengeluaran."
   },
   "kata": "laporan keuangan saldo",
   "gambar": []
  }
 ]
};
