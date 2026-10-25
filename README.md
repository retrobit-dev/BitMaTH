# BitMaTH

Laci pintar untuk guru matematika. Web app yang nantinya dibungkus menjadi APK Android.

> **Tahap 1 — dibangun ulang dari nol.**
> Splash berupa unit laci katalog arsip + formulir masuk.
> Autentikasi masih lokal (akun demo); backend menyusul.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # produksi ke dist/
npm run typecheck  # tsc -b
```

Akun demo: `guru@bitmath.id` / `bitmath123` — atau **Lihat tanpa akun**.

## Konsep

Metafora: **laci katalog arsip di meja guru**. Bukan kartu UI, tapi perabot:
unit laci satu laras dengan muka laci kraft, pelat kuningan, dan tuas tarik.
Kartu indeks manila menyembul dari celah laci — di situlah tanggal dan jam
"dicap", seperti lembar arsip, bukan layar.

### Arah rupa

| Aspek | Aturan |
| --- | --- |
| Sumber warna | 6 pigmen e-paper Spectra: hitam, kertas, merah, kuning, biru, hijau |
| Turunan | tint kraft/kertas: `#ece3cf` → `#d9c9a8` → `#c2ad86` → `#a08c68` → `#7d6a49` |
| Aksen | kuningan `#d8a53a` (pelat & tuas), merah `#b23a2f` (cap/stempel), kuning `#e2a92b` (penanda detik) |
| Kedalaman | tanpa blur/glow: bidang tonal, garis tinta, bayangan keras, arsir titik |
| Tekstur | butiran kertas di seluruh layar, ruling biru pada kartu, vignette titik |
| Tipografi | Newsreader (serif cetak) + Space Mono (label teknis), self-host |

### Alur

1. **Splash** — unit laci: papan atas berperspektif, dinding samping lebih gelap,
   celah laci gelap, kartu indeks menyembul (tanggal, jam besar, detik kuning,
   T.A. & semester), muka laci dengan pelat kuningan "LACI 01" dan tuas tarik,
   plinth bergaris, bayangan tanah.
2. **Tekan tuas** — muka laci turun, kartu naik sedikit, lalu **kartu formulir**
   naik dari bawah (baki laci) berisi isian masuk.
3. **Formulir** — isian bergaris bawah seperti blanko arsip (01 email/NIP,
   02 kata sandi), validasi, lihat sandi, ingat perangkat, jalur tanpa akun.
4. **Berhasil** — cap "TERVERIFIKASI" merah miring, bukan ikon berkilau.

## Struktur

```
src/
├── App.tsx                    # orkestrasi splash + formulir
├── styles.css                 # design system: kraft, kuningan, kartu indeks
├── hooks/useClock.ts          # jam live, tanggal Indonesia, T.A. & semester
└── components/
    ├── ArchiveDrawer.tsx      # unit laci: papan atas, celah, muka, tuas, plinth
    ├── IndexCard.tsx          # kartu manila: tanggal & jam dicap
    ├── LoginCard.tsx          # kartu formulir masuk + status berhasil
    └── Icons.tsx              # ikon SVG inline (tanpa dependensi)
```

## Keputusan teknis

| Aspek | Pilihan | Alasan |
| --- | --- | --- |
| Stack | Vite + React 19 + TypeScript | ringan, mudah dibungkus Capacitor |
| Styling | CSS murni (tanpa framework) | kontrol penuh tekstur, clip-path, bayangan keras |
| Font | Newsreader + Space Mono, self-host | tampil sama di APK, tanpa CDN |
| APK | Capacitor (rencana tahap 4) | memakai UI yang sama |

## Roadmap

1. **Tahap 1 (selesai)** — splash unit laci arsip, kartu tanggal/jam, formulir masuk UI.
2. **Tahap 2** — backend autentikasi (sesi/JWT) + dasbor guru.
3. **Tahap 3** — modul inti: bank soal, perangkat pembelajaran, presensi, penilaian.
4. **Tahap 4** — offline-first (IndexedDB) + build APK via Capacitor.
