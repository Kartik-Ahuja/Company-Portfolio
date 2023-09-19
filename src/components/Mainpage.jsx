import logo from '../components/images/logo.png';
import Image from '../components/images/hero.png';
import projectbg from '../components/images/projectbg.png';
import styled from 'styled-components';
import Navbar from './Navbar';
import Testimonial from './reviews/testimonial';
import Info from './Contactbar/info';
import FormDialog from './form';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Web from './Development/web';
import ScrollToTopButton from './Scroll/Gototop';





const Mainpage = () => {

    const navigate = useNavigate();
    const Hero = styled.div`
    padding: 20px 20px;
    display : flex;
    align-items : center;
    `;
    const HeroHeader = styled.h1`
    text-align: left`;

    const HeroPara = styled.p`
    text-align: left`;

    const Hero1 = styled.div`
    margin-left: 100px;
    width : 50%;
       
    `;
    const Hero2 = styled.div`
    width : 50%;
    `;
    const HeroImage = styled.img`
     height : 400px
    `;

    // -------------------------------------Hero Section END-----------------------

    const Service = styled.div``;
    const ServiceH1 = styled.h1`
    text-align: center;
    `;

    const ServiceCards = styled.div`
         display : flex;
         align-items : center;
         padding: 0px 10px;
    `;

    const ServiceCardsH2 = styled.h2``;

    const ServiceCards1 = styled.div`
     width : 50%;
     display : flex;
     flex-direction : column;
    align-items : center;
    `;

    const ServiceCards2 = styled.div`
    width : 50%;
    display : flex;
    flex-direction : column;
   align-items : center;
    `;

    const ServiceCardsPoints = styled.ul`
     text-align: left;

    `;
    const ServiceCardsInnerPoints = styled.li``;

    // ----------------------------------------------Service Section End---------------------

    const PastProjects = styled.div`
     display: flex;
       flex-direction: row !important;

     justify-content : center;
     
     `;
    const PastProjectscontainer = styled.div`
     display : flex;
     justify-content : center;
     flex-wrap : wrap;
     
     `;

    const PastProjectsbox = styled.div`
   
   color : white;
    background-position: center;
    padding :50px 10px;
    border : 1px solid;
    width  200px ;
    height : 100px;
    margin : 10px;
    border-radius: 20px;
    
&:hover{

    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));


    button {
        display: block  
      marging-left: 30px;
    cursor: pointer;
   background-color: transparent;
   color: white;
   border:1px solid white;
   border-radius: 10px;

      }

        p{
            display:  block ; 
        }


}


    `;

    const PastProjectsHeading = styled.h1`
    text-align: center;
    

    `;

    const PastProjectsboxbutton = styled.button`
   
    display: none;
    
    `;



    const PastProjectsboxPara = styled.p`
   
    display: none;
    `;


    // -----------------------past project end-----------------------------

    const Box = styled.div`
    align-item:center;
    justify-content: space-between;
    display: flex;
    border: 1px solid;
    margin: 100px;
    padding: 50px;
`;
    const Column1 = styled.h1`
    margin: 10px;
     
    `;
    const Column2 = styled.div`
    font-weight: 600;
    margin: 10px;

    `;
    const Column3 = styled.button`
    margin: 10px;
    cursor: pointer;
   background-color: transparent;
   border-radius: 40px;
    `;


    // ---------------------------------------functiionality----------------------


    const Portfolio = [
        {
            path: '/web',
            BgImage: projectbg,
            Topic: "Web Development",
            Description: " Transforming visions into exceptional web solutions with innovation and expertise"
        },
        {
            path: '/Blockchain',
            BgImage: projectbg,
            Topic: " Blockchain Development",
            Description: "Unlocking blockchain's potential, we deliver secure, innovative solutions for clients."
        },
        {
            path: '/App',
            BgImage: projectbg,
            Topic: " App Development",
            Description: "   Crafting innovative mobile apps tailored to your business needs and success"
        },
        {
            path: '/Software',
            BgImage: projectbg,
            Topic: "   Software Development",
            Description: "Delivering innovative software solutions that exceed client expectations through expertise and collaboration"
        },
        {
            path: '/MLM',
            BgImage: projectbg,
            Topic: "  MLM Software Development",
            Description: "Developing software for managing multi-level marketing (MLM) business operations efficiently."
        },
    ]



    // -------------------------- testimonials---------------------
    return (
        <>


            <Hero>
                <Hero1>
                    <HeroHeader>MetaBlock Technologies</HeroHeader>
                    <HeroPara>A full-stack mobile and website development company that caters to all your requirements. We specialize in BlockChain and Custom application development for international and regional brands.</HeroPara>

                </Hero1>

                <Hero2>
                    <HeroImage src={Image} alt='Image' />
                </Hero2>

            </Hero>


            <Service id='Service'>
                <ServiceH1>Our Services</ServiceH1>
                <ServiceCards>

                    <ServiceCards1>
                        <ServiceCardsH2>BlockChain Development</ServiceCardsH2>
                        <ServiceCardsPoints>
                            <ServiceCardsInnerPoints>Smart Contracts</ServiceCardsInnerPoints>
                            <ServiceCardsInnerPoints>  Decentralized Applications (DApps) </ServiceCardsInnerPoints>
                            <ServiceCardsInnerPoints>Cryptocurrency Development</ServiceCardsInnerPoints>
                            <ServiceCardsInnerPoints>Blockchain Integration</ServiceCardsInnerPoints>
                            <ServiceCardsInnerPoints>Digital Wallet Development</ServiceCardsInnerPoints>
                            <ServiceCardsInnerPoints>Initial Coin Offerings (ICOs)</ServiceCardsInnerPoints>


                        </ServiceCardsPoints>
                    </ServiceCards1>

                    <ServiceCards2>

                        <ServiceCardsH2>Full Stack  Development</ServiceCardsH2>

                        <ServiceCardsPoints>
                            <ServiceCardsInnerPoints>Web Application Development</ServiceCardsInnerPoints>
                            <ServiceCardsInnerPoints>Mobile Application Development</ServiceCardsInnerPoints>
                            <ServiceCardsInnerPoints>Software Development</ServiceCardsInnerPoints>
                            <ServiceCardsInnerPoints>Development Consultancy</ServiceCardsInnerPoints>
                            <ServiceCardsInnerPoints>API  Integration</ServiceCardsInnerPoints>
                            <ServiceCardsInnerPoints>AI  Integration</ServiceCardsInnerPoints>
                        </ServiceCardsPoints>

                    </ServiceCards2>
                </ServiceCards>
            </Service >

            {/* ---------------------------------------------Service Section End--------------------- */}

            <PastProjectsHeading id='Portfolio'>Our Portfolio</PastProjectsHeading>


            <PastProjectscontainer>
                {Portfolio.map((content, index) => (

                    <PastProjects key={index} >
                        <PastProjectsbox onClick={() => navigate(content.path)} style={{ backgroundImage: `url(${projectbg})` }}>
                            <PastProjectsboxbutton onClick={() => navigate(content.path)}>{content.Topic}</PastProjectsboxbutton>


                            <PastProjectsboxPara>
                                {content.Description}
                            </PastProjectsboxPara>
                        </PastProjectsbox>
                    </PastProjects>
                ))}
            </PastProjectscontainer>








            {/* ---------------past projects end------------------------ */}


            <Box>
                <Column1>Start a project</Column1>
                <Column2>"Excited about collaboration? Let's schedule a meeting to discuss. <br /> I'm looking forward to our conversation."</Column2>
                <Column3 > <FormDialog /></Column3>

            </Box>

            {/* --------------------------------testimonial------------------------ */}
            <Testimonial />

            {/* ------------------------------contact-------------------------- */}

            <Info />
            <ScrollToTopButton />

        </>
    )
}

export default Mainpage
