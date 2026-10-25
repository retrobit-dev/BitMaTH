import type { ClockSnapshot } from '../hooks/useClock'

type PaperScreenProps = {
  clock: ClockSnapshot
  isOpen: boolean
}

/**
 * Layar mini e-paper: tanggal & jam hari ini.
 * Hanya tinta di atas kertas — blok jam dibalik (hitam) agar terbaca seperti
 * cetak, dengan penanda detik berwarna kuning Spectra.
 */
export function PaperScreen({ clock, isOpen }: PaperScreenProps) {
  const [hours, minutes] = clock.time.split(':')

  return (
    <section className="screen" aria-label="Layar mini: tanggal dan jam hari ini">
      <div className="screen__head">
        <span className="screen__flag" aria-hidden="true" />
        <span>{clock.longDate}</span>
      </div>

      <div className="screen__time" role="timer" aria-live="off">
        <span>{hours}</span>
        <span className="screen__colon" aria-hidden="true">
          :
        </span>
        <span>{minutes}</span>
        <span className="screen__secs" aria-label={`${clock.seconds} detik`}>
          {clock.seconds}
        </span>
      </div>

      <div className="screen__foot">
        <span>{isOpen ? 'Laci terbuka' : 'Laci terkunci'}</span>
        <span>
          T.A. {clock.schoolYear} · {clock.semester}
        </span>
      </div>
    </section>
  )
}
