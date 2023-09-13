import React from 'react'
// import YourBajaar from '../Development/App Dev/yourbajar.png'
import '../Development/style.css'
import Info from '../Contactbar/info'

const AppDev = () => {
    const PortfolioProjects = [

        {
            projectNo: "01.",
            ProjectName: <a href="https://yourbajaar.com/ " target='_blank'> Your Bajar </a>,
            Description: "Step into a shopping revolution with 'YOUR BAJAR,' where we've completely transformed your everyday essentials shopping experience. Whether it's kitchen staples or your daily must-haves, 'YOUR BAJAR' is your ultimate one-stop destination. Get ready for secure transactions, handpicked product recommendations, and lightning-fast deliveries, all meticulously crafted to streamline your daily routine. 'YOUR BAJAR' isn't just an app; it's your key to effortless shopping for a smoother daily life",
            // Image: YourBajaar,
            ImageLink: "https://yourbajaar.com/"


        },

    ]
    return (
        <>
            {/* <BrowserRout */}
            {/* <Navbar /> */}

            <h1 className="heading">App Development</h1>

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

export default AppDev
