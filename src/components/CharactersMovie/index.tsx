import React, {Component, useEffect, useRef, useState} from 'react'



import {
   Container,
   CardCharacters,
   ActorName, 
   DescriptionMovie,
   BirthDate,
   Height,
  } from './styles'

// interface CharacterProps{
//     name: string,
//     height: number,
//     mass: number,
//     hair_color: string,
//     skin_color: string,
//     eye_color: string,
//     birth_year: string,
//     gender: string,
//     homeworld: string,
//     films: string,
// }

class CardMovie extends Component {
    state = {
        peoples: [],
    }
    
    render(){
        const {peoples} = this.state
    return(
        <Container>
            {/* <Card>
                <ActorName>
                    <p>{characters.results[1].name}</p>
                    </ActorName>
                <DescriptionMovie>
                    <BirthDate>
                      Data de Nascimento
                      <p>{characters.results[1].birth_year}</p>
                    </BirthDate>
                    <Height>
                      Altura
                        <p>{characters.results[1].height} cm</p>
                      </Height>
                </DescriptionMovie>
            </Card> */}
            {/* <div>
                {peoples.map(people => (
                    <Card key={people.results.name}>
                        <ActorName>
                            <p>{people.results.name}</p>
                        </ActorName>
                        <DescriptionMovie>
                            <BirthDate>
                                Data de Nascimento
                                <p>{people.results.birth_year}</p>
                            </BirthDate>
                            <Height>
                                Altura
                                <p>{people.results.height} cm</p>
                            </Height>
                        </DescriptionMovie>
                    </Card>
                ))}
            </div> */}
        </Container>
    )
}
}

export default CardMovie;
