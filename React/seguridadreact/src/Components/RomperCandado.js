import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
class RomperCandado extends Component{
    constructor(props) {
        super(props)

        this.state={
            id: '',
            NombreAlumno:'',
            CodigoAlumno:'',
            Carrera:'',
            FotoIdF: null,
            FotoIdB: null,
            Descripcion: '',
            Fecha: '',
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
      };

    submitHandler = (data) => {
        data.preventDefault()
        console.log(data)
        let form_data = new FormData();
        form_data.append('id', this.state.id);
        form_data.append('NombreAlumno', this.state.NombreAlumno);
        form_data.append('CodigoAlumno', this.state.CodigoAlumno);
        form_data.append('Carrera', this.state.Carrera);
        form_data.append('FotoIdF', this.state.FotoIdF, this.state.FotoIdF.name);
        form_data.append('FotoIdB', this.state.FotoIdB, this.state.FotoIdB.name);
        form_data.append('Descripcion', this.state.Descripcion);
        form_data.append('Fecha', this.state.Fecha);
        axios
            .post('http://127.0.0.1:8000/rompercandado', form_data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    };

    render(){
        const { NombreAlumno, Carrera, CodigoAlumno, Descripcion} = this.state
        return (
            <div>
            <div className= "container mt-5">
            <Link to='/rompercandado/view' className= "btn btn-dark">Lista</Link>
            </div>
                <h1 className="display-3">Apertura de Candado</h1>
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
                                Descripcion: <textarea className="form-control" name="Descripcion" value={Descripcion} onChange={this.changeHandler}></textarea>
                            </div>
                            <div className="col-md">
                            Foto ID frente: <input accept="image/png, image/jpeg" className="form-control" type="file" name="FotoIdF" onChange={this.handleInputChange}></input>
                            </div>
                            <div className="col-md">
                            Foto Id detras: <input accept="image/png, image/jpeg" className="form-control" type="file" name="FotoIdB" onChange={this.handleInputChange}></input>
                            </div>
                        </div>
                        <button type='Submit' className='btn btn-primary btn-lg btn-success' href="">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default RomperCandado