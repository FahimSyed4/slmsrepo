import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const LinkStyles =(isActive)  => {
         return {
            textDecoration : isActive ? 'none' : 'underline',
            fontWeight : isActive ? 'bold' : 'normaltext',

         }
    }
  return (
    <div>
      <nav className='primary-nav'>
        <NavLink to="/" style={LinkStyles}>Home</NavLink>
        <NavLink to="/courses" style={LinkStyles}>Courses</NavLink>
        <NavLink to="/faculty" style={LinkStyles}>Faculty</NavLink>
        <NavLink to="/student" style={LinkStyles}>Student</NavLink>
      </nav>
    </div>
  )
}
