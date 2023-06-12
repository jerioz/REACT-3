import React from 'react'
import './Header.styles.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <React.Fragment>
    <div>
    <header className= 'header__personalPage'>
        <h1 className='header__personalPage-title'>My personal page</h1>
        <nav className='menu-nav'>
            <ul className='menu-nav__personalPage-list'>
                <li className='menu-nav__personalPage-item'><Link to='/' className='menu-nav__personalPage-link'>Home</Link></li>
                <li className='menu-nav__personalPage-item'><Link to='/contact' className='menu-nav__personalPage-link'>Contact</Link></li>
                <li className='menu-nav__personalPage-item'><Link to='/about' className='menu-nav__personalPage-link'>About</Link></li>
            </ul>
        </nav>
    </header>
    </div>
    </React.Fragment>
  )
}

export default Header