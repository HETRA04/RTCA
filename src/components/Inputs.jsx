import React from 'react'

const Inputs = () => {
  return (
    <div className="inputs">
      <input type="text" className="inputtext" placeholder='Say something :)'/>
      <div className='inputsend'>
        <input type='submit' className='inputsend' value="Send"/>
      </div>
    </div>
  )
}

export default Inputs