const initialTime = 10;

export const createTimerSlice = (set, get) => ({
  time: initialTime,
  timerInterval: null,
  startTime: () => {
    get().resetTimer();
    const interval = setInterval(() => {
      if (get().time > 0) set((state) => ({ time: state.time - 1 }));
      else {
        get().stopTimer();
        const successfulAnswer = get().successfulAnswer;
        get().setAnswerSelected(successfulAnswer);
        get().substractLife();
      }
    }, 1000);

    set({ timerInterval: interval });
  },
  stopTimer: () => {
    clearInterval(get().timerInterval);
    set({ timerInterval: null });
  },
  resetTimer: () => {
    set({ time: initialTime });
  },
});
