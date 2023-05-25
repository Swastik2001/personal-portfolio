import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/a.jpg.png'
import HeaderSocials from './header_Socials'

const header = () => {
  return (
    <div>
      <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Anshika Patra</h1>
            <h5 className="text-light">Frontend Developer</h5>
            <CTA/>
            <section>
              <div className='container head__container'>
            <HeaderSocials/>
            
            <div className="me">
                <img src={ME} alt="me" />
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
            </section>
        </div>
      </header>
    </div>
  )
}

export default header
