import type { ClockSnapshot } from '../hooks/useClock'
import { FormulaBackdrop } from './FormulaBackdrop'
import { PaperScreen } from './PaperScreen'

type SplashScreenProps = {
  clock: ClockSnapshot
  isOpen: boolean
  onOpenDrawer: () => void
}

/**
 * Splash: sebuah laci kayu di atas meja kerja guru.
 * Papan atas menjorok, sisi bertebal, alas berkaki, bayangan arsir di meja.
 */
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
          <span className="cabinet__top" aria-hidden="true" />
          <span className="cabinet__side" aria-hidden="true" />

          <div className="cabinet__body">
            <span className="knot knot--a" aria-hidden="true" />
            <span className="knot knot--b" aria-hidden="true" />

            <div className="drawer-front">
              <div className="plate">
                <span className="plate__name">Laci Pintar</span>
                <span className="plate__no">No. 01</span>
              </div>

              <PaperScreen clock={clock} isOpen={isOpen} />

              <div className="handle-wrap">
                <button
                  type="button"
                  className="pull"
                  onClick={onOpenDrawer}
                  aria-expanded={isOpen}
                  aria-label="Tarik handle untuk membuka laci dan masuk"
                >
                  <span className="pull__grip" aria-hidden="true" />
                  <span className="pull__text">
                    Tarik · <b>Buka</b>
                  </span>
                  <span className="pull__grip" aria-hidden="true" />
                </button>

                <span className="tag" aria-hidden="true">
                  T.A. {clock.schoolYear}
                </span>
              </div>

              <p className="drawer-hint">{clock.greeting} · tarik handle untuk membuka</p>
            </div>
          </div>

          <div className="cabinet__base" aria-hidden="true" />
          <div className="cabinet__legs" aria-hidden="true">
            <i />
            <i />
          </div>
          <div className="cabinet__shadow" aria-hidden="true" />
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
