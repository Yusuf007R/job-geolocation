import { Coords } from 'google-map-react';
import create from 'zustand';

type storeType = {
  mapCenter: Coords;
  currentOpenPopup: number | null;
  setMapCenter: (coords: Coords) => void;
  setCurrentOpenPopup: (id: number | null) => void;
};

export const useHomeStore = create<storeType>((set) => ({
  mapCenter: { lat: 0, lng: 0 },
  currentOpenPopup: null,
  setMapCenter: (coords) => {
    set({ mapCenter: coords });
  },
  setCurrentOpenPopup: (id) => {
    set({ currentOpenPopup: id });
  },
}));
