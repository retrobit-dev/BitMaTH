# Aset karakter — guru PDH

Semua sprite pixel-art: outline gelap 1 px, bayangan datar 2–3 tingkat, tanpa
anti-alias. Latar transparan dan sudah dipangkas rapat.

| Berkas | Ukuran | Isi |
| --- | --- | --- |
| `guru-pdh.png` | 240 × 750 | pose dasar, berdiri (dipakai di layar login) |
| `guru-pdh@2x.png` | 480 × 1500 | versi 2× untuk layar retina |
| `guru-duduk.png` | 364 × 628 | duduk di kursi, buku di pangkuan |
| `guru-menunjuk.png` | 429 × 693 | menunjuk papan tulis, kapur di tangan |
| `guru-penggaris.png` | 429 × 693 | memegang penggaris panjang |
| `guru-sheet.png` | 480 × 2340 | sprite sheet idle, sel 240 × 780 |
| `manifest.json` | — | manifes pose + sheet (untuk dimuat game) |

## Sprite sheet

`guru-sheet.png` disusun 2 kolom × 3 baris:

| Baris | Arah | Kolom 1 | Kolom 2 |
| --- | --- | --- | --- |
| 1 | `down` (menghadap pemain) | idle A | idle B |
| 2 | `left` (profil kiri) | idle A | idle B |
| 3 | `right` (profil kanan) | idle A | idle B |

- Sel: **240 × 780 px**, sprite menempel di dasar sel.
- Frame idle B = frame A digeser turun **6 px** (efek napas), diputar 4 fps.
- Arah `left` / `right` dibuat dengan *flip* horizontal dari pose dasar —
  tidak ada aset terpisah yang perlu digambar.
- **Belum ada arah `back`**: butuh sprite belakang tersendiri. Slot baris ke-4
  sudah disiapkan di manifest; tinggal tambahkan berkas lalu jalankan ulang skrip.

## Membangun ulang

```bash
./scripts/build-sprites.sh
```

Skrip memotong `guru-pdh.png` menjadi frame per arah, menyusun sheet, dan
menulis hasilnya ke folder ini. Butuh ImageMagick (`convert`, `montage`).

## Cara pakai di aplikasi

```html
<img src="/sprites/guru-pdh.png" alt="Guru BitMaTH" class="sprite" />
```

```css
.sprite {
  height: 132px;                 /* perbesar kelipatan bulat */
  image-rendering: pixelated;    /* wajib: jangan biarkan browser mem-blur */
}
```

Tips:

- Bayangan sudah menyatu di dalam sprite (kecuali pose menunjuk & penggaris
  yang bersih tanpa bayangan); jangan tambah `drop-shadow` yang lembut.
- Untuk animasi, jangan `background-position` pecahan — pakai kelipatan
  ukuran sel penuh supaya piksel tetap utuh.
- Semua berkas sudah di-kuantisasi ke 128 warna (tanpa dither) agar ringan,
  tampilan tidak berubah.

## Atribusi

Dibuat untuk BitMaTH dengan bantuan model gambar AI, lalu dipotong, dibersihkan
latarnya, dan dioptimalkan secara lokal. Wajah mengikuti foto referensi pemilik
aplikasi.
