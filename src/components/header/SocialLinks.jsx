import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const SocialLinks = () => {
  return (
    <div className='header__socials'>
        
        <a href='https://github.com/K4viyamato' target='_blank'><BsGithub /></a>
        <a href='https://www.linkedin.com/in/kavindu-hirusha-5628b1188' target='_blank'><BsLinkedin/></a>
        <a href='https://twitter.com/KavinduHirush' target='_blank'><BsTwitter /></a>
    
    </div>
  )
}

export default SocialLinks