import React from "react";
import './Testmon.css'
import Anna from '../../assets/Testimonials/Anna Flóra.jpg'
import Daisy from '../../assets/Testimonials/Daisy Edgar.jpg'
import Adam from '../../assets/Testimonials/Adam Sandler.jpg'
import Zach from '../../assets/Testimonials/zack.jpg'

// import react, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

//  import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

/* https://codesandbox.io/p/sandbox/6pxf4v?file=%2Fsrc%2Fstyles.css%3A17%2C1-33%2C2 */


const data = [

    {
        
        avatar : Anna,
        name : 'Anna Flóra',
        review : "I worked with Hirusha on a recent project, and I was really impressed with his skills and dedication. He was always on time, he communicated well, and he went above and beyond to deliver a high-quality product. I would definitely recommend him to anyone looking for a talented front-end developer."
        
        
    },

    {
        
        avatar : Daisy,
        name : 'Daisy Edgar',
        review : "I'm so glad I chose Kavindu to work on my website. He was able to take my vision and turn it into a reality. The website is beautiful, easy to use, and it's exactly what I wanted. I would definitely recommend him to anyone looking for a great front-end developer.",
    
    },

    {
        
        avatar : Adam,
        name : 'Adam Sandler',
        review : "Kavindu is a true professional. He's always up-to-date on the latest trends, and he's always willing to go the extra mile to get the job done. I've worked with him on several projects, and I've always been happy with the results. I highly recommend him to anyone looking for a top-notch front-end developer.",
    
    },
    
    {
        
        avatar : Zach,
        name : 'Zach Galifianakis',
        review : "I worked with Hirusha on a recent project, and I was really impressed with his skills and attention to detail. He was able to take my complex requirements and translate them into a beautiful and user-friendly interface. The website is a pleasure to use, and I'm confident that it will help us to achieve our business goals.",
    
    },
]

const Testmon = () => {

    return(
        <section id="testmon">

            <h5>Revision From Clients</h5>
            <h2>Testimonials</h2>

            <Swiper
            
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={'auto'}
                                    coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                    }}
                                    pagination={true}
                                    modules={[EffectCoverflow, Pagination]}
                                    className="container testimonial__container"
            
            
            >


                {
                    data.map(({avatar,name,review}, index)=>{

                        return(


                        
                            




                            <SwiperSlide key={index} className="testimonial">

                                <div>
                                    <div className="client__avatar">

                                        <img src={avatar} alt=""/>

                                    </div>

                                <h5 className="client__name">{name}</h5>
                                    <small className="client__review">
                                        <q>{review}</q>
                                    
                                    </small>

                                    </div>
                    
                            </SwiperSlide>
                            
                            
                        )
                    })
                }

                


            </Swiper>
            
        </section>
    )
}

export default Testmon;