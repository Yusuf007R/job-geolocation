import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box } from '@chakra-ui/layout';
import React from 'react';

import { useUserStore } from '../../stores/use-user-store';
import LoginModal from '../login-modal';
import ProfilePopover from '../profile-popover';

export default function LoginMenu() {
  const user = useUserStore((state) => state.user);
  const { onClose, onOpen, isOpen } = useDisclosure();
  return (
    <Box>
      <LoginModal isOpen={isOpen} onClose={onClose} />
      {user ? (
        <ProfilePopover />
      ) : (
        <Button onClick={onOpen} colorScheme="purple">
          Log in
        </Button>
      )}
    </Box>
  );
}
