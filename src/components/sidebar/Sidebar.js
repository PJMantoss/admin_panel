import React from 'react';
import { LineStyle, Timeline, TrendingUp } from '@mui/icons-material';

import './sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'></h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <LineStyle />
              Home
            </li>

            <li className='sidebarListItem'>
              <Timeline />
              Analytics
            </li>

            <li className='sidebarListItem'>
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar