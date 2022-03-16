import React from 'react'
import './about.style.css'
import programmer from '../../img/about-hero.png'
import award from '../../img/award.png'
function About(props) {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src={programmer} className= 'a-img' alt="programmer" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">
          Hi I am Jamshid(IVY) developer. My stack is MERN stack. Now I study at Tashkent Univercity Information Technology and I will graduate the next year.
          I learned the Node js backend developer at PDP(Personal Development Process)
          then I finished Fronted depeloper course at Epam company. Now I am working Javascript fullstack developer.
          I worked the Instant company 5 month When I graduated the PDP(study center)
          I am very interested to learn new language. My English level is intermediate and at the moment I am learning Arabic fa-language  
        </p>
        <div className="a-award">
          <img src={award} className = 'a-award-img' alt="award" />
          <div className="a-award-title">
             <h3 className="a-award-header">Epam Company 2021-2022</h3>
             <p className="a-award-text">I graduated the course and I worked a bit Fronted Developer that Company </p>
          </div>
        </div>  
      </div>  
    </div>
  )
}

export default About