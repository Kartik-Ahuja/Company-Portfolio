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
            image: projectbg,
            name: "Name",
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quo.",
            star: " ⭐⭐⭐⭐"
        },
        {
            image: projectbg,
            name: "Name",
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quo.",
            star: " ⭐⭐⭐⭐⭐"
        },


    ]

    return (
        <>
            <h1 className="heading">Testimonials & Reviews</h1>
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
                                <img src={data.image} alt="" className="avatar" />
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
