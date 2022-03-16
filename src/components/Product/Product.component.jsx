import React from 'react'
import './Product.style.css'
function Product(props) {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href = {props.link} target="_blank" rel="noreferrer">
        <img src={props.imgProps} alt="" className="p-img" />
        <h2>{props.txt}</h2>
      </a>
    </div>
  )
}

export default Product