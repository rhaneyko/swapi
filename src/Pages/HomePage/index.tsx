import { useEffect, useState } from 'react'

import { 
   Container,
   Title,
   HeaderMovies,
   CardsMovie,
   CardMovie,
   ImageMovie,
   MovieName,
   DescriptionMovie,
   ReleaseDate,
   Producer,
   Line,
   HeaderCharacters,
   CardsCharacters,
   CardCharacters,
   ActorName, 
   DescriptionCharacters,
   BirthDate,
   Height,
     } from './styles'

import episode_1 from '../../assets/img/episode_1.jpg'
import episode_2 from '../../assets/img/episode_2.webp'
import episode_3 from '../../assets/img/episode_3.jpg'
import episode_4 from '../../assets/img/episode_4.webp'
import episode_5 from '../../assets/img/episode_5.jpg'
import episode_6 from '../../assets/img/episode_6.jpg'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
const HomePage = () => {
  const [ movies, setMovies ] = useState<any[]>([]);
  const [ characters, setCharacters ] = useState<any[]>([]);
  useEffect(function(){
    fetch('https://swapi.dev/api/films/')
    .then(filmsResponse => filmsResponse.json())
    .then(completeFilmsResponse => {
      setMovies(completeFilmsResponse.results)
    })
  })

  useEffect(function(){
    fetch('https://swapi.dev/api/people/')
    .then(peopleResponse => peopleResponse.json())
    .then(completePeopleResponse => {

      setCharacters(completePeopleResponse.results)
    })
})

  return (
    <Container>
        <HeaderMovies>
          <Line/>
           <Title>Movies</Title>
          <Line/>
        </HeaderMovies>
        
        <CardsMovie>
          {movies.map(movie => (
            <CardMovie key={movie.episode_id}>
              <ImageMovie src={movie.episode_id === 1 ? episode_1 : movie.episode_id === 2 ? episode_2 : movie.episode_id === 3 ? episode_3 : movie.episode_id === 4 ? episode_4 : movie.episode_id === 5 ? episode_5 : movie.episode_id === 6 ? episode_6 : ''} alt={movie.title}/>
              <MovieName>{movie.title}</MovieName>
              <DescriptionMovie>
                <p>
                <ReleaseDate>Data de lançamento</ReleaseDate> {movie.release_date}<br />
                <Producer>Diretor</Producer> {movie.director}<br />
                </p>
              </DescriptionMovie>
              </CardMovie>
          ))}
        </CardsMovie> 
        {/* <HeaderCharacters>
          <Line/>
           <Title>Characters</Title>
          <Line/>
        </HeaderCharacters>

          <CardsCharacters>
            
            {characters.map(character => (
              <CardCharacters key={character.name}>
                <ActorName>{character.name}</ActorName>
                <DescriptionCharacters>
                  <p>
                  <BirthDate>Data de nascimento</BirthDate> {character.birth_year}<br />
                  <Height>Altura</Height> {character.height}<br />
                  </p>
                </DescriptionCharacters>
              </CardCharacters>
            ))}
          </CardsCharacters>
         */}
    </Container> 
  )
}
export default HomePage;
