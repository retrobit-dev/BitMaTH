import type { ClockSnapshot } from '../hooks/useClock'
import { FormulaBackdrop } from './FormulaBackdrop'
import { PaperScreen } from './PaperScreen'

type SplashScreenProps = {
  clock: ClockSnapshot
  isOpen: boolean
  onOpenDrawer: () => void
}

export function SplashScreen({ clock, isOpen, onOpenDrawer }: SplashScreenProps) {
  return (
    <main className={`scene${isOpen ? ' is-open' : ''}`}>
      <FormulaBackdrop />

      <div className="scene__content">
        <header className="brand">
          <div className="brand__mark" aria-hidden="true">
            √
          </div>
          <h1 className="brand__name">
            Bit<span>MaTH</span>
          </h1>
          <p className="brand__tag">Laci pintar guru matematika</p>
        </header>

        <div className={`cabinet${isOpen ? ' is-open' : ''}`}>
          <div className="console">
            <div className="console__row">
              <span className="console__label">Panel 01 · E-Paper</span>
              <span className="status">
                <i className="status__dot" aria-hidden="true" />
                {isOpen ? 'Siap' : 'Siaga'}
              </span>
            </div>

            <PaperScreen clock={clock} isOpen={isOpen} />
          </div>

          <div className="drawer">
            <span className="reg reg--tl" aria-hidden="true" />
            <span className="reg reg--tr" aria-hidden="true" />
            <span className="reg reg--bl" aria-hidden="true" />
            <span className="reg reg--br" aria-hidden="true" />

            <span className="tab">Laci pintar</span>

            <button
              type="button"
              className="handle"
              onClick={onOpenDrawer}
              aria-expanded={isOpen}
              aria-label="Buka laci pintar dan masuk"
            >
              <span className="handle__grip" aria-hidden="true" />
              <span className="handle__text">Buka</span>
              <span className="handle__grip" aria-hidden="true" />
            </button>

            <p className="drawer__hint">{clock.greeting} · tekan tuas untuk masuk</p>
          </div>
        </div>

        <footer className="scene__footer">
          <span className="spectra" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>Spectra 6 · v0.1</span>
        </footer>
      </div>
    </main>
  )
}
