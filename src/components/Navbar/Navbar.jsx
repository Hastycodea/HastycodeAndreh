import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar ">
        <div className="logo">
            <h3>HA</h3>
        </div>
        <ul>
            <li><p>Home</p></li>
            <li><p>About</p></li>
            <li><p>Skills</p></li>
            <li><p>Projects</p></li>
            <li><p>Blogs</p></li>
            <li><p>Contact</p></li>
            <li><p>Webinar Talk</p></li>
        </ul>
    </div>
  )
}

export default Navbar