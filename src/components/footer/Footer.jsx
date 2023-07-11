import React from "react";
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaMeta} from 'react-icons/fa6'
import {FaPinterestP} from 'react-icons/fa'

const Footer = () => {

    return(

        <footer>
            <a href="#" className="footer__logo">Kavindu Hirusha</a>

            <ul className="permalinks">

                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Service</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testmon">Testimonial</a></li>
                <li><a href="#contacts">Contact</a></li>

            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/kavindu.hirusha.35?mibextid=ZbWKwL"><FaFacebookF /></a>
                <a href="https://pin.it/10UqmP8"><FaPinterestP /></a>
                <a href="https://www.threads.net/@liam__skyler"><FaMeta /></a>
            </div>

            <div className="footer__copyright">

                <small>&copy; All Rights Reserved.</small>

            </div>
        </footer>
    )
}

export default Footer;