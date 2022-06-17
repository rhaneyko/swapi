import React from 'react';
import {  
      Container,
      LogoName,
      InputSearch,
     } from './styles'


const Navbar: React.FC = () => {
   return(
           <Container>
               <LogoName>Star Wars Universe</LogoName>

               <InputSearch
                placeholder='Pesquisar Personagens'
               />
         </Container>
    )
 }
 export default Navbar;
