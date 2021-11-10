import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Text, View, Image, Document, Page, PDFViewer } from "@react-pdf/renderer";
import ActaAdministrativaView from './ActaAdministrativaView';

const ActaPDF = ({user}) => {
    return(
            <Document>
                <Page size="A4">
                    <View>
                        <Text>
                            <Image alt="" src="ActaAdminIcon.jpg" width="30" height="30"/>{' '}
                            Acta Administrativa{' '}
                            <Image alt="" src="ActaAdminIcon.jpg" width="30" height="30"/>
                        </Text>
                        <Container>
                            <Row>
                                <Col>
                                    Codigo de Alumno: {user.CodigoAlumno}
                                </Col>
                                <Col>
                                    Nombre de Alumno: {user.NombreAl}
                                </Col>
                                <Col>
                                    No. Oficio: {user.NoOficio}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Lugar: {user.Lugar}
                                </Col>
                                <Col>
                                    Causa: {user.Causa}
                                </Col>
                            </Row>
                        </Container>
                    </View>
                </Page>
            </Document>
    )
}

export default ActaPDF;