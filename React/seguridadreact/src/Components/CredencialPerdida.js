import React, { Component } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

class CredencialPerdida extends Component{
    constructor(props){
        super(props)

        this.state={
            NombreA: '',
            Carrera: '',
            Codigo: '',
            FechaYHora: '',
            FotoIneFrente: '',
            FotoIneTrasera: ''
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
            .post('http://127.0.0.1:8000/rompercandado', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        const { NombreA, Carrera, Codigo, FechaYHora, FotoIneFrente, FotoIneTrasera } = this.state
        return(
            <div>
                <h1 className="display-3">Credencial Perdida y Recuperada</h1>
                <Form className="needs-validation">
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                Nombre de Alumno: <input className="form-control" type="text" required name="NombreA" value={NombreA} onChange={this.changeHandler}></input>
                            </div>
                            <div className ="col-md">
                                Carrera: <input className="form-control" type="text" required name="Carrera" value={Carrera} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                                Codigo: <input className="form-control" type="text" required name="Codigo" value={Codigo} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Fecha Y Hora: <input className="form-control" type="datetime-local" name="FechaYHora" value={FechaYHora} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <button type='Submit' className='btn btn-primary btn-lg btn-success' href="">Submit</button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default CredencialPerdida