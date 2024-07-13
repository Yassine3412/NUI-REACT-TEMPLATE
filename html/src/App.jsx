import { useState,useEffect } from 'react';
import './App.css';
import { useNuiEvent } from './hooks/useNuiEvent.js';
import { fetchNui } from './utils/fetchNui.js'; 
import {Notify} from './components/Notify.jsx';
function App() { 
  const [notify, setNotify] = useState(false);

  return (
    <div className="App">  
      <h1>QSDLDKQSLDKQLK</h1>
    </div>
  );
}

export default App;
