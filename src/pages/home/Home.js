import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummyData';
import './home.css';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';

function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart data={userData} title='User Analytics' dataKey='Active User' grid />
        <div className='homeWidgets'>
            <WidgetSm />
            <WidgetLg />
        </div>
    </div>
  )
}

export default Home;