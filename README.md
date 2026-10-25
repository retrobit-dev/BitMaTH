# BitMaTH

Asisten laci pintar untuk guru matematika. Web app (full stack) yang nantinya dibungkus menjadi APK Android.

> Status: **Tahap 1 — Splash "Laci Pintar" + form login (UI)**.
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

Metafora utama: **laci meja guru**. Splash screen bukan sekadar logo, tapi sebuah
kabinet dengan panel kontrol, layar mini, dan satu laci fisik yang bisa dibuka.

- **Panel kontrol** — label unit, LED status (siaga → siap).
- **Layar mini (LCD)** — tanggal hari ini, jam berjalan (HH:MM + detik),
  tahun ajaran dan semester yang dihitung otomatis dari kalender.
- **Laci + tombol Buka** — tombol bulat bertekstur seperti tombol mesin.
  Saat ditekan: laci turun sedikit (efek perspektif), latar meredup, dan
  form login naik dari bawah seperti laci yang ditarik keluar.
- **Form login** — validasi email/NIP, sandi minimal 8 karakter, toggle
  lihat sandi, "ingat perangkat", serta jalur tanpa akun.

## Struktur

```
src/
├── App.tsx                  # komposisi splash + sheet
├── index.css                # design system (token, tekstur, animasi)
├── hooks/useClock.ts        # jam live, tanggal Indonesia, tahun ajaran
└── components/
    ├── SplashScreen.tsx     # scene, brand, kabinet, laci
    ├── LcdScreen.tsx        # layar mini tanggal & jam
    ├── AuthSheet.tsx        # login sheet (form + status sukses)
    ├── FormulaBackdrop.tsx  # latar rumus samar
    └── Icons.tsx            # ikon SVG inline (tanpa dependensi)
```

## Keputusan teknis

| Aspek | Pilihan | Alasan |
| --- | --- | --- |
| Stack | Vite + React 19 + TypeScript | cepat, mudah dibungkus Capacitor |
| Styling | CSS vanilla + Tailwind v4 (tersedia) | kontrol penuh atas tekstur/animasi 3D |
| Font | Plus Jakarta Sans + JetBrains Mono (self-host) | tampil sama di APK, tanpa CDN |
| APK | Capacitor (rencana) | reuse UI yang sama, akses native |

## Roadmap

1. **Tahap 1 (selesai)** — splash laci pintar, layar tanggal/jam, form login UI.
2. **Tahap 2** — backend auth nyata (sesi/JWT), dashboard guru.
3. **Tahap 3** — modul inti: bank soal, perangkat pembelajaran (RPP/ATP),
   presensi, penilaian.
4. **Tahap 4** — offline-first (IndexedDB) + build APK via Capacitor.
