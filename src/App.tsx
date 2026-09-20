import { useCallback, useState } from 'react'
import { Ecosystem } from './components/Ecosystem'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Passport } from './components/Passport'
import { Pricing } from './components/Pricing'
import { SignupModal } from './components/SignupModal'

export default function App() {
  const [signupOpen, setSignupOpen] = useState(false)
  const openSignup = useCallback(() => setSignupOpen(true), [])
  const closeSignup = useCallback(() => setSignupOpen(false), [])

  return (
    <div className="min-h-screen bg-white text-ink">
      <Header onSignup={openSignup} />
      <main>
        <Hero onSignup={openSignup} onDemo={openSignup} />
        <Experience />
        <Passport />
        <Ecosystem />
        <Pricing onSignup={openSignup} />
      </main>
      <Footer onSignup={openSignup} />
      <SignupModal open={signupOpen} onClose={closeSignup} />
    </div>
  )
}
