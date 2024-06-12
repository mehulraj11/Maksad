import React, { useState } from "react";
import './Navbar.css'

const Navbar = ()=>{

  const [menu, setMenu] = useState("mobile-app")


  return(
    <div className="navbar">
      <img  className='logo-design'src="" alt="" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home" ? "active" : ""}>Home</li>
        <li onClick={()=>setMenu("category")} className={menu==="category" ? "active" : ""}>Category</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>Mobile-App</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src="" alt="" />
        <div className="navbar-search-icon">
          <img src="" alt="" />
          <div className="dot">
          
          </div>
          
        </div>
        <button>Sign in</button>
      </div>

    </div>

  )
}

export default Navbar