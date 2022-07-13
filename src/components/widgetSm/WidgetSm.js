import React from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import './widgetSm.css';

function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className='widgetSmTitle'>New Members</span>
        <ul className='widgetSmList'>
            <li className='widgetSmListItem'>
                <img src='https://i.ibb.co/PDtNL1P/black-business-woman.png' alt='user' className='widgetSmImg' />
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Mimi Mugana</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className='widgetSmButton'>
                    <VisibilityOutlinedIcon />
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm;