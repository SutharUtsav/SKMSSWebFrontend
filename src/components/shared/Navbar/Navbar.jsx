import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'


const Navbar = (props) => {

  return (
    <nav className='navbar'>
      <div className='container navbar-container'>

        <div className='links'>
          <div><NavLink to='/'>Home</NavLink></div>
          <div className='hide-mobile'><NavLink to='/gallery'>Gallery</NavLink></div>
          <div className='hide-mobile'><NavLink to='/infrastructure'>Infrastructure</NavLink></div>
          <div className='hide-mobile'><NavLink to='/aboutus'>About Us</NavLink></div>
          <div className='hide-mobile'><NavLink to='/contactus'>Contact Us</NavLink></div>
          <div className="dropdown more-links hide-desktop">
            <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              More Pages
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><Link className="dropdown-item text-dark" to='/gallery'>Gallery</Link></li>
              <li><Link className="dropdown-item text-dark" to='/infrastructure'>Infrastructure</Link></li>
              <li><Link className="dropdown-item text-dark" to='/aboutus'>About Us</Link></li>
              <li><Link className="dropdown-item text-dark" to='/contactus'>Contact Us</Link></li>
            </ul>
          </div>



        </div>

      </div>


    </nav>
  )
}

export default Navbar
