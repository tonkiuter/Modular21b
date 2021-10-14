import React, { Component } from 'react';
import axios from 'axios';

class RomperCandado extends Component{
    render(){
        return (
            <div>
            <h1 class="display-3">Romper Candado</h1>
            <form class="needs-validation">
                <div class="container">
                    <div class="row">
                        <div class="col-md">
                            Nombre de Alumno: <input class="form-control" type="text" required></input>
                        </div>
                        <div class="col-md">
                            Carrera: <input class="form-control" type="text" required></input>
                        </div>
                        <div class="col-md">
                            Codigo: <input class="form-control" type="text" required></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md">
                            Fecha:
                        </div>
                        <div class="col-md">
                            <p>
                                Yo: <input class="form-control" type="text" id="disabledTextInput"></input>
                                <br></br>
                                autorizo que el personal de seguridad interna de CUCEI, le de apetura
                                <br></br>
                                a mi candado que se encuentra en: 
                                <select class="custom-select" required>
                                    <option selected>Seleccionar...</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </p>
                        </div>
                    </div>
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