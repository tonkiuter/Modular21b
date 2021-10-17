import React, { Component } from 'react';
import axios from 'axios';

class ActaAdministrativa extends Component{
    constructor(props) {
        super(props)

        this.state={
            id: '',
            CodigoReporte: '1',
            CodigoAlumno: '',
            NoOficio: '',
            Lugar: '',
            NombreAl: '',
            Causa: '',
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
            .post('http://127.0.0.1:8000/ActaAdministrativa', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        const { CodigoAlumno, NoOficio, Lugar, NombreAl, Causa} = this.state
        return (
            <div>
                <h1 className="display-3">Acta Administrativa</h1>
                <form onSubmit={this.submitHandler} className="needs-validation">
                    <div  className="container">
                        <div className="row">
                            <div className="col-md">
                            Codigo Alumno: <input className="form-control" type="text" name="CodigoAlumno" value={CodigoAlumno} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Nombre Alumno: <input className="form-control" type="text" name="NombreAl" value={NombreAl} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            NoOficio: <input className="form-control" type="text" name="NoOficio" value={NoOficio} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Lugar: <input className="form-control" type="text" name="Lugar" value={Lugar} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Causa: <input className="form-control" type="text" name="Causa" value={Causa} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <button type='Submit' className='btn btn-primary btn-lg btn-success' href="">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default ActaAdministrativa