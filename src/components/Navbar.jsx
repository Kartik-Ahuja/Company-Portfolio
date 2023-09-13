import logo from '../components/images/logo.png';
// import Image from '../components/images/hero.png';
import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




const Navbar = () => {

    const navigate = useNavigate();

    const StyledButton = styled.button`
  background-color: black;
  color: white;
  width : 100px;
  height : 30px;
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

    const openWhatsApp = () => {
        window.open('https://wa.me/919358593003', '_blank');
    };

    const openLinkedIn = () => {

        window.open('https://www.linkedin.com/company/metablocktechnologies/mycompany/', '_blank');
    };

    const openFacebook = () => {

        window.open('https://www.facebook.com/Metablocktech', '_blank');
    };

    const sendEmail = () => {

        window.open('mailto:info@metablocktechnologies.in', '_blank');
    };

    return (
        <>
            <Navbar>

                <StyledImage onClick={() => navigate('/Mainpage')} src={logo} alt="MetaBlock" />
                <StyledButton >Contact us</StyledButton>

            </Navbar>


            <div className="bottom-navbar">

                <div className="navbar-item" onClick={() => openWhatsApp()}>
                    <WhatsAppIcon />
                </div>
                <div className="navbar-item" onClick={() => openLinkedIn()}>
                    <LinkedInIcon />
                </div>
                <div className="navbar-item" onClick={() => openFacebook()}>
                    <FacebookOutlinedIcon />
                </div>
                <div className="navbar-item" onClick={() => sendEmail()}>
                    <EmailOutlinedIcon />
                </div>
            </div>

        </>
    );
};

export default Navbar;
