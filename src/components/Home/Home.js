import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import Image from './images/Home2.jpg'
import { useGlobalContext } from '../../context'
const Home = () => {
  const { isSidebarOpen } = useGlobalContext()
  return (
    <section className='section hero'>
      <div className='section-center hero-center'>
        <article className='hero-info'>
          <h1>make memories on your next trip</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            facere praesentium aut libero excepturi voluptates iusto repellat
            ipsam nihil reprehenderit?
          </p>
          <Link className='   hero-btn' to={`/tours`}>
            learn more <span>{`>`}</span>
          </Link>
        </article>
        <article className='hero-pic'>
          <img className='img' src={Image} alt='' />
          <div className='overlay'></div>
        </article>
      </div>
    </section>
  )
}

export default Home
