import React from "react";
import './Exp.css'
import {MdVerified} from 'react-icons/md'







const Exp = () => {
    
    
    return(
        <section id='experience'>

            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">

                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">


                        <article className="experience__details">
                            <MdVerified className='experience__details__icon'/>
                            <div>
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                            </div>

                        </article>
                        
                        <article className="experience__details">
                            <MdVerified className='experience__details__icon'/>
                            <div>
                            <h4>CSS</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        
                        <article className="experience__details">
                            <MdVerified className='experience__details__icon'/>
                            <div>
                            <h4>Java Script</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        
                        <article className="experience__details">
                            <MdVerified className='experience__details__icon'/>

                            <div>
                            <h4>Bootstrap</h4>
                            <small className="text-light">Experienced</small>
                            </div>

                        </article>
                        
                        <article className="experience__details">
                            <MdVerified className='experience__details__icon'/>
                            <div>
                            <h4>Tailwind</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        
                        <article className="experience__details">
                            <MdVerified className='experience__details__icon'/>
                            <div>
                            <h4>ReactJS</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>


                    </div>
                    
                </div>






                <div className="experience__backend">

                <h3>Backend Development</h3>
                    <div className="experience__content">


                        <article className="experience__details">
                            <MdVerified className='experience__details__icon' />
                            <div>
                            <h4>NodeJS</h4>
                            <small className="text-light">Basic</small>
                            </div>
                        </article>
                        
                        <article className="experience__details">
                            <MdVerified className='experience__details__icon' />
                            <div>
                            <h4>ExpressJS</h4>
                            <small className="text-light">Basic</small>
                            </div>
                        </article>
                        
                        <article className="experience__details">
                            <MdVerified className='experience__details__icon' />
                            <div>
                            <h4>My SQL</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        
                        <article className="experience__details">
                            <MdVerified className='experience__details__icon' />
                            <div>
                            <h4>Mongo DB</h4>
                            <small className="text-light">Basic</small>
                            </div>
                        </article>
                        
                        <article className="experience__details">
                            <MdVerified className='experience__details__icon' />
                            <div>
                            <h4>Python</h4>
                            <small className="text-light">Basic</small>
                            </div>
                        </article>
                        


                    </div>

                </div>
        
            </div>

      
        </section>
    )
}


export default Exp