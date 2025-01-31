import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className="hero container">
      
      <div className='herotext'>
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting edge curriculam is designed to empower students with the knowledge,skills and expriences to excel in dynamic field of education</p>
        <button className='btn'> Explore More <img src={dark_arrow} alt="image" /></button>
      </div>
    </div>
  )
}

export default Hero
