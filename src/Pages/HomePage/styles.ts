import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'
export const Container = styled.div`
   width: 100%;
   height: 93vh;
   background-color: white;

   align-items: center;

   @media (max-width: 768px) {
      width: 100%;
   }
`;

export const HeaderMovies = styled.div`
   display: flex;
   flex-direction: row;

   justify-content: center;
   align-items: center;

   margin-top: 31px;
`;

export const Line = styled.div`
   width: 500px;
   height: 1px;

   margin: 15px;


   background-color: #000;
`;


export const Title = styled.p`
   font-size: 24px;
   font-weight: 600;
`;

export const CarouselSlide = styled(Carousel)`
   
`;

export const HeaderCharacters = styled.div`
   display: flex;
   flex-direction: row;

   justify-content: center;
   align-items: center;

   margin-top: 31px;
   margin-bottom: 24px;
`;

