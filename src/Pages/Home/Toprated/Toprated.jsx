import React,{useState} from 'react'
import ContentWrapper from '../../../Components/contentWrapper/contentWrapper';
import SwitchTabs from '../../../Components/SwitchTabs/SwitchTabs';
import useFetch from '../../../Hooks/Usefetch';
import Carousel from '../../../Components/Carousel/Carousel';

const Toprated = () => {
  const[endpoint,setEndpoint]=useState("movie");
  const {data,loading}=useFetch(`/${endpoint}/top_rated`);
  const onTabChange=(tab)=>{
    setEndpoint(tab==="Movies" ? "movie":"tv");
  }

  return (
    <div className='carouselSelection'>
    <ContentWrapper>
    <span className='carouselTitle'>Top Rated</span>
    <SwitchTabs  data={["Movies","Tv Shows"]}  onTabChange={onTabChange}/>
    
    </ContentWrapper>   
    <Carousel data={data ?.results}loading={loading} endpoint={endpoint}/>     
        </div>
  )
}

export default Toprated