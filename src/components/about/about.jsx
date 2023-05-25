import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {TbAward} from 'react-icons/tb'
import {CiUser} from 'react-icons/ci'
import {AiFillFolderOpen} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

         <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <TbAward className='about__icon'/>
                <h5>Experience</h5>
                <small>no work yet</small>
              </article>

               <article className='about__card'>
                <CiUser className='about__icon'/>           
                <h5>Education</h5>
                <small>persuing Btech</small>
              </article>

               <article className='about__card'>
                <AiFillFolderOpen className='about__icon'/>
                <h5>Projects</h5>
                <small>5+ completed</small>
              </article>
            </div>
              <p>
                Engineering student, currently pursuing B.Tech from Kalinga Institute of Industrial Technology in Computer Science and Communication Engineering. I am a hardworking and self motivated person. I use a creative approach to problem solving and always have a positive attitude.
                              </p>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
         </div>
      </div>
    </section>
  )
}

export default about
