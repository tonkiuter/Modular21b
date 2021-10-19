import React, {Component} from "react";
import axios from "axios";

class SolicitudVideoCamara extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: '',
            codigoAlumno: '',
            atendio : '',
            dateSolicitud : '',
            noCamara : '',
            horario : '',
            hecho : '',
            fotoIdF : '',
            fotoIdB : '',
        }
    }


    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitHandler = e=> {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://127.0.0.1:8000/solcamara', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        // dateSolicitud Poner en la api la hora del sistema
        const {codigoAlumno, atendio,noCamara,horario,hecho,fotoIdB,fotoIdF} = this.state;

        return (
            <div>
            <h1 className="display-3">Acta Administrativa</h1>
            <form onSubmit={this.submitHandler} className="needs-validation">
                <div  className="container">
                    <div className="row">
                        <div className="col-md">
                        Codigo Alumno: <input className="form-control" type="text" name="CodigoAlumno" value={codigoAlumno} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        Atendio: <input className="form-control" type="text" name="NombreAl" value={atendio} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        No. Camara: <input className="form-control" type="text" name="NoOficio" value={noCamara} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        Horario: <input className="form-control" type="text" name="Lugar" value={horario} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        Hecho: <input className="form-control" type="text" name="Causa" value={hecho} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        FotoIdB: <input className="form-control" type="text" name="Causa" value={fotoIdB} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        FotoIdF: <input className="form-control" type="text" name="Causa" value={fotoIdF} onChange={this.changeHandler}></input>
                        </div>
                    </div>
                    <button type='Submit' className='btn btn-primary btn-lg btn-success' href="">Submit</button>
                </div>
            </form>
        </div>
        )
    }
}

export default SolicitudVideoCamara