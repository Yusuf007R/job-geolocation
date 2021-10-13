import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { api } from '../services';
import { loginResponseType, loginType, userInformationType } from '../services/dto';
import { request, setAuthToken } from '../utils/request';

type storeType = {
  user: userInformationType | null;
  login: (data: loginType) => Promise<loginResponseType | null>;
  accessToken: string | null;
  getUserInfo: () => void;
  logout: () => void;
  isAuthenticated: boolean;
  setAuth: () => void;
};

export const useUserStore = create<storeType>(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        accessToken: null,
        isAuthenticated: false,
        login: async (data) => {
          const response = await api.login(data);
          if (response) {
            set({ accessToken: response.access_token });
          }
          return response;
        },
        getUserInfo: async () => {
          const response = await api.getUserInfo();
          if (response) {
            set({ user: response });
          }
        },
        logout: () => {
          set({ accessToken: null, user: null, isAuthenticated: false });
          request.deleteHeader('Authorization');
        },
        setAuth: () => {
          const { accessToken, getUserInfo } = get();
          if (!accessToken) return;
          setAuthToken(accessToken);
          set({ isAuthenticated: true });
          getUserInfo();
        },
      }),
      {
        name: 'user-store',
        partialize: (state) => ({ accessToken: state.accessToken, user: state.user }),
      },
    ),
  ),
);
