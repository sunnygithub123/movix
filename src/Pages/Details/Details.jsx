import React from 'react';
import "./style.scss"
import {useParams} from "react-router-dom";
import useFetch from '../../Hooks/Usefetch';
import DetailPage from './DetailPage/DetailPage';
import Cast from './Cast/Cast';
import VideosSection from './VideosSection/VideosSection';
import Recommendation from './carousels/Recommendation';
import Similar from './carousels/Similar';

const Details = () => {
  const {mediaType,id} =useParams();
  const {data,loading}=useFetch(`/${mediaType}/${id}/videos`);
  const {data:credits,loading:creditsLoading}=useFetch(`/${mediaType}/${id}/credits`)
  return (
    <div>
      <DetailPage video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id} />

    </div>
  )
}

export default Details




