# BitMaTH — School Simulator

Game browser bertema **school simulator** untuk guru matematika.
Sepenuhnya di layar browser, dirancang agar nanti bisa dibungkus jadi APK.

> **Tahap 1 game — layar login.** Belum ada backend; kartu guru masih
> diperiksa di sisi klien dengan akun demo.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # produksi ke dist/
npm run typecheck
```

Akun demo: `guru@bitmath.id` / `bitmath123` — atau **Masuk sebagai tamu**.

## Layar login

Layar pertama yang dilihat pemain: **gerbang sekolah** saat senja — langit
berlapis dengan bulan dan bintang, gedung sekolah dengan menara jam dan
jendela bercahaya, pepohonan, pagar besi, dua tiang gerbang dengan papan nama
emas, daun gerbang terbuka, lampu taman, bendera merah-putih, halaman dalam
dengan pintu masuk bercahaya, dan jalan masuk beraspal. Guru PDH berdiri
di depan gerbang.

Di atasnya: HUD slot "GERBANG SEKOLAH" + tanggal/jam berjalan, plakat BITMATH,
dan panel dialog bergaya game.

- **Panel dialog** — bertepi keras, bar judul bergaya jendela game,
  field NIP/email & kata sandi dengan label bernomor.
- **Komposisi** — lanskap digeser 40 unit ke atas supaya kaki karakter dan
  dasar gerbang tetap terlihat di balik panel saat layar HP rendah.
- **Aksi** — `MULAI` untuk masuk, `MASUK SEBAGAI TAMU` untuk melihat tanpa akun.
  Enter mengirim formulir, Esc membatalkan sesi tamu.
- **Berhasil** — panel berganti jadi "GURU SIAP MENGAJAR" menampilkan sprite
  karakter, nama, tahun ajaran dan semester berjalan.
- **Efek layar** — garis pindai + butiran + vignette, semua sudut siku.

## Pratinjau komposisi

`docs/gate-preview.png` — hasil `scripts/preview-scene.py`, pratinjau kasar
gerbang (tanpa teks & sprite). Garis merah menandai perkiraan batas atas panel
login; semua elemen penting berada di atasnya.

## Struktur

```
public/sprites/          # aset karakter pixel-art (lihat README di dalam)
scripts/build-sprites.sh  # pembangun ulang sprite sheet
scripts/preview-scene.py  # pratinjau komposisi scene tanpa browser (ImageMagick)
src/
├── App.tsx
├── styles.css            # tema game: panel, HUD, CRT, tipografi pixel
├── hooks/useClock.ts     # jam, tanggal Indonesia, tahun ajaran & semester
└── components/
    ├── GameLogin.tsx     # layar login game (form + status siap)
    ├── SchoolGateScene.tsx # panggung gerbang sekolah (SVG blok piksel)
    └── Icons.tsx         # ikon SVG inline
```

## Aset karakter

| Berkas | Isi |
| --- | --- |
| `guru-pdh.png` | pose dasar berdiri (dipakai di login) |
| `guru-duduk.png` | duduk di kursi |
| `guru-menunjuk.png` | menunjuk papan tulis |
| `guru-penggaris.png` | memegang penggaris |
| `guru-sheet.png` | sprite sheet idle: 3 arah × 2 frame |

Detail sel, fps, dan cara pakai ada di `public/sprites/README.md`.

## Keputusan teknis

| Aspek | Pilihan | Alasan |
| --- | --- | --- |
| Stack | Vite + React 19 + TypeScript | ringan, mudah dibungkus Capacitor |
| Panggung | SVG blok piksel | tajam di semua ukuran, warna dari CSS |
| Font | Press Start 2P + Silkscreen (self-host) | tipografi pixel tanpa CDN |
| Sprite | PNG 128 warna, tanpa anti-alias | ringan (~40 KB/pose) dan tajam |

## Roadmap

1. **Tahap 1 (selesai)** — layar login game dengan latar gerbang sekolah + aset karakter.
2. **Tahap 2** — backend autentikasi, penyimpanan progres, layar dasbor guru.
3. **Tahap 3** — inti permainan: jadwal kelas, bank soal, penilaian, misi harian.
4. **Tahap 4** — sprite `back` + animasi jalan, offline-first, build APK.
