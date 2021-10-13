import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import HomeScreen from './pages/home-screen';

function App() {
  return (
    <ChakraProvider>
      <HomeScreen />
    </ChakraProvider>
  );
}

export default App;
