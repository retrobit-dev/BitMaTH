import type { ClockSnapshot } from '../hooks/useClock'

type IndexCardProps = {
  clock: ClockSnapshot
  isOpen: boolean
}

/**
 * Kartu indeks manila yang menyembul dari laci.
 * Di sinilah tanggal & jam "dicap" — bukan layar, tapi lembar arsip.
 */
export function IndexCard({ clock, isOpen }: IndexCardProps) {
  const [hours, minutes] = clock.time.split(':')

  return (
    <article
      className="card"
      aria-label={`Kartu arsip: ${clock.longDate}, pukul ${clock.fullTime}`}
    >
      <span className="card__punch" aria-hidden="true" />

      <header className="card__head">
        <span className="card__no">Kartu 01</span>
        <span className="card__kode">BitMaTH</span>
      </header>

      <p className="card__date">{clock.longDate}</p>

      <div className="card__clock" role="timer" aria-live="off">
        <span>{hours}</span>
        <span className="card__colon" aria-hidden="true">
          :
        </span>
        <span>{minutes}</span>
        <span className="card__sec" aria-hidden="true">
          {clock.seconds}
        </span>
      </div>

      <div className="card__foot">
        <span>
          T.A. {clock.schoolYear} · {clock.semester}
        </span>
        <span className={isOpen ? 'card__status is-open' : 'card__status'}>
          {isOpen ? 'Terbuka' : 'Terkunci'}
        </span>
      </div>
    </article>
  )
}
