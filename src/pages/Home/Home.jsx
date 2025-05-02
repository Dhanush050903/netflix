import React from 'react'
import './Home.css'
import TitleCards from '../../components/TitleCards/TitleCards'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} className='banner-img'></img>
        <div className="hero-caption">
          <img src={hero_title} className='caption-img'></img>
          <p>Discovering his ties to an ancient order, a young man living in modern Istanbul embarks a 
            journey to save the city from immortal enemy.
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon}></img>Play</button>
            <button className='btn dark-btn'><img src={info_icon}></img>Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Top Rated" category={"top_rated"}/>
        <TitleCards title="Popular" category={"popular"}/>
        <TitleCards title="Blockbuster" category={"now_playing"}/>
        <TitleCards title="Upcoming" category={"upcoming"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
