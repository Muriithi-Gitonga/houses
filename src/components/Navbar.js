import React from 'react'
import { Link } from 'react-router-dom'

import {FaHouseUser} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div  className='nav-center'>
        <Link to='/'>
        <FaHouseUser  className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>
              Home
            </Link>
            <Link to='/about'>
              About
            </Link>
            <Link to='/review'>
              Review
            </Link>

          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
