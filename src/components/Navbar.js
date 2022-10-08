import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div  className='nav-center'>
        <Link to='/'>
        <i>HOUSES</i>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>
              Home
            </Link>
            <Link to='/about'>
              About
            </Link>

          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
