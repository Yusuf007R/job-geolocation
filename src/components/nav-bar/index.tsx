import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout';
import React from 'react';

import { useUserStore } from '../../stores/use-user-store';
import LoginModal from '../login-modal';
import ProfilePopover from '../profile-popover';

export default function NavBar() {
  const user = useUserStore((state) => state.user);
  const { onClose, onOpen, isOpen } = useDisclosure();
  return (
    <Flex shadow="md" align="center">
      <LoginModal isOpen={isOpen} onClose={onClose} />
      <Heading p="4" size="lg">
        GeoJobFinder
      </Heading>
      <Spacer />
      <Box mr="3">
        {user ? (
          <ProfilePopover />
        ) : (
          <Button onClick={onOpen} colorScheme="purple">
            Log in
          </Button>
        )}
      </Box>
    </Flex>
  );
}
