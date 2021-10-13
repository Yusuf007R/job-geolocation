import { Box, Flex } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import shallow from 'zustand/shallow';

import JobTable from '../../components/job-table';
import NavBar from '../../components/nav-bar';
import MapContainer from '../../containers/map-container';
import { useJobsStore } from '../../stores/use-jobs-store';
import { useUserStore } from '../../stores/use-user-store';
import userLocation from '../../utils/user-location';

export default function HomeScreen() {
  const { fetchData, jobList: jobList } = useJobsStore(
    (state) => ({ jobList: state.jobs, fetchData: state.getJobs }),
    shallow,
  );
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  useEffect(() => {
    userLocation();
    if (!isAuthenticated) return;
    fetchData();
  }, [fetchData, isAuthenticated]);

  return (
    <Box w="100%" h="100vh">
      <Box h="8%">
        <NavBar />
      </Box>
      <Flex h="92%">
        <Box w="20%">
          <JobTable jobList={jobList} />
        </Box>
        <Box w="80%" h="full">
          <MapContainer jobsList={jobList} />
        </Box>
      </Flex>
    </Box>
  );
}
