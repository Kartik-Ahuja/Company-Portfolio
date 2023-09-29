import logo from '../components/images/logo.png';
// import Image from '../components/images/hero.png';
import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';





const Navbar = () => {

    const navigate = useNavigate();

    const StyledButton = styled.button`
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight:500;
  height : 3vh;
  cursor: pointer;
  background-color: #4A55A2;
  letter-spacing: 1.8px;
  padding: 0px 20px;

`
        ;

    const StyledLogo = styled.img`
    // padding-top: 15px;
    width: 20vw;
    cursor: pointer;
    width: 180px;
  
`;

    const Navbar = styled.div`
  height: 10vh;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding:0px 30px;
    border : 1px solid;
    box-shadow: 0 4px 8px  5px rgba(0, 0, 0, 0.2);
    background: #4A55A2;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 1000;
   width: 100vw;
   
`;

    const Container = styled.div`
    padding-right:80px;

`


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

                <StyledLogo onClick={() => navigate('/Mainpage')} src={logo} alt="MetaBlock" />

                <Container>


                    <StyledButton onClick={() => navigate('/Mainpage')}> Home</StyledButton>
                    <StyledButton onClick={scrollToService}> Services</StyledButton>
                    <StyledButton onClick={scrollToPortfolio}> Portfolio</StyledButton>
                    <StyledButton onClick={scrollToTestimonial}> Testimonials</StyledButton>
                    <StyledButton onClick={scrollToInfo}> Contact us</StyledButton>
                </Container>
            </Navbar>
        </>
    );
};

export default Navbar;
