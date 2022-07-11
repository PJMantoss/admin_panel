import React from 'react';

import './TopBar.css';

function TopBar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="left">
                <span className="logo">Admin Panel</span>
            </div>
            <div className="right">right</div>
        </div> 
    </div>
  )
}

export default TopBar