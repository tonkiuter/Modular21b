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
                            <tr key={user.id} ><th>{user.NombreA}</th><th>{user.Carrera}</th><th>{user.Codigo}</th><th>{user.FotoIneFrente}</th><th>{user.FotoIneTrasera}</th><th>{user.FechaYHora}</th></tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default CredencialPerdidaView