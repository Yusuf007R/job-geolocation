import { create } from 'apisauce';

import { baseURL } from '../config';

export const request = create({
  baseURL: baseURL,
  timeout: 1500,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token: string) => {
  request.setHeader('Authorization', `Bearer ${token}`);
};
