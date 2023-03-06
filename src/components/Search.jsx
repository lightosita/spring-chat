import React from 'react'

const Search = () => {
  return (
    <div className="search">
      
      <div className="searchForm">
        <input type="text" placeholder="find a user" />
      </div>
      <div className="userChat">
          <img src="https://img.freepik.com/free-photo/dog-skateboard-street-mammal-costume-canine_53876-31010.jpg?w=740&t=st=1676566455~exp=1676567055~hmac=832553c7d05b976bb89a5ec05a22983144253c0b6c29961dc1739e7bbab9215f" />
          <div className='userChatInfo'>
<span>Jane</span>
          </div>
        
      </div>
    </div>
  )
}

export default Search