// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
import HojaUrgenciasView from './Components/HojaUrgenciasView';
import BicicletaView from './Components/BicicletaView';
import EventoSocialView from './Components/EventoSocialView';
import FalloCamara from './Components/FalloCamara';
import FalloCamaraViews from './Components/FalloCamaraViews';
import SolicitudVideoCamarasView from './Components/SolicitudVideoCamarasView';
import SolicitudVideoCamara from './Components/SolicitudVideoCamaras';

function App() {
  return (
    // Router inicializa nuestro enrutado
    <Router>
      <div className="container mt-5">
        <div className= "btn-group">
          <Link to='/' className= "btn btn-dark">Inicio</Link>
          <Link to='/bicicleta' className= "btn btn-dark">Bicicleta</Link>
          <Link to='/social' className= "btn btn-dark">Evento Social</Link>
          <Link to='/fallocamara' className= "btn btn-dark">Fallo Camara</Link>
          <Link to='/solicitudcam' className= "btn btn-dark">VideoCamara</Link>
          <Link to='/rompercandado' className= "btn btn-dark">RomperCandado</Link>
          <Link to='/actaadmin' className= "btn btn-dark">Acta Admin</Link>
          <Link to='/pasesalida' className= "btn btn-dark">Pase Salida</Link>
          <Link to='/reporteincidentes' className= "btn btn-dark">Incidencias</Link>
          <Link to='/urgencias' className= "btn btn-dark">Urgencias</Link>
          <Link to='/crendencialperdida' className= "btn btn-dark">Crendencial</Link>
          <Link to='/incidentesmatpet' className= "btn btn-dark">IncidentesMatPel</Link>
        </div>
      
      <hr/>
      {/* Switch metemos todas nuestras rutas especificas donde decimos que es lo que va dentro de cada una */}
      <Switch>
      {/* Route especificamos nuestras rutas y lo que contienen */}
      <Route path='/' exact>
        Inicio
      </Route>

      <Route path='/bicicleta' exact>  
      <Bicicleta></Bicicleta>
      </Route>

      <Route path='/bicicleta/view'>  
      <BicicletaView></BicicletaView>
      </Route>

      <Route path = '/social' exact>
      <EventoSocial></EventoSocial>
      </Route>
      
      <Route path = '/social/view' exact>
      <EventoSocialView></EventoSocialView>
      </Route>

      <Route path= '/fallocamara' exact>
      <FalloCamara></FalloCamara>
      </Route>

      <Route path= '/fallocamara/view' exact>
      <FalloCamaraViews></FalloCamaraViews>
      </Route>

      <Route path= '/solicitudcam' exact>
      <SolicitudVideoCamara></SolicitudVideoCamara>
      </Route>

      <Route path= '/solicitudcam/view' exact>
      <SolicitudVideoCamarasView></SolicitudVideoCamarasView>
      </Route>

      <Route path='/rompercandado' exact>
      <RomperCandado></RomperCandado>
      </Route>

      <Route path='/rompercandado/view' exact>
      <RomperCandadoView></RomperCandadoView>
      </Route>

      <Route path='/actaadmin' exact>
      <ActaAdministrativa></ActaAdministrativa>
      </Route>

      <Route path='/actaadmin/view' exact>
      <ActaAdministrativaView></ActaAdministrativaView>
      </Route>

      <Route path='/pasesalida' exact>
      <PaseSalida></PaseSalida>
      </Route>

      <Route path='/pasesalida/view' exact>
      <PaseSalidaView></PaseSalidaView>
      </Route>

      <Route path= '/reporteincidentes' exact>
      <ReporteIncidentes></ReporteIncidentes>
      </Route>

      <Route path= '/reporteincidentes/view' exact>
      <ReporteIncidentesView></ReporteIncidentesView>
      </Route>

      <Route path='urgencias' exact>
        <HojaUrgencias></HojaUrgencias>
      </Route>

      <Route path='urgencias/view' exact>
        <HojaUrgenciasView></HojaUrgenciasView>
      </Route>

      <Route path='/crendencialperdida' exact>
        <CredencialPerdida></CredencialPerdida>
      </Route>

      <Route path='/crendencialperdida/view' exact>
        <CredencialPerdidaView></CredencialPerdidaView>
      </Route>

      <Route path= '/incidentesmatpet' exact>
        <IncidentesMatPel></IncidentesMatPel>
      </Route>

      <Route path= '/incidentesmatpet/view' exact>
        <IncidentesMatPelView></IncidentesMatPelView>
      </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
