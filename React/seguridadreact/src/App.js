import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import RomperCandado from './Components/RomperCandado';

function App() {
  const makeAPICall = async () => {
    try {
      
      const response = await fetch('http://127.0.0.1:8000/RomperCandado', {mode:'no-cors'});
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  return (
    <div className="App">
      <RomperCandado></RomperCandado> 
    </div>
  );
}

export default App;
