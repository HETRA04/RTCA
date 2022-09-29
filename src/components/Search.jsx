import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchform">
        <input type="text" className='searchinput' placeholder='Find a user!'/>
      </div>
      <div className="userchat">
        <div className="userchatinfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search