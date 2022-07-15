import React from 'react';
import './user.css';

function User() {
  return (
    <div className='user'>
        <div className='userTitleContainer'>
            <h1 className='userTitle'>Edit User</h1>
            <button className='userAddButton'>Create</button>
        </div>

        <div className='userContainer'>
            <div className='userShow'>Show</div>
            <div className='userUpdate'>Update</div>
        </div>
    </div>
  )
}

export default User;