import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import { Card, CardBody, CardHeader, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from './../../../../components/Common/Breadcrumb';
import FormUpload from './../../../../pages/Forms/FormUpload.js';

const Section6form = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <div className="d-flex justify-content-between">
                        <div>
                            <Link to="/about" className="icon-demo-content mb-4">
                                <i className="fas fa-arrow-left"></i>
                            </Link>
                            <Breadcrumbs title="Forms" breadcrumbItem="Section 6" />
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
                                    <h4 className="card-title">Contact Section</h4>
                                    <p className="card-title-desc">Here you can change the <code>TITLE, BUTTON TEXT, BUTTON LINK, CONTACT NUMBER</code> for both languages.</p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="title-english" className="form-label">Title in English</Label>
                                                <Input className="form-control" type="text" defaultValue="Offering The Best Experience Of Real Estate Services" id="title-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="title-arabic" className="form-label">Title in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="تقديم أفضل تجربة لخدمات العقارات" id="title-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="button-text-english" className="form-label">Button Text in English</Label>
                                                <Input className="form-control" type="text" defaultValue="CONTACT WITH US" id="button-text-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="button-text-arabic" className="form-label">Button Text in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="تواصل معنا" id="button-text-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="button-link" className="form-label">Button Link</Label>
                                                <Input className="form-control" type="text" defaultValue="https://enmaa-previews.vercel.app/contact" id="button-link" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="contact-number-english" className="form-label">Contact Number in English</Label>
                                                <Input className="form-control" type="text" defaultValue="+88 (9600) 6002" id="contact-number-english" />
                                            </div>
                                        </Col>
                                        {/* <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="contact-number-arabic" className="form-label">Contact Number in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="+88 (9600) 6002" id="contact-number-arabic" />
                                            </div>
                                        </Col> */}
                                        <Col lg={12}>
                                            <FormUpload name="Background Image" />
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

export default Section6form;
