import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import jsPDF from "jspdf";
import "jspdf-autotable";

class ActaAdministrativaView extends Component {
    constructor(props){
        super(props)

        this.state={
            ActaLista: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/actaadministrativa')
        .then(response => {
            console.log(response)
            this.setState({ActaLista: response.data})
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

        const title = "Reporte Acta Administrativa";
        const headers = [["ID", "Codigo", "Numero del Oficio","Lugar","Nombre del alumno","Causa"]];
        const data = [[elt.id, elt.CodigoAlumno, elt.NoOficio, elt.Lugar, elt.NombreAl, elt.Causa]];
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("Reportes de Actas administrativas ID: "+elt.id+".pdf")
    }

    removeCategory (ids) {
        fetch('http://127.0.0.1:8000/actaadministrativa/'+ids+'/',{
            method: 'DELETE',
            headers: {'Accept':'application/json','Content-Type':'application/json'}
        })
        window.location.reload()
    }

    render(){
        const {ActaLista} = this.state
        console.log(ActaLista)
        return(
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Codigo del Alumno</th>
                        <th>Numero de oficio</th>
                        <th>Lugar</th>
                        <th>Nombre del alumno</th>
                        <th>Causa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ActaLista.map((user) => (
                            <tr key={user.id} >
                                <th>{user.id}</th>
                                <th>{user.CodigoAlumno}</th>
                                <th>{user.NoOficio}</th>
                                <th>{user.Lugar}</th>
                                <th>{user.NombreAl}</th>
                                <th>{user.Causa}</th>
                                <th><button onClick={() => this.removeCategory(user.id)}>Eliminar</button></th>
                                <th><button onClick={() => this.exportPDF(user)}>Generar Reporte</button>
                        </th>
                            </tr>
                            
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default ActaAdministrativaView