import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import HomeScreen from './pages/home-screen';
import { useUserStore } from './stores/use-user-store';
import theme from './theme';

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
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <HomeScreen />
    </ChakraProvider>
  );
}

export default App;
