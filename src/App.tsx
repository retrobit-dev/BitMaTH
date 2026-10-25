import { useCallback, useState } from 'react'
import { ArchiveDrawer } from './components/ArchiveDrawer'
import { LoginCard } from './components/LoginCard'
import { useClock } from './hooks/useClock'

export default function App() {
  const clock = useClock()
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const openDrawer = useCallback(() => setDrawerOpen(true), [])
  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  return (
    <>
      <ArchiveDrawer clock={clock} isOpen={isDrawerOpen} onOpenDrawer={openDrawer} />
      <LoginCard open={isDrawerOpen} onClose={closeDrawer} />
    </>
  )
}
