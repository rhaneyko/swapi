import {
   Container, 
   Wrapper,
   } from './styles'

import HomePage from '../../Pages/HomePage';



const Layout = () => {
  return (
     <>
    <Container>
        <Wrapper>
          <HomePage/>
        </Wrapper>  
    </Container>
     </>
    );
}

export default Layout;

