import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class IncidentesMatPelView extends Component {
    constructor(props){
        super(props)

        this.state={
            IncidentesLista: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/reporteincidentesmatpel')
        .then(response => {
            console.log(response)
            this.setState({IncidentesLista: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    removeCategory (ids) {
        fetch('http://127.0.0.1:8000/reporteincidentesmatpel/'+ids+'/',{
            method: 'DELETE',
            headers: {'Accept':'application/json','Content-Type':'application/json'}
        })
        window.location.reload()
    }

    render(){
        const {IncidentesLista} = this.state
        console.log(IncidentesLista)
        return(
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Table bordered responsive striped>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Ubicacion</th>
                            <th>Fenomeno</th>
                            <th>Descripcion</th>
                            <th>Evaluacion</th>
                            <th>Tareas</th>
                            <th>Recursos</th>
                            <th>Estrategias</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            IncidentesLista.map((user) => (
                                <tr key={user.id} >
                                    <th>{user.Fecha}</th>
                                    <th>{user.Ubicacion}</th>
                                    <th>{user.Fenomeno}</th>
                                    <th>{user.Descripcion}</th>
                                    <th>{user.Evaluacion}</th>
                                    <th>{user.Tareas}</th>
                                    <th>{user.Recursos}</th>
                                    <th>{user.Estrategias}</th>
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

export default IncidentesMatPelView