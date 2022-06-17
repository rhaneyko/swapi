import { ThemeProvider } from 'styled-components';

//import dark from './styles/themes/dark';
import dark from './styles/themes/dark';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import Navbar from './components/Navbar';

 const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <Navbar/>
       <Layout/>
       <GlobalStyles/>
    </ThemeProvider>
    );
}

export default App;
