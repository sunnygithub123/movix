import React from 'react';
import HeroBanner from './HeroBanner/HeroBanner';
import Tranding from './Tranding/Tranding';
import "./style.scss";
import Popular from './Popular/PopularBanner';
import Toprated from './Toprated/Toprated';

const Home = () => {
  return (
    <div className='App'>
        <HeroBanner/>
        <Tranding/>
        <Popular/>
        <Toprated/>
        
        <div style={{height:200}}></div>
        </div>
  )
}

export default Home