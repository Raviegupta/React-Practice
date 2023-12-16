import React from 'react';
import './App.css';
import UseStateHook from './Hooks/UseStateHook';
import UseEffectHook from './Hooks/UseEffectHook';
import UseEffectHook2 from './Hooks/UseEffectHook2';

function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      <UseEffectHook />
      <UseEffectHook2 />
    </div>
  );
}

export default App;
