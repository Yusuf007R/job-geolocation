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

export default function ProfilePopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Box role="button" tabIndex={0}>
          <Avatar name="Sasuke Uchiha" />
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
            <Avatar name="Sasuke Uchiha" size="xl" />
            <Text fontWeight="bold" fontSize="xl">
              Sasuke Uchiha
            </Text>
            <Text>test@test.com</Text>
          </Flex>
        </PopoverBody>
        <PopoverFooter>
          <Flex>
            <Spacer />
            <ButtonGroup size="md">
              <Button colorScheme="purple">Edit Profile</Button>
              <Button colorScheme="red">Log out</Button>
            </ButtonGroup>
          </Flex>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
