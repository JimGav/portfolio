import React from 'react'
import "./Hero.css"
import { FaGithub , FaLinkedin} from 'react-icons/fa';
import profilePic from "/wolf.png"
import CV from "/resume2024.pdf"

const Hero = () => {

    return (
        <div className="Hero">
            <h1 id="name">Dimitris Gavriil</h1>
            <h1 id="occupation">CompSci Student</h1>
            <img id = "profilePic" src = {profilePic}/>
            <a href = {CV}><button id="cv"><i className="fa fa-download"></i> CV</button></a>
            <div className='socials'>
                <FaGithub id ="github-icon" color="#FFFFFF" size={50} onClick={()=>window.open("https://github.com/JimGav")} target='_blank'/>
                <FaLinkedin id = "linkedin-icon" color="#FFFFFF" size={50} onClick={()=>window.open("https://www.linkedin.com/in/dimitris-gavriil/")} target='_blank'/>
            </div>
        </div>
    )
}

export default Hero