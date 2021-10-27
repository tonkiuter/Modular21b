import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class FalloCamara extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: '',
            NoCamara : '',
            Informacion : '',
            IP : '',
            SITE : '',
            Modulo: '',
            Marca : '',
            DescFalla : '',
            Toreos : '',
            MateriaUt: '',
            Solucionado : '',
            Observaciones : '',
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
            .post('http://127.0.0.1:8000/camara', this.state)
            .then(response => {
                console.log(response)
                window.location.reload()
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        // dateSolicitud Poner en la api la hora del sistema


        const {NoCamara,Informacion, SITE, Modulo, Marca, DescFalla, Toreos,
                 MateriaUt, Solucionado, Observaciones, IP} = this.state;

        return (
            <div>
            <div className= "container mt-5">
            <Link to='/fallocamara/view' className= "btn btn-dark">Lista</Link>
            </div>
            <h1 className="display-3">Fallo Camara</h1>
            <form onSubmit={this.submitHandler} className="needs-validation">
                <div  className="container">
                    <div className="row">
                        <div className="col-md">
                        No Camara: <input className="form-control" type="text" name="NoCamara" value={NoCamara} onChange={this.changeHandler}></input>
                        </div>
                        <div className= "col-md">
                        Informacion: <input className="form-control" type="text" name="Informacion" value={Informacion} onChange={this.changeHandler}></input>
                        </div>
                        <div className= "col-md">
                        IP: <input className="form-control" type="text" name="IP" value={IP} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        SITE: <input className="form-control" type="text" name="SITE" value={SITE} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        Modulo: <input className="form-control" type="text" name="Modulo" value={Modulo} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        Marca: <input className="form-control" type="text" name="Marca" value={Marca} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        DescFalla: <input className="form-control" type="text" name="DescFalla" value={DescFalla} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        Toreos: <input className="form-control" type="text" name="Toreos" value={Toreos} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        MateriaUt: <input className="form-control" type="text" name="MateriaUt" value={MateriaUt} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        Solucionado: <input className="form-control" type="text" name="Solucionado" value={Solucionado} onChange={this.changeHandler}></input>
                        </div>
                        <div className="col-md">
                        Observaciones: <input className="form-control" type="text" name="Observaciones" value={Observaciones} onChange={this.changeHandler}></input>
                        </div>
                    </div>
                    <button type='Submit' className='btn btn-primary btn-lg btn-success' href="">Submit</button>
                </div>
            </form>
        </div>
        )
    }

}

export default FalloCamara;