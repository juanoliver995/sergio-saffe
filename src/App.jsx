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

  useEffect(() => {
    const getDates = () => {
      fetch("https://back-admin-dates-production.up.railway.app/api/dates/site/63865886fa8a1f1fff145fcf")
        .then(res => res.json())
        .then(data => setDates(data))
        .catch(err => console.log(err))
    }
    getDates()
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Biography />
      <Dates dates={dates} />
      <Slider />
      <SeccionMusic />
      <Footer />
    </>
  )
}

export default App
