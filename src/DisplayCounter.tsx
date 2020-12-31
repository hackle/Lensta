import { withState } from './store';
import { State } from './state';
import React from 'react';

export type Props = {
    counter: number;
    deep: string;
};

const DisplayCounter = (props: Props) => {
    return <div>
        <p>Counter: {props.counter}</p>
        <p>Deep {props.deep} </p>
    </div>;
};

export default withState<{}, Props>(React.memo(DisplayCounter), 
    (state: State) => ({ 
        counter: state.counter, 
        deep: state.a.very.deep.value 
}));


