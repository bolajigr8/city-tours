import React from 'react'
import './Tours.scss'
import MiniTour from './MiniTour'
import { useGlobalContext } from '../../context'

const Tour = () => {
  const { data } = useGlobalContext()

  if (data.length < 1) {
    return (
      <section className='section tours-section no-tours'>
        <div className='tours-title'>
          <h1>No tours left to display</h1>
        </div>
      </section>
    )
  }

  return (
    <section className='section tours-section'>
      <div className='tours-title'>
        <h1>our tours</h1>
        <div className='underline'></div>
      </div>
      <div className='tours-center'>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <MiniTour {...item} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Tour
