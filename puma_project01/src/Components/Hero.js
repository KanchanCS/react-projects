import React from "react"
import './Hero.css'
// import shooes from '../Assests/img1.jpg'

const Hero = ({Title,Price,Tranding,Img}) => {
    return (
        <div className="hero">
            <div style={{border:'2px solid gray', width:'210px', padding:'5px 5px', height:'300px'}}>
                <h2>{ Tranding}</h2>
           
            <img src={Img} alt="shooes" style={{ width: '200px' }} />
            <div style={{display:'flex'}}>
                    <p>{ Title}</p>
                    <p>Rs. { Price }</p>
            </div>
            </div>
            </div>
    )
}

export default Hero


