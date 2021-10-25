import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class BicicletaView extends Component {
    constructor(props){
        super(props)

        this.state={
            BicicletaLista: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/bicicleta')
        .then(response => {
            console.log(response)
            this.setState({BicicletaLista: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {BicicletaLista} = this.state
        console.log(BicicletaLista)
        return(
            <Table bordered>
                <thead>
                    <tr>
                        <th>CodigoAlumno</th>
                        <th>Carrera</th>
                        <th>Foto id detras</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        BicicletaLista.map((user) => (
                            <tr key={user.id} ><th>{user.CodigoAlumno}</th><th>{user.Carrera}</th><th>{user.FotoIdF}</th><th>{user.FotoIdB}</th></tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default BicicletaView