import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nav-bar'>
      <h1>Mylist</h1>
      <ul className='sections'>
        <li><Link to='/goals'>Goals</Link></li>
        <li><Link to='/'>To-Do</Link></li>
        <li><Link to='/calendar'>Calendar</Link></li>
      </ul>
    </nav>
  )
}

