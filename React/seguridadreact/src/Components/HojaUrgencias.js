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
                <Form className="needs-validation"> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <p className="text-right">Fecha:</p>
                            </div>
                        </div>

                    </div>
                </Form>
            </div>
        )
    }
}

export default HojaUrgencias