import React, {Component} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Bicicleta extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: '',
            CodigoAlumno: '',
            FotoIdF : null,
            FotoIdB : null,
            Descripcion: '',
        }
    }


    changeHandler = (e) =>{
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
        form_data.append('CodigoAlumno', this.state.CodigoAlumno);
        form_data.append('FotoIdF', this.state.FotoIdF, this.state.FotoIdF.name);
        form_data.append('FotoIdB', this.state.FotoIdB, this.state.FotoIdB.name);
        form_data.append('Descripcion', this.state.Descripcion);
        axios
            .post('http://127.0.0.1:8000/bicicleta', form_data)
            .then(response => {
                console.log(response)
                window.location.reload()
            })
            .catch(error => {
                console.log(error)
            })
    };

    render(){
        // dateSolicitud Poner en la api la hora del sistema
        const {CodigoAlumno,Descripcion } = this.state;

        return (
            <div>
                ~{"\n"}
            <div className= "container mt-5">
            <Link to='/bicicleta/view' className= "btn btn-dark">Lista</Link>
            </div>
            <h1 className="display-3">Bicicleta</h1>
            <form onSubmit={this.submitHandler} className="needs-validation">
                <div className="container">
                    <div className="row">
                    <div className="col-md">
                    CodigoAlumno: <input className="form-control" type="text" name="CodigoAlumno" value={CodigoAlumno} onChange={this.changeHandler}></input>
                        </div>
                    
                        <div className="col-md">
                        FotoIdB: <input className="form-control" type="file" name="FotoIdB" onChange={this.handleInputChange}></input>
                        </div>
                    
                        <div className="col-md">
                        FotoIdF: <input className="form-control" type="file" name="FotoIdF" onChange={this.handleInputChange}></input>
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