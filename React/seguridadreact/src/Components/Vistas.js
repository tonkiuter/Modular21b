import React, { Component } from 'react';
import axios from 'axios';
import 'react-bootstrap';
import { Form, FormCheck, Table } from 'react-bootstrap';

class Vistas extends Component{
    constructor(props) {
        super(props)

        this.state={
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
            .post('http://127.0.0.1:8000/vistas', this.state)
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
                <Form onSubmit={this.submitHandler} className="needs-validation">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th scope="col" colSpan = "7">Universidad de Guadalajara</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col" colSpan="7">Centro Universitario de Ciencias Exactas e Ingenierias</th>
                            </tr>
                            <tr>
                                <th scope="col" colSpan="7">Seguridad CUCEI</th>
                            </tr>
                            <tr>
                                <th colSpan="7">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-default">SUPERVISION Nombre del Modulo y/o Instalacion</span>
                                        </div>
                                        <label htmlFor="validationCustom01"></label>
                                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required></input>
                                        <div className="invalid-feedback">
                                            Falta Nombre
                                        </div>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th colSpan = "7" className="table-dark">Seguridad y Proteccion Civil</th>
                            </tr>
                            <tr className="table-active">
                                <th>Puntos de Revision</th>
                                <th colSpan = "2">Señaletica</th>
                                <th colSpan = "2">Cumple</th>
                                <th colSpan = "2">Comentarios y/o Observaciones</th>
                            </tr>
                            <tr>
                                <th>Regadera de Emergencia</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group1" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group2" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group3" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group4" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Lavaojos de Emergencia</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group5" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group6" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group7" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group8" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan="2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Botiquin de Primeros Auxilios</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group9" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group10" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group11" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group12" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Extintores</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group13" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group14" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
	                            </th>
	                            <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group15" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
	                            </th>
	                            <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group16" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
	                            </th>
                                <th colSpan="2">
                                    PQS
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="1 KG" name="group17" type={type} id={`inline-${type}-1`}/>
                                            <Form.Check inline label="2 KG" name="group17" type={type} id={`inline-${type}-1`}/>
                                            <Form.Check inline label="2.5 KG" name="group17" type={type} id={`inline-${type}-1`}/>
                                            <Form.Check inline label="4.5 KG" name="group17" type={type} id={`inline-${type}-1`}/>
                                            <Form.Check inline label="6 KG" name="group17" type={type} id={`inline-${type}-1`}/>
                                            <Form.Check inline label="9 KG" name="group17" type={type} id={`inline-${type}-1`}/>
                                            <Form.Check inline label="35 KG" name="group17" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                    <tr>
                                        <th>
                                            CO2
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check inline label="5 LBS" name="group18" type={type} id={`inline-${type}-1`}/>
                                                    <Form.Check inline label="10 LBS" name="group18" type={type} id={`inline-${type}-1`}/>
                                                    <Form.Check inline label="15 LBS" name="group18" type={type} id={`inline-${type}-1`}/>
                                                </div>
                                            ))}
                                        </th>
                                        <th>
                                            HFC - 236
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check inline label="2.5 KG" name="group19" type={type} id={`inline-${type}-1`}/>
                                                    <Form.Check inline label="4 KG" name="group19" type={type} id={`inline-${type}-1`}/>
                                                    <Form.Check inline label="4.5 KG" name="group19" type={type} id={`inline-${type}-1`}/>
                                                </div>
                                            ))}
                                        </th>
                                    </tr>
                                </th>
                            </tr>
                            <tr>
                                <th>Tuberias Identificadas</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group20" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group21" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group22" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group23" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Obligacion Equipo de Proteccion Personal</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group24" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group25" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group26" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group27" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Ruta de Evacuacion</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group28" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group29" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group30" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group31" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "2">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                             <Form.Check inline label="DERECHA" name="group32" type={type} id={`inline-${type}-1`}/>
                                            <Form.Check inline label="IZQUIERDA" name="group32" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                            </tr>
                            <tr>
                                <th>En caso de Sismo/Incendio</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group33" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group34" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group35" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group36" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Centro de Cargo</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group37" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group38" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group39" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group40" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Alarma</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group41" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group42" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group43" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group44" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Salida de Emergencia</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group45" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group46" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group47" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group48" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Area de Reactivos</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group49" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group50" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group51" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group52" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Kit para Derrames</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group53" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group54" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group55" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group56" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Area de Disposicion Especial para Residuos</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group57" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group58" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group59" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group60" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Reglamento Interno Visible</th>
                                <th colSpan="2"></th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group61" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group62" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th colSpan = "7" className="table-dark">General</th>
                            </tr>
                            <tr>
                                <th>Agua Corriente</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group63" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group64" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Control Maestro de Energia Electrica</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group65" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group66" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group67" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group68" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Control Maestro Suministro de Gas</th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group69" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group70" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="Si" name="group71" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group72" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Drenaje</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group73" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group74" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Iluminacion</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group75" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group76" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Sistema de Ventilacion/Extraccion Adecuado</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group77" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group78" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th colSpan = "7" className="table-dark">Normas para Cumplir</th>
                            </tr>
                            <tr>
                                <th>NOM 018 STPS (Identificacion de Reactivos)</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group79" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group80" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>NOM 026 STPS (Señaleticas)</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group81" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group82" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>NOM 114 STPS (Comunicacion de Riesgos)</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group83" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group84" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>NOM 052 SEMARNAT (Residuos Peligrosos)</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group85" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group86" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>NOM-002-2010-STPS, NOM-154-2005-SCFI</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="SI" name="group87" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th className="bg-danger">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check inline label="NO" name="group88" type={type} id={`inline-${type}-1`}/>
                                        </div>
                                    ))}
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                        </tbody>
                    </Table>
                    <button type='Submit' className='btn btn-primary btn-lg btn-success' href="">Submit</button>
                </Form>
            </div>
        )
    }
}

export default Vistas