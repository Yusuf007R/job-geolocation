import { ChakraProvider } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import HomeScreen from './pages/home-screen';
import { useUserStore } from './stores/use-user-store';

function App() {
  const { accessToken, setAuth } = useUserStore((state) => ({
    accessToken: state.accessToken,
    setAuth: state.setAuth,
  }));

  useEffect(() => {
    setAuth();
  }, [accessToken]);

  return (
    <ChakraProvider>
      <HomeScreen />
    </ChakraProvider>
  );
}

export default App;
