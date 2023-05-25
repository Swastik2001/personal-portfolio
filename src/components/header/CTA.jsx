import React from 'react'
import CV from '../../assets/Anshika_Patra_Resume_1.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      
    </div>
  )
}

export default CTA
