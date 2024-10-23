import React from 'react'
import CustomButton from '../components/CustomBotton'

const About = () => {
    const about_me = {
        name : 'Unnati Joshi',
        emp_id : '2122',
        division : 'EAD',
        org : 'Deloitte'
    }
    return(
        <div>
            <h1>This is my About Page</h1>
            <table border={1} cellPadding={10}>
                <tr>
                    <td>Name</td>
                    <td>{about_me.name}</td>
                </tr>
                <tr>
                    <td>Employee ID</td>
                    <td>{about_me.emp_id}</td>
                </tr>
                <tr>
                    <td>Divison</td>
                    <td>{about_me.division}</td>
                </tr>
                <tr>
                    <td>Organisation</td>
                    <td>{about_me.org}</td>
                </tr>
            </table>
            <marquee>About Page</marquee>
            <CustomButton/>
        </div>
    )
}
export default About