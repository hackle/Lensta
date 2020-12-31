import { lens } from "./lens";
import { State } from "./state";
import { SetState } from "./stateProvider";

export const appIOFactory = (setState: SetState<State>) => ({
    setCounter: (c: number) => setState(prev => lens.counter.set(prev, c)),
    increase: () => setState(prev => lens.counter.over(prev, c => c + 1)),
    increaseAsync: async () => {
      const content = await fetch({
        'url': 'https://google.com',
        'mode': 'no-cors',
      } as Request);
      const text = await content.text();
      setState(prev => lens.counter.set(prev, text.length));
    },
    setDeep: () => setState((prev: State) => lens.deep.over(prev, c => c + ' and deeper')),
  });
  
  export type AppIO = ReturnType<typeof appIOFactory>;