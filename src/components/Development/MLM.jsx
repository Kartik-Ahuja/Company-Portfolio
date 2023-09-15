import React from 'react'
import firstimage from '../images/hero.png'
import '../Development/style.css'
import Info from '../Contactbar/info'

const MLM = () => {
    const PortfolioProjects = [
        {
            projectNo: "01.",
            ProjectName: <a href="https://www.reddottours.com/" target='_blank'>HAWWKS </a>,
            Description: "The Red Dot Tours website is a comprehensive online platform specializing in travel services and experiences, offering a diverse range of destination information, meticulously crafted travel packages, and convenient booking options for accommodations, flights, and more. With stunning visuals, customer reviews, and informative travel guides, it caters to travelers seeking to explore and discover their dream destinations, while an 'About Us' section provides insights into the company's ethos and expertise. Whether you're planning your next adventure or simply seeking inspiration, Red Dot Tours aims to be your go-to resource for all things travel.",
            // Image: HAWWKS,
            ImageLink: "https://www.reddottours.com/"


        },
    ]
    return (
        <>
            {/* <BrowserRout */}
            {/* <Navbar /> */}

            <h1 className="heading">MLM Software Development</h1>

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

export default MLM
