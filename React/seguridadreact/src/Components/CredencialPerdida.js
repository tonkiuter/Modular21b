import React, { Component } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import {Link} from "react-router-dom";

class CredencialPerdida extends Component{
    constructor(props){
        super(props)

        this.state={
            NombreA: '',
            Carrera: '',
            Codigo: '',
            FechaYHora: '',
            FotoIneFrente: null,
            FotoIneTrasera: null,
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
      };

    submitHandler = (data) => {
        data.preventDefault()
        console.log(data)
        let form_data = new FormData();
        form_data.append('NombreA', this.state.NombreA);
        form_data.append('Carrera', this.state.Carrera);
        form_data.append('Codigo', this.state.Codigo);
        form_data.append('FotoIneFrente', this.state.FotoIneFrente, this.state.FotoIneFrente.name);
        form_data.append('FotoIneTrasera', this.state.FotoIneTrasera, this.state.FotoIneTrasera.name);
        axios
            .post('http://127.0.0.1:8000/credencialperdida', form_data)
            .then(response => {
                console.log(response)
                window.location.reload()
            })
            .catch(error => {
                console.log(error)
            })
    };

    render(){
        const { NombreA, Carrera, Codigo } = this.state
        return(
            <div>

            <div className= "container mt-5">
            <Link to='/crendencialperdida/view' className= "btn btn-dark">Lista</Link>
            </div>
                <h1 className="display-3">Credencial Perdida y Recuperada</h1>
                <Form onSubmit={this.submitHandler} className="needs-validation">
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
                        <div className="col-md">
                            Foto ID frente: <input accept="image/png, image/jpeg" className="form-control" type="file" name="FotoIneFrente" onChange={this.handleInputChange}></input>
                            </div>
                            <div className="col-md">
                            Foto Id detras: <input accept="image/png, image/jpeg" className="form-control" type="file" name="FotoIneTrasera" onChange={this.handleInputChange}></input>
                            </div>
                        <button type='Submit' className='btn btn-primary btn-lg btn-success' href="">Submit</button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default CredencialPerdida