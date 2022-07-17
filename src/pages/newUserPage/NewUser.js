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

        <div className='newUserItem'>
          <label>Gender</label>
          <div className='newUserGender'>
            <input 
              type='radio' 
              name='gender' 
              value='male'
              id='male'
            />
            <label for='male'>Male</label>

            <input 
              type='radio' 
              name='gender' 
              value='female'
              id='female'
            />
            <label for='female'>Female</label>

            <input 
              type='radio' 
              name='gender' 
              value='others'
              id='others'
            />
            <label for='others'>Others</label>
          </div>
        </div>

        <div className='newUserItem'>
          <label>Active</label>
          <select 
            className='newUserSelect' 
            name='active' 
            id='active'
          >
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='newUserSelectBtn'>
          Create User
        </button>
      </form>
    </div>
  )
}

export default NewUser