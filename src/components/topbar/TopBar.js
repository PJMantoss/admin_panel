import React from 'react';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

import './TopBar.css';

function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topleft'>
                <span className='logo'>Admin Panel</span>
            </div>
            <div className='topright'>
                <div className='topbarIconContainer'>
                    <NotificationsNone />
                    <span className='topIconBadge'>2</span>
                </div>

                <div className='topbarIconContainer'>
                    <Language />
                </div>

                <div className='topbarIconContainer'>
                    <Settings />
                </div>

                <img  src='https://i.ibb.co/dJb4jnb/blue-jacket-woman2.jpg' alt='avatar' />
            </div>
        </div> 
    </div>
  )
}

export default TopBar