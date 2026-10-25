import { useEffect, useState } from 'react'

export type ClockSnapshot = {
  /** "Sabtu, 25 Oktober 2026" */
  longDate: string
  /** "SAB, 25 OKT 2026" */
  shortDate: string
  /** "09:41" */
  time: string
  /** "07" */
  seconds: string
  /** "09:41:07" */
  fullTime: string
  /** "Selamat pagi" */
  greeting: string
  /** "2026/2027" */
  schoolYear: string
  /** "Ganjil" | "Genap" */
  semester: 'Ganjil' | 'Genap'
  /** nomor hari dalam bulan, dua digit */
  day: string
}

const pad = (n: number) => n.toString().padStart(2, '0')

const greetingFor = (hour: number) => {
  if (hour < 11) return 'Selamat pagi'
  if (hour < 15) return 'Selamat siang'
  if (hour < 18) return 'Selamat sore'
  return 'Selamat malam'
}

/** Tahun ajaran Indonesia berganti setiap Juli. */
const schoolYearFor = (date: Date) => {
  const start = date.getMonth() >= 6 ? date.getFullYear() : date.getFullYear() - 1
  return `${start}/${start + 1}`
}

const semesterFor = (date: Date): 'Ganjil' | 'Genap' =>
  date.getMonth() >= 6 ? 'Ganjil' : 'Genap'

export function snapshotOf(date: Date): ClockSnapshot {
  const hh = pad(date.getHours())
  const mm = pad(date.getMinutes())
  const ss = pad(date.getSeconds())
  const time = `${hh}:${mm}`

  return {
    longDate: date.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    shortDate: date
      .toLocaleDateString('id-ID', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
      .toUpperCase(),
    time,
    seconds: ss,
    fullTime: `${time}:${ss}`,
    greeting: greetingFor(date.getHours()),
    schoolYear: schoolYearFor(date),
    semester: semesterFor(date),
    day: pad(date.getDate()),
  }
}

/** Jam berjalan yang disinkronkan ke pergantian detik & bangun dari sleep. */
export function useClock(): ClockSnapshot {
  const [snapshot, setSnapshot] = useState(() => snapshotOf(new Date()))

  useEffect(() => {
    let timer: number | undefined

    const tick = () => {
      setSnapshot(snapshotOf(new Date()))
      timer = window.setTimeout(tick, 1000 - (Date.now() % 1000))
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
