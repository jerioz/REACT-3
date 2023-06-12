import React from 'react'
import './About.styles.scss'

export const About = () => {
  return (
     <div className='about__text'>
        <h2 className='about__title'>Welcome to my personal page</h2>
        <p className='about__description'>My name is Jorge, I live in Bilbao and I am passionate about technology and programming.</p>
        <p className='about__description'>I'm doing a bootcamp at The Bridge and I'm finding it very interesting.</p>
        <p className='about__description'>JavaScript is my favorite technology for programming.</p>
        <p className='about__description'>I also use these technologies:</p>
        <ul className='about__list'>
            <li>Node</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </div>
  )
}
