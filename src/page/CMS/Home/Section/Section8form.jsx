import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import FormUpload from './../../../../pages/Forms/FormUpload.js';
import { Link } from "react-router-dom";
import Breadcrumbs from './../../../../components/Common/Breadcrumb.js';

const Section8form = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <div className='d-flex justify-content-between'>
                        <div className=''>
                            <Link to="/home" className='icon-demo-content mb-4'>
                                <i className='fas fa-arrow-left'></i>
                            </Link>
                            <Breadcrumbs title="Forms" breadcrumbItem="Section 8" />
                        </div>
                        <div className='d-flex flex-end gap-3 p-4'>
                            <button className="d-flex align-items-center gap-2 btn btn-outline-light">
                                <i className="mdi mdi-file-document"></i>Guidelines
                            </button>
                            <Link to="https://enmaa-previews.vercel.app/" className="d-flex align-items-center gap-2 btn btn-outline-light" target="_blank">
                                <i className="mdi mdi-open-in-new"></i>Preview
                            </Link>
                        </div>
                    </div>
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Contact Information Section</h4>
                                    <p className="card-title-desc">Here you can change the each <code>HEADING, CONTACT INFO & IMAGE</code></p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="heading-english" className="form-Label">Heading in English</Label>
                                                <Input className="form-control" type="text" defaultValue="For All Real Estate Inquiries And Consultancy Services," id="heading-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="heading-arabic" className="form-Label">Heading in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="لجميع الاستفسارات العقارية وخدمات الاستشارات" id="heading-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="contact-title-english" className="form-Label">Contact Title in English</Label>
                                                <Input className="form-control" type="text" defaultValue="Contact Us" id="contact-title-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="contact-title-arabic" className="form-Label">Contact Title in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="اتصل بنا" id="contact-title-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="email" className="form-Label">Email</Label>
                                                <Input className="form-control" type="email" defaultValue="enmaa@enmaa.com" id="email" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="phone" className="form-Label">Phone</Label>
                                                <Input className="form-control" type="text" defaultValue="+88 (9600) 6002" id="phone" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <FormUpload name="Background Image" />
                                    <div className='d-flex justify-content-end gap-3 p-4'>
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

export default Section8form;
