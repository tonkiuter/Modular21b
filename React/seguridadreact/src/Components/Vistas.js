import React, { Component } from 'react';
import axios from 'axios';

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
                <form onSubmit={this.submitHandler} className="needs-validation">
                    <table className="table table-bordered">
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
                            <tr className="table-active">
                                <th>Puntos de Revision</th>
                                <th colSpan = "2">Señaletica</th>
                                <th colSpan = "2">Cumple</th>
                                <th colSpan = "2">Comentarios y/o Observaciones</th>
                            </tr>
                            <tr>
                                <th colSpan = "7" className="table-dark">Seguridad y Proteccion Civil</th>
                            </tr>
                            <tr>
                                <th>Regadera de Emergencia</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                                        <label className="custom-control-label" for="customCheck1">Si</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck2"></input>
                                        <label className="custom-control-label" for="customCheck2">NO</label>
                                    </div>
                                </th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck3"></input>
                                        <label className="custom-control-label" for="customCheck3">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck4"></input>
                                        <label className="custom-control-label" for="customCheck4">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Lavaojos de Emergencia</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck5"></input>
                                        <label className="custom-control-label" for="customCheck5">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck6"></input>
                                        <label className="custom-control-label" for="customCheck6">NO</label>
                                    </div>
                                </th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck7"></input>
                                        <label className="custom-control-label" for="customCheck7">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck8"></input>
                                        <label className="custom-control-label" for="customCheck8">NO</label>
                                    </div>
                                </th>
                                <th colSpan="2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Botiquin de Primeros Auxilios</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck9"></input>
                                        <label className="custom-control-label" for="customCheck9">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck10"></input>
                                        <label className="custom-control-label" for="customCheck10">NO</label>
                                    </div>
                                </th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck11"></input>
                                        <label className="custom-control-label" for="customCheck11">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck12"></input>
                                        <label className="custom-control-label" for="customCheck12">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Extintores</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck13"></input>
                                        <label className="custom-control-label" for="customCheck13">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
		                            <div className="custom-control custom-checkbox">
			                            <input type="checkbox" className="custom-control-input" id="customCheck14"></input>
			                            <label className="custom-control-label" for="customCheck14">NO</label>
		                            </div>
	                            </th>
	                            <th className="bg-success">
		                            <div className="custom-control custom-checkbox">
			                            <input type="checkbox" className="custom-control-input" id="customCheck15"></input>
			                            <label className="custom-control-label" for="customCheck15">SI</label>
		                            </div>
	                            </th>
	                            <th className="bg-danger">
		                            <div className="custom-control custom-checkbox">
			                            <input type="checkbox" className="custom-control-input" id="customCheck16"></input>
			                            <label className="custom-control-label" for="customCheck16">SI</label>
		                            </div>
	                            </th>
                                <th>
                                    PQS
                                    <div className="custom-control custom-checkbox custom-control-inline">
			                            <input type="checkbox" className="custom-control-input" id="customCheck18"></input>
			                            <label className="custom-control-label" for="customCheck18">1 KG</label>
		                            </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck19"></input>
                                        <label className="custom-control-label" for="customCheck19">2 KG</label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck20"></input>
                                        <label className="custom-control-label" for="customCheck20">2.5 KG</label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck22"></input>
                                        <label className="custom-control-label" for="customCheck22">4.5 KG</label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck23"></input>
                                        <label className="custom-control-label" for="customCheck23">6 KG</label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck24"></input>
                                        <label className="custom-control-label" for="customCheck24">9 KG</label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck25"></input>
                                        <label className="custom-control-label" for="customCheck25">35 KG</label>
                                    </div>
                                </th>
                                <tr>
                                    <th>
                                        CO2
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="customCheck27"></input>
                                            <label className="custom-control-label" for="customCheck27">5 LBS</label>
                                        </div>
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="customCheck28"></input>
                                            <label className="custom-control-label" for="customCheck28">10 LBS</label>
                                        </div>
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="customCheck29"></input>
                                            <label className="custom-control-label" for="customCheck29">15 LBS</label>
                                        </div>
                                    </th>
                                    <th>
                                        HFC - 236
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="customCheck31"></input>
                                            <label className="custom-control-label" for="customCheck31">2.5 KG</label>
                                        </div>
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="customCheck32"></input>
                                            <label className="custom-control-label" for="customCheck32">4 KG</label>
                                        </div>
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="customCheck33"></input>
                                            <label className="custom-control-label" for="customCheck33">4.5 KG</label>
                                        </div>
                                    </th>
                                </tr>
                            </tr>
                            <tr>
                                <th>Tuberias Identificadas</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck34"></input>
                                        <label class="custom-control-label" for="customCheck34">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck35"></input>
                                        <label className="custom-control-label" for="customCheck35">NO</label>
                                    </div>
                                </th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck36"></input>
                                        <label className="custom-control-label" for="customCheck36">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck37"></input>
                                        <label className="custom-control-label" for="customCheck37">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Obligacion Equipo de Proteccion Personal</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck38"></input>
                                        <label className="custom-control-label" for="customCheck38">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck39"></input>
                                        <label className="custom-control-label" for="customCheck39">NO</label>
                                    </div>
                                </th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck40"></input>
                                        <label className="custom-control-label" for="customCheck40">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck41"></input>
                                        <label className="custom-control-label" for="customCheck41">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Ruta de Evacuacion</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck42"></input>
                                        <label className="custom-control-label" for="customCheck42">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck43"></input>
                                        <label className="custom-control-label" for="customCheck43">NO</label>
                                    </div>
                                </th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck44"></input>
                                        <label className="custom-control-label" for="customCheck44">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck45"></input>
                                        <label className="custom-control-label" for="customCheck45">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "2">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck46"></input>
                                        <label className="custom-control-label" for="customCheck46">DERECHA</label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck47"></input>
                                        <label className="custom-control-label" for="customCheck47">IZQUIERDA</label>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th>En caso de Sismo/Incendio</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck48"></input>
                                        <label className="custom-control-label" for="customCheck48">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck49"></input>
                                        <label className="custom-control-label" for="customCheck49">NO</label>
                                    </div>
                                </th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck50"></input>
                                        <label className="custom-control-label" for="customCheck50">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck51"></input>
                                        <label className="custom-control-label" for="customCheck51">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Centro de Cargo</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck52"></input>
                                        <label className="custom-control-label" for="customCheck52">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck53"></input>
                                        <label className="custom-control-label" for="customCheck53">NO</label>
                                    </div>
                                </th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck54"></input>
                                        <label className="custom-control-label" for="customCheck54">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck55"></input>
                                        <label className="custom-control-label" for="customCheck55">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Alarma</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck56"></input>
                                        <label className="custom-control-label" for="customCheck56">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck57"></input>
                                        <label className="custom-control-label" for="customCheck57">NO</label>
                                    </div>
                                </th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck58"></input>
                                        <label className="custom-control-label" for="customCheck58">NO</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck59"></input>
                                        <label className="custom-control-label" for="customCheck59">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Salida de Emergencia</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck60"></input>
                                        <label className="custom-control-label" for="customCheck60">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck61"></input>
                                        <label className="custom-control-label" for="customCheck61">NO</label>
                                    </div>
                                </th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck62"></input>
                                        <label className="custom-control-label" for="customCheck62">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck63"></input>
                                        <label className="custom-control-label" for="customCheck63">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Area de Reactivos</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck64"></input>
                                        <label className="custom-control-label" for="customCheck64">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck65"></input>
                                        <label className="custom-control-label" for="customCheck65">NO</label>
                                    </div>
                                </th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck66"></input>
                                        <label className="custom-control-label" for="customCheck66">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck67"></input>
                                        <label className="custom-control-label" for="customCheck67">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Kit para Derrames</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck68"></input>
                                        <label className="custom-control-label" for="customCheck68">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck69"></input>
                                        <label className="custom-control-label" for="customCheck69">NO</label>
                                    </div>
                                </th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck70"></input>
                                        <label className="custom-control-label" for="customCheck70">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck71"></input>
                                        <label className="custom-control-label" for="customCheck71">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Area de Disposicion Especial para Residuos</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck72"></input>
                                        <label className="custom-control-label" for="customCheck72">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck73"></input>
                                        <label className="custom-control-label" for="customCheck73">NO</label>
                                    </div>
                                </th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck74"></input>
                                        <label className="custom-control-label" for="customCheck74">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck75"></input>
                                        <label className="custom-control-label" for="customCheck75">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Reglamento Interno Visible</th>
                                <th colSpan = "2" className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck76"></input>
                                        <label className="custom-control-label" for="customCheck76">SI</label>
                                    </div>
                                </th>
                                <th colSpan = "2" className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck77"></input>
                                        <label className="custom-control-label" for="customCheck77">NO</label>
                                    </div>
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
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck78"></input>
                                        <label className="custom-control-label" for="customCheck78">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck79"></input>
                                        <label className="custom-control-label" for="customCheck79">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Control Maestro de Energia Electrica</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck80"></input>
                                        <label className="custom-control-label" for="customCheck80">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck81"></input>
                                        <label className="custom-control-label" for="customCheck81">NO</label>
                                    </div>
                                </th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck82"></input>
                                        <label className="custom-control-label" for="customCheck82">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck83"></input>
                                        <label className="custom-control-label" for="customCheck83">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Control Maestro Suministro de Gas</th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck84"></input>
                                        <label className="custom-control-label" for="customCheck84">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck85"></input>
                                        <label className="custom-control-label" for="customCheck85">NO</label>
                                    </div>
                                </th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck86"></input>
                                        <label className="custom-control-label" for="customCheck86">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck87"></input>
                                        <label className="custom-control-label" for="customCheck87">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "2">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Drenaje</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck89"></input>
                                        <label className="custom-control-label" for="customCheck89">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck90"></input>
                                        <label className="custom-control-label" for="customCheck90">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Iluminacion</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck91"></input>
                                        <label className="custom-control-label" for="customCheck91">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck92"></input>
                                        <label className="custom-control-label" for="customCheck92">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>Sistema de Ventilacion/Extraccion Adecuado</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck93"></input>
                                        <label className="custom-control-label" for="customCheck93">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck94"></input>
                                        <label className="custom-control-label" for="customCheck94">NO</label>
                                    </div>
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
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck95"></input>
                                        <label className="custom-control-label" for="customCheck95">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck96"></input>
                                        <label className="custom-control-label" for="customCheck96">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>NOM 026 STPS (Señaleticas)</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck97"></input>
                                        <label className="custom-control-label" for="customCheck97">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck98"></input>
                                        <label className="custom-control-label" for="customCheck98">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>NOM 114 STPS (Comunicacion de Riesgos)</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck99"></input>
                                        <label className="custom-control-label" for="customCheck99">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck100"></input>
                                        <label className="custom-control-label" for="customCheck100">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>NOM 052 SEMARNAT (Residuos Peligrosos)</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck101"></input>
                                        <label className="custom-control-label" for="customCheck101">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck102"></input>
                                        <label className="custom-control-label" for="customCheck102">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                            <tr>
                                <th>NOM-002-2010-STPS, NOM-154-2005-SCFI</th>
                                <th colSpan = "2"></th>
                                <th className="bg-success">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck103"></input>
                                        <label className="custom-control-label" for="customCheck103">SI</label>
                                    </div>
                                </th>
                                <th className="bg-danger">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck104"></input>
                                        <label className="custom-control-label" for="customCheck104">NO</label>
                                    </div>
                                </th>
                                <th colSpan = "4">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <button type='Submit' className='btn btn-primary btn-lg btn-success' href="">Submit</button>
                </form>
            </div>
        )
    }
}

export default Vistas