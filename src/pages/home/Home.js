import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import './home.css';

function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart />
    </div>
  )
}

export default Home;