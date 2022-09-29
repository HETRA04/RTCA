import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className='logo'>Home</span>
      <div className='user'>
        
        <span> John</span>
        <button className='navbutton'>logout</button>
      </div>
    </div>
  )
}

export default Navbar