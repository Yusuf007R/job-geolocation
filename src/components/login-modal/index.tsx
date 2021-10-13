import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { useUserStore } from '../../stores/use-user-store';

type propType = {
  onClose: () => void;
  isOpen: boolean;
};

export default function LoginModal({ onClose, isOpen }: propType) {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  const loginAction = useUserStore((state) => state.login);

  const handleOnChangeEmail = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({ ...prev, email: value }));
    if (error) setError(false);
  };

  const handleOnChangePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({ ...prev, password: value }));
    if (error) setError(false);
  };

  const handleOnLogin = async () => {
    const response = await loginAction(loginData);
    if (response) {
      return onClose();
    }
    setError(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign In</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={error}>
            <FormLabel>Email address</FormLabel>
            <Input onChange={handleOnChangeEmail} value={loginData.email} type="email" />
            <FormLabel>Password</FormLabel>
            <Input
              onChange={handleOnChangePassword}
              value={loginData.password}
              type="password"
            />
            <FormErrorMessage>There has been and error </FormErrorMessage>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleOnLogin} colorScheme="purple" mr={3}>
            Login
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
