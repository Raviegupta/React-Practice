import React, {createContext, useState} from 'react';
import './App.css';
import UseStateHook from './Hooks/UseStateHook/UseStateHook';

import UseEffectHook from './Hooks/UseEffectHook/UseEffectHook';
import UseEffectHook2 from './Hooks/UseEffectHook/UseEffectHook2';
import UseEffectHook3 from './Hooks/UseEffectHook/UseEffectHook3';
import UseEffectAPI from './Hooks/UseEffectHook/UseEffectAPI';
import UseEffectWeatherAPI from './Hooks/UseEffectHook/UseEffectWeatherAPI';
import UseEffectCleanUp from './Hooks/UseEffectHook/UseEffectCleanUp';

import UseReducerExample from './Hooks/UseReducer/UseReducerExample';
import UseReducerExSwitch from './Hooks/UseReducer/UseReducerExSwitch';

import UseMemoHook from './Hooks/UseMemoHook/UseMemoHook';

import Parent from './Hooks/UseCallBackHook/Parent';
import Child from './Hooks/UseCallBackHook/Child';

import ContextAPIchild from './Hooks/ContextAPI/ContextAPIchild';
import ContextAPIotherchild from './Hooks/ContextAPI/ContextAPIotherchild';

import ReactForm1 from './FormsReact/ReactForm1';



export const GlobalInfo = createContext();

function App() {

  const [color, setColor] = useState('green')
  const [date, setDate] = useState('wednesday')

  const getDate = (data) => {
    console.warn(data)
    setDate(data);
  }

  return (
    <GlobalInfo.Provider value={{ color: color, getDate: getDate }} >
      <div className="App">
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseEffectHook2 /> */}
      {/* <UseEffectHook3 /> */}
      {/* <UseEffectAPI /> */}
      {/* <UseEffectWeatherAPI /> */}
      {/* <UseEffectCleanUp /> */}

      {/* <UseReducerExample />    */}
      {/* <UseReducerExSwitch />    */}

      {/* <UseMemoHook /> */}

      {/* <Parent /> */}

      {/* <h1>App component: {date}</h1> */}
      {/* <ContextAPIchild /> */}
      {/* <ContextAPIotherchild /> */}

      <ReactForm1 />     
    </div>
    </GlobalInfo.Provider>
  );
}

export default App;
