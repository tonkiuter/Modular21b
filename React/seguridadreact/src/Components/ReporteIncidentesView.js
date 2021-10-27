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
    
    removeCategory (ids) {
        fetch('http://127.0.0.1:8000/incidencias/'+ids+'/',{
            method: 'DELETE',
            headers: {'Accept':'application/json','Content-Type':'application/json'}
        })
        window.location.reload()
    }

    render(){
        const {IncidentesLista} = this.state
        console.log(IncidentesLista)
        return(
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>Codigo del Alumno</th>
                        <th>Fecha y hora</th>
                        <th>Ubicacion</th>
                        <th>Objetos perdidos</th>
                        <th>Foto id de frente</th>
                        <th>Foto id detras</th>
                        <th>Estatura</th>
                        <th>Apariencia</th>
                        <th>Tez</th>
                        <th>Cabello</th>
                        <th>Ojos</th>
                        <th>Cara</th>
                        <th>Boca</th>
                        <th>Tipo de ropa</th>
                        <th>Gorra</th>
                        <th>Edad aproximada</th>
                        <th>Cicatrices</th>
                        <th>Tatuajes</th>
                        <th>Piercings</th>
                        <th>Otra</th>
                        <th>Huida</th>
                        <th>Observacion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        IncidentesLista.map((user) => (
                            <tr key={user.id} >
                                <th>{user.CodigoAlumno}</th>
                                <th>{user.FechaHora}</th>
                                <th>{user.Ubicacion}</th>
                                <th>{user.ObjetosP}</th>
                                <th><img src={user.FotoIdF} width="100" height="100" alt ="imagen"/> </th>
                                <th><img src={user.FotoIdB} width="100" height="100" alt ="imagen"/> </th>
                                <th>{user.Estatura}</th>
                                <th>{user.Apariencia}</th>
                                <th>{user.Tez}</th>
                                <th>{user.Cabello}</th>
                                <th>{user.Ojos}</th>
                                <th>{user.Cara}</th>
                                <th>{user.Boca}</th>
                                <th>{user.TipoRopa}</th>
                                <th>{user.Gorra}</th>
                                <th>{user.EdadAprox}</th>
                                <th>{user.Cicatrices}</th>
                                <th>{user.Tatuajes}</th>
                                <th>{user.Piercings}</th>
                                <th>{user.Otra}</th>
                                <th>{user.Huida}</th>
                                <th>{user.Observacion}</th>
                                <th><button onClick={() => this.removeCategory(user.id)}>Eliminar</button></th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default ReporteIncidentesView