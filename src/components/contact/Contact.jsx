import React from "react";
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {LiaTelegramPlane} from 'react-icons/lia'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs, { sendForm } from 'emailjs-com';





const Contact = () => {
  
  

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('from_portfolio25894', 'template_nfyvnwx', form.current, '9PZWRQqoGS1lwiL-1')
        .then((result) => {
            console.log(result.text);
            alert("Message sent!");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });


    };





    return (
      <section id='contacts'>

        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">

            <article className="contact__option">

              
              <HiOutlineMail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>klazarush@outlook.com</h5>
              <a href="mailto:klazarush@outlook.com" target="_blank">Send a message</a>
              
            </article>
            <article className="contact__option">

              
              <LiaTelegramPlane className="contact__option-icon"/>
              <h4>Telegram</h4>
              <h5>@Kavi_yamato</h5>
              <a href="https://t.me/Kavi_yamato" target="_blank">Send a message</a>
              
            </article>
            <article className="contact__option">

              
              <FaWhatsapp className="contact__option-icon"/>
              <h4>Whatsapp</h4>
              <h5>+94767768755</h5>
              <a href="https://wa.me/qr/VRKEM7TBREHPK1" target="_blank">Send a message</a>
              
            </article>

          </div>

          <form ref={form} onSubmit={sendEmail}>

            <input type="text" name="name" placeholder="Your Full Name" required />

            <input type="email" name="email" placeholder="Your E-Mail" required />

            <textarea name="message" rows="" placeholder="Your Message" required/>

            <button type='submit'className="btn btn-primary">Send Message</button>
          </form>
        </div>

      
    </section>
    )
  }

export default Contact;