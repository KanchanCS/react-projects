import React from 'react'
import './Header.css'
import Pumalogo from '../Assests/logo.png'



const Header = () => {
    return (
        <div className='header'>
            <div>  
                <img src={Pumalogo} alt='logo' style={{width:'90px',height:'40px'}}/>
            </div>
            <div className='listitem'>
                <ul>
                    <li>New</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Men</li>
                    <li>Sports</li>
                </ul>
         </div>
        </div>
    )
}

export default Header