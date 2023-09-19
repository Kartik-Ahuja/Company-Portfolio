import logo from '../components/images/logo.png';
// import Image from '../components/images/hero.png';
import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';





const Navbar = () => {

    const navigate = useNavigate();

    const StyledButton = styled.button`
  background-color: black;
  color: white;
  width : 100px;
  height : 30px;
  cursor: pointer;
`
        ;

    const StyledImage = styled.img`
  height: 100px;
`;

    const Navbar = styled.div`
    //    position : fixed;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding:0px 30px;
    border : 1px solid;
    box-shadow : 0px -1px 8px 1px black;

`;

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
            <Navbar>

                <StyledImage onClick={() => navigate('/Mainpage')} src={logo} alt="MetaBlock" />
                <StyledButton onClick={() => navigate('/Mainpage')}> Home</StyledButton>
                <StyledButton onClick={scrollToService}> Services</StyledButton>
                <StyledButton onClick={scrollToPortfolio}> Portfolio</StyledButton>
                <StyledButton onClick={scrollToTestimonial}> Testimonials</StyledButton>
                <StyledButton onClick={scrollToInfo}> Contact us</StyledButton>

            </Navbar>
        </>
    );
};

export default Navbar;
