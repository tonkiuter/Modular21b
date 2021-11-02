import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class FalloCamaraViews extends Component {
    constructor(props){
        super(props)

        this.state={
            FalloCamaraLista: []
        }
    }
    
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/camara')
        .then(response => {
            console.log(response)
            this.setState({FalloCamaraLista: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    removeCategory (ids) {
        fetch('http://127.0.0.1:8000/camara/'+ids+'/',{
            method: 'DELETE',
            headers: {'Accept':'application/json','Content-Type':'application/json'}
        })
        window.location.reload()
    }

    render(){
        const {FalloCamaraLista} = this.state
        console.log(FalloCamaraLista)
        return(
            <Table bordered>
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
                        <th>NoCamara</th>
                        <th>Informacion</th>
                        <th>IP</th>
                        <th>SITE</th>
                        <th>Modulo</th>
                        <th>Marca</th>
                        <th>DescFalla</th>
                        <th>Toreos</th>
                        <th>MateriaUt</th>
                        <th>Solucionado</th>
                        <th>Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        FalloCamaraLista.map((user) => (
                            <tr key={user.id} >
                                <th>{user.NoCamara}</th>
                                <th>{user.Informacion}</th>
                                <th>{user.IP}</th>
                                <th>{user.SITE}</th>
                                <th>{user.Modulo}</th>
                                <th>{user.Marca}</th>
                                <th>{user.DescFalla}</th>
                                <th>{user.Toreos}</th>
                                <th>{user.MateriaUt}</th>
                                <th>{user.Solucionado.toString()}</th>
                                <th>{user.Observaciones}</th>
                                <th><button onClick={() => this.removeCategory(user.id)}>Eliminar</button></th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default FalloCamaraViews