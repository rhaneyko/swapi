import React, { useEffect, useRef, useState } from 'react'
import CardMovie from '../../components/CardMovie';
import CharactersMovie from '../../components/CharactersMovie';

import Carousel from 'react-elastic-carousel'
import { 
   Container,
   Title,
   HeaderMovies,
   CarouselSlide,
   Line,
   HeaderCharacters,
     } from './styles'

import movies from '../../assets/data/movies.json';



const HomePage = () => {


  return (
    <Container>
        <HeaderMovies>
          <Line/>
           <Title>Movies</Title>
          <Line/>
        </HeaderMovies>
        <CarouselSlide>
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
        </CarouselSlide>
         
        <HeaderCharacters>
          <Line/>
           <Title>Characters</Title>
          <Line/>
        </HeaderCharacters>
        <CarouselSlide>
          <CharactersMovie/>
          <CharactersMovie/>
          <CharactersMovie/>
          <CharactersMovie/>
          <CharactersMovie/>
          <CharactersMovie/>
          <CharactersMovie/>
        </CarouselSlide>
        
    </Container> 
  )
}
export default HomePage;
