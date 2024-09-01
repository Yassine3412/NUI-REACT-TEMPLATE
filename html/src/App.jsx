import { useState,useEffect } from 'react';
import './App.css';
import { useNuiEvent } from './hooks/useNuiEvent.js';
import { fetchNui } from './utils/fetchNui.js'; 
function App() { 
  const [visible, setVisible] = useState(false);
  useNuiEvent('setVisible', (data) => {
    setVisible(data);
  });
  return (
    <div className="App">  
      { visible &&  (
          <h1>Visible</h1>
        )
      }
      
    </div>
  );
}

export default App;
