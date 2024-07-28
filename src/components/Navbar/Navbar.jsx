import React,{useState} from 'react'
import "./Navbar.css"

const Navbar = () => {

    // Scroll to a specific element by its id
    function scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // dynamic navbar style on scroll
    const [nav,setNav] = useState()
    window.addEventListener("scroll",()=>setNav(window.scrollY>1))

    return (
        <div className="Navbar" style={nav ? {"backgroundColor":"rgba(0,0,0,0.7)", "color":"white", "boxShadow":"0 0 10px black", "padding":"0 10%"} 
            : {"backgroundColor":"rgb(19, 19, 19)"}} >
                <h1 onClick={() => { scrollToElement("about") }}>About</h1>
                <h1 onClick={() => { scrollToElement("education") }}>Education</h1>
                <h1 onClick={() => { scrollToElement("portfolio") }}>Portfolio</h1>
                <h1 onClick={() => { scrollToElement("contact") }}>Contact</h1>
        </div>
    )
}

export default Navbar