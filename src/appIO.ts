import { lens } from "./lens";
import { State } from "./state";
import { SetState } from "./stateProvider";

/**
 * all IO / side-effect operations live here
 * if an operation wants to change state then it should end with a call to setState(newState)
 */
export const appIOFactory = (setState: SetState<State>) => {
    const setCounter = (c: number) => setState(prev => lens.counter.set(prev, c));
    
    const increase = () => setState(prev => lens.counter.over(prev, c => c + 1));
    
    const increaseAsync = async () => {
      const content = await fetch({
        'url': 'https://google.com',
        'mode': 'no-cors',
      } as Request);
      const text = await content.text();
      setState(prev => lens.counter.set(prev, text.length));
    };

    const setDeep = () => setState((prev: State) => lens.deep.over(prev, c => c + ' and deeper'));

    return {
      setCounter,
      increase,
      increaseAsync,
      setDeep,
    };
  };
  
  export type AppIO = ReturnType<typeof appIOFactory>;