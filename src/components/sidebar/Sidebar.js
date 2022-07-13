import React from 'react';
import {LineStyle} from '@mui/icons-material';

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
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar