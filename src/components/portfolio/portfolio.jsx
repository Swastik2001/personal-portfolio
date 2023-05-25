import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'

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
        <h3>Guess the word game </h3>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/AnshikaPatra28/guess_the-_word_game" className='btn' target='blank'>Github</a>
        </div>
      </article>

      <article className='portfolio__items'>
        <div className='portfolio__item-image'>
         <img src={IMG3} alt="" />
        </div>
        <h3>Black-Jack-Game </h3>
        <div className='portfolio__item-cta'>
         <a href="https://github.com/AnshikaPatra28/Black-Jack" className='btn' target='blank'>Github</a>
        </div>
      </article>

      <article className='portfolio__items'>
        <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
        </div>
        <h3>Chrome-Extension</h3>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/AnshikaPatra28/Chrome-Extension" className='btn' target='blank'>Github</a>
        </div>
      </article>

      

      <article className='portfolio__items'>
        <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
        </div>
        <h3>Price-comparative-website-iPrice </h3>
        <div className='portfolio__item-cta'>
         <a href="https://github.com/AnshikaPatra28/Price-comparative-website-iPrice" className='btn' target='blank'>Github</a>
        </div>
      </article>

    </div>
   </section>
  )
}

export default portfolio
