import type { ClockSnapshot } from '../hooks/useClock'
import { FormulaBackdrop } from './FormulaBackdrop'
import { IconChevronUp, IconSpark } from './Icons'
import { LcdScreen } from './LcdScreen'

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
          <div className="brand__badge" aria-hidden="true">
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
              <span className="console__label">BitMaTH · Panel 01</span>
              <span className="led">
                <i className="led__dot" aria-hidden="true" />
                {isOpen ? 'Siap' : 'Siaga'}
              </span>
            </div>

            <LcdScreen clock={clock} isOpen={isOpen} />
          </div>

          <div className="drawer">
            <span className="screw screw--tl" aria-hidden="true" />
            <span className="screw screw--tr" aria-hidden="true" />
            <span className="screw screw--bl" aria-hidden="true" />
            <span className="screw screw--br" aria-hidden="true" />

            <span className="plate">
              <span aria-hidden="true">▸ </span>Laci Pintar
            </span>

            <div className="open-slot">
              <button
                type="button"
                className="open-btn"
                onClick={onOpenDrawer}
                aria-expanded={isOpen}
                aria-label="Buka laci pintar dan masuk"
              >
                <span className="open-btn__icon" aria-hidden="true">
                  <IconChevronUp size={20} />
                </span>
                <span className="open-btn__text">Buka</span>
              </button>
            </div>

            <p className="drawer__hint">
              {clock.greeting} · tekan tombol untuk masuk
            </p>
          </div>
        </div>

        <footer className="scene__footer">
          <IconSpark size={12} />
          <span>Ruang kerja matematika</span>
          <i aria-hidden="true" />
          <span>v0.1</span>
        </footer>
      </div>
    </main>
  )
}
