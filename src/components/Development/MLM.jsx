import React from 'react'
import firstimage from '../images/hero.png'
import HTX from '../Development/blockchain/HTX.png'
import '../Development/style.css'
import Info from '../Contactbar/info'

const MLM = () => {
    const PortfolioProjects = [
        {
            projectNo: "03.",
            ProjectName: <a href="https://www.hammertradex.com/" target='_blank'> Hammer Trade X</a>,
            Description: "HTX (Hammer Trade X), an innovative token on the Tron blockchain powered by smart contracts. HTX opens the door to decentralized finance (DeFi) opportunities like yield farming, staking, and liquidity provision. While we're currently working on getting it listed on PancakeSwap, HTX represents a secure and transparent way to take control of your financial future. It's all about making DeFi accessible to everyone and building a more inclusive financial world. ",
            Image: HTX,
            ImageLink: "https://www.hammertradex.com/"


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
