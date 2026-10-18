import React, { useState } from 'react'
import LandingPage from './pages/LandingPage'
import ScrollManager from './components/ScrollManager'
import SplashScreen from './components/SplashScreen'

export default function App() {
  const [isScreenLoaded, setIsScreenLoaded] = useState(false)

  return (
    <>
      <SplashScreen onComplete={() => setIsScreenLoaded(true)} />
      <ScrollManager />
      <LandingPage isScreenLoaded={isScreenLoaded} />
    </>
  )
}
