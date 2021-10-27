import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
class PaseSalida extends Component{
    constructor(props) {
        super(props)

        this.state={
            id: '',
            CodigoAlumno: '',
            FotoIdF: null,
            FotoIdB: null,
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

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
      };

    submitHandler = (data) => {
        data.preventDefault()
        console.log(this.state)
        let form_data = new FormData();
        form_data.append('id', this.state.id);
        form_data.append('CodigoAlumno', this.state.CodigoAlumno);
        form_data.append('FotoIdF', this.state.FotoIdF, this.state.FotoIdF.name);
        form_data.append('FotoIdB', this.state.FotoIdB, this.state.FotoIdB.name);
        form_data.append('Sello', this.state.Sello);
        form_data.append('Descripcion', this.state.Descripcion);
        form_data.append('Fecha', this.state.Fecha);
        axios
            .post('http://127.0.0.1:8000/pasesalida', form_data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    };

    render(){
        const { CodigoAlumno, Sello, Descripcion} = this.state
        return (            
            <div>
            <div className= "container mt-5">
            <Link to='/pasesalida/view' className= "btn btn-dark">Lista</Link>
            </div>
                <h1 className="display-3">Pase de Salida</h1>
                <form onSubmit={this.submitHandler} className="needs-validation">
                    <div  className="container">
                        <div className="row">
                            <div className="col-md">
                            Codigo Alumno: <input className="form-control" type="text" name="CodigoAlumno" value={CodigoAlumno} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Foto ID frente: <input className="form-control" type="file" name="FotoIdF" onChange={this.handleInputChange}></input>
                            </div>
                            <div className="col-md">
                            Foto Id detras: <input className="form-control" type="file" name="FotoIdB" onChange={this.handleInputChange}></input>
                            </div>
                            <div className="col-md">
                            Sello: <input className="form-control" type="text" name="Sello" value={Sello} onChange={this.changeHandler}></input>
                            </div>
                            <div className="col-md">
                            Descripcion: <input className="form-control" type="text" name="Descripcion" value={Descripcion} onChange={this.changeHandler}></input>
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