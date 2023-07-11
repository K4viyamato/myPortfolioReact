import React from 'react'
import './About.css'
import aboutMe from '../../assets/Pictures/aboutMe.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa6'
import {MdWork} from 'react-icons/md'







const About = () => {


 

  
  return (
    <section id='about' >

      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">

            <img src={aboutMe} alt='aboutme pic'></img>

          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">

          <article className='about__card'>

            <FaAward className='about__icon' />

            <h5>Experience</h5>
            <small>1 year</small>

          </article>

          <article className='about__card'>

            <FaUsers className='about__icon' />

            <h5>Clients</h5>
            <small>0</small>

          </article>

          <article className='about__card'>

            <MdWork className='about__icon' />

            <h5>Projects</h5>
            <small>1+</small>

          </article>

          </div>

          <p>

          Hello, My name is Kavindu and I am skilled in a variety of web development technologies including HTML, CSS, JavaScript, and jQuery.I have a strong passion for developing clean and responsive websites that not only meet my clients' needs but also provide a great user experience for their visitors.

          </p>

          <div className='letsbtn'>
          <a href='#contacts' className='btn btn-primary'>Let's talk</a>
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default About