import React from 'react'
import './experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const experince = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      
      <div className='container experience__container'>
        <div className='experience__frontend'>     
           <h3>Skills</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h4>HTML & CSS</h4>
            </div>
          </article>

           <article className='experience__details'>
            <AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            </div>
          </article>

           <article className='experience__details'>
            <AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h4>ReactJS</h4>
            </div>
          </article>

           <article className='experience__details'>
            <AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h4>TailwindCSS</h4>
            </div>
          </article>

          <article className='experience__details'>
            <AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            </div>
          </article>
          <article className='experience__details'>
            <AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h4>Python</h4>
            </div>
          </article>
          <article className='experience__details'>
            <AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h4>Java</h4>
            </div>
          </article>
          <article className='experience__details'>
            <AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h4>C++</h4>
            </div>
          </article>
          <article className='experience__details'>
            <AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h4>MongoDB</h4>
            </div>
          </article>
          <article className='experience__details'>
            <AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h4>Node JS</h4>
            </div>
          </article>
          </div>
        </div>

        <div className='experience__backend'>
            <h3>Work Experience</h3>
        <div className='experience__content'>
        <article className='experience__details'>
            <AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h2>HighRadius</h2>
            <h4>Technical Intern, Work From Home (May,2023-June-2023)</h4>
            <small className='text-light'>Made an AI Enabled Fintech B2B Invoice Management Application using HTML, CSS, React JS, Java and Python.</small>
            </div>
          </article>
        <article className='experience__details'>
            <AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h2>Muskurahat Foundation</h2>
            <h4>Fundraising Intern, Work From Home (May,2023-June-2023)</h4>
            <small className='text-light'>Collect funding from different sources to help poor children gain education and build their future.</small>
            </div>
          </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default experince
