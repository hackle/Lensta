import React, { createContext, ReactNode, useContext, useState } from "react";
import { AppIO, appIOFactory } from "./appIO";
import { initialState, State } from "./state";

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
type StateContext = { state: State, setState: SetState<State> };

const store = createContext<StateContext>({ state: initialState, setState: () => null });

export function StateProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState(initialState);

    const { Provider } = store;

    return <Provider value={{ state, setState }}>{ children }</Provider>;
}

export function withState<POwn = {}, PSt = {}, P extends (POwn & PSt) = POwn & PSt>(
    Comp: React.FunctionComponent<P>, 
    map: (state: State, appIO: AppIO) => PSt
) {
    let appIO: AppIO | null = null;
    
    return (props: POwn) => {
        const { state, setState } = useContext<StateContext>(store);
        appIO = appIO ?? appIOFactory(setState);
        const stateProps = map(state, appIO);
        const allProps: P = { ...props, ...stateProps } as P;
        const Memoed = React.memo(Comp) as any;

        return <Memoed { ...allProps } />;
    };
}
