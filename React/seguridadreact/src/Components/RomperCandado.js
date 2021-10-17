import React, { Component } from 'react';
import axios from 'axios';

class RomperCandado extends Component{
    constructor(props) {
        super(props)

        this.state={
            id: '',
            CodigoReporte: '6',
            NombreAlumno:'',
            CodigoAlumno:'',
            Carrera:'',
            FotoIdF: 'FSASF',
            FotoIdB: 'SADFAS',
            Descripcion: 'ALGHAASFGA',
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
            .post('http://127.0.0.1:8000/RomperCandado', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        const { NombreAlumno, Carrera, CodigoAlumno} = this.state
        return (
            <div>
                <h1 className="display-3">Romper Candado</h1>
                <form onSubmit={this.submitHandler} className="needs-validation">
                    <div  className="container">
                        <div className="row">
                            <div className="col-md">
                                Nombre de Alumno: <input className="form-control" type="text" name="NombreAlumno" value={NombreAlumno} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                                Carrera: <input className="form-control" type="text" name="Carrera" value={Carrera} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                                Codigo: <input className="form-control" type="text" name="CodigoAlumno" value={CodigoAlumno} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                Fecha:
                            </div>
                            <div className="col-md">
                                <p>
                                    Yo: <input className="form-control" type="text" id="disabledTextInput"></input>
                                    <br></br>
                                    autorizo que el personal de seguridad interna de CUCEI, le de apetura
                                    <br></br>
                                    a mi candado que se encuentra en: 
                                    <select className="custom-select" required>
                                        <option defaultValue>Seleccionar...</option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </p>
                            </div>
                        </div>
                        <button type='Submit' className='btn btn-primary btn-lg btn-success' href="">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
/*
function RomperCandado(){
    return (
        <div>
            <h1 class="display-3">Pase de Salida/Tarjeton Perdido</h1>
            <form class="needs-validation">
                <div class="container">
                    <div class="row">
                        <div class="col-md">
                            Nombre de Alumno: <input class="form-control" type="text" required></input>
                        </div>
                        <div class="col-md">
                            Carrera: 
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
*/
/*const Fe = () => <h1>Hello Prro</h1>*/

export default RomperCandado