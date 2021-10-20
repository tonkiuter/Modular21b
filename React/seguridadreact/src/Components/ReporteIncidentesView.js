import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class ReporteIncidentesView extends Component {
    constructor(props){
        super(props)

        this.state={
            IncidentesLista: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/incidencias')
        .then(response => {
            console.log(response)
            this.setState({IncidentesLista: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {IncidentesLista} = this.state
        console.log(IncidentesLista)
        return(
            <table border='1'>
                <tr>
                    <th>Id</th>
                    <th>Codigo del Alumno</th>
                </tr>
                {
                    IncidentesLista.map((user) => (
                        <tr key={user.id} ><th>{user.id}</th><th>{user.CodigoAlumno}</th></tr>
                      ))
                }
            </table>
        )
    }
}

export default ReporteIncidentesView