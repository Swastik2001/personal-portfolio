import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const header_Socials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/swastik-mohapatra-9343431b6/' target='blank'><BsLinkedin/></a>
        <a href='https://github.com/Swastik2001' target='blank'><BsGithub/></a>
        <a href='https://leetcode.com/Sw4st1k/' target='blank'><SiLeetcode/></a>


    </div>
  )
}

export default header_Socials
