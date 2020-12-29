export const initialState = { 
  counter: 12,
  a: {
    very: {
      deep: {
        value: 'oh boy!'
      }
    }
  }
};

export type State = typeof initialState;
