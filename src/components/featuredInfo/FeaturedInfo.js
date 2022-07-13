import React from 'react';
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material';
import './featuredInfo.css';

function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className='featuredTitle'>Revenue</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$2,540</span>
                <span className='featuredMoneyRate'>
                    -12.58
                    <ArrowDownwardOutlined />
                </span>
            </div>
            <span className='featuredSubCat'>
                Compared to last month
            </span>
        </div>

        <div className='featuredItem'>
            <span className='featuredTitle'>Sales</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$4,540</span>
                <span className='featuredMoneyRate'>
                    -10.58
                    <ArrowDownwardOutlined />
                </span>
            </div>
            <span className='featuredSubCat'>
                Compared to last month
            </span>
        </div>

        <div className='featuredItem'>
            <span className='featuredTitle'>Cost</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$2,140</span>
                <span className='featuredMoneyRate'>
                    10.58
                    <ArrowUpwardOutlined />
                </span>
            </div>
            <span className='featuredSubCat'>
                Compared to last month
            </span>
        </div>

    </div>
  )
}

export default FeaturedInfo;