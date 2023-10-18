
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
       <nav className='wrapper'>
      <div className='container'>
        <Link className='links' to='/' /><a href="/">Fact One</a>
        <Link className='links' to='/FactTwo' /><a href="/FactTwo">Fact Two</a>
        <Link className='links' to='/FactThree' /><a href="/FactThree">Fact Three</a>
      </div>
    </nav>
  )
}

export default Navbar


