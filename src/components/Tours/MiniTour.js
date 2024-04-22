import React, { useState } from 'react'
import './Tours.scss'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import { AiFillDownCircle, AiFillUpCircle } from 'react-icons/ai'

const MiniTour = ({ id, city, name, img, info }) => {
  const { deleteItem } = useGlobalContext()
  const [readMore, setReadMore] = useState(false)
  return (
    <article className='tour'>
      <button
        onClick={() => deleteItem(id)}
        type='button'
        className='deleteBtn-container'
      >
        <FaTimes className='delete-btn' />
      </button>
      <img src={img} alt={name} className='tour-img' />
      <div className='tour-info'>
        <h3>{city}</h3>
        <h4>{name}</h4>
        <div className='tour-p'>
          <p>
            {readMore ? info : `${info.substring(0, 30)}`}
            <button onClick={() => setReadMore(!readMore)} className='tour-btn'>
              {readMore ? <AiFillUpCircle /> : <AiFillDownCircle />}
            </button>
          </p>
        </div>
      </div>
    </article>
  )
}

export default MiniTour
