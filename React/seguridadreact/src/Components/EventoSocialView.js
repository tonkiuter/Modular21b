import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class EventoSocialViews extends Component {
    constructor(props){
        super(props)

        this.state={
            EventoSocialLista: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/social')
        .then(response => {
            console.log(response)
            this.setState({SolicitudVideoCamarasLista: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {EventoSocialLista} = this.state
        console.log(EventoSocialLista)
        return(
            <Table bordered>
                <thead>
                    <tr>
                        <th>NombreEvento</th>
                        <th>FechaHora</th>
                        <th>Pronostico</th>
                        <th>MensajeSeguridad</th>
                        <th>Estrategia</th>
                        <th>Recurso</th>
                        <th>Croquis</th>
                        <th>Organigrama</th>
                        <th>Estado</th>
                        <th>NombreEncargado</th>
                        <th>TelefonoEncargado</th>
                        <th>CorreoEncargado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        EventoSocialLista.map((user) => (
                            <tr key={user.id} >
                                <th>{user.NombreEvento}</th>
                                <th>{user.FechaHora}</th>
                                <th>{user.Pronostico}</th>
                                <th>{user.MensajeSeguridad}</th>
                                <th>{user.Estrategia}</th>
                                <th>{user.Recurso}</th>
                                <th>{user.Croquis}</th>
                                <th>{user.Organigrama}</th>
                                <th>{user.Estado}</th>
                                <th>{user.NombreEncargado}</th>
                                <th>{user.TelefonoEncargado}</th>
                                <th>{user.CorreoEncargado}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default EventoSocialViews