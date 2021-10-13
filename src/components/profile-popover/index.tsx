import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/popover';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  PopoverFooter,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import shallow from 'zustand/shallow';

import { useUserStore } from '../../stores/use-user-store';

export default function ProfilePopover() {
  const { user, logout } = useUserStore(
    (state) => ({ user: state.user, logout: state.logout }),
    shallow,
  );
  return (
    // eslint-disable-next-line jsx-a11y/no-autofocus
    <Popover autoFocus={false}>
      <PopoverTrigger>
        <Box role="button" tabIndex={0}>
          <Avatar name={user?.name} />
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Center>
            <Text fontWeight="bold" fontSize="xl">
              User Information
            </Text>
          </Center>
        </PopoverHeader>
        <PopoverBody p="5">
          <Flex direction="column" justify="center" align="center">
            <Avatar name={user?.name} size="xl" />
            <Text fontWeight="bold" fontSize="xl">
              {user?.name}
            </Text>
            <Text>{user?.email}</Text>
          </Flex>
        </PopoverBody>
        <PopoverFooter>
          <Flex>
            <Spacer />
            <ButtonGroup size="md">
              <Button onClick={logout} colorScheme="red">
                Log out
              </Button>
            </ButtonGroup>
          </Flex>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
