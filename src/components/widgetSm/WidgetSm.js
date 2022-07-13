import React from 'react';
import './widgetSm.css';

function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className='widgetSmTitle'>New Members</span>
        <ul className='widgetSmList'>
            <li className='widgetSmListItem'>
                <img src='' alt='' className='widgetSmImg' />
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'></span>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm;