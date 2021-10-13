import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export const ThemeToggler = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon width="100%" height="100%" color="black" />}
      aria-label={`Switch to ${text} mode`}
    />
  );
};
