import React,{useState} from 'react'
import ContentWrapper from '../../../Components/contentWrapper/contentWrapper';
import SwitchTabs from '../../../Components/SwitchTabs/SwitchTabs';
import useFetch from '../../../Hooks/Usefetch';
import Carousel from '../../../Components/Carousel/Carousel';

const Tranding = () => {
  const[endpoint,setEndpoint]=useState("day");

  const {data,loading}=useFetch(`/trending/all/${endpoint}`);

  const onTabChange=(tab)=>{
    setEndpoint(tab==="Day" ? "day":"week");
  }

  return (
    <div className='carouselSelection'>
    <ContentWrapper>
    <span className='carouselTitle'>Tranding</span>
    <SwitchTabs  data={["Day","Week"]}  onTabChange={onTabChange}/>
    
    </ContentWrapper>   
    <Carousel data={data ?.results}loading={loading}/>     
        </div>
  )
}

export default Tranding