import { Coords } from 'google-map-react';
import create from 'zustand';

type storeType = {
  mapCenter: Coords;
  currentOpenPopup: number | null;
  setMapCenter: (coords: Coords) => void;
  setCurrentOpenPopup: (id: number | null) => void;
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
};

export const useHomeStore = create<storeType>((set, get) => ({
  mapCenter: { lat: 0, lng: 0 },
  currentOpenPopup: null,
  isDrawerOpen: false,
  setMapCenter: (coords) => {
    set({ mapCenter: coords });
  },
  setCurrentOpenPopup: (id) => {
    set({ currentOpenPopup: id });
  },
  toggleDrawer: () => {
    const isDrawerOpen = get().isDrawerOpen;
    set({ isDrawerOpen: !isDrawerOpen });
  },
}));
