import React from 'react'
import HRM from '../Development/software/HRM.png'
import Billing1 from '../Development/software/Billing1.png'
import CRM from '../Development/software/CRM.png'
import '../Development/style.css'
import Info from '../Contactbar/info'

const Software = () => {
    const PortfolioProjects = [
        {
            projectNo: "01.",
            ProjectName: <a href="https://demo.rajodiya.com/hrmgo/login" target='_blank'> HRM Software</a>,
            Description: "This is a Human Resource Management (HRM) software which is comprehensive and integrated digital solution designed to streamline and optimize HR functions within organizations. It encompasses a wide range of HR tasks, including recruitment, employee onboarding, performance management, payroll processing, benefits administration, and employee record management. HRM software simplifies complex HR processes, enhances data accuracy, and promotes efficient workforce management. It also often includes self-service portals for employees and managers, enabling them to access and update their HR-related information. By automating administrative tasks, facilitating data-driven decision-making, and promoting compliance with labor laws and regulations, HRM software helps organizations improve productivity, enhance employee engagement, and foster a more strategic approach to human resource management ",
            Image: HRM,
            ImageLink: "https://demo.rajodiya.com/hrmgo/login"
        },
        {
            projectNo: "02.",
            ProjectName: <a href="https://pos.appsthing.com/" target='_blank'> Billing Software</a>,
            Description: <div>


                <b>Admin Login -</b> Login Email : admin@appsthing.com | Login Password : administrator
                <br />
                <b> Manager Login-</b>
                Login Email : manager@appsthing.com | Login Password : posuser
                <br />
                <b> Accounts Manager Login -</b> Login Email : accounts@appsthing.com | Login Password : posuser
                <br />
                <br />
                Billing software is a versatile tool used by businesses to streamline their financial operations. It automates the process of generating invoices, managing expenses, and tracking payments, allowing for efficient and accurate billing processes. Billing software helps businesses create professional invoices, send them to clients, and monitor payment status, contributing to improved cash flow management. It can also generate detailed financial reports, enabling businesses to gain insights into their financial health and make informed decisions. Additionally, billing software often integrates with accounting systems, making it an essential tool for businesses of all sizes to maintain financial transparency and efficiency. </div>,
            Image: Billing1,
            ImageLink: "https://pos.appsthing.com/"
        },
        {
            projectNo: "03.",
            ProjectName: <a href=" http://billing.ultimatekode.com" target='_blank'>CRM Software</a>,
            Description: <div>

                Customer Relationship Management (CRM) software is a powerful tool that enables businesses to efficiently manage and nurture their interactions with customers and potential clients. It centralizes customer data, facilitating better communication, tracking sales leads, managing customer support inquiries, and analyzing customer behavior. CRM software helps businesses build stronger, more personalized relationships with customers, enhance sales and marketing efforts, and ultimately drive growth by providing valuable insights into customer preferences and behaviors. </div>,
            Image: CRM,
            ImageLink: "http://billing.ultimatekode.com"
        },

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
                    <a href={content.ImageLink} target='_blank'>
                        <img src={content.Image} alt="" className="projectImage" />
                    </a>
                </div >
            ))}
            <Info />
        </>
    )
}

export default Software
