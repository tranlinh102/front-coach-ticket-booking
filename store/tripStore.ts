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
  trips: Trip[];
  setTrips: (trips: Trip[]) => void;
}

export const useTripStore = create<TripStore>((set) => ({
  trips: [],
  setTrips: (trips) => set({ trips }),
}));
