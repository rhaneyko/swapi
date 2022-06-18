import React, {useEffect, useRef, useState} from 'react'

import characters from '../../assets/data/characters.json'

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
                      <p></p>
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
