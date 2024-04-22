import React from 'react'
import './About.scss'
import logo from '../Home/images/Home4.jpg'
const About = () => {
  return (
    <section className='section about-section'>
      <div className='about-pic'>
        <img className='img about-img' src={logo} alt='about logo' />
      </div>
      <div className='about-info'>
        <div className='tours-title'>
          <h1> our tours</h1>
          <div className='underline'></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          exercitationem optio illum. Rerum dolores id repudiandae, dicta quam
          quod deleniti et vel itaque ad nam exercitationem neque suscipit
          voluptatibus, quos veniam? Maiores ad cum asperiores architecto quidem
          a nesciunt minima, quia animi aliquid quis quaerat dolor commodi quo
          ducimus non.
        </p>
      </div>
    </section>
  )
}

export default About
