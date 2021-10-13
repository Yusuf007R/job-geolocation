import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { api } from '../services';
import { loginResponseType, loginType, userInformationType } from '../services/dto';
import { request } from '../utils/request';

type storeType = {
  user: userInformationType | null;
  login: (data: loginType) => Promise<loginResponseType | null>;
  accessToken: string | null;
  getUserInfo: () => void;
  logout: () => void;
};

export const useUserStore = create<storeType>(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        accessToken: null,
        login: async (data) => {
          const { getUserInfo } = get();
          const response = await api.login(data);
          if (response) {
            set({ accessToken: response.access_token });
            getUserInfo();
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
          set({ accessToken: null, user: null });
          request.deleteHeader('Authorization');
        },
      }),
      {
        name: 'user-store',
      },
    ),
  ),
);

useUserStore.subscribe((state) => {
  if (state.accessToken)
    return request.setHeader('Authorization', `Bearer ${state.accessToken}`);
});
