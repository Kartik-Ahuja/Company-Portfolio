import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    
    function scrollToInfo() {
        const infoSection = document.getElementById('info');
        if (infoSection) {
            infoSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    function scrollToService() {
        const ServiceSection = document.getElementById('Service');
        if (ServiceSection) {
            ServiceSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    function scrollToPortfolio() {
        const PortfolioSection = document.getElementById('Portfolio');
        if (PortfolioSection) {
            PortfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    function scrollToTestimonial() {
        const TestimonialSection = document.getElementById('Testimonial');
        if (TestimonialSection) {
            TestimonialSection.scrollIntoView({ behavior: 'smooth' });
        }
    }


  return (
<>

<div className="bar">&#8801;</div>
<div className="Container">
    <ul>
    <li onClick={() => navigate('/')}> Home</li>
                    <li onClick={scrollToService}> Services</li>
                    <li onClick={scrollToPortfolio}> Portfolio</li>
                    <li onClick={scrollToTestimonial}> Testimonials</li>
                    <li onClick={scrollToInfo}> Contact us</li>
    </ul>
</div>


</>  )
}

export default Sidebar