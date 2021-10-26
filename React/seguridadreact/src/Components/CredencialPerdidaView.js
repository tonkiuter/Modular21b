import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class CredencialPerdidaView extends Component {
    constructor(props){
        super(props)

        this.state={
            CredencialLista: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/credencialperdida')
        .then(response => {
            console.log(response)
            this.setState({CredencialLista: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    removeCategory (ids) {
        fetch('http://127.0.0.1:8000/credencialperdida/'+ids+'/',{
            method: 'DELETE',
            headers: {'Accept':'application/json','Content-Type':'application/json'}
        })

    }

    render(){
        const {CredencialLista} = this.state
        console.log(CredencialLista)
        return(
            <Table bordered>
                <thead>
                    <tr>
                        <th>Nombre del Alumno</th>
                        <th>Carrera</th>
                        <th>Codigo del Alumno</th>
                        <th>Foto id de frente</th>
                        <th>Foto id detras</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        CredencialLista.map((user) => (
                            <tr key={user.id} >
                                <th>{user.NombreA}</th>
                                <th>{user.Carrera}</th>
                                <th>{user.Codigo}</th>
                                <th><img src={user.FotoIneFrente} width="100" height="100"/> </th>
                                <th><img src={user.FotoIneTrasera} width="100" height="100"/> </th>
                                <th>{user.FechaYHora}</th>
                                <th><button onClick={() => this.removeCategory(user.id)}>Eliminar</button></th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default CredencialPerdidaView