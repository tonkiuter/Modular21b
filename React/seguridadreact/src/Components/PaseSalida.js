import React, { Component } from 'react';
import axios from 'axios';

class PaseSalida extends Component{
    constructor(props) {
        super(props)

        this.state={
            id: '',
            CodigoAlumno: '',
            FotoIdF: '',
            FotoIdB: '',
            Sello: '',
            Descripcion: '',
            Fecha: '',
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
            .post('http://127.0.0.1:8000/pasesalida', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        const { CodigoAlumno, FotoIdF, FotoIdB, Sello, Descripcion, Fecha} = this.state
        return (
            <div>
                <h1 className="display-3">Pase de Salida</h1>
                <form onSubmit={this.submitHandler} className="needs-validation">
                    <div  className="container">
                        <div className="row">
                            <div className="col-md">
                            Codigo Alumno: <input className="form-control" type="text" name="CodigoAlumno" value={CodigoAlumno} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Foto ID frente: <input className="form-control" type="file" name="FotoIdF" value={FotoIdF} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Foto Id detras: <input className="form-control" type="file" name="FotoIdB" value={FotoIdB} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Sello: <input className="form-control" type="text" name="Sello" value={Sello} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Descripcion: <input className="form-control" type="text" name="Descripcion" value={Descripcion} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Fecha: <input className="form-control" type="date" name="Fecha" value={Fecha} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <button type='Submit' className='btn btn-primary btn-lg btn-success' href="">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default PaseSalida