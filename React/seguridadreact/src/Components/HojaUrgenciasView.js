//Pendiente
/*
import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class HojaUrgenciasView extends Component {
    constructor(props){
        super(props)

        this.state={
            IncidentesLista: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/hojaurgencias')
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
            <Table bordered>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Adscripcion</th>
                        <th>Codigo</th>
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
                            <tr key={user.id} ><th>{user.CodigoAlumno}</th><th>{user.FechaHora}</th><th>{user.Ubicacion}</th><th>{user.ObjetosP}</th><th>{user.FotoIdF}</th><th>{user.FotoIdB}</th><th>{user.Estatura}</th><th>{user.Apariencia}</th><th>{user.Tez}</th><th>{user.Cabello}</th><th>{user.Ojos}</th><th>{user.Cara}</th><th>{user.Boca}</th><th>{user.TipoRopa}</th><th>{user.Gorra}</th><th>{user.EdadAprox}</th><th>{user.Cicatrices}</th><th>{user.Tatuajes}</th><th>{user.Piercings}</th><th>{user.Otra}</th><th>{user.Huida}</th><th>{user.Observacion}</th></tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default HojaUrgenciasView
*/