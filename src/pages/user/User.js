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
            <div className='userShow'>
                <div className='userShowTop'>
                    <img 
                        src='https://i.ibb.co/jHcM2gw/yellow-men-s-tshirt.jpg' 
                        alt='user-profile-image' 
                        className='userShowImg' 
                    />
                    <div className='userShowTopTitle'>
                        <span className='userShowUsername'>
                            Jon Snow
                        </span>
                        <span className='userShowUserTitle'>
                            Software Engineer
                        </span>
                    </div>
                </div>
                <div className='userShowBottom'></div>
            </div>
            <div className='userUpdate'>Update</div>
        </div>
    </div>
  )
}

export default User;