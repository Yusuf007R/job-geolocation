import { Button } from '@chakra-ui/button';
import { Badge, Flex } from '@chakra-ui/layout';
import { Td, Tr } from '@chakra-ui/table';
import React from 'react';

import { jobItem } from '../../services/dto';
import { useHomeStore } from '../../stores/use-home-store';

export default function TableItem({ id, status, title, latitude, longitude }: jobItem) {
  const setMapCenter = useHomeStore((state) => state.setMapCenter);
  const statusColor = (() => {
    if (status == 'complete') return 'green';
    if (status == 'pending') return 'yellow';
    return 'blue';
  })();
  const handleClick = () => {
    setMapCenter({ lat: Number.parseInt(latitude), lng: Number.parseInt(longitude) });
  };
  return (
    <Tr h="5vh">
      <Td>{id}</Td>
      <Td>{title}</Td>
      <Td isNumeric>
        <Badge colorScheme={statusColor}>{status}</Badge>
      </Td>
      <Td isNumeric>
        <Flex justify="center">
          <Button onClick={handleClick} size="sm">
            Click me!
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
}
