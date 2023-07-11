import React from "react";
import {BiCheck} from 'react-icons/bi';
import './Services.css'





const Services = () => {

    

    return(


        <section id='services'>

            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <aricle className="services">
                    <div className="services__head">

                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="services__list">

                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>User research</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>Wireframing</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>Visual design</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>Interaction design</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>Usability testing</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>Prototyping</p>
                        </li>

                    </ul>

                </aricle>





                <aricle className="services">
                    <div className="services__head">

                        <h3>Web Development</h3>
                    </div>

                    <ul className="services__list">

                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>Design and develop websites</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>Create web applications</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>Integrate third-party services</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>Optimize websites for search engines</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>Test and troubleshoot websites</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>Maintain and update websites</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>Provide training and support</p>
                        </li>

                    </ul>

                </aricle>




                <aricle className="services">
                    <div className="services__head">

                        <h3>Content Creation</h3>
                    </div>

                    <ul className="services__list">

                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>Create content.</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>Write copy</p>
                        </li>
                        <li>
                            <BiCheck className='services__list-icon'/>
                            <p>Edit content</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Design graphics</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Manage social media</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Provide consulting</p>
                        </li>

                    </ul>

                </aricle>
            </div>

      
        </section>
    )
}

export default Services;