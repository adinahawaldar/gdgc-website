import React from 'react'
import LandingPage from './pages/LandingPage'
import ScrollManager from './components/ScrollManager'
import SplashScreen from './components/SplashScreen'

export default function App() {
  return (
    <>
      <SplashScreen />
      <ScrollManager />
      <LandingPage />
    </>
  )
}
