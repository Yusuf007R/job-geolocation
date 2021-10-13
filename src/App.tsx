import { ChakraProvider } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import HomeScreen from './pages/home-screen';
import { useUserStore } from './stores/use-user-store';

function App() {
  const setAuth = useUserStore((state) => state.setAuth);

  useEffect(() => {
    setAuth();
  }, []);

  return (
    <ChakraProvider>
      <HomeScreen />
    </ChakraProvider>
  );
}

export default App;
