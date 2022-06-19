import React, { useEffect, useState } from 'react' 
import { 
  Container, 
  Card, 
  ImageMovie, 
  MovieName,
  DescriptionMovie, 
  ReleaseDate,
  Producer,
} from './styles'

import episode_1 from '../../assets/img/episode_1.jpg'
import episode_2 from '../../assets/img/episode_2.webp'
import episode_3 from '../../assets/img/episode_3.jpg'
import episode_4 from '../../assets/img/episode_4.webp'
import episode_5 from '../../assets/img/episode_5.jpg'
import episode_6 from '../../assets/img/episode_6.jpg'


import {Carousel} from 'react-responsive-carousel'

export default function CardMovie() {
  const [ moviesSW, setMoviesSW ] = useState<any[]>([]);
  useEffect(function(){
    fetch('https://swapi.dev/api/films/')
    .then(filmsResponse => filmsResponse.json())
    .then(completeFilmsResponse => {
      setMoviesSW(completeFilmsResponse.results)
    })
  })
  return(
      <Container>
          {moviesSW.map(movie => (
            <Card key={movie.episode_id}>
              <ImageMovie src={movie.episode_id === 1 ? episode_1 : movie.episode_id === 2 ? episode_2 : movie.episode_id === 3 ? episode_3 : movie.episode_id === 4 ? episode_4 : movie.episode_id === 5 ? episode_5 : movie.episode_id === 6 ? episode_6 : ''} alt={movie.title}/>
              <MovieName>{movie.title}</MovieName>
              <DescriptionMovie>
                <p>
                <ReleaseDate>Data de lançamento</ReleaseDate> {movie.release_date}<br />
                <Producer>Diretor</Producer> {movie.director}<br />
                
                </p>
              </DescriptionMovie>
              </Card>
          ))}
      </Container>

  )
}