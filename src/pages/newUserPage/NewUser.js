import React from 'react';
import './newUser.css';

function NewUser() {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input 
            type='text' 
            placeholder='jon' 
          />
        </div>

        <div className='newUserItem'>
          <label>Full Name</label>
          <input 
            type='text' 
            placeholder='Jon Snow' 
          />
        </div>

        <div className='newUserItem'>
          <label>E-Mail</label>
          <input 
            type='email' 
            placeholder='jonsnow2000@gmail.com' 
          />
        </div>

        <div className='newUserItem'>
          <label>Password</label>
          <input 
            type='password' 
            placeholder='Password' 
          />
        </div>

        <div className='newUserItem'>
          <label>Phone Number</label>
          <input 
            type='number' 
            placeholder='+1 4448889' 
          />
        </div>

        <div className='newUserItem'>
          <label>Address</label>
          <input 
            type='text' 
            placeholder='LA | USA' 
          />
        </div>
      </form>
    </div>
  )
}

export default NewUser