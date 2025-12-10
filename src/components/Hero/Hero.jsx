import React from 'react'
import './Hero.css'

const Hero = () => {
  return <section className='hero-container'>
    <div className='hero-content'>
        <h2>Building Digitel That Inspire</h2>
        <p>Passionate Frontend Developer | Transforming Ideas into seamless and Visually Stunning Web Solutions</p>
    </div>

    <div className='hero-img'>
        <div className='tech-icon'>
            <img src='./assets/images/img01.png' alt='12' />
        </div>
        <div>
            <img src='./assets/images/img11.png' alt='32'/>
        </div>
        <div className='tech-icon'>
            <img src='./assets/images/img02.png' alt='44'/>
        </div>
        <div className='tech-icon'>
            <img src='./assets/images/img03.png' alt='44'/>
        </div><div className='tech-icon'>
            <img src='./assets/images/img04.png' alt='44'/>
        </div>
    </div>
  </section>
}

export default Hero