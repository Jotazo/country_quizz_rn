import { create } from "zustand";

import { createCountriesSlice } from "./countriesSlice";
import { createGameStateSlice } from "./gameStateSlice";
import { createTimerSlice } from "./timerSlice";

export const useBoundStore = create((...a) => ({
  ...createCountriesSlice(...a),
  ...createGameStateSlice(...a),
  ...createTimerSlice(...a),
}));
