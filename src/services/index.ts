import { ApiResponse } from 'apisauce';

import { request } from '../utils/request';
import { jobsListType, loginResponseType, loginType, userInformationType } from './dto';

async function login(data: loginType): Promise<loginResponseType | null> {
  const response = await request.post<loginResponseType>(`/auth/login`, { ...data });
  return handleResponse<loginResponseType>(response);
}

async function getJobs(page: number): Promise<jobsListType | null> {
  const response = await request.get<jobsListType>(`/jobs?page=${page}`);
  return handleResponse<jobsListType>(response);
}

async function getUserInfo(): Promise<userInformationType | null> {
  const response = await request.get<userInformationType>(`/auth/me`);
  return handleResponse<userInformationType>(response);
}

function handleResponse<T>(response: ApiResponse<T, T>) {
  if (response.ok && response?.data) {
    return response.data;
  }
  return null;
}

export const api = { login, getJobs, getUserInfo };
