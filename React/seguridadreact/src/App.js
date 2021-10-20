// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RomperCandado from './Components/RomperCandado';
import Vistas from './Components/Vistas';
import ActaAdministrativa from './Components/ActaAdministrativa';
import PaseSalida from './Components/PaseSalida';
import ReporteIncidentes from './Components/ReporteIncidentes';
import Bicicleta from './Components/Bicicleta';
import EventoSocial from './Components/EventoSocial';
import ReporteIncidentesView from './Components/ReporteIncidentesView'

function App() {
  return (
    <div className="App">
      <Bicicleta></Bicicleta>
      <EventoSocial></EventoSocial>
      <RomperCandado></RomperCandado>
      <Vistas></Vistas>
      <ActaAdministrativa></ActaAdministrativa>
      <PaseSalida></PaseSalida>
      <ReporteIncidentes></ReporteIncidentes>
      <ReporteIncidentesView></ReporteIncidentesView>
    </div>
  );
}

export default App;
