import React from 'react'
import firstimage from '../images/hero.png'
import '../Development/style.css'
import Info from '../Contactbar/info'

const Software = () => {
    const PortfolioProjects = [
        {
            projectNo: "01.",
            ProjectName: "First project",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad iure maxime asperiores! Quod alias eius, ad debitis ab consequuntur vero. Culpa quas sunt maxime laborum, itaque distinctio deleniti accusamus!elit. Quidem ad iure maxime asperiores! Quod alias eius, ad debitis ab consequuntur vero. Culpa quas sunt maxime laborum, itaque distinctio deleniti accusamus!elit. Quidem ad iure maxime asperiores! Quod alias eius, ad debitis ab consequuntur vero. Culpa quas sunt maxime laborum, itaque distinctio deleniti accusamus!",
            Image: firstimage


        },
        {
            projectNo: "01.",
            ProjectName: "First project",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad iure maxime asperiores! Quod alias eius, ad debitis ab consequuntur vero. Culpa quas sunt maxime laborum, itaque distinctio deleniti accusamus!elit. Quidem ad iure maxime asperiores! Quod alias eius, ad debitis ab consequuntur vero. Culpa quas sunt maxime laborum, itaque distinctio deleniti accusamus!elit. Quidem ad iure maxime asperiores! Quod alias eius, ad debitis ab consequuntur vero. Culpa quas sunt maxime laborum, itaque distinctio deleniti accusamus!",
            Image: firstimage


        }
    ]
    return (
        <>
            {/* <BrowserRout */}
            {/* <Navbar /> */}

            <h1 className="heading">Software Development</h1>

            {PortfolioProjects.map((content, index) => (
                <div key={index} className="container">
                    <h1 className="projectName">{content.projectNo} {content.ProjectName} </h1>
                    <div className="description">{content.Description}</div>

                    <img src={content.Image} alt="" className="projectImage" />


                </div >
            ))}
            <Info />
        </>
    )
}

export default Software
