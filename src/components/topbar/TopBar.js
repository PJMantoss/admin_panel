import React from 'react';

import './TopBar.css';

function TopBar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topleft">
                <span className="logo">Admin Panel</span>
            </div>
            <div className="topright">right</div>
        </div> 
    </div>
  )
}

export default TopBar