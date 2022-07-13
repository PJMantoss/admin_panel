import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './chart.css';

function Chart() {

    const data = [
        {
          name: 'Jan',
          'Active User': 4000,
        },
        {
            name: 'Feb',
            'Active User': 3000,
        },
        {
            name: 'Mar',
            'Active User': 2000,
          },
          {
              name: 'Apr',
              'Active User': 1200,
          },
          {
            name: 'May',
            'Active User': 1900,
          },
          {
              name: 'Jun',
              'Active User': 2200,
          },
          {
              name: 'Jul',
              'Active User': 3000,
            },
            {
                name: 'Aug',
                'Active User': 3500,
            },
            {
                name: 'Sep',
                'Active User': 4000,
                },
                {
                    name: 'Oct',
                    'Active User': 4000,
                },
                {
                    name: 'Nov',
                    'Active User': 3000,
                },
                {
                    name: 'Dec',
                    'Active User': 2000,
                },
      ];

  return (
    <div className='chart'>
        <h3 className='chartTitle'>User Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke='#5550bd' />
                <Line type='monotone' dataKey='Active User' stroke='#5550bd' />
                <Tooltip />
                <CartesianGrid stroke='#e0dfdf' strokeDasharray='4 4' />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart;