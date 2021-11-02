import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import jsPDF from "jspdf";
import "jspdf-autotable";

class PaseSalidaView extends Component {
    constructor(props){
        super(props)

        this.state={
            PaseLista: []
        }
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

        const title = "Reporte Pase salida";
        const headers = [["ID","Codigo", "Foto Frente","Foto Back","Sello","Descripcion","Fecha"]];
        const data = [[elt.id, elt.CodigoAlumno, elt.FotoIdF, elt.FotoIdB, elt.Sello, elt.Descripcion, elt.Fecha]];
    
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
        doc.save("Reportes de Pase salida ID: "+elt.id+".pdf")
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/pasesalida')
        .then(response => {
            console.log(response)
            this.setState({PaseLista: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    removeCategory (ids) {
        fetch('http://127.0.0.1:8000/pasesalida/'+ids+'/',{
            method: 'DELETE',
            headers: {'Accept':'application/json','Content-Type':'application/json'}
        }) 
        window.location.reload()
    }

    render(){
        const {PaseLista} = this.state
        console.log(PaseLista)
        return(
            <Table bordered>
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
                        <th>Foto id de frente</th>
                        <th>Foto id detras</th>
                        <th>Sello</th>
                        <th>Descripcion</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        PaseLista.map((user) => (
                            <tr key={user.id}>
                                <th>{user.id}</th>
                                <th>{user.CodigoAlumno}</th>
                                <th><img src={user.FotoIdF} width="100" height="100" alt ="imagen"/> </th>
                                <th><img src={user.FotoIdB} width="100" height="100" alt ="imagen"/> </th>
                                <th>{user.Sello}</th>
                                <th>{user.Descripcion}</th>
                                <th>{user.Fecha}</th>
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

export default PaseSalidaView