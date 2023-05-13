const initialLifes = 3;
const initialHits = 0;

export const createGameStateSlice = (set, get) => ({
  lifes: initialLifes,
  hits: initialHits,
  finished: false,
  substractLife: () => set((state) => ({ lifes: state.lifes - 1 })),
  addHit: () => set((state) => ({ hits: state.hits + 1 })),
  finishGame: () => set({ finished: true }),
  resetGameState: () => {
    get().stopTimer();
    get().resetTimer();
    set({
      lifes: initialLifes,
      hits: initialHits,
      finished: false,
    });
  },
});
