import type { ClockSnapshot } from '../hooks/useClock'
import { FormulaBackdrop } from './FormulaBackdrop'
import { PaperScreen } from './PaperScreen'

type SplashScreenProps = {
  clock: ClockSnapshot
  isOpen: boolean
  onOpenDrawer: () => void
}

/**
 * Splash: unit laci satu laras (hanya laci atas), digambar flat-vector
 * seperti referensi — papan atas berperspektif, dinding samping gelap,
 * kilau diagonal, handle berbayang keras, plinth bergaris, bayangan tanah.
 */
export function SplashScreen({ clock, isOpen, onOpenDrawer }: SplashScreenProps) {
  return (
    <main className={`scene${isOpen ? ' is-open' : ''}`}>
      <FormulaBackdrop />

      <div className="scene__content">
        <header className="brand">
          <h1 className="brand__name">
            Bit<span>MaTH</span>
          </h1>
          <p className="brand__tag">Laci pintar guru matematika</p>
        </header>

        <div className={`unit${isOpen ? ' is-open' : ''}`}>
          <span className="unit__cap" aria-hidden="true" />

          <div className="unit__body">
            <div className="face">
              <span className="face__sheen" aria-hidden="true" />
              <span className="face__sheen face__sheen--low" aria-hidden="true" />
              <span className="face__frame" aria-hidden="true" />

              <span className="face__tab">Laci 01 · E-Paper</span>

              <div className="handle-wrap">
                <span className="handle-shadow" aria-hidden="true" />
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
              </div>

              <PaperScreen clock={clock} isOpen={isOpen} />

              <p className="drawer-hint">{clock.greeting} · tarik handle untuk membuka</p>
            </div>
          </div>

          <div className="unit__under" aria-hidden="true" />
          <div className="unit__plinth" aria-hidden="true" />
          <div className="unit__shadow" aria-hidden="true" />
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
