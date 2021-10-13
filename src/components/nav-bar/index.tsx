import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Heading } from '@chakra-ui/layout';
import React from 'react';

import { useHomeStore } from '../../stores/use-home-store';
import LoginMenu from '../login-profile';

export default function NavBar() {
  const toggleDrawer = useHomeStore((state) => state.toggleDrawer);
  return (
    <Flex shadow="md" align="center" h="100%" justify="space-between">
      <Heading p="4" size="lg">
        GeoJobFinder
      </Heading>
      <Flex w="24" direction="row" align="center" justify="space-between" mr="2">
        <LoginMenu />
        <HamburgerIcon w="30px" h="30px" onClick={toggleDrawer} />
      </Flex>
    </Flex>
  );
}
