import { useCallback, useState } from 'react'
import { AuthSheet } from './components/AuthSheet'
import { SplashScreen } from './components/SplashScreen'
import { useClock } from './hooks/useClock'

/** Tanda potong cetak di empat sudut layar — memperkuat kesan hasil cetak. */
function PrintFrame() {
  return (
    <div className="print-frame" aria-hidden="true">
      <span className="crop crop--tl" />
      <span className="crop crop--tr" />
      <span className="crop crop--bl" />
      <span className="crop crop--br" />
    </div>
  )
}

export default function App() {
  const clock = useClock()
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const openDrawer = useCallback(() => setDrawerOpen(true), [])
  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  return (
    <>
      <PrintFrame />
      <SplashScreen clock={clock} isOpen={isDrawerOpen} onOpenDrawer={openDrawer} />
      <AuthSheet open={isDrawerOpen} onClose={closeDrawer} />
    </>
  )
}
