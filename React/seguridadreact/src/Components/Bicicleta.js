import React, {Component} from "react";
import axios from "axios";

class Bicicleta extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: '',
            CodigoReporte: '2',
            CodigoAlumno: '',
            FotoIdF : 'qqqq',
            FotoIdB : 'wwww',
            Descripcion: '',
        }
    }


    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://127.0.0.1:8000/bicicleta', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        // dateSolicitud Poner en la api la hora del sistema
        const {CodigoAlumno,FotoIdB,FotoIdF,Descripcion } = this.state;

        return (
            <div>
            <h1 className="display-3">Bicicleta</h1>
            <form onSubmit={this.submitHandler} className="needs-validation">
                <div className="container">
                    <div className="row">
                    <div className="col-md">
                    CodigoAlumno: <input className="form-control" type="text" name="CodigoAlumno" value={CodigoAlumno} onChange={this.changeHandler}></input>
                        </div>
                    
                        <div className="col-md">
                        FotoIdB: <input className="form-control" type="text" name="FotoIdB" value={FotoIdB} onChange={this.changeHandler}></input>
                        </div>
                    
                        <div className="col-md">
                        FotoIdF: <input className="form-control" type="text" name="FotoIdF" value={FotoIdF} onChange={this.changeHandler}></input>
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

export default Bicicleta