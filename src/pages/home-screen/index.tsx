import { Box } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import shallow from 'zustand/shallow';

import NavBar from '../../components/nav-bar';
import MapContainer from '../../containers/map-container';
import { useJobsStore } from '../../stores/use-jobs-store';
import { useUserStore } from '../../stores/use-user-store';

export default function HomeScreen() {
  const { fetchData, jobsList } = useJobsStore(
    (state) => ({ jobsList: state.jobs, fetchData: state.getJobs }),
    shallow,
  );
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  useEffect(() => {
    if (!isAuthenticated) return;
    fetchData();
  }, [fetchData, isAuthenticated]);

  return (
    <Box w="100%">
      <NavBar />
      <MapContainer jobsList={jobsList} />
    </Box>
  );
}
