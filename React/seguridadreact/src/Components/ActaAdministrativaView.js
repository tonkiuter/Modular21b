import React, {Component} from 'react';
import axios from 'axios';
import { Table, Container, Row, Col } from 'react-bootstrap';
import jsPDF from "jspdf";
import "jspdf-autotable";
import Button from 'react-bootstrap/Button';
//import { Text, View, Image, Document, Page, PDFViewer } from "@react-pdf/renderer";
//import ActaPDF from './ActaPDF';

/*class ActaAdministrativaView extends Component{
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
            <div>
                <br/>
                <Container>
                    <Button variant="warning" href="http://localhost:3000/actaadmin">Atras</Button>
                </Container>
                <br/>
                <Table bordered responsive striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Codigo de Alumno</th>
                            <th>No. Oficio</th>
                            <th>Lugar</th>
                            <th>Nombre de Alumno</th>
                            <th>Causa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ActaLista.map((user) => (
                                <tr key={user.id}>
                                    <th>{user.id}</th>
                                    <th>{user.CodigoAlumno}</th>
                                    <th>{user.NoOficio}</th>
                                    <th>{user.Lugar}</th>
                                    <th>{user.NombreAl}</th>
                                    <th>{user.Causa}</th>
                                    <th><Button variant="danger" onClick={() => this.removeCategory(user.id)}>Eliminar</Button></th>
                                    <th>
                                        <PDFViewer style={{ width: "100%", height: "90vh"}}>
                                            <Button variant="info">
                                                <ActaPDF></ActaPDF>
                                            </Button>
                                        </PDFViewer>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }

}

export default ActaAdministrativaView*/

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
            <div>
                <br/>
                <Container>
                    <Button variant="dark" href="http://localhost:3000/actaadmin">Atras</Button>
                </Container>
                <br/>
                <Table bordered responsive striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Codigo de Alumno</th>
                            <th>No. Oficio</th>
                            <th>Lugar</th>
                            <th>Nombre de Alumno</th>
                            <th>Causa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ActaLista.map((user) => (
                                <tr key={user.id}>
                                    <th>{user.id}</th>
                                    <th>{user.CodigoAlumno}</th>
                                    <th>{user.NoOficio}</th>
                                    <th>{user.Lugar}</th>
                                    <th>{user.NombreAl}</th>
                                    <th>{user.Causa}</th>
                                    <th><Button variant="danger" onClick={() => this.removeCategory(user.id)}>Eliminar</Button></th>
                                    <th>
                                        <Button variant="info" onClick={() => this.exportPDF(user)}>Generar Reporte</Button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ActaAdministrativaView