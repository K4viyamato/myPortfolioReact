import React from 'react'
import CV from '../../assets/CV/Kavindu Hirusha.pdf'

const btnheader = () => {
  return (
    <div className='btnhead'>

        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contacts' className='btn btn-primary'>Let's talk</a>
        

    </div>
  )
}

export default btnheader