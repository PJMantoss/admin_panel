import React from 'react';

import './TopBar.css';

function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topleft'>
                <span className='logo'>Admin Panel</span>
            </div>
            <div className='topright'>
                <div className='topbarIcons'></div>
            </div>
        </div> 
    </div>
  )
}

export default TopBar