import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummyData';
import './home.css';

function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart data={userData} title='User Analytics' dataKey='Active User' grid />
    </div>
  )
}

export default Home;