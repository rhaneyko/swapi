import React, {useEffect, useRef, useState} from 'react'

import episode_1 from '../../assets/episode_1.jpg'

import movies from '../../assets/data/movies.json'

import {
   Container,
   Card,
   ActorName, 
   DescriptionMovie,
   BirthDate,
   Height,
  } from './styles'

const CardMovie = () => {
    return(
        <Container>
            <Card>
                <ActorName>Nome Autor</ActorName>
                <DescriptionMovie>
                    <BirthDate>
                      Data de Nascimento
                    </BirthDate>
                    <Height>
                      Altura
                      </Height>
                </DescriptionMovie>
            </Card>
        </Container>
    )
}

export default CardMovie;
