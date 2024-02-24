import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import CardCarousel from "../common/cardscarousel/CardCarousel"

const Home = () => {
  return (
    <>
      <Hero />
      <CardCarousel />
      {/* <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice /> */}
    </>
  )
}

export default Home
