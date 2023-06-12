import React from 'react'
import './Header.styles.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <React.Fragment>
    <div>
    <header className= 'header__restaurantPage'>
        <h1 className='header__restaurantPage-title'>CASA PACA</h1>
        <nav className='menu-nav'>
            <ul className='menu-nav__restaurantPage-list'>
                <li className='menu-nav__restaurantPage-item'><Link to='/' className='menu-nav__restaurantPage-link'>Home</Link></li>
                <li className='menu-nav__restaurantPage-item'><Link to='/reserve' className='menu-nav__restaurantPage-link'>Reserve</Link></li>
                <li className='menu-nav__restaurantPage-item'><Link to='/about' className='menu-nav__restaurantPage-link'>About</Link></li>
            </ul>
        </nav>
    </header>
    </div>
    </React.Fragment>
  )
}

export default Header