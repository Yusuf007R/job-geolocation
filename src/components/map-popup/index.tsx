import { CloseButton } from '@chakra-ui/close-button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useBoolean } from '@chakra-ui/hooks';
import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Text } from '@chakra-ui/layout';
import React, { Fragment, useEffect } from 'react';
import shallow from 'zustand/shallow';

import { ReactComponent as Logo } from '../../assets/marker-icon.svg';
import { jobItem } from '../../services/dto';
import { useHomeStore } from '../../stores/use-home-store';

type propType = {
  lat: number;
  lng: number;
} & jobItem;

export default function MapPopUp({
  image,
  title,
  description,
  assigned_to,
  lat,
  lng,
  id,
  date: rawDate,
}: propType) {
  const [isOpen, handleOpen] = useBoolean();
  const { mapCenter, currentOpenPopup, setCurrentOpenPopup } = useHomeStore(
    (state) => ({
      mapCenter: state.mapCenter,
      currentOpenPopup: state.currentOpenPopup,
      setCurrentOpenPopup: state.setCurrentOpenPopup,
    }),
    shallow,
  );

  const date = (() => {
    const dateObj = new Date(rawDate);
    return `${dateObj.getDate()}-${dateObj.getMonth()}-${dateObj.getFullYear()}`;
  })();
  useEffect(() => {
    if (currentOpenPopup != id) handleOpen.off();
  }, [currentOpenPopup]);

  useEffect(() => {
    if (mapCenter.lat == lat && mapCenter.lng == lng) setTimeout(handleOpenClick, 200);
  }, [mapCenter]);

  const handleOpenClick = () => {
    setCurrentOpenPopup(id);
    handleOpen.on();
  };

  const handleCloseClick = () => {
    setCurrentOpenPopup(null);
    handleOpen.off();
  };

  const bg = useColorModeValue('white', 'black');
  return (
    <Fragment>
      {isOpen ? (
        <Box bg={bg} w="250px" rounded="lg">
          <Flex justify="flex-end" p="0">
            <CloseButton size="sm" onClick={handleCloseClick} />
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
                Assigned to:
              </Text>
              <Text> {assigned_to}</Text>
            </Flex>
            <Flex justify="end" pt="2">
              <Text>{date}</Text>
            </Flex>
          </Box>
        </Box>
      ) : (
        <Box _hover={{ cursor: 'pointer' }} onClick={handleOpenClick}>
          <Logo fill="red" width="30px" />
        </Box>
      )}
    </Fragment>
  );
}
