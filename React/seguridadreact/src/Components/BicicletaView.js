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

    removeCategory (ids) {
        fetch('http://127.0.0.1:8000/bicicleta/'+ids+'/',{
            method: 'DELETE',
            headers: {'Accept':'application/json','Content-Type':'application/json'}
        })
        window.location.reload()
    }
    
    render(){
        const {BicicletaLista} = this.state
        console.log(BicicletaLista)
        return(
            <Table bordered responsive>
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
                        <th>CodigoAlumno</th>
                        <th>Foto id frente</th>
                        <th>Foto id detras</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        BicicletaLista.map((user) => (
                            <tr key={user.id} >
                                <th>{user.CodigoAlumno}</th>
                                <th><img src={user.FotoIdF} width="100" height="100" alt ="imagen"/> </th>
                                <th><img src={user.FotoIdB} width="100" height="100" alt ="imagen"/> </th>
                                <th>{user.Descripcion}</th>
                                <th><button onClick={() => this.removeCategory(user.id)}>Eliminar</button></th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default BicicletaView