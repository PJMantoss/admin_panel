import React from 'react';
import { 
  LineStyle, 
  Timeline, 
  TrendingUp,
  PersonOutline, 
  Inventory2Outlined,
  ReceiptLong,
  AssessmentOutlined
} from '@mui/icons-material';

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
              <PersonOutline className='sidebarListIcon' />
              Users
            </li>

            <li className='sidebarListItem'>
              <Inventory2Outlined className='sidebarListIcon' />
              Products
            </li>

            <li className='sidebarListItem'>
              <ReceiptLong className='sidebarListIcon' />
              Transactions
            </li>

            <li className='sidebarListItem'>
              <AssessmentOutlined className='sidebarListIcon' />
              Reports
            </li>
          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyle className='sidebarListIcon' />
              Mail
            </li>

            <li className='sidebarListItem'>
              <Timeline className='sidebarListIcon' />
              Feedback
            </li>

            <li className='sidebarListItem'>
              <TrendingUp className='sidebarListIcon' />
              Messages
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