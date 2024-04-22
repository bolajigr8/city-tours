import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <section className='error-page'>
      <div className='error-container'>
        <h1 className='section-title'>404 Error</h1>
        <h1 className='title'>Ooops! you have navigated to the wrong page</h1>
        <Link className='btn' to={`/`}>
          back home
        </Link>
      </div>
    </section>
  )
}

export default Error
