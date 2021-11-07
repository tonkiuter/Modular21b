import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
<<<<<<< HEAD
import jsPDF from "jspdf";
import "jspdf-autotable";
=======
import Button from 'react-bootstrap/Button';
>>>>>>> b6e80054b4fbd58ca23ef95bd0df98481be7fc4b

class BicicletaView extends Component {
    constructor(props){
        super(props)

        this.state={
            BicicletaLista: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/bicicleta')
        .then(response => {
            console.log(response)
            this.setState({BicicletaLista: response.data})
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

        var img = new Image()
        img.src = elt.FotoIdF
        var img2 = new Image()
        img2.src = elt.FotoIdB

        const doc = new jsPDF(orientation, unit, size);
        doc.setFontSize(15);

        const title = "Reporte Bicicleta";
        const headers = [["ID","Codigo", "Foto Frente","Foto Back","Descripcion","Fecha"]];
        const data = [[elt.id, elt.CodigoAlumno, elt.FotoIdF, elt.FotoIdB, elt.Descripcion, elt.Fecha]];
    
        let content = {
          startY: 50,
          head: headers,
          body: data,
          didDrawCell: function (data) {
            if (data.section === 'body' && data.column.index === 2) {
                data.cell.width=300
                data.cell.height=100
                doc.addImage(img, 'JPEG', data.cell.x + 2, data.cell.y + 2, data.cell.width, data.cell.height, "Alias","SLOW")
            }
            if (data.section === 'body' && data.column.index === 3) {
                data.cell.width=300
                data.cell.height=100
                doc.addImage(img2, 'JPEG', data.cell.x + 2, data.cell.y + 2, data.cell.width, data.cell.height, "Alias","SLOW")
            }
          }
          
        };
        
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("Reportes de Bicicleta sin asegurar: "+elt.id+".pdf")
    }

    removeCategory (ids) {
        fetch('http://127.0.0.1:8000/bicicleta/'+ids+'/',{
            method: 'DELETE',
            headers: {'Accept':'application/json','Content-Type':'application/json'}
        })
        window.location.reload()
    }
    
    render(){
        const {BicicletaLista} = this.state
        console.log(BicicletaLista)
        return(
<<<<<<< HEAD
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>CodigoAlumno</th>
                        <th>Foto id frente</th>
                        <th>Foto id detras</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        BicicletaLista.map((user) => (
                            <tr key={user.id} >
                                <th>{user.CodigoAlumno}</th>
                                <th><img src={user.FotoIdF} width="100" height="100" alt ="imagen"/> </th>
                                <th><img src={user.FotoIdB} width="100" height="100" alt ="imagen"/> </th>
                                <th>{user.Descripcion}</th>
                                <th><button onClick={() => this.removeCategory(user.id)}>Eliminar</button></th>
                                <th><button onClick={() => this.exportPDF(user)}>Generar Reporte</button></th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
=======
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Table bordered responsive striped>
                    <thead>
                        <tr>
                            <th>Codigo de Alumno</th>
                            <th>Identificacion Frente</th>
                            <th>Identificacion Detras</th>
                            <th>Descripcion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            BicicletaLista.map((user) => (
                                <tr key={user.id} >
                                    <th>{user.CodigoAlumno}</th>
                                    <th><img src={user.FotoIdF} width="100" height="100" alt ="imagen"/> </th>
                                    <th><img src={user.FotoIdB} width="100" height="100" alt ="imagen"/> </th>
                                    <th>{user.Descripcion}</th>
                                    <th><Button variant="danger" onClick={() => this.removeCategory(user.id)}>Eliminar</Button></th>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
>>>>>>> b6e80054b4fbd58ca23ef95bd0df98481be7fc4b
        )
    }
}

export default BicicletaView