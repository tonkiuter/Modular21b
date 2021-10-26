import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class PaseSalidaView extends Component {
    constructor(props){
        super(props)

        this.state={
            PaseLista: []
        }
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

    }

    render(){
        const {PaseLista} = this.state
        console.log(PaseLista)
        return(
            <Table bordered>
                <thead>
                    <tr>
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
                            <tr key={user.id} >
                                <th>{user.CodigoAlumno}</th>
                                <th><img src={user.FotoIdF} width="100" height="100" alt ="imagen"/> </th>
                                <th><img src={user.FotoIdB} width="100" height="100" alt ="imagen"/> </th>
                                <th>{user.Sello}</th>
                                <th>{user.Descripcion}</th>
                                <th>{user.Fecha}</th>
                                <th><button onClick={() => this.removeCategory(user.id)}>Eliminar</button></th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default PaseSalidaView