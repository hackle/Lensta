import './App.css';
import { withState } from './store';
import { State } from './state';
import SeparateCounter from './SeparateCounter';
import SeparateIncrease from './SeparateIncrease';
import AsyncIncrease from './AsyncIncrease';
import React from 'react';
import DeepSetter from './DeepSetter';

type Props = {
  counter: number;
  deep: string;
};

const DisplayCounter = withState<{}, Props>((props: Props) => {
  return <div>
          <p>Counter: { props.counter }</p>
          <p>Deep { props.deep } </p>
        </div>
}, (state: State) => ({ counter: state.counter, deep: state.a.very.deep.value }));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayCounter />
        <SeparateCounter />
        <SeparateIncrease color="snow" />
        <AsyncIncrease />
        <DeepSetter />
      </header>
    </div>
  );
}

export default App;