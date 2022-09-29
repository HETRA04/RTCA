import React from 'react'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'

const Home = () => {
  return (
    <div className="home">
      <div className='homecontainer'>
        
          <Sidebar/>
          <Chat/>
        
      </div>
        
    </div>
  )
}

export default Home