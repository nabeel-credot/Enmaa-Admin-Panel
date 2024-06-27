import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import FormUpload from './../../../../pages/Forms/FormUpload.js';
import { Link } from "react-router-dom";
import Breadcrumbs from './../../../../components/Common/Breadcrumb.js';

const Section7form = () => {
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
                            <Breadcrumbs title="Forms" breadcrumbItem="Section 7" />
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
                                    <h4 className="card-title">Ownership to Security Section</h4>
                                    <p className="card-title-desc">Here you can change the each <code>HEADING & IMAGE</code></p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="type-english" className="form-Label">Type of Text in English</Label>
                                                <Input className="form-control" type="text" defaultValue="DIVERSE PROPERTY SOLUTION" id="type-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="type-arabic" className="form-Label">Type of Text in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="حلول الملكية المتنوعة" id="type-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="english-title" className="form-Label">Title in English</Label>
                                                <Input className="form-control" type="text" defaultValue="From Ownership to Security, We've Got You Covered" id="english-title" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="arabic-title" className="form-Label">Title in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="من الملكية إلى الأمن، نحن هنا من أجلك" id="arabic-title" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="english-subtitle" className="form-Label">Subtitle in English</Label>
                                                <Input className="form-control" type="text" defaultValue="Maximise Property Value" id="english-subtitle" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="arabic-subtitle" className="form-Label">Subtitle in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="تعظيم قيمة الممتلكات" id="arabic-subtitle" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="english-description" className="form-Label">Description in English</Label>
                                                <Input className="form-control" type="textarea" defaultValue="Expert solutions for property management and optimisation strategies." id="english-description" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="arabic-description" className="form-Label">Description in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="textarea" defaultValue="حلول الخبراء لإدارة الممتلكات واستراتيجيات التحسين." id="arabic-description" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="button-text-english" className="form-Label">Button Title in English</Label>
                                                <Input className="form-control" type="text" defaultValue="SEE DETAILS" id="button-text-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="button-text-arabic" className="form-Label">Button Title in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="شاهد التفاصيل" id="button-text-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="button-link" className="form-Label">Button Link</Label>
                                                <Input className="form-control" type="text" defaultValue="https://enmaa-previews.vercel.app/services/service-1" id="button-link" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <FormUpload name="Banner Image" />
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

export default Section7form;
