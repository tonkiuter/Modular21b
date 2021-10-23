// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RomperCandado from './Components/RomperCandado';
import ActaAdministrativa from './Components/ActaAdministrativa';
import PaseSalida from './Components/PaseSalida';
import ReporteIncidentes from './Components/ReporteIncidentes';
import Bicicleta from './Components/Bicicleta';
import EventoSocial from './Components/EventoSocial';
import ReporteIncidentesView from './Components/ReporteIncidentesView'
import HojaUrgencias from './Components/HojaUrgencias';
import CredencialPerdida from './Components/CredencialPerdida';
import IncidentesMatPel from './Components/IncidentesMatPel';
import ActaAdministrativaView from './Components/ActaAdministrativaView';
import PaseSalidaView from './Components/PaseSalidaView';
import RomperCandadoView from './Components/RomperCandadoView';
import CredencialPerdidaView from './Components/CredencialPerdidaView';
import IncidentesMatPelView from './Components/IncidentesMatPelView';

function App() {
  return (
    <div className="App">
      <Bicicleta></Bicicleta>
      <EventoSocial></EventoSocial>
      <RomperCandado></RomperCandado>
      <RomperCandadoView></RomperCandadoView>
      <ActaAdministrativa></ActaAdministrativa>
      <ActaAdministrativaView></ActaAdministrativaView>
      <PaseSalida></PaseSalida>
      <PaseSalidaView></PaseSalidaView>
      <ReporteIncidentes></ReporteIncidentes>
      <ReporteIncidentesView></ReporteIncidentesView>
      <HojaUrgencias></HojaUrgencias>
      <CredencialPerdida></CredencialPerdida>
      <CredencialPerdidaView></CredencialPerdidaView>
      <IncidentesMatPel></IncidentesMatPel>
      <IncidentesMatPelView></IncidentesMatPelView>
    </div>
  );
}

export default App;
