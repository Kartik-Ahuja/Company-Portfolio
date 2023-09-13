import React from 'react'
import HAWWKS from '../Development/blockchain/HAWWKS.png'
import Zuraverse from '../Development/blockchain/zuraverse.png'
import HTX from '../Development/blockchain/HTX.png'
import Goofy from '../Development/blockchain/Goofy.png'
import '../Development/style.css'
import Info from '../Contactbar/info'

const Blockchain = () => {
    const PortfolioProjects = [
        {
            projectNo: "01.",
            ProjectName: <a href="https://www.reddottours.com/" target='_blank'>HAWWKS </a>,
            Description: "The Red Dot Tours website is a comprehensive online platform specializing in travel services and experiences, offering a diverse range of destination information, meticulously crafted travel packages, and convenient booking options for accommodations, flights, and more. With stunning visuals, customer reviews, and informative travel guides, it caters to travelers seeking to explore and discover their dream destinations, while an 'About Us' section provides insights into the company's ethos and expertise. Whether you're planning your next adventure or simply seeking inspiration, Red Dot Tours aims to be your go-to resource for all things travel.",
            Image: HAWWKS,
            ImageLink: "https://www.reddottours.com/"


        },
        {
            projectNo: "02.",
            ProjectName: <a href="https://zuraverse.metablocktechnologies.in/" target='_blank'> Zuraverse</a>,
            Description: "Experience the next evolution of the metaverse with Zuraverse, a visionary project that is poised to redefine digital interactions through its cutting-edge blockchain technology, decentralized exchange (Dex), and NFT marketplace. Built on the robust Polygon blockchain, Zuraverse offers scalability, low transaction fees, and rapid confirmations, enabling seamless user experiences within the metaverse.",
            Image: Zuraverse,
            ImageLink: "https://zuraverse.metablocktechnologies.in/"


        },
        {
            projectNo: "03.",
            ProjectName: <a href="https://www.hammertradex.com/" target='_blank'> Hammer Trade X</a>,
            Description: "HTX (Hammer Trade X), an innovative token on the Tron blockchain powered by smart contracts. HTX opens the door to decentralized finance (DeFi) opportunities like yield farming, staking, and liquidity provision. While we're currently working on getting it listed on PancakeSwap, HTX represents a secure and transparent way to take control of your financial future. It's all about making DeFi accessible to everyone and building a more inclusive financial world. ",
            Image: HTX,
            ImageLink: "https://www.hammertradex.com/"


        },
        {
            projectNo: "04.",
            ProjectName: <a href="https://buffgoofy.com/" target='_blank'>Buff Goofy</a>,
            Description: "Buff Goofy is a 'Gold Smuggler' who escaped from the prison. And now cops want him 'Dead or Alive'. Help Buff Goofy to find more gold and avoid the cops in our next P2E Game 'Catch That Goofy'. The more gold Buff Goofy smuggles, the more rewards you will get in the form of Buff Goofy Tokens.From meme to our leading project, our vision is simple - to create a platform that puts gamers and Buff Goofy holders first.Providing a unique gaming experience and exciting rewards. ",
            Image: Goofy,
            ImageLink: "https://buffgoofy.com/"


        },
    ]
    return (
        <>
            {/* <BrowserRout */}
            {/* <Navbar /> */}

            <h1 className="heading">Blockchain Development</h1>

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

export default Blockchain
