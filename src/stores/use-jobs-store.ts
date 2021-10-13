import create from 'zustand';

import { api } from '../services';
import { jobItem } from '../services/dto';

type storeType = {
  jobs: jobItem[];
  page: number;
  getJobs: () => void;
  setPage: (page: number) => void;
};

export const useJobsStore = create<storeType>((set, get) => ({
  jobs: [],
  page: 1,
  getJobs: async () => {
    const page = get().page;
    const response = await api.getJobs(page);
    if (response) {
      set({ jobs: response.data });
    }
  },
  setPage: (page) => {
    set({ page: page });
  },
}));
