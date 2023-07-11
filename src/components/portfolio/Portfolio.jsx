import React from "react";
import './Portfolio.css'
import IMG from '../../assets/Portfolio/coming soon .jpg'


const data = [

    {
        id : 1,
        image : IMG,
        title : 'Portfolio Website',
        github : 'https://github.com/K4viyamato',
        demo : 'https://github.com/K4viyamato'
    },
    {
        id : 2,
        image : IMG,
        title : 'Business Website',
        github : 'https://github.com/K4viyamato',
        demo : 'https://github.com/K4viyamato'
    },
    {
        id : 3,
        image : IMG,
        title : 'Amazon clone',
        github : 'https://github.com/K4viyamato',
        demo : 'https://github.com/K4viyamato'
    },
    {
        id : 4,
        image : IMG,
        title : 'Uni project',
        github : 'https://github.com/K4viyamato',
        demo : 'https://github.com/K4viyamato'
    },
    {
        id : 5,
        image : IMG,
        title : 'Lagoon Hotel',
        github : 'https://github.com/K4viyamato',
        demo : 'https://github.com/K4viyamato'
    },
    {
        id : 6,
        image : IMG,
        title : 'Rental service',
        github : 'https://github.com/K4viyamato',
        demo : 'https://github.com/K4viyamato'
    },

    

]

const Portfolio = () => {

    return(
        <section id="portfolio">

            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">

                {
                    data.map(({id, image, title, github, demo})=>{

                        return(
                            <article key={id} className="portfolio__item">

                                <div className="portfolio__item-image">

                                    <img src={image} alt={title}></img>

                                </div>

                                <h3>{title}</h3>

                                <div className="portfolio__item-cta">

                                        <a href={github} className="btn" target="_blank"> Github</a>

                                        <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>

                                </div>
                

                            </article>
                        )
                    })
                }
                
            </div>
        
        
        </section>
    )
}

export default Portfolio;