import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: 93vh;
   background-color: white;

   justify-content: center;
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
`;

export const CardsMovie = styled.div`
    width: 100%;
`;

export const CardMovie = styled.div`
    width: 268px;
    height: 465px;

    margin-top: 30px;

    border: 1px solid rgba(207, 207, 207, 1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const ImageMovie = styled.img`
    width: 267px;
    height: 352px;
`;

export const MovieName = styled.p`
    height: 25px;
    
    font-size: 14px;
    color: #fff;
    
    padding: 5px;
    margin-top: -4px;
    margin-bottom: -8px;

    background-color: #FFC700;
`;

export const DescriptionMovie = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ReleaseDate = styled.p`
    font-size: 12px;
    color: #505050;
    
    margin-top: 15px;
    margin-left: 14px;
    margin-bottom: 10px;
`;
export const Producer = styled.p`
    font-size: 12px;
    color: #505050;

    margin-left: 14px;
    margin-bottom: 13px;
`;

export const HeaderCharacters = styled.div`
   display: flex;
   flex-direction: row;

   justify-content: center;
   align-items: center;

   margin-top: 31px;
   margin-bottom: 24px;
`;
export const CardsCharacters = styled.div`
    display: flex;
    flex-direction: row;

`;
export const CardCharacters = styled.div`
    width: 268px;
    height: 140px;

    margin-top: 30px;
    border: 1px solid rgba(207, 207, 207, 1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

`;



export const ActorName = styled.p`
    height: 25px;
    
    font-size: 14px;
    color: #fff;
    
    padding: 5px;
    margin-top: -4px;
    margin-bottom: -8px;

    background-color: #FFC700;
`;

export const DescriptionCharacters = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BirthDate = styled.p`
    font-size: 12px;
    color: #505050;
    
    margin-top: 15px;
    margin-left: 14px;
    margin-bottom: 10px;
`;
export const Height = styled.p`
    font-size: 12px;
    color: #505050;

    margin-left: 14px;
    margin-bottom: 13px;
`;

