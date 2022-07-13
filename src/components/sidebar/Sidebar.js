import React from 'react';
import { 
  LineStyle, 
  Timeline, 
  TrendingUp,
  PersonOutline, 
  Inventory2Outlined,
  ReceiptLong,
  AssessmentOutlined,
  EmailOutlined,
  ChatOutlined,
  RateReviewOutlined,
  ManageAccountsOutlined,
  HourglassTopOutlined,
  SummarizeOutlined 
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
              <EmailOutlined className='sidebarListIcon' />
              Mail
            </li>

            <li className='sidebarListItem'>
              <ChatOutlined className='sidebarListIcon' />
              Feedback
            </li>

            <li className='sidebarListItem'>
              <RateReviewOutlined className='sidebarListIcon' />
              Reviews
            </li>
          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <ManageAccountsOutlined className='sidebarListIcon' />
              Accounts
            </li>

            <li className='sidebarListItem'>
              <HourglassTopOutlined className='sidebarListIcon' />
              Work Hours
            </li>

            <li className='sidebarListItem'>
              <SummarizeOutlined className='sidebarListIcon' />
              Activities
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Sidebar