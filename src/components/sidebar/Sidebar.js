import React from 'react';
import { LineStyle, Timeline, TrendingUp } from '@mui/icons-material';

import './sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyle className='sidebarListIcon' />
              Home
            </li>

            <li className='sidebarListItem'>
              <Timeline className='sidebarListIcon' />
              Analytics
            </li>

            <li className='sidebarListItem'>
              <TrendingUp className='sidebarListIcon' />
              Sales
            </li>
          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyle className='sidebarListIcon' />
              Users
            </li>

            <li className='sidebarListItem'>
              <Timeline className='sidebarListIcon' />
              Products
            </li>

            <li className='sidebarListItem'>
              <TrendingUp className='sidebarListIcon' />
              Transactions
            </li>
          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyle className='sidebarListIcon' />
              Home
            </li>

            <li className='sidebarListItem'>
              <Timeline className='sidebarListIcon' />
              Analytics
            </li>

            <li className='sidebarListItem'>
              <TrendingUp className='sidebarListIcon' />
              Sales
            </li>
          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyle className='sidebarListIcon' />
              Home
            </li>

            <li className='sidebarListItem'>
              <Timeline className='sidebarListIcon' />
              Analytics
            </li>

            <li className='sidebarListItem'>
              <TrendingUp className='sidebarListIcon' />
              Sales
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Sidebar