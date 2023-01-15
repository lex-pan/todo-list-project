import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nav-bar'>
      <h1>Mylist</h1>
      <ul className='sections'>
        <Link to='/goals'><li>Goals</li></Link>
        <Link to='/'><li>To-Do</li></Link>
        <Link to='/calendar'><li>Calendar</li></Link>
      </ul>
    </nav>
  )
}

