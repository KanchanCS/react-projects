import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
const Header = ({count}) => {
    const [sideNav, setSideNav] = useState(false);
   

    return (
        <div className="fixed z-50 top-0 left-0 w-full bg-white ">
             <div className="flex justify-between py-[20px] px-[25px] text-[18px] font-semibold border-b cursor-pointer relative">
            <div>
                <Link to='/'>
                <p>Yumi<span className="text-[#e4a526]">Food</span></p></Link>
            </div>
            <div >
                <ul className="sm:flex gap-6 hidden">
                    <Link to='/'>
                        <li className="hover:text-[#fbc531]">Home</li>
                    </Link>
                    <Link to='aboutus'>
                        <li className="hover:text-[#fbc531]">About Us</li>
                    </Link>
                    <Link to='ourfood'>
                    <li className="hover:text-[#fbc531]">Our Food</li>
                    </Link>
                    <Link to='signin'>
                    <li className="hover:text-[#fbc531]">Sign in</li>
                    </Link>
                </ul>
                
            </div>
            {
                sideNav?<div className=" bg-black text-white w-[200px] absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center z-10">
                <ImCross className="absolute top-10 right-5" onClick={() =>setSideNav(!sideNav)}/>
                    <ul className="flex gap-12 flex-col">
                        <Link to='/'>
                            <li className="hover:text-[#fbc531]" onClick={() =>setSideNav(!sideNav)}>Home</li>
                        </Link>
                        <Link to='/aboutus'>
                        <li className="hover:text-[#fbc531]" onClick={() =>setSideNav(!sideNav)}>About Us</li>
                        </Link>
                        <Link to='/ourfood'>
                        <li className="hover:text-[#fbc531]" onClick={() =>setSideNav(!sideNav)}>Our Food</li>
                        </Link>
                        <Link to='/signin'>
                        <li className="hover:text-[#fbc531]" onClick={() =>setSideNav(!sideNav)}>Sign in</li>
                        </Link>
                    </ul>
                    
                </div>:""
           }
            <div className="flex gap-5">
                    <p><GiHamburgerMenu size={30} className="black sm:hidden" onClick={() => setSideNav(!sideNav)} /></p>
                    
                    <p>{ count}<FaCartPlus size={30}/></p>
            </div>
        </div>
       </div>
    )
}
export default Header

