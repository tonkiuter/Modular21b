import React, { Component } from 'react';
import axios from 'axios';

class Vistas extends Component{
    constructor(props) {
        super(props)

        this.state={
            CodigoReporte: '',
            Lugar: '',
            Departamento:'',
            Equipo:'',
            NoEquipo:'',
            Planta: '',
            Agente: '',
            CapaciddadKG: '',
            CapacidadLB: '',
            Soporte: '',
            UltimaCarga: '',
            PH: '',
            Activado: '',
            Comentarios: '',
            Existe: '',
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e=> {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://127.0.0.1:8000/Vistas', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        const { } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler} className="needs-validation">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col" colspan = "7">Universidad de Guadalajara</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col" colspan="7">Centro Universitario de Ciencias Exactas e Ingenierias</th>
                            </tr>
                            <tr>
                                <th scope="col" colspan="7">Seguridad CUCEI</th>
                            </tr>
                            <tr>
                                <th colspan="7">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-default">SUPERVISION Nombre del Modulo y/o Instalacion</span>
                                        </div>
                                        <label for="validationCustom01"></label>
                                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required></input>
                                        <div className="invalid-feedback">
                                            Falta Nombre
                                        </div>
                                    </div>
                                </th>
                            </tr>
                            
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default Vistas