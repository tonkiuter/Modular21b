import React, { Component } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

class HojaUrgencias extends Component{
    constructor(props){
        super(props)

        this.state={
            Fecha: '',
            Nombre: '',
            Edad: '',
            Adscripcion: '',
            Codigo: '',
            Cargo: '',
            NoTelefono: '',
            ProvieneDe: '',
            Ubicacion: '',
            TrasladoA: '',
            Padecimiento: '',
            Diabetes: '',
            DiabetesDiagnostico: '',
            DiabetesTratamiento: '',
            Hipertension: '',
            HipertensionDiagnostico: '',
            HipertensionTratamiento: '',
            Epilepsia: '',
            EpilepsiaDiagnostico: '',
            EpilepsiaTratamiento: '',
            Asma: '',
            AsmaDiagnostico: '',
            AsmaTratamiento: '',
            Cirugias: '',
            Alergias: '',
            Sangre: '',
            TensionArterial: '',
            FC: '',
            FR: '',
            Temperatura: '',
            Saturacion: '',
            Glucosa: '',
            EscalaGlasgow: '',
            Neurologico: '',
            CabezaCuello: '',
            Cardiopulmonar: '',
            Abdomen: '',
            Extremidades: '',
            Diagnostico: '',
            Condicion: '',
            PronostioS: '',
            Tratamiento: '',
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e=>{
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://127.0.0.1:8000/hojaurgencias', this.state)
            .then(response =>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }

    render(){
        const{ Fecha, Nombre, Edad, Adscripcion, Codigo, Cargo, NoTelefono, ProvieneDe, Ubicacion, TrasladoA, Padecimiento, Diabetes, DiabetesDiagnostico, DiabetesTratamiento, Hipertension, HipertensionDiagnostico, HipertensionTratamiento, Epilepsia, EpilepsiaDiagnostico, EpilepsiaTratamiento, Asma, AsmaDiagnostico, AsmaTratamiento, Cirugias, Alergias, Sangre, TensionArterial, FC, FR, Temperatura, Saturacion, Glucosa, EscalaGlasgow, Neurologico, CabezaCuello, Cardiopulmonar, Abdomen, Extremidades, Diagnostico, Condicion, PronostioS, Tratamiento, } = this.state
        return(
            <div>
                <h1 className="display-3">Hoja de Urgencias</h1>
                <h3 className="display-4">Ficha Clinica</h3>
                <Form onSubmit={this.submitHandler} className="needs-validation"> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                Fecha: <input className="form-control" type="datetime-local" name="Fecha" value={Fecha} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Nombre: <input className="form-control" type="text" name="Nombre" value={Nombre} onChange={this.changeHandler} required></input>
                            </div>
                            <div className="col-md">
                                Edad: <input className="form-control" type="text" name="Edad" value={Edad} onChange={this.changeHandler} required></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Adscripcion: <input className="form-control" type="text" name="Adscripcion" value={Adscripcion} onChange={this.changeHandler} required></input>
                            </div>
                            <div className="col-md">
                                Codigo: <input className="form-control" type="text" name="Codigo" value={Codigo} onChange={this.changeHandler} required></input>
                            </div>
                            <div className="col-md">
                                Cargo: <input className="form-control" type="text" name="Cargo" value={Cargo} onChange={this.changeHandler} required></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Tel/Cel: <input className="form-control" type="text" name="NoTelefono" value={NoTelefono} onChange={this.changeHandler} required></input>
                            </div>
                        </div>
                        <div className="row">
                            Proveniente de: <input className="form-control" type="text" name="ProvieneDe" value={ProvieneDe} onChange={this.changeHandler} required></input>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Ubicacion del Servicio: <input className="form-control" type="text" required name="Ubicacion" value={Ubicacion} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Traslado A: <input className="form-control" type="text" required name="TrasladoA" value={TrasladoA} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <u>Principio y Evolucion del Paciente:</u>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <textarea className="form-control" required name="Padecimiento" value={Padecimiento} onChange={this.changeHandler}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <u>Antescedentes de Importancia:</u>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="Diabetes" name="group3" type={type} id={`inline-${type}-1`} value={Diabetes} onChange={this.changeHandler}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                Tiempo de Diagnostico: <input className="form-control" type="text" name="DiabetesDiagnostico" value={DiabetesDiagnostico} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                                Tratamiento: <input className="form-control" type="text" name ="DiabetesTratamiento" value={DiabetesTratamiento} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="Hipertension" name="group4" type={type} id={`inline-${type}-1`} value={Hipertension} onChange={this.changeHandler}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                Tiempo de Diagnostico: <input className="form-control" type="text" name="HipertensionDiagnostico" value={HipertensionDiagnostico} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                                Tratamiento: <input className="form-control" type="text" name="HipertensionTratamiento" value={HipertensionTratamiento} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="Epilepsia" name="group5" type={type} id={`inline-${type}-1`} value={Epilepsia} onChange={this.changeHandler}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                Tiempo de Diagnostico: <input className="form-control" type="text" name="EpilepsiaDiagnostico" value={EpilepsiaDiagnostico} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                                Tratamiento: <input className="form-control" type="text" name="EpilepsiaTratamiento" value={EpilepsiaTratamiento} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="Asma" name="group6" type={type} id={`inline-${type}-1`} value={Asma} onChange={this.changeHandler}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                Tiempo de Diagnostico: <input className="form-control" type="text" name="AsmaDiagnostico" value={AsmaDiagnostico} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                                Tratamiento: <input className="form-control" type="text" name="AsmaTratamiento" value={AsmaTratamiento} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Cirugias: <input className="form-control" type="text" name="Cirugias" value={Cirugias} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Alergias: <input className="form-control" type="text" name="Alergias" value={Alergias} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                                Grupo y RH: <input className="form-control" type="text" name="Sangre" value={Sangre} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <u>Exploracion Fisica:</u>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Tension Arterial: <input className="form-control" type="text" name="TensionArterial" value={TensionArterial} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                                FC: <input className="form-control" type="text" name="FC" value={FC} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                                FR: <input className="form-control" type="text" name="FR" value={FR} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                                Temperatura: <input className="form-control" type="text" name="Temperatura" value={Temperatura} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Saturacion: <input className="form-control" type="text" name="Saturacion" value={Saturacion} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                                Glucosa: <input className="form-control" type="text" name="Glucosa" value={Glucosa} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                                Escala Glasgow: <input className="form-control" type="text" name="EscalaGlasgow" value={EscalaGlasgow} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Neurologico: <input className="form-control" type="text" name="Neurologico" value={Neurologico} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Cabeza y Cuello: <input className="form-control" type="text" name="CabezaCuella" value={CabezaCuello} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Cardiopulmonar: <input className="form-control" type="text" name="Cardiopulmonar" value={Cardiopulmonar} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Abdomen: <input className="form-control" type="text" name="Abdomen" value={Abdomen} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Extremidades: <input className="form-control" type="text" name="Extremidades" value={Extremidades} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Diagnostico: <input className="form-control" type="text" name="Diagnostico" value={Diagnostico} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Condicion: <input className="form-control" type="text" name="Condicion" value={Condicion} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                                Pronostico: <input className="form-control" type="text" name="PronostioS" value={PronostioS} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Tratamiento: <textarea className="form-control" name="Tratamiento" value={Tratamiento} onChange={this.changeHandler}></textarea>
                            </div>
                        </div>
                    </div>
                    <button type='Submit' className='btn btn-primary btn-lg btn-success' href="">Submit</button>
                </Form>
            </div>
        )
    }
}

export default HojaUrgencias