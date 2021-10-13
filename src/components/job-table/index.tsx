import { Box, Center, Text } from '@chakra-ui/layout';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from '@chakra-ui/modal';
import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/table';
import React, { Fragment } from 'react';

import { jobItem } from '../../services/dto';
import { useHomeStore } from '../../stores/use-home-store';
import { useUserStore } from '../../stores/use-user-store';
import Pagination from '../pagination';
import TableItem from '../table-item';

type propType = {
  jobList: jobItem[];
};

export default function JobTable({ jobList }: propType) {
  const user = useUserStore((state) => state.user);

  const { onClose, isOpen } = useHomeStore((state) => ({
    isOpen: state.isDrawerOpen,
    onClose: state.toggleDrawer,
  }));

  return (
    <Fragment>
      <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
            Job List
          </DrawerHeader>
          <DrawerBody>
            {user ? (
              <Box>
                <Table size="xs">
                  <Thead>
                    <Tr>
                      <Th>ID</Th>
                      <Th>Title</Th>
                      <Th isNumeric>status</Th>
                      <Th>Show In Map</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {jobList.map((job) => (
                      <TableItem key={job.id} {...job} />
                    ))}
                  </Tbody>
                </Table>
              </Box>
            ) : (
              <Center mt="20">
                <Text fontSize="xl" fontWeight="semibold">
                  You Need To Login First
                </Text>
              </Center>
            )}
          </DrawerBody>
          <DrawerFooter>
            <Center w="full">
              <Pagination />
            </Center>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}
