import episode_1 from '../../assets/img/episode_1.jpg'

import movies from '../../assets/data/movies.json'

import {
   Container,
   Card,
   ImageMovie, 
   MovieName, 
   DescriptionMovie,
   ReleaseDate,
   Producer,
  } from './styles'

const CardMovie = () => {
    return(
        <Container>
            <Card>
                <ImageMovie src={episode_1}/>
                <MovieName>
                    {movies.results[0].title}
                </MovieName>
                <DescriptionMovie>
                    <ReleaseDate>
                      Data de Lançamento
                      <p>{movies.results[0].release_date}</p>
                    </ReleaseDate>
                    <Producer>
                      Diretor
                      <p>{movies.results[0].producer}</p>
                      </Producer>
                </DescriptionMovie>
            </Card>
        </Container>
    )
}

export default CardMovie;
