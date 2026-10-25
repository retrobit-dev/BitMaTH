import type { ClockSnapshot } from '../hooks/useClock'

type PaperScreenProps = {
  clock: ClockSnapshot
  isOpen: boolean
}

/**
 * Label e-paper di muka laci: tanggal & jam hari ini.
 * Ditempel seperti kartu label — bukan layar menyala.
 */
export function PaperScreen({ clock, isOpen }: PaperScreenProps) {
  const [hours, minutes] = clock.time.split(':')

  return (
    <div
      className="label"
      role="group"
      aria-label={`Label tanggal dan jam. ${clock.longDate}, pukul ${clock.fullTime}`}
    >
      <div className="label__date">
        <span className="label__dot" aria-hidden="true" />
        <span>{clock.longDate}</span>
      </div>

      <div className="label__time" role="timer" aria-live="off">
        <span>{hours}</span>
        <span className="label__colon" aria-hidden="true">
          :
        </span>
        <span>{minutes}</span>
        <span className="label__sec" aria-hidden="true">
          {clock.seconds}
        </span>
      </div>

      <div className="label__foot">
        <span>{isOpen ? 'Laci terbuka' : 'Laci terkunci'}</span>
        <span>
          T.A. {clock.schoolYear} · {clock.semester}
        </span>
      </div>
    </div>
  )
}
