// store/tripStore.ts
import { create } from "zustand";

interface Trip {
    id: number,
    startTime: string,
    endTime: string,
    from: string,
    to: string,
    duration: string,
    type: string,
    available: number,
    price: string,
}

interface TripStore {
  selectedTrip: Trip | null;
  setSelectedTrip: (trip: Trip) => void;
}

export const useTripStore = create<TripStore>((set) => ({
  selectedTrip: null,
  setSelectedTrip: (trip) => set({ selectedTrip: trip }),
}));
