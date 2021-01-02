import React, { createContext, ReactNode, useContext, useState } from "react";
import { AppIO, appIOFactory } from "./appIO";
import { State } from "./state";

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
type StateContext = { appIOFactory: typeof appIOFactory, state: State, setState: SetState<State> };

const store = createContext<StateContext>({
    appIOFactory: (() => {}) as any,
    state: {} as any,
    setState: () => null,
});

type StateProviderProps = {
    children: ReactNode;
    initialState: State,
    appIOFactory: typeof appIOFactory,
};

/**
 * @param initialState this is parameterised for ease of testing
 * @param appIOFactory this is parameterised for ease of testing
 */
export function StateProvider({ initialState, appIOFactory, children }: StateProviderProps) {
    const [state, setState] = useState(initialState);

    const { Provider } = store;

    return <Provider value={{ appIOFactory, state, setState }}>{ children }</Provider>;
}

/**
 * @param Comp it's generally good practice to make this a pure component so it's possible to use React.memo(Comp)
 * @param mapToStateProps 
 */
export function withState<POwn = {}, PSt = {}, P extends (POwn & PSt) = POwn & PSt>(
    Comp: React.FunctionComponent<P>, 
    mapToStateProps: (state: State, appIO: AppIO, props?: POwn) => PSt
) {
    // make sure this is set only once 
    // to avoid creating a new object with appIOFactory(setState) every time 
    let appIO: AppIO | null = null;
    
    return (props: POwn) => {
        const { appIOFactory, state, setState } = useContext<StateContext>(store);
        appIO = appIO ?? appIOFactory(setState);
        const stateProps = mapToStateProps(state!, appIO, props);
        const allProps: P = { ...props, ...stateProps } as P;

        return <Comp { ...allProps } />;
    };
}
