import React, { Component } from "react";
import axios from "axios";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                window.location.reload()
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        const{ Ubicacion, Fenomeno, Descripcion, Evaluacion, Tareas, Recursos, Estrategias } = this.state
        return(
            <div>
                ~{"\n"}
                <div className= "container mt-5">
                    <Link to='/incidentesmatpet/view' className= "btn btn-info">Listado</Link>
                </div>
                <h1 className="display-4" align="center">
                    <img alt="" src="IncidentesIcon.png" width="75" height="75"/>{' '}
                    Reporte Incidentes Mat-Pel{' '}
                    <img alt="" src="IncidentesIcon.png" width="75" height="75"/>{' '}
                </h1>
                <Form onSubmit={this.submitHandler} className="needs-validation">
                    <Container>
                        <Row>
                            <Col>
                                Ubicacion: <input className="form-control" type="text" required name="Ubicacion" value={Ubicacion} onChange={this.changeHandler}></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Fenomeno Perutbador:  <input className="form-control" type="text" required name="Fenomeno" value={Fenomeno} onChange={this.changeHandler}></input>
                            </Col>
                            <Col>
                                Descripcion de los Hechos: <textarea className="form-control" required name="Descripcion" value={Descripcion} onChange={this.changeHandler}></textarea>
                            </Col>
                            <Col>
                                Evaluacion de Daños: <textarea className="form-control" required name="Evaluacion" value={Evaluacion} onChange={this.changeHandler}></textarea>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Tareas Realizadas:  <textarea className="form-control" required name="Tareas" value={Tareas} onChange={this.changeHandler}></textarea>
                            </Col>
                            <Col>
                                Recursos Humanos y Materiales Utilizados: <textarea className="form-control" required name="Recursos" value={Recursos} onChange={this.changeHandler}></textarea>
                            </Col>
                            <Col>
                                Estrategias y Recomendaciones para evitar Incidencias: <textarea className="form-control" name="Estrategias" value={Estrategias} onChange={this.changeHandler}></textarea>
                            </Col>
                        </Row>
                        <br></br>
                        <center>
                            <button type='Submit' className='btn btn-primary btn-lg btn-success' href="">Submit</button>
                        </center>
                    </Container>
                </Form>
            </div>
        )
    }
}

export default ReporteIncidentesMatPel