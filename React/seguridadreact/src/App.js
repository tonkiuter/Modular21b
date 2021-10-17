import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RomperCandado from './Components/RomperCandado';
import Vistas from './Components/Vistas';
import ActaAdministrativa from './Components/ActaAdministrativa';
import PaseSalida from './Components/PaseSalida';
import ReporteIncidentes from './Components/ReporteIncidentes';

function App() {
  return (
    <div className="App">
      <RomperCandado></RomperCandado>
      <Vistas></Vistas>
      <ActaAdministrativa></ActaAdministrativa>
      <PaseSalida></PaseSalida>
      <ReporteIncidentes></ReporteIncidentes>
    </div>
  );
}

export default App;
