import React from 'react'
import Navbar from '../Navbar'
import RedDottours from '../Development/Web/redDotTours.png'
import ImaginaryOnes from '../Development/Web/ImaginaryOnes.png'
import Begusarai from '../Development/Web/Begusarai.png'
import Zcart from '../Development/Web/Zcart.png'
import '../Development/style.css'
import Info from '../Contactbar/info'

const Web = () => {

    const PortfolioProjects = [
        {
            projectNo: "01.",
            ProjectName: <a href="https://www.reddottours.com/" target='_blank'>Red Dot Tours (Travel and Booking Website)</a>,
            Description: "The Red Dot Tours website is a comprehensive online platform specializing in travel services and experiences, offering a diverse range of destination information, meticulously crafted travel packages, and convenient booking options for accommodations, flights, and more. With stunning visuals, customer reviews, and informative travel guides, it caters to travelers seeking to explore and discover their dream destinations, while an 'About Us' section provides insights into the company's ethos and expertise. Whether you're planning your next adventure or simply seeking inspiration, Red Dot Tours aims to be your go-to resource for all things travel.",
            Image: RedDottours,
            ImageLink: "https://www.reddottours.com/"


        },
        {
            projectNo: "02.",
            ProjectName: <a href="https://imaginaryones.com/" target='_blank'>Imaginary Ones (blockchain-based website)</a>,
            Description: "ImaginaryOnes is an innovative blockchain-based platform that bridges the realms of NFTs, cryptocurrency, and staking. Offering a unique ecosystem, users can create, trade, and collect NFTs, while also participating in coin staking to earn rewards. Whether you're an artist seeking to tokenize your creations, an investor looking to diversify in the NFT space, or a crypto enthusiast interested in staking, ImaginaryOnes provides a dynamic and secure online destination for exploring the exciting world of blockchain technology.",
            Image: ImaginaryOnes,
            ImageLink: "https://imaginaryones.com/"


        },

        {
            projectNo: "03.",
            ProjectName: <a href="https://begusarai.net/" target='_blank'>The Begusarai Post (Blogging Websites)</a>,
            Description: "The Begusarai Post is a blogging website that likely features articles, news, or content related to the town or district of Begusarai in India. Blogging websites often serve as platforms for individuals or organizations to share information, news, opinions, and stories on various topics",
            Image: Begusarai,
            ImageLink: "https://begusarai.net/"


        },
        {
            projectNo: "04.",
            ProjectName: <span> <a href="https://uniquedentalhub.com/ " target='_blank'>ZCart (User Panel)  </a><a href="https://uniquedentalhub.com/login" arget='_blank'>|| ZCart (Admin Panel)</a> </span>,
            Description: <div> zCart is your ultimate <b>E-Commerce </b> companion, empowering businesses with an all-inclusive toolkit for crafting and overseeing captivating online stores. A sleek, user-friendly interface merges seamlessly with an extensive feature set, granting you the power to fashion personalized storefronts, effortlessly curate product catalogs, streamline payment processing, and monitor orders with precision. Whether you're a budding startup or an established enterprise, zCart scales effortlessly to your needs, providing a unified platform to cultivate and expand your digital footprint, all while ensuring a frictionless and delightful shopping journey for your cherished customers. <br />
                <b>  Admin Panel : ID :- superadmin@demo.com , Password:- 123456 </b>
            </div>,
            Image: Zcart,
            ImageLink: "https://uniquedentalhub.com/"


        },

    ]
    return (
        <>
            {/* <BrowserRout */}
            {/* <Navbar /> */}

            <h1 className="heading">Web Development</h1>

            {PortfolioProjects.map((content, index) => (
                <div key={index} className="container">
                    <h1 className="projectName">{content.projectNo} {content.ProjectName} </h1>
                    <div className="description">{content.Description}</div>
                    <a href={content.ImageLink} target='_blank'>
                        <img src={content.Image} alt="" className="projectImage" />
                    </a>

                </div >
            ))}
            <Info />
        </>
    )
}

export default Web