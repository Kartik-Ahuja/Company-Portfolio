import React from 'react'
import "./info.css"
import logo from '../images/logo.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Info = () => {

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
        <div className="infoStyle">
            <img className='bottom-logo' src={logo} alt="" />
            <h2 >Contact Info </h2>

            <div className="cop">
                <div className="phone">
                    <h3>Phone</h3>
                    <p>+91 9358593003</p>

                </div>
                <div className="Email">

                    <h3> Email Id.</h3>
                    <p>info@metablocktechnologies.in</p>
                </div>
                <div className="Address">
                    <h3>Address
                    </h3>
                    <div className="a   "> 50-51, 2nd Floor, Jai Ambey Nagar, Near Gopalpura Flyover, Opp. Jaipur Hospital, Tonk Road, Jaipur, Rajasthan Pin code:- 302018
                    </div>

                </div>
            </div>


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
        </div >


        // -----------------------------icon -----------------------




    )
}

export default Info