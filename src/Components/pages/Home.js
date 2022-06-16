import React from 'react'
import requests from '../../Requests'
import Main from '../main'
import Row from '../Row'
import { category, movieType, tvType } from '../../api/tmdbApi';
export const Home = () => {

  return (
    <>
      
        <Main></Main>
        
        <Row rowID='1' title="UpComing" fetchURL={requests.requestUpcoming} category={category.movie}></Row>
        <Row rowID='2' title="Populars" fetchURL={requests.requestPopular} category={category.movie}></Row>
        <Row rowID='3' title="TopRated" fetchURL={requests.requestTopRated} category={category.movie}></Row>
        <Row rowID='4' title="Trending" fetchURL={requests.requestTrending} category={category.movie}></Row>
        
    

    </>
  )
}

















/*
<iframe src='https://moviehungershaven.xyz/tplayer/npls1.php?id=414906'
        title='Tplayer' className="top-9" width="100%" height="700px">
        </iframe>
        */