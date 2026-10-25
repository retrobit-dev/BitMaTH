import type { ClockSnapshot } from '../hooks/useClock'
import { IconCalendar } from './Icons'

type LcdScreenProps = {
  clock: ClockSnapshot
  isOpen: boolean
}

/**
 * "Layar mini" di panel laci: menampilkan tanggal & jam hari ini.
 * Gaya LCD hijau dengan garis pindai, mengikuti estetika panel mesin.
 */
export function LcdScreen({ clock, isOpen }: LcdScreenProps) {
  return (
    <section className="lcd" aria-label="Layar mini: tanggal dan jam hari ini">
      <div className="lcd__date">
        <IconCalendar />
        <span>{clock.longDate}</span>
      </div>

      <div className="lcd__time" role="timer" aria-live="off">
        <span>{clock.time.slice(0, 2)}</span>
        <span className="lcd__colon" aria-hidden="true">
          :
        </span>
        <span>{clock.time.slice(3, 5)}</span>
        <span className="lcd__sec">{clock.seconds}</span>
      </div>

      <div className="lcd__foot">
        <span>{isOpen ? 'Laci terbuka' : 'Laci terkunci'}</span>
        <span>
          T.A. {clock.schoolYear} / {clock.semester}
        </span>
      </div>
    </section>
  )
}
