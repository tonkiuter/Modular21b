import React, { Component } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

class ReporteIncidentesMatPel extends Component{
    constructor(props){
        super(props)

        this.state={
            id: '',
            Fecha: '',
            Ubicacion: '',
            Fenomeno: '',
            Descripcion: '',
            Evaluacion: '',
            Tareas: '',
            Recursos: '',
            Estrategias: '',
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
            .post('http://127.0.0.1:8000/reporteincidentesmatpel', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        const{ Ubicacion, Fenomeno, Descripcion, Evaluacion, Tareas, Recursos, Estrategias } = this.state
        return(
            <div>
                <h1 className="display-4">Reporte Incidentes Mat-Pel</h1>
                <Form onSubmit={this.submitHandler} className="needs-validation">
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                Ubicacion: <input className="form-control" type="text" required name="Ubicacion" value={Ubicacion} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Fenomeno Perutbador:  <input className="form-control" type="text" required name="Fenomeno" value={Fenomeno} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                                Descripcion de los Hechos: <textarea className="form-control" required name="Descripcion" value={Descripcion} onChange={this.changeHandler}></textarea>
                            </div>
                            <div className="col-md">
                                Evaluacion de Daños: <textarea className="form-control" required name="Evaluacion" value={Evaluacion} onChange={this.changeHandler}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Tareas Realizadas:  <textarea className="form-control" required name="Tareas" value={Tareas} onChange={this.changeHandler}></textarea>
                            </div>
                            <div className="col-md">
                                Recursos Humanos y Materiales Utilizados: <textarea className="form-control" required name="Recursos" value={Recursos} onChange={this.changeHandler}></textarea>
                            </div>
                            <div className="col-md">
                                Estrategias y Recomendaciones para evitar Incidencias: <textarea className="form-control" name="Estrategias" value={Estrategias} onChange={this.changeHandler}></textarea>
                            </div>
                        </div>
                        <button type='Submit' className='btn btn-primary btn-lg btn-success' href="">Submit</button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default ReporteIncidentesMatPel