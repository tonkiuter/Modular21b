import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

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
        window.location.reload()
    }

    render(){
        const {CredencialLista} = this.state
        console.log(CredencialLista)
        return(
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Table bordered responsive striped>
                    <thead>
                        <tr>
                            <th>Nombre de Alumno</th>
                            <th>Carrera</th>
                            <th>Codigo de Alumno</th>
                            <th>Identificacion Frente</th>
                            <th>Identificacion Detras</th>
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
                                    <th><img src={user.FotoIneFrente} width="100" height="100" alt ="imagen"/> </th>
                                    <th><img src={user.FotoIneTrasera} width="100" height="100" alt ="imagen"/> </th>
                                    <th>{user.FechaYHora}</th>
                                    <th><Button variant="danger" onClick={() => this.removeCategory(user.id)}>Eliminar</Button></th>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default CredencialPerdidaView