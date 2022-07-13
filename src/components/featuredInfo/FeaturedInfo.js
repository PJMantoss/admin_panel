import React from 'react';
import { ArrowDownwardOutlined } from '@mui/icons-material';

function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className='featuredTitle'>Revenue</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$</span>
                <span className='featuredMoneyRate'>
                    -12.58
                    <ArrowDownwardOutlined />
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