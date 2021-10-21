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
            CUCEI: '',
            Prepa12: '',
            VOCA: '',
            POLI: '',
            CDU: '',
            Exterior: '',
            Ubicacion: '',
            TrasladoCUCEI: '',
            IMSS: '',
            ISSSTE: '',
            SMM: '',
            CRM: '',
            PRIVADO: '',
            SeNiega: '',
            NoAmerita: '',
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
        const{ Fecha, Nombre, Edad, Adscripcion, Codigo, Cargo, NoTelefono, CUCEI, Prepa12, VOCA, POLI, CDU, Exterior, Ubicacion, TrasladoCUCEI, IMSS, ISSSTE, SMM, CRM, PRIVADO, SeNiega, NoAmerita, Padecimiento, Diabetes, DiabetesDiagnostico, DiabetesTratamiento, Hipertension, HipertensionDiagnostico, HipertensionTratamiento, Epilepsia, EpilepsiaDiagnostico, EpilepsiaTratamiento, Asma, AsmaDiagnostico, AsmaTratamiento, Cirugias, Alergias, Sangre, TensionArterial, FC, FR, Temperatura, Saturacion, Glucosa, EscalaGlasgow, Neurologico, CabezaCuello, Cardiopulmonar, Abdomen, Extremidades, Diagnostico, Condicion, PronostioS, Tratamiento, } = this.state
        return(
            <div>
                <h1 className="display-3">Hoja de Urgencias</h1>
                <h3 className="display-4">Ficha Clinica</h3>
                <Form onSubmit={this.submitHandler} className="needs-validation"> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <p>Fecha:</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Nombre: <input className="form-control" type="text" required></input>
                            </div>
                            <div className="col-md">
                                Edad: <input class="form-control" type="text" required></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Adscripcion: <input className="form-control" type="text" required></input>
                            </div>
                            <div className="col-md">
                                Codigo: <input className="form-control" type="text" required></input>
                            </div>
                            <div className="col-md">
                                Cargo: <input className="form-control" type="text" required></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Tel/Cel: <input className="form-control" type="text" required></input>
                            </div>
                            <div className="col-md">
                                Contacto de Urgencia: <input className="form-control" type="text" required></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="CUCEI" name="group1" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="PREPA #12" name="group1" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="VOCA" name="group1" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="POLITECNICO" name="group1" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="CDU" name="group1" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="EXTERIOR" name="group1" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Ubicacion del Servicio: <input className="form-control" type="text" required></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Traslado:
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="CUCEI" name="group2" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="IMSS" name="group2" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="ISSSTE" name="group2" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="SMM" name="group2" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="CRN" name="group2" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="PRIVADO" name="group2" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="Se Niega" name="group2" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="No Amerita" name="group2" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <u>Principio y Evolucion del Paciente:</u>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <textarea className="form-control" required></textarea>
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
                                        <Form.Check inline label="Diabetes" name="group3" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                Tiempo de Diagnostico: <input className="form-control" type="text"></input>
                            </div>
                            <div className="col-md">
                                Tratamiento: <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="Hipertension" name="group4" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                Tiempo de Diagnostico: <input className="form-control" type="text"></input>
                            </div>
                            <div className="col-md">
                                Tratamiento: <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="Epilepsia" name="group5" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                Tiempo de Diagnostico: <input className="form-control" type="text"></input>
                            </div>
                            <div className="col-md">
                                Tratamiento: <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="Asma" name="group6" type={type} id={`inline-${type}-1`}/>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md">
                                Tiempo de Diagnostico: <input className="form-control" type="text"></input>
                            </div>
                            <div className="col-md">
                                Tratamiento: <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Cirugias: <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Alergias: <input className="form-control" type="text"></input>
                            </div>
                            <div className="col-md">
                                Grupo y RH: <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <u>Exploracion Fisica:</u>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Tension Arterial: <input className="form-control" type="text"></input>
                            </div>
                            <div className="col-md">
                                FC: <input className="form-control" type="text"></input>
                            </div>
                            <div className="col-md">
                                FR: <input className="form-control" type="text"></input>
                            </div>
                            <div className="col-md">
                                Temperatura: <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Saturacion: <input class="form-control" type="text"></input>
                            </div>
                            <div className="col-md">
                                Glucosa: <input class="form-control" type="text"></input>
                            </div>
                            <div className="col-md">
                                Escala Glasgow: <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Neurologico: <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Cabeza y Cuello: <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Cardiopulmonar: <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Abdomen: <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Extremidades: <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Diagnostico: <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Condicion: <input className="form-control" type="text"></input>
                            </div>
                            <div className="col-md">
                                Pronostico: <input className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Tratamiento: <textarea className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}

export default HojaUrgencias