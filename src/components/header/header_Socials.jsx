import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const header_Socials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/anshika-patra-529b61213/' target='blank'><BsLinkedin/></a>
        <a href='https://github.com/AnshikaPatra28' target='blank'><BsGithub/></a>
        <a href='https://leetcode.com/ANSHIKA_PATRA/' target='blank'><SiLeetcode/></a>


    </div>
  )
}

export default header_Socials
