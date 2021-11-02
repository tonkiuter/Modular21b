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
    
    removeCategory (ids) {
        fetch('http://127.0.0.1:8000/solcamara/'+ids+'/',{
            method: 'DELETE',
            headers: {'Accept':'application/json','Content-Type':'application/json'}
        })
        window.location.reload()
    }

    render(){
        const {SolicitudVideoCamarasLista} = this.state
        console.log(SolicitudVideoCamarasLista)
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
                                <th><img src={user.fotoIdF} width="100" height="100" alt ="imagen"/> </th>
                                <th><img src={user.fotoIdB} width="100" height="100" alt ="imagen"/> </th>
                                <th><button onClick={() => this.removeCategory(user.id)}>Eliminar</button></th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default SolicitudVideoCamarasView