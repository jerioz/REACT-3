import React from 'react'
import Photo from '../../assets/restaurant.jpg'
import './Home.styles.scss'

const Home = () => {
  return (
    <>
    <div className='home__restaurant-listPhoto'>
       <img src={Photo} alt='logo' className='home__restaurant-photo'/>
       <img src={Photo} alt='logo' className='home__restaurant-photo'/>
       <img src={Photo} alt='logo' className='home__restaurant-photo'/>
    </div>
    </>
  )
}

export default Home