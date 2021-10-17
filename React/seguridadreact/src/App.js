import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RomperCandado from './Components/RomperCandado';
import Vistas from './Components/Vistas';

function App() {
  return (
    <div className="App">
      <RomperCandado></RomperCandado>
      <Vistas></Vistas>
    </div>
  );
}

export default App;
