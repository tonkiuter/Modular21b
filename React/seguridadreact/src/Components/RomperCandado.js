import React, { Component } from 'react';

class RomperCandado extends Component{
    render(){
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