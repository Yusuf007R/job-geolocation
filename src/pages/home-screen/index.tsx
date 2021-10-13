import { Box, Flex } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import shallow from 'zustand/shallow';

import JobTable from '../../components/job-table';
import NavBar from '../../components/nav-bar';
import { ThemeToggler } from '../../components/theme-toggler';
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
      <Flex bottom="10" zIndex="10" w="40px" h="40px" pos="absolute">
        <ThemeToggler />
      </Flex>
      <Box h="8%">
        <NavBar />
      </Box>
      <Flex h="92%">
        <JobTable jobList={jobList} />
        <Box w="full" h="full">
          <MapContainer jobsList={jobList} />
        </Box>
      </Flex>
    </Box>
  );
}
