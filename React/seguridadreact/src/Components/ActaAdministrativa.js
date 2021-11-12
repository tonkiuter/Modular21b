import React, { Component, useRef } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
//import jsPDF from "jspdf";
import ReactToPrint from "react-to-print";

class PrintComponent extends Component {
    render() {
        return (
          <div>
            <ReactToPrint
              trigger={() => <Container><br/><Button variant="warning">Imprimir Formato</Button></Container>}
              content={() => this.componentRef}
            />
            <ActaAdministrativa ref={el => (this.componentRef = el)} />
          </div>
        );
      }
}

export default PrintComponent

class ActaAdministrativa extends Component{
    constructor(props) {
        super(props)

        this.state={
            id: '',
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
            .post('http://127.0.0.1:8000/actaadministrativa', this.state)
            .then(response => {
                console.log(response)
                window.location.reload()
            })
            .catch(error => {
                console.log(error)
            })
    }

    // hide(){
    //     var hidden = false;
    //     hidden = !hidden;
    //     if(hidden) {
    //         document.getElementById('ggg').style.visibility = 'hidden';
    //     } else {
    //         document.getElementById('ggg').style.visibility = 'visible';
    //     }
        //document.getElementById("ggg").style.visibility="hidden";
        //document.button.butt.style.visibility = 'hidden';
        //return;
   // }

    // exportPDF(){
    //     const unit = "pt";
    //     const size = "A3"; // Use A1, A2, A3 or A4
    //     const orientation = "landscape"; // portrait or landscape
    //     const marginLeft = 40;

    //     const doc = new jsPDF(orientation, unit, size);
    //     //doc.setFontSize(15);

        //const title = "Reporte Acta Administrativa";
        //const text1 = document.getElementById("ca");
        //const text2 = document.getElementById("n");
        //const text3 = document.getElementById("o");
        //const text4 = document.getElementById("l");
        //const text5 = document.getElementById("c");
        //const data = [["ca", e.CodigoAlumno, e.NoOficio, e.Lugar, e.NombreAl, e.Causa]];
    
        /*let content = {
          startY: 50,
          head: headers,
          body: data
        };*/
    
        //doc.text(title, marginLeft, 40);
        //doc.autoTable(content);
        //doc.save("Reportes de Actas administrativas.pdf")
        
        // var button = document.getElementById("pdf").value;
        // var text1 = document.getElementById("ca").value;
        // var text2 = document.getElementById("n").value;
        // var text3 = document.getElementById("o").value;
        // var text4 = document.getElementById("l").value;
        // var text5 = document.getElementById("c").value;
        //button.onclick = () => {
            //var doc = new jsPDF();
            // doc.text([title, text1, text2, text3, text4, text5],40,40);
            // doc.save("Acta Administrativa.pdf");
        //}
    //}

    /*const componentRef = useRef();*/

    render(){
        const { CodigoAlumno, NoOficio, Lugar, NombreAl, Causa} = this.state
        return (
            <div>
                <div className= "container mt-5">
                    <Button href='/actaadmin/view' variant="info">Listado</Button>
                </div>
                <h1 className="display-3" align="center">
                    <img alt="" src="ActaAdminIcon.jpg" width="30" height="30"/>{' '}
                    Acta Administrativa{' '}
                    <img alt="" src="ActaAdminIcon.jpg" width="30" height="30"/>
                </h1>
                <Form id="form" onSubmit={this.submitHandler} className="needs-validation">
                    <Container>
                        <Row>
                            <Col>
                                Codigo de Alumno: <input id="ca" className="form-control" type="text" name="CodigoAlumno" value={CodigoAlumno} onChange={this.changeHandler}></input>
                            </Col>
                            <Col>
                                Nombre de Alumno: <input id="n" className="form-control" type="text" name="NombreAl" value={NombreAl} onChange={this.changeHandler}></input>
                            </Col>
                            <Col>
                                No. Oficio: <input id="o" className="form-control" type="text" name="NoOficio" value={NoOficio} onChange={this.changeHandler}></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Lugar: <input id="l" className="form-control" type="text" name="Lugar" value={Lugar} onChange={this.changeHandler}></input>
                            </Col>
                            <Col>
                                Causa: <input id="c" className="form-control" type="text" name="Causa" value={Causa} onChange={this.changeHandler}></input>
                            </Col>
                        </Row>
                        <br></br>
                        <center>
                            <button /*id="ggg" onClick={this.hide()}*/ type='Submit' className='btn btn-primary btn-lg btn-success' href="">Guardar</button>
                        </center>
                    </Container>
                </Form>
            </div>
        )
    }
}

//export default ActaAdministrativa