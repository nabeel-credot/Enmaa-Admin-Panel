import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import { Card, CardBody, CardHeader, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from './../../../../components/Common/Breadcrumb';

const Section1form = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <div className="d-flex justify-content-between">
                        <div>
                            <Link to="/corporate" className="icon-demo-content mb-4">
                                <i className="fas fa-arrow-left"></i>
                            </Link>
                            <Breadcrumbs title="Forms" breadcrumbItem="Section 1" />
                        </div>
                        <div className="d-flex flex-end gap-3 p-4">
                            <Link to="/form-elements" className="d-flex align-items-center gap-2 btn btn-outline-light">
                                <i className="mdi mdi-file-document"></i>Guidelines
                            </Link>
                            <Link to="https://enmaa-previews.vercel.app/" className="d-flex align-items-center gap-2 btn btn-outline-light" target="_blank">
                                <i className="mdi mdi-open-in-new"></i>Preview
                            </Link>
                        </div>
                    </div>
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">About Company Section</h4>
                                    <p className="card-title-desc">Here you can change the <code>TITLE & DESCRIPTION</code> for both languages.</p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="title-english" className="form-label">Title in English</Label>
                                                <Input className="form-control" type="text" defaultValue="About Company" id="title-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="title-arabic" className="form-label">Title in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="عن الشركة" id="title-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="description-english" className="form-label">Description in English</Label>
                                                <Input className="form-control" type="textarea" defaultValue="Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem.lacus enim eleifend vitae nibh sem it amet consectetur." id="description-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="description-arabic" className="form-label">Description in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="textarea" defaultValue="لوريم إيبسوم دولار سيت أميت. موس إت رونكوس بريتيوم يوسمود بيللينتسكو. كونسيتتور لاكوس إينيم إيليفيإند فيتاي نيب سيم.لاكوس إينيم إيليفيإند فيتاي نيب سيم إت أميت كونسيتتور." id="description-arabic" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-end gap-3 p-4">
                                        <Link to="/form-elements" className="d-flex align-items-center gap-1 btn btn-success">
                                            <i className="mdi mdi-content-save"></i>SAVE
                                        </Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Section1form;
