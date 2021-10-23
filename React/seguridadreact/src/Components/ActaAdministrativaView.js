import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

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

    render(){
        const {ActaLista} = this.state
        console.log(ActaLista)
        return(
            <Table border='1'>
                <thead>
                    <tr>
                        <th>Codigo del Alumno</th>
                        <th>Numero de oficio</th>
                        <th>Lugar</th>
                        <th>Nombre del alumno</th>
                        <th>Causa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ActaLista.map((user) => (
                            <tr key={user.id} ><th>{user.CodigoAlumno}</th><th>{user.NoOficio}</th><th>{user.Lugar}</th><th>{user.NombreAl}</th><th>{user.Causa}</th></tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default ActaAdministrativaView