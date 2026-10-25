# BitMaTH

Asisten laci pintar untuk guru matematika. Web app (full stack) yang nantinya dibungkus menjadi APK Android.

> Status: **Tahap 1 — Splash "Laci Pintar" + form login (UI), tema e-paper Spectra.**
> Autentikasi masih lokal (akun demo), backend menyusul.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build produksi ke dist/
```

Akun demo tahap 1: `guru@bitmath.id` / `bitmath123`
(atau gunakan **Jelajahi tanpa akun**).

## Konsep

Metafora utama: **laci meja guru**, digambar sebagai **halaman e-paper**.
Bukan layar bercahaya — semuanya bidang datar di atas kertas.

### Bahasa visual: e-paper Spectra 6

| Aspek | Aturan |
| --- | --- |
| Warna | 6 pigmen Spectra: hitam `#201e1a`, kertas `#efe8d6`, merah `#b23a2f`, kuning `#e2a92b`, biru `#2b4a80`, hijau `#3d6b4e` |
| Cahaya | tanpa gradien glow, tanpa blur, tanpa bayangan lembut — hanya offset keras |
| Tekstur | butiran kertas (SVG noise), raster/dither titik, kertas berpetak |
| Tipografi | Newsreader (serif cetak) + Space Mono (label teknis) |
| Aksen | garis tinta, label kuning, stempel merah, tanda potong cetak di 4 sudut |

### Alur

- **Layar mini** — tanggal hari ini + jam berjalan di blok tinta terbalik,
  detik di penanda kuning, kaki layar menampilkan tahun ajaran & semester.
  Saat laci dibuka, layar melakukan "refresh" khas e-paper (blok membalik warna).
- **Tuas laci** — tombol merah bertepi tinta dengan grip raster. Ditekan =
  laci turun beberapa piksel, latar meredup dengan pola dither, form login naik.
- **Form login** — bernomor seperti formulir cetak (01 email/NIP, 02 sandi),
  validasi, toggle lihat sandi, "ingat perangkat", jalur tanpa akun.
- **Sukses** — stempel "TERVERIFIKASI" miring, bukan ikon centang berkilau.

## Struktur

```
src/
├── App.tsx                  # tanda potong cetak + komposisi splash/sheet
├── index.css                # design system e-paper (palet Spectra, tekstur, animasi)
├── hooks/useClock.ts        # jam live, tanggal Indonesia, tahun ajaran
└── components/
    ├── SplashScreen.tsx     # scene kertas, brand, kabinet, tuas laci
    ├── PaperScreen.tsx      # layar mini e-paper: tanggal & jam
    ├── AuthSheet.tsx        # login sheet (form + status sukses)
    ├── FormulaBackdrop.tsx  # latar rumus samar
    └── Icons.tsx            # ikon SVG inline (tanpa dependensi)
```

## Keputusan teknis

| Aspek | Pilihan | Alasan |
| --- | --- | --- |
| Stack | Vite + React 19 + TypeScript | cepat, mudah dibungkus Capacitor |
| Styling | CSS vanilla + Tailwind v4 | kontrol penuh atas tekstur dither & bayangan keras |
| Font | Newsreader + Space Mono (self-host) | kesan cetak, tampil sama di APK tanpa CDN |
| APK | Capacitor (rencana) | reuse UI yang sama, akses native |

## Roadmap

1. **Tahap 1 (selesai)** — splash laci pintar bertema e-paper Spectra, layar tanggal/jam, form login UI.
2. **Tahap 2** — backend auth nyata (sesi/JWT), dashboard guru.
3. **Tahap 3** — modul inti: bank soal, perangkat pembelajaran (RPP/ATP),
   presensi, penilaian.
4. **Tahap 4** — offline-first (IndexedDB) + build APK via Capacitor.
