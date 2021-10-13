import { Center, Heading, Text } from '@chakra-ui/layout';
import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/table';
import React, { Fragment } from 'react';

import { jobItem } from '../../services/dto';
import { useUserStore } from '../../stores/use-user-store';
import TableItem from '../table-item';

type propType = {
  jobList: jobItem[];
};

export default function JobTable({ jobList }: propType) {
  const user = useUserStore((state) => state.user);

  return (
    <Fragment>
      {user ? (
        <Table size="sm">
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
      ) : (
        <Center mt="20">
          <Text fontSize="xl" fontWeight="semibold">
            You Need To Login First
          </Text>
        </Center>
      )}
    </Fragment>
  );
}
