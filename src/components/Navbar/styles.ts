import styled from 'styled-components';

export const Container = styled.header`
   display: flex;

   width: 100vw;
   height: 7vh;

   justify-content: space-between;
   align-items: center;

   background-color: #000;

   @media (max-width: 768px) {
      width: 100%;
      height: 7vh;

   }
`;

export const LogoName = styled.h1`
   margin-left: 169px;
   color: #FFF;

   @media (max-width: 768px) {
      margin-left: 0;

      font-size: 20px;
   }
`;

export const InputSearch = styled.input`
   width: 288px;
   height: 29px;

   margin-right: 169px;
   padding-left: 101px;
   padding-right: 0;

   border-radius: 4px;
   border: 1px solid #000;

   font-size: 14px;
   line-height: 18.37px;
   color: #818181;

   @media (max-width: 768px) {
      width: 188px;
      height: 20px;

      margin: 0;
      padding-left: 10px;
      padding-right: 0;
   }
`;


