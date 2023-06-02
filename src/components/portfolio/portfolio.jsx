import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.jpeg'
import IMG5 from '../../assets/img5.png'
import IMG6 from '../../assets/img6.png'


const portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className='container portfolio__container'>
      <article className='portfolio__items'>
        <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
        </div>
        <h3>Netflix Landing Page</h3>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Swastik2001/Netflix-Landing-Page" className='btn' target='blank'>Github</a>
        </div>
      </article>

      <article className='portfolio__items'>
        <div className='portfolio__item-image'>
         <img src={IMG3} alt="" />
        </div>
        <h3>Snake Game</h3>
        <div className='portfolio__item-cta'>
         <a href="https://github.com/Swastik2001/Snake-Game" className='btn' target='blank'>Github</a>
        </div>
      </article>

      <article className='portfolio__items'>
        <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
        </div>
        <h3>Chrome-Extension: Leads Tracker</h3>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Swastik2001/chrome-extension-Leads-Tracker-" className='btn' target='blank'>Github</a>
        </div>
      </article>

      <article className='portfolio__items'>
        <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
        </div>
        <h3>Dall-E Clone</h3>
        <div className='portfolio__item-cta'>
         <a href="https://github.com/Swastik2001/dall-e-clone" className='btn' target='blank'>Github</a>
        </div>
      </article>

      <article className='portfolio__items'>
        <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
        </div>
        <h3>Gym Membership Website</h3>
        <div className='portfolio__item-cta'>
         <a href="https://github.com/Swastik2001/gym-membership" className='btn' target='blank'>Github</a>
        </div>
      </article>
    <article className='portfolio__items'>
        <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
        </div>
        <h3>People Counter</h3>
        <div className='portfolio__item-cta'>
         <a href="https://github.com/Swastik2001/people-counter" className='btn' target='blank'>Github</a>
        </div>
      </article>
    </div>
   </section>
  )
}

export default portfolio
