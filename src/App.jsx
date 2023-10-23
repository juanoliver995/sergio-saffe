import Slider from "./components/Slider"
import Hero from "./components/Hero"
import Biography from "./components/Biography"
import Dates from "./components/Dates"
import SeccionMusic from "./components/SeccionMusic"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { useEffect, useState } from "react"

function App() {
  const [dates, setDates] = useState([])

  return (
    <>
      <Header />
      <Hero />
      <Biography />
      <Slider />
      <SeccionMusic />
      <Footer />
    </>
  )
}

export default App
