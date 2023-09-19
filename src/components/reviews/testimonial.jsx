import '../reviews/testimonial.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import projectbg from '../images/projectbg.png';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Testimonial() {
    const objectslider = [
        {

            name: "Ankush Kumar",
            content: "I had an excellent experience working with this company for mobile app development. They have a highly skilled team that is knowledgeable in the latest technologies and trends. They guided me throughout the development process, providing regular updates and addressing any concerns promptly.",
            star: " ⭐⭐⭐⭐⭐"
        },
        {

            name: "Raushan Kumar",
            content: "I hired this company for web development services, and I couldn't be happier with the results. They were able to create a website that perfectly represents my brand and showcases my products in an engaging way. The team was collaborative throughout the process and ensured that all my requirements were met. I highly recommend their web development services.",
            star: " ⭐⭐⭐⭐⭐"
        },
        {

            name: "Lakshmi Kumari",
            content: "The web development services provided by this company are truly exceptional. They have a talented team of developers who are skilled in creating responsive and user-friendly websites. From start to finish, the communication was smooth, and they were always available to address any concerns or queries. I'm thrilled with the final product and would choose them again in a heartbeat.",
            star: " ⭐⭐⭐⭐⭐"
        },
        {

            name: "Anish Bajaj",
            content: "As someone who had no prior experience with web development, I was a bit intimidated by the idea of taking a training program. But MetaBlock Technologies made everything so accessible and easy to understand. The instructors were excellent and the materials were very comprehensive. I would definitely recommend this training to anyone.",
            star: " ⭐⭐⭐⭐⭐"
        },
        {

            name: "Vishwas singh",
            content: "I had an amazing learning experience with the blockchain training provided by this company. The instructors were highly skilled and supportive, creating a positive and engaging learning environment. The curriculum covered all the essential topics, and the hands-on projects gave me practical experience. ",
            star: " ⭐⭐⭐⭐⭐"
        },


    ]

    return (
        <>
            <h1 className="heading" id='Testimonial'>Testimonials & Reviews</h1>
            <div className="Heading-para">People I've worked with have said some nice things...</div>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                autoplay={{
                    delay: 2500, // Note the correct property name is "delay" instead of "DelayNode"
                    disableOnInteraction: false,
                }}
            >
                {/* Your SwiperSlides go here */}
                {
                    objectslider.map((data, index) => (
                        <SwiperSlide className='swiper-slide'>
                            <div key={index} className="contain">
                                <div className="Name">{data.name}</div>

                                <p className="review">{data.content}</p>
                                <div className="star">{data.star}</div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    );
}
