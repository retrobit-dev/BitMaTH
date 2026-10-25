# BitMaTH

Asisten laci pintar untuk guru matematika. Web app (full stack) yang nantinya dibungkus menjadi APK Android.

> Status: **Tahap 1 — Splash laci kayu + form login (UI), tema e-paper Spectra.**
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

Metafora utama: **laci meja guru** — digambar sebagai benda, bukan kartu UI.
Splash adalah potret meja kerja: laci kayu berkaki di atas kertas berpetak,
dengan bayangan arsir, simpul kayu, pelat kuningan, dan handle logam.

### Bahasa visual: e-paper Spectra 6

| Aspek | Aturan |
| --- | --- |
| Warna | 6 pigmen Spectra: hitam `#201e1a`, kertas `#efe8d6`, merah `#b23a2f`, kuning (kayu) `#e2a92b`, biru `#2b4a80`, hijau `#3d6b4e` |
| Cahaya | tanpa glow, tanpa blur, tanpa gradien lembut — kedalaman dari garis tinta & bayangan keras |
| Tekstur | butiran kertas, serat kayu (garis rapat), arsir titik (dither), vignette titik di sudut |
| Bentuk | sudut nyaris siku (0–1px), garis ganda, garis putus-titik |
| Tipografi | Newsreader (serif cetak, huruf kapital berjarak) + Space Mono (label teknis) |

### Bagian laci

- **Papan atas** menjorok ke kiri-kanan, **sisi kanan** bertebal dengan pola titik,
  **alas + dua kaki**, dan **bayangan arsir** di permukaan meja.
- **Muka laci** punya celah gelap di atasnya, serat kayu, dua simpul kayu,
  pelat kuningan "LACI PINTAR · No. 01" yang dipasang miring.
- **Label e-paper** — tanggal hari ini, jam berjalan dengan detik di kotak kuning,
  tahun ajaran & semester. Saat laci dibuka, label "refresh" seperti panel asli.
- **Handle** — bar bertekstur logam dengan dua sekrup, kartu gantung kecil
  bertuliskan tahun ajaran. Ditekan: handle turun, muka laci ikut turun 5px,
  lalu formulir naik dari bawah sebagai **baki laci berisi kertas**.
- **Formulir** — bernomor (01 email/NIP, 02 sandi), label mono, stempel
  "TERVERIFIKASI" saat berhasil.

## Struktur

```
src/
├── App.tsx                  # tanda potong cetak + komposisi splash/sheet
├── index.css                # design system e-paper (palet, serat kayu, arsir)
├── hooks/useClock.ts        # jam live, tanggal Indonesia, tahun ajaran
└── components/
    ├── SplashScreen.tsx     # potret laci kayu: papan atas, muka laci, handle
    ├── PaperScreen.tsx      # label e-paper di muka laci: tanggal & jam
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

1. **Tahap 1 (selesai)** — splash laci kayu bertema e-paper Spectra, label tanggal/jam, form login UI.
2. **Tahap 2** — backend auth nyata (sesi/JWT), dashboard guru.
3. **Tahap 3** — modul inti: bank soal, perangkat pembelajaran (RPP/ATP),
   presensi, penilaian.
4. **Tahap 4** — offline-first (IndexedDB) + build APK via Capacitor.
