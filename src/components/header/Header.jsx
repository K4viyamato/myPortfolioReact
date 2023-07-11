import React from "react";
import './Header.css'
import Buttons from'./btnheader'
import Me from '../../assets/Pictures/2nd try.png'
import Social from './SocialLinks'
import {BiArrowToBottom} from 'react-icons/bi'







const Header = () =>{
    
    

    

    return(
        <header>

            <div className="container header__container">

                <h3>Hello I'm</h3>
                <h1>Kavindu Hirusha</h1>

                <h5 className="text-light">Junior Web developer</h5>

                <Buttons />
                <Social />

                <div className="me">
                    <img src={Me} alt="self portrait"></img>
                </div>

                <a href="#contacts" className="scroll_down"><BiArrowToBottom /></a>



            </div>

        </header>
    )
}


export default Header;