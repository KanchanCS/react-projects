import React from "react";

const Header = () => {
    return (
        <div className="header" style={{backgroundColor:'black', color:'#ffffff', display:'flex', justifyContent:"space-around", padding:'20px', cursor:'pointer'}}>
            <p>Home</p>
            <p>Cart</p>
        </div>
    )
}

export default Header