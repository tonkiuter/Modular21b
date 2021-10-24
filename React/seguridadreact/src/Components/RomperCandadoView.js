import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class RomperCandadoView extends Component {
    constructor(props){
        super(props)

        this.state={
            RomperLista: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/rompercandado')
        .then(response => {
            console.log(response)
            this.setState({RomperLista: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {RomperLista} = this.state
        console.log(RomperLista)
        return(
            <Table bordered>
                <thead>
                    <tr>
                        <th>Nombre del Alumno</th>
                        <th>Codigo del Alumno</th>
                        <th>Carrera</th>
                        <th>Foto id de frente</th>
                        <th>Foto id detras</th>
                        <th>Descripcion</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        RomperLista.map((user) => (
                            <tr key={user.id} ><th>{user.NombreAlumno}</th><th>{user.CodigoAlumno}</th><th>{user.FotoIdF}</th><th>{user.FotoIdB}</th><th>{user.Descripcion}</th><th>{user.Fecha}</th></tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default RomperCandadoView