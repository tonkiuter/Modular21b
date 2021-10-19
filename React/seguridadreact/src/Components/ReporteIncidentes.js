import React, { Component } from 'react';
import axios from 'axios';

class ReporteIncidentes extends Component{
    constructor(props) {
        super(props)

        this.state={
            id: '',
            CodigoAlumno: '',
            FechaHora:'',
            Ubicacion: '',
            ObjetosP: '',
            FotoIdF: '',
            FotoIdB: '',
            Estatura: '',
            Apariencia: '',
            Tez: '',
            Cabello: '',
            Ojos: '',
            Cara: '',
            Boca: '',
            TipoRopa: '',
            Gorra: '',
            EdadAprox: '',
            Cicatrices: '',
            Tatuajes: '',
            Piercings: '',
            Otra: '',
            Huida: '',
            Observacion: '',
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
            .post('http://127.0.0.1:8000/incidencias', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        const { CodigoAlumno, FotoIdF, FotoIdB, FechaHora, Ubicacion, ObjetosP, Estatura,
        Apariencia, Tez, Cabello, Ojos, Cara, Boca, TipoRopa, Gorra, EdadAprox, Cicatrices,
        Tatuajes, Piercings, Otra, Huida, Observacion} = this.state
        return (
            <div>
                <h1 className="display-3">Reporte de Incidentes</h1>
                <form onSubmit={this.submitHandler} className="needs-validation">
                    <div  className="container">
                        <div className="row">
                            <div className="col-md">
                            Codigo Alumno: <input className="form-control" type="text" name="CodigoAlumno" value={CodigoAlumno} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Foto ID frente: <input className="form-control" type="text" name="FotoIdF" value={FotoIdF} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Foto ID detras: <input className="form-control" type="text" name="FotoIdB" value={FotoIdB} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Fecha y Hora: <input className="form-control" type="datetime-local" name="FechaHora" value={FechaHora} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Ubicacion: <input className="form-control" type="text" name="Ubicacion" value={Ubicacion} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Objetos perdidos: <input className="form-control" type="text" name="ObjetosP" value={ObjetosP} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Estatura en metros: <input className="form-control" type="number" step="0.01" name="Estatura" value={Estatura} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Apariencia: <input className="form-control" type="text" name="Apariencia" value={Apariencia} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Tez: <input className="form-control" type="text" name="Tez" value={Tez} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Cabello: <input className="form-control" type="text" name="Cabello" value={Cabello} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Ojos: <input className="form-control" type="text" name="Ojos" value={Ojos} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Cara: <input className="form-control" type="text" name="Cara" value={Cara} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Boca: <input className="form-control" type="text" name="Boca" value={Boca} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Tipo de Ropa: <input className="form-control" type="text" name="TipoRopa" value={TipoRopa} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Gorra: <input className="form-control" type="text" name="Gorra" value={Gorra} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Edad Aproximada: <input className="form-control" type="number" min="1" max="100" step="1" name="EdadAprox" value={EdadAprox} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Cicatrices: <input className="form-control" type="text" name="Cicatrices" value={Cicatrices} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Tatuajes: <input className="form-control" type="text" name="Tatuajes" value={Tatuajes} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Piercings: <input className="form-control" type="text" name="Piercings" value={Piercings} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Otra: <input className="form-control" type="text" name="Otra" value={Otra} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Huida: <input className="form-control" type="text" name="Huida" value={Huida} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Observacion: <input className="form-control" type="text" name="Observacion" value={Observacion} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <button type='Submit' className='btn btn-primary btn-lg btn-success' href="">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default ReporteIncidentes