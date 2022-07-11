import React from 'react';
import {NotificationsNone} from '@mui/icons-material';

import './TopBar.css';

function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topleft'>
                <span className='logo'>Admin Panel</span>
            </div>
            <div className='topright'>
                <div className='topbarIcons'>
                    <NotificationsNone />
                </div>
            </div>
        </div> 
    </div>
  )
}

export default TopBar