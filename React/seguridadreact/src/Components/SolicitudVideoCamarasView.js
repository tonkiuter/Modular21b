import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class SolicitudVideoCamarasView extends Component {
    constructor(props){
        super(props)

        this.state={
            SolicitudVideoCamarasLista: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/solcamara')
        .then(response => {
            console.log(response)
            this.setState({SolicitudVideoCamarasLista: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {SolicitudVideoCamarasLista} = this.state
        console.log(SolicitudVideoCamarasLista)
        return(
            <Table bordered>
                <thead>
                    <tr>
                        <th>Codigo del Alumno</th>
                        <th>Atendio</th>
                        <th>Fecha Solicitud</th>
                        <th>No.Camara</th>
                        <th>Horario</th>
                        <th>Hecho</th>
                        <th>Foto IdF</th>
                        <th>Foto IdB</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        SolicitudVideoCamarasLista.map((user) => (
                            <tr key={user.id} >
                                <th>{user.codigoAlumno}</th>
                                <th>{user.atendio}</th>
                                <th>{user.dateSolicitud}</th>
                                <th>{user.noCamara}</th>
                                <th>{user.horario}</th>
                                <th>{user.hecho}</th>
                                <th>{user.fotoIdF}</th>
                                <th>{user.fotoIdB}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default SolicitudVideoCamarasView