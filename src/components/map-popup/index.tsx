import { CloseButton } from '@chakra-ui/close-button';
import { useBoolean } from '@chakra-ui/hooks';
import { Image } from '@chakra-ui/image';
import { Badge, Box, Center, Flex, Text } from '@chakra-ui/layout';
import React, { Fragment } from 'react';

import { ReactComponent as Logo } from '../../assets/marker-icon.svg';
import { jobItem } from '../../services/dto';

type propType = {
  lat: number;
  lng: number;
} & jobItem;

export default function MapPopUp({ image, title, description, status }: propType) {
  const [isOpen, handleOpen] = useBoolean();

  const statusColor = (() => {
    if (status == 'complete') return 'green';
    if (status == 'pending') return 'yellow';
    return 'blue';
  })();

  return (
    <Fragment>
      {isOpen ? (
        <Box w="200px" bg="white" rounded="lg">
          <Flex justify="flex-end" p="0">
            <CloseButton size="sm" onClick={handleOpen.off} />
          </Flex>
          <Box direction="column" p="4" pt="0">
            <Center>
              <Image w="100%" src={image} alt={title} />
            </Center>
            <Flex my="2">
              <Text pr="2" fontWeight="bold">
                Title:
              </Text>
              <Text> {title}</Text>
            </Flex>
            <Flex>
              <Text pr="2" fontWeight="bold">
                Desc:
              </Text>
              <Text> {description}</Text>
            </Flex>
            <Flex pt="2">
              <Text pr="2" fontWeight="bold">
                Status:
              </Text>
              <Badge colorScheme={statusColor}>{status}</Badge>
            </Flex>
          </Box>
        </Box>
      ) : (
        <Box _hover={{ cursor: 'pointer' }} onClick={handleOpen.on}>
          <Logo fill="red" width="30px" />
        </Box>
      )}
    </Fragment>
  );
}
