import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import jsPDF from "jspdf";
import "jspdf-autotable";

class ReporteIncidentesView extends Component {
    constructor(props){
        super(props)

        this.state={
            IncidentesLista: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/incidencias')
        .then(response => {
            console.log(response)
            this.setState({IncidentesLista: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    exportPDF = (elt) => {
        const unit = "pt";
        const size = "A3"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
        const marginLeft = 40;

        const doc = new jsPDF(orientation, unit, size);
        doc.setFontSize(15);

        const title = "Reporte de Incidente";
        const headers = [["ID", "Codigo", "Fecha y hora ","Ubicacion","Objetos Perdidos","Foto Id Frente","Foto Id Detras","Estatura","Apariencia","Tez","Cabello","Ojos","Cara","Boca",
                        "Tipo de ropa","Gorra","Edad Aproximada","Cicatrices","Tatuajes","Piercings","Otra","Huida","Observacion"]];
        const data = [[elt.id, elt.CodigoAlumno, elt.FechaHora, elt.Ubicacion, elt.ObjetosP, elt.Estatura, elt.Apariencia, elt.Tez, elt.Cabello, elt.Ojos,
        elt.Cara, elt.Boca, elt.TipoRopa, elt.Gorra, elt.EdadAprox, elt.Cicatrices, elt.Tatuajes, elt.Piercings, elt.Otra, elt.Huida, elt.Observacion]];
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("Reportes de Incidente ID: "+elt.id+".pdf")
    }

    removeCategory (ids) {
        fetch('http://127.0.0.1:8000/incidencias/'+ids+'/',{
            method: 'DELETE',
            headers: {'Accept':'application/json','Content-Type':'application/json'}
        })
        window.location.reload()
    }

    render(){
        const {IncidentesLista} = this.state
        console.log(IncidentesLista)
        return(
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Codigo del Alumno</th>
                        <th>Fecha y hora</th>
                        <th>Ubicacion</th>
                        <th>Objetos perdidos</th>
                        <th>Foto id de frente</th>
                        <th>Foto id detras</th>
                        <th>Estatura</th>
                        <th>Apariencia</th>
                        <th>Tez</th>
                        <th>Cabello</th>
                        <th>Ojos</th>
                        <th>Cara</th>
                        <th>Boca</th>
                        <th>Tipo de ropa</th>
                        <th>Gorra</th>
                        <th>Edad aproximada</th>
                        <th>Cicatrices</th>
                        <th>Tatuajes</th>
                        <th>Piercings</th>
                        <th>Otra</th>
                        <th>Huida</th>
                        <th>Observacion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        IncidentesLista.map((user) => (
                            <tr key={user.id} >
                                <th>{user.id}</th>
                                <th>{user.CodigoAlumno}</th>
                                <th>{user.FechaHora}</th>
                                <th>{user.Ubicacion}</th>
                                <th>{user.ObjetosP}</th>
                                <th><img src={user.FotoIdF} width="100" height="100" alt ="imagen"/> </th>
                                <th><img src={user.FotoIdB} width="100" height="100" alt ="imagen"/> </th>
                                <th>{user.Estatura}</th>
                                <th>{user.Apariencia}</th>
                                <th>{user.Tez}</th>
                                <th>{user.Cabello}</th>
                                <th>{user.Ojos}</th>
                                <th>{user.Cara}</th>
                                <th>{user.Boca}</th>
                                <th>{user.TipoRopa}</th>
                                <th>{user.Gorra}</th>
                                <th>{user.EdadAprox}</th>
                                <th>{user.Cicatrices}</th>
                                <th>{user.Tatuajes}</th>
                                <th>{user.Piercings}</th>
                                <th>{user.Otra}</th>
                                <th>{user.Huida}</th>
                                <th>{user.Observacion}</th>
                                <th><button onClick={() => this.removeCategory(user.id)}>Eliminar</button></th>
                                <th><button onClick={() => this.exportPDF(user)}>Generar Reporte</button></th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default ReporteIncidentesView