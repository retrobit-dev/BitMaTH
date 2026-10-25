import type { ClockSnapshot } from '../hooks/useClock'
import { IndexCard } from './IndexCard'

type ArchiveDrawerProps = {
  clock: ClockSnapshot
  isOpen: boolean
  onOpenDrawer: () => void
}

/**
 * Splash: unit laci katalog arsip di atas meja kerja.
 * Satu laci saja — kartu indeks menyembul dari celah laci,
 * muka laci berpelat kuningan dengan tuas tarik.
 */
export function ArchiveDrawer({ clock, isOpen, onOpenDrawer }: ArchiveDrawerProps) {
  return (
    <main className="scene">
      <div className="scene__content">
        <header className="brand">
          <h1 className="brand__name">
            Bit<span>MaTH</span>
          </h1>
          <p className="brand__sub">Laci katalog · guru matematika</p>
        </header>

        <div className={`unit${isOpen ? ' is-open' : ''}`}>
          <span className="unit__top" aria-hidden="true" />

          <div className="unit__cab">
            <div className="drawer-opening">
              <IndexCard clock={clock} isOpen={isOpen} />
            </div>

            <button
              type="button"
              className="drawer-face"
              onClick={onOpenDrawer}
              aria-expanded={isOpen}
              aria-label="Tarik laci untuk membuka formulir masuk"
            >
              <span className="holder">
                <span className="holder__label">Laci 01 · BitMaTH</span>
              </span>

              <span className="pull" aria-hidden="true">
                <i className="pull__grip" />
              </span>

              <span className="drawer-face__note">
                {clock.greeting} · tarik laci untuk membuka
              </span>
            </button>
          </div>

          <div className="unit__plinth" aria-hidden="true" />
          <div className="unit__ground" aria-hidden="true" />
        </div>

        <footer className="scene__footer">
          <span className="swatches" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>Arsip 01 · v0.2</span>
        </footer>
      </div>
    </main>
  )
}
