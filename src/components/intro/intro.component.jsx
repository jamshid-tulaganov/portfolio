import React from 'react'
// style
import './intro.style.css'
import hero from '../../img/hero.png'
export  const Intro = props => {
  return (
    <div className='i'>
        <div className="i-left">
          <div className="i-left-wrapper">
              <h2 className='i-intro'>Hello, My name is</h2>
              <h1 className='i-name'>Jamshidjon</h1>
              <div className="i-title">
                <div className="i-title-wrapper">
                  <div className="i-title-item">Web Developer</div>
                  <div className="i-title-item">React js Developer</div>
                  <div className="i-title-item">Node js developer</div>
                </div>
              </div>
              <div className="i-dec">
                  I develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services and
                online stores
              </div>
          </div>
        </div>
        <div className="i-right">
            <img src={hero} alt="hero images" className='i-img'/>
            <div className="i-bg">
            </div>
        </div>
    </div>
  )
}
