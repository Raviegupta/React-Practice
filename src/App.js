import React from 'react';
import './App.css';
import UseStateHook from './Hooks/UseStateHook/UseStateHook';

import UseEffectHook from './Hooks/UseEffectHook/UseEffectHook';
import UseEffectHook2 from './Hooks/UseEffectHook/UseEffectHook2';
import UseEffectHook3 from './Hooks/UseEffectHook/UseEffectHook3';
import UseEffectAPI from './Hooks/UseEffectHook/UseEffectAPI';
import UseEffectWeatherAPI from './Hooks/UseEffectHook/UseEffectWeatherAPI';
import UseEffectCleanUp from './Hooks/UseEffectHook/UseEffectCleanUp';
import UseReducerExSwitch from './Hooks/UseReducer/UseReducerExSwitch';

import UseReducerExample from './Hooks/UseReducer/UseReducerExample';

function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseEffectHook2 /> */}
      {/* <UseEffectHook3 /> */}
      {/* <UseEffectAPI /> */}
      {/* <UseEffectWeatherAPI /> */}
      {/* <UseEffectCleanUp /> */}

      {/* <UseReducerExample />    */}
      <UseReducerExSwitch />   
    </div>
  );
}

export default App;
