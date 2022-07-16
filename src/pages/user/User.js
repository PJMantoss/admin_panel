import React from 'react';
import {
    PermIdentity,
    CalendarToday,
    PhoneAndroid,
    MailOutline,
    LocationOnOutlined
} from '@mui/icons-material';
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
                <div className='userShowBottom'>
                    <span className='userShowTitle'>Account Info</span>
                    <div className='userShowInfo'>
                        <PermIdentity className='userShowIcon' />
                        <span className='userShowInfoTitle'>jonsnow2000</span>
                    </div>

                    <div className='userShowInfo'>
                        <CalendarToday className='userShowIcon' />
                        <span className='userShowInfoTitle'>08 Oct,1990</span>
                    </div>

                    <span className='userShowTitle'>Contact</span>

                    <div className='userShowInfo'>
                        <MailOutline className='userShowIcon' />
                        <span className='userShowInfoTitle'>jonsnow2000@gmail.com</span>
                    </div>

                    <div className='userShowInfo'>
                        <PhoneAndroid className='userShowIcon' />
                        <span className='userShowInfoTitle'>+1 888666444</span>
                    </div>

                    <div className='userShowInfo'>
                        <LocationOnOutlined className='userShowIcon' />
                        <span className='userShowInfoTitle'>6 Baldwin str, Atlanta</span>
                    </div>
                </div>
            </div>
            <div className='userUpdate'>
                <div className='userUpdateTitle'>Edit</div>
                <form className='userUpdateForm'></form>
            </div>
        </div>
    </div>
  )
}

export default User;