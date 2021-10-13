import { Button } from '@chakra-ui/button';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import { Flex } from '@chakra-ui/layout';
import { useNumberInput } from '@chakra-ui/number-input';
import React, { useEffect } from 'react';
import shallow from 'zustand/shallow';

import { useJobsStore } from '../../stores/use-jobs-store';

export default function Pagination() {
  const { fetchData, setPage, page } = useJobsStore(
    (state) => ({ setPage: state.setPage, fetchData: state.getJobs, page: state.page }),
    shallow,
  );

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    valueAsNumber,
  } = useNumberInput({
    step: 1,
    defaultValue: page,
    min: 1,
    max: 15,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  useEffect(() => {
    setPage(valueAsNumber);
    fetchData();
  }, [valueAsNumber]);

  return (
    <Flex p="2" justify="center">
      <Button colorScheme="purple" {...dec}>
        <ArrowBackIcon />
      </Button>
      <Input textAlign="center" borderWidth="5" borderColor="black" w="30%" {...input} />
      <Button colorScheme="purple" {...inc}>
        <ArrowForwardIcon />
      </Button>
    </Flex>
  );
}
