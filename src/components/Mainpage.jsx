import serviceBG from '../components/images/service.png';
import Image from '../components/images/heroBG.jpg';
import WEB from '../components/images/WEB.png';
import Blockchain from '../components/images/BLOCK.png';
import MLM from '../components/images/MLM.png';
import Software from '../components/images/SOFT.png';
import APP from '../components/images/APP.png';
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
   color : #fff;
    height: 101vh;
    display : flex;
    flex-direction: column;
   padding-left: 8%;
   padding-top: 10%;
    background-position: center top;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-top: 10vh;
    
    @media all and (max-width: 1200px){
    
    height: 50vh;
        
    
    }
  
 
    `;
    const HeroHeader = styled.h1`
   
    @media all and (max-width: 1200px){
    
      font-size: 1.3rem;
      word-rap: wrap;

    }

   
`
    const HeroPara = styled.p`
    text-align: left;
       width: 40vw;
  letter-spacing: 1.8px;
  line-height: 2.4;

  
    @media all and (max-width: 1200px){
    font-size: 0.8rem;
   letter-spacing: 1px;
   line-height: 1.4;        

    }
`

    // -------------------------------------Hero Section END-----------------------

    const Service = styled.div`
    margin: 20px 0px;
    background-position: center  center;
    padding: 30px 0px;
    background-repeat: no-repeat;
    height: 50vh;

    @media all and (max-width: 1200px){
        margin: 0px 0px;


    }
    
    `;

    const ServiceH1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center; 


    `;

    const ServiceCards = styled.div`
    display: flex;
    align-items : center;
    padding: 0px 10px;
    justify-content: space-around;

    `;

    const ServiceCardsH2 = styled.h2`
    display: flex;
    justify-content: center;
    
    `;

    const ServiceCards1 = styled.div`
    width: 50 %;
    display: flex;  
    flex-direction : column;
    align-items : center;
    `;

    const ServiceCards2 = styled.div`
    width: 50 %;
    display: flex;
    flex-direction : column;
    align-items : center;
    `;

    const ServiceCardsPoints = styled.ul`
    text-align: left;
    list-style: square;
    
    `;
    const ServiceCardsInnerPoints = styled.li`
    font-size: .9rem;
    font-weight: 500;
    letter-spacing: 1.3px;
    line-height: 2;

    `;



    // ----------------------------------------------Service Section End---------------------

    const PastProjects = styled.div`
    display: flex;
    flex-direction: row !important;

    justify-content : center;

    `;
    const PastProjectscontainer = styled.div`
    display: flex;
    justify-content : center;
    flex-wrap : wrap;

    `;

    const PastProjectsbox = styled.div`
    position: relative;
    color: white;
padding: 50px 10px;
    border: none;
    width  200px;
    height: 100px;
    margin: 10px;
    border-radius: 20px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
 box-shadow: rgb(0 0 0/69%) 0px 9px 30px -10px, rgb(0 0 0/ 73%) 0px 10px 10px -10px;
 overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 100%;
        background: linear-gradient(to right, transparent 50%, red 50%);
        transition: width 1500ms cubic-bezier(0.23, 1, 0.32, 1);
        z-index: -1;
    }

    &:hover::before {
        width: 100%;
    }    

&:hover{

    background-size: 0;
    background-color: #071952;


    button {
        font-weight:bold;
            display: block;
            margin-left: 22%;
            padding: 10px;
            cursor: pointer;
            background-color: transparent;
            color: white;
            border: 2px solid blue  ;
            border-radius: 100px;
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            

            &:hover{
                background:blue;
                
            }
        }

        p{
            display: block;
            text-align: center;
  letter-spacing: 1.2px;

        }


    }


    `;

    const PastProjectsHeading = styled.h1`
   display: flex;
   justify-content: center;


    `;

    const PastProjectsboxbutton = styled.button`

    display: none;

    `;



    const PastProjectsboxPara = styled.p`

    display: none;
    `;


    // -----------------------past project end-----------------------------

    const Box = styled.div`
    border-radius: 20px;
    background:  #071952;
    color: white;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border: none;
    margin: 100px;
    padding: 50px;
 box-shadow: rgb(0 0 0/69%) 0px 9px 30px -10px, rgb(0 0 0/ 73%) 0px 10px 10px -10px;


 

    `;
    const Column1 = styled.h1`

    margin: 20px;

    @media all and (max-width:1200px){

        font-size: 1.4rem;
    }

    `;
    const Column2 = styled.div`
    font-weight: 600;
    letter-spacing: 1.1px;
    margin: 20px;
    text-align: center;

     @media all and (max-width:1200px){

        font-size: 0.8rem;
    }

    `;
    const Column3 = styled.button`
    margin: 20px;
    cursor: pointer;
    background-color: white;
    border-radius: 40px;

     @media all and (max-width:1200px){
        font-size: 0.8rem;
    }
    
    `;


    // ---------------------------------------functiionality----------------------


    const Portfolio = [
        {
            path: '/web',
            BgImage: WEB,
            // Topic: "Web Development",
            Description: " Transforming visions into exceptional web solutions with innovation and expertise"
        },
        {
            path: '/Blockchain',
            BgImage: Blockchain,
            // Topic: " Blockchain Development",
            Description: "Unlocking blockchain's potential, we deliver secure, innovative solutions for clients."
        },
        {
            path: '/App',
            BgImage: APP,
            // Topic: " App Development",
            Description: "   Crafting innovative mobile apps tailored to your business needs and success"
        },
        {
            path: '/Software',
            BgImage: Software,
            // Topic: "   Software Development",
            Description: "Delivering innovative software solutions that exceed client expectations through expertise and collaboration"
        },
        {
            path: '/MLM',
            BgImage: MLM,
            // Topic: "  MLM Software Development",
            Description: "Developing software for managing multi-level marketing (MLM) business operations efficiently."
        },
    ]



    // -------------------------- testimonials---------------------
    return (
        <>


            <Hero style={{ backgroundImage: `url(${Image})` }}>


                <HeroHeader>MetaBlock Technologies</HeroHeader>
                <HeroPara>We are a comprehensive full-stack mobile and web development company dedicated to meeting all of your unique requirements. Our expertise extends to blockchain and custom application development, serving both international giants and regional brands with tailor-made digital solutions.</HeroPara>



            </Hero>


            <Service id='Service' style={{ backgroundImage: `url(${serviceBG})` }}>
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
                        <PastProjectsbox onClick={() => navigate(content.path)} style={{ backgroundImage: `url(${content.BgImage})` }}>
                            <PastProjectsboxbutton onClick={() => navigate(content.path)}>CLICK HERE >> </PastProjectsboxbutton>


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
