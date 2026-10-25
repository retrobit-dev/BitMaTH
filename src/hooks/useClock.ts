import { useEffect, useState } from 'react'

export type ClockSnapshot = {
  /** tanggal + jam lengkap, mis. "Sab, 25 Okt 2026 · 09:41:07" */
  stamp: string
  /** tanggal panjang, mis. "Sabtu, 25 Oktober 2026" */
  longDate: string
  /** jam 24 jam, mis. "09:41" */
  time: string
  /** detik dua digit, mis. "07" */
  seconds: string
  /** jam:menit:detik */
  fullTime: string
  /** sapaan sesuai jam, mis. "Selamat pagi" */
  greeting: string
  /** tahun ajaran berjalan, mis. "2026/2027" */
  schoolYear: string
  /** semester berjalan berdasarkan bulan kalender */
  semester: 'Ganjil' | 'Genap'
}

const pad = (value: number) => value.toString().padStart(2, '0')

const greetingFor = (hour: number) => {
  if (hour < 11) return 'Selamat pagi'
  if (hour < 15) return 'Selamat siang'
  if (hour < 18) return 'Selamat sore'
  return 'Selamat malam'
}

/** Tahun ajaran Indonesia: berganti tiap Juli. */
const schoolYearFor = (date: Date) => {
  const year = date.getFullYear()
  const start = date.getMonth() >= 6 ? year : year - 1
  return `${start}/${start + 1}`
}

/** Semester ganjil: Juli–Desember, genap: Januari–Juni. */
const semesterFor = (date: Date): 'Ganjil' | 'Genap' =>
  date.getMonth() >= 6 ? 'Ganjil' : 'Genap'

export function snapshotOf(date: Date): ClockSnapshot {
  const hh = pad(date.getHours())
  const mm = pad(date.getMinutes())
  const ss = pad(date.getSeconds())

  const time = `${hh}:${mm}`
  const longDate = date.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const shortDate = date.toLocaleDateString('id-ID', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return {
    stamp: `${shortDate} · ${hh}:${mm}:${ss}`,
    longDate,
    time,
    seconds: ss,
    fullTime: `${time}:${ss}`,
    greeting: greetingFor(date.getHours()),
    schoolYear: schoolYearFor(date),
    semester: semesterFor(date),
  }
}

/**
 * Jam berjalan yang disinkronkan ke pergantian detik,
 * dan otomatis menghitung ulang saat perangkat bangun / tab kembali aktif.
 */
export function useClock(): ClockSnapshot {
  const [snapshot, setSnapshot] = useState(() => snapshotOf(new Date()))

  useEffect(() => {
    let timer: number | undefined

    const tick = () => {
      setSnapshot(snapshotOf(new Date()))
      const drift = 1000 - (Date.now() % 1000)
      timer = window.setTimeout(tick, drift)
    }

    tick()

    const resync = () => {
      if (document.visibilityState === 'visible') {
        window.clearTimeout(timer)
        tick()
      }
    }

    document.addEventListener('visibilitychange', resync)

    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('visibilitychange', resync)
    }
  }, [])

  return snapshot
}
