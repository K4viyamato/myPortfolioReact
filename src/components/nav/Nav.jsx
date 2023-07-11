import React from "react";
import './Nav.css'
import {FaRegUserCircle} from 'react-icons/fa'
import {FiHome} from 'react-icons/fi'
import {MdWorkOutline} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {BiUserPlus} from 'react-icons/bi'

import { useState } from "react";




const Nav = () => {




    const[activeNav, setActiveNav] = useState('#');



    return (
        <nav>

            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUserCircle /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><MdWorkOutline /></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#contacts" onClick={() => setActiveNav('#conatcts')} className={activeNav === '#conatcts' ? 'active' : ''}><BiUserPlus /></a>
            
        </nav>
    )
}

export default Nav;