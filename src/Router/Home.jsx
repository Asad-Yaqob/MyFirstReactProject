import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>Home
        <Link to='/about'> About</Link>
        <br />
    </div>
  )
}

export default Home