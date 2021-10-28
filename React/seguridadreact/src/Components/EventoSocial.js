import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
class EventoSocial extends Component{
    constructor(props){
        super(props)

        this.state = {
            id : '',
            NombreEvento: '',
            FechaHora : '',
            Pronostico  : '',
            MensajeSeguridad : '',
            Estrategia : '',
            Recurso: '',
            Croquis: '',
            Organigrama : '',
            Estado : '',
            NombreEncargado: '', 
            TelefonoEncargado: '',
            CorreoEncargado: '',
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
            .post('http://127.0.0.1:8000/social', this.state)
            .then(response => {
                console.log(response)
                window.location.reload()
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
    
        const {NombreEvento, FechaHora,Pronostico, MensajeSeguridad, Estrategia, Recurso, Croquis,Organigrama, Estado,
        NombreEncargado, TelefonoEncargado, CorreoEncargado } = this.state;

        return (
            <div>
                ~{"\n"}
            <div className= "container mt-5">
            <Link to='/social/view' className= "btn btn-dark">Lista</Link>
            </div>
            <h1 className="display-3">Evento Social</h1>
            <form onSubmit={this.submitHandler} className="needs-validation">
                <div  className="container">
                    <div className="row">
                        <div className="col-md">
                        NombreEvento: <input className="form-control" type="text" name="NombreEvento" value={NombreEvento} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        FechaHora: <input className="form-control" type="date" name="FechaHora" value={FechaHora} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        Pronostico: <input className="form-control" type="text" name="Pronostico" value={Pronostico} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        MensajeSeguridad: <input className="form-control" type="text" name="MensajeSeguridad" value={MensajeSeguridad} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        Estrategia: <input className="form-control" type="text" name="Estrategia" value={Estrategia} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        Recurso: <input className="form-control" type="text" name="Recurso" value={Recurso} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        Croquis: <input className="form-control" type="text" name="Croquis" value={Croquis} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        Organigrama: <input className="form-control" type="text" name="Organigrama" value={Organigrama} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        Estado: <input className="form-control" type="text" name="Estado" value={Estado} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        NombreEncargado: <input className="form-control" type="text" name="NombreEncargado" value={NombreEncargado} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        TelefonoEncargado: <input className="form-control" type="text" name="TelefonoEncargado" value={TelefonoEncargado} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        CorreoEncargado: <input className="form-control" type="text" name="CorreoEncargado" value={CorreoEncargado} onChange={this.changeHandler}></input>
                        </div>
                       
                    </div>
                    <button type='Submit' className='btn btn-primary btn-lg btn-success' href="">Submit</button>
                </div>
            </form>
        </div>
        )
    }

}

export default EventoSocial