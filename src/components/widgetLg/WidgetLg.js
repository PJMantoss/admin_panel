import React from 'react';
import './widgetLg.css';

function WidgetLg() {
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>
        Latest Transactions
      </h3>

      <table className='widgetLgTable'>
        <thead>
          <tr className='widgetLgTr'>
            <th className='widgetLgTh'>Customer</th>
            <th className='widgetLgTh'>Date</th>
            <th className='widgetLgTh'>Amount</th>
            <th className='widgetLgTh'>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img 
                src='https://i.ibb.co/3dsTK7L/head-png-1000.png' 
                alt='user' 
                className='widgetLgImg' 
              />
              <span className='widgetLgUsername'>Kanye West</span>
            </td>
            <td className='widgetLgDate'>7 Jul, 2022</td>
            <td className='widgetLgAmt'>$2000</td>
            <td className='widgetLgStatus'>
              <Button type='Approved' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLg;