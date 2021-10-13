import create from 'zustand';

import { api } from '../services';
import { jobItem } from '../services/dto';

type storeType = {
  jobs: jobItem[];
  page: number;
  getJobs: () => void;
};

export const useJobsStore = create<storeType>((set) => ({
  jobs: [],
  page: 1,
  getJobs: async () => {
    const response = await api.getJobs();
    if (response) {
      set({ jobs: response.data });
    }
  },
}));
