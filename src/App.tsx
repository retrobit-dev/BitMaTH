import { useCallback, useState } from 'react'
import { AuthSheet } from './components/AuthSheet'
import { SplashScreen } from './components/SplashScreen'
import { useClock } from './hooks/useClock'

export default function App() {
  const clock = useClock()
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const openDrawer = useCallback(() => setDrawerOpen(true), [])
  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  return (
    <>
      <SplashScreen clock={clock} isOpen={isDrawerOpen} onOpenDrawer={openDrawer} />
      <AuthSheet open={isDrawerOpen} onClose={closeDrawer} />
    </>
  )
}
