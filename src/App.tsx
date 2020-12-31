import './App.css';
import SeparateCounter from './SeparateCounter';
import SeparateIncrease from './SeparateIncrease';
import AsyncIncrease from './AsyncIncrease';
import React from 'react';
import DeepSetter from './DeepSetter';
import DisplayCounter from './DisplayCounter';

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