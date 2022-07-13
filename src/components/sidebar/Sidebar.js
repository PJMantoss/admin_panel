import React from 'react';
import { LineStyle, Timeline, TrendingUp } from '@mui/icons-material';

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
              Home
            </li>

            <li className='sidebarListItem'>
              <TrendingUp />
              Home
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar