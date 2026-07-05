import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import HeroSection from "./HeroSection"
import Features from "./Features"
import HowItWorks from "./HowItWorks"
import Statistics from "./Statistics"

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <Features />

      <HowItWorks />

      <Statistics />

      <Footer />
    </>
  )
}