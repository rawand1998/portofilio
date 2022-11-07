import React  from 'react'
import {Link} from 'react-router-dom'
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";
function Navbar() {
  return (
    <div className='navbar_container'>
        <div className='logo'>
          <span>Rawand <span>Jaradh</span></span>
        </div>
        <div className='menu'>
        <nav>
            <li><a href="">Home</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Projects</a></li>
            {/* <Link to="/">Home</Link>
            <Link to="/">Skills</Link>
            <Link to="/">Projects</Link> */}
        </nav>
        <div className="icons">
            <FaFacebookF/>
            <FaLinkedinIn/>
        </div>
        </div>
       
    </div>
  )
}

export default Navbar