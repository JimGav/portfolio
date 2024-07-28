import React from 'react'
import "./About.css"


const About = () => {

  return (
    <section id="about">
      <div className="container">
        <h2 id="AboutMe1">ABOUT ME</h2>
        <div className="about-content">
          <h3>Hello, I'm Dimitris, a <span className='highlighted'>Computer Science</span> student </h3>
          <p>I am entering my third year of studies in <b>Department of Informatics and Telecommunications | National and Kapodistrian University of Athens </b>
            and actively pursuing a career in Computer Science.
            I am most passionate about the fields of <b>software development</b>, <b >artificial intelligence</b>, <b>theoretical computer science</b>
          , and <b>cybersecurity</b> .</p>
        </div>
        <h2 id="AboutMe2">ABOUT ME</h2>
      </div>
    </section>


  )
}

export default About