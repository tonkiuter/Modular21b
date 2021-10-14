import React, { Component } from 'react';
import axios from 'axios';

class RomperCandado extends Component{
    render(){
        return (
            <div>
            <h1 className="display-3">Romper Candado</h1>
            <form className="needs-validation">
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            Nombre de Alumno: <input className="form-control" type="text" required></input>
                        </div>
                        <div className="col-md">
                            Carrera: <input className="form-control" type="text" required></input>
                        </div>
                        <div className="col-md">
                            Codigo: <input className="form-control" type="text" required></input>
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
                    <button className='btn btn-primary btn-lg btn-success' href="">Submit</button>
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