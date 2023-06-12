import React from 'react'
import Photo from '../../assets/logo.jpg'
import './Home.styles.scss'

const Home = () => {
  return (
    <>
    <div className='home__logo-listPhoto'>
       <img src={Photo} alt='logo' className='home__logo-photo'/>
       <img src={Photo} alt='logo' className='home__logo-photo'/>
       <img src={Photo} alt='logo' className='home__logo-photo'/>
    </div>
    </>
  )
}

export default Home