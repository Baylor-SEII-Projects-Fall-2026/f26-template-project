import { create } from "zustand";

interface GlobalCounterState {
  // State
  count: number;

  // Actions
  addToCounter: (value: number) => void;
}

export const useGlobalCounter = create<GlobalCounterState>((set) => ({
  // State
  count: 0,

  // Actions - use the set() function to update state
  addToCounter: (value) => set((state) => ({ count: state.count + value })),
}));
