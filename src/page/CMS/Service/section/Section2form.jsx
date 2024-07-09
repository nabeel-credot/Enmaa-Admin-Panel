import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import FormUpload from './../../../../pages/Forms/FormUpload.js';
import { Link } from "react-router-dom";
import Breadcrumbs from './../../../../components/Common/Breadcrumb.js';

const Section2form = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <div className='d-flex justify-content-between'>
                        <div className=''>
                            <Link to="/service" className='icon-demo-content mb-4'>
                                <i className='fas fa-arrow-left'></i>
                            </Link>
                            <Breadcrumbs title="Forms" breadcrumbItem="Section 2" />
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
                                    <h4 className="card-title">Trusted Solutions Section</h4>
                                    <p className="card-title-desc">Here you can change the each <code>HEADING, DESCRIPTION, STATS, & IMAGE</code></p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="stats-english" className="form-Label">Stats in English</Label>
                                                <Input className="form-control" type="text" defaultValue="50+ Diverse Properties" id="stats-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="stats-arabic" className="form-Label">Stats in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="50+ ممتلكات متنوعة" id="stats-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="heading-english" className="form-Label">Heading in English</Label>
                                                <Input className="form-control" type="text" defaultValue="Trusted Solutions" id="heading-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="heading-arabic" className="form-Label">Heading in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="حلول موثوقة" id="heading-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="description-english" className="form-Label">Description in English</Label>
                                                <Input className="form-control" type="textarea" defaultValue="Your trusted source for premier real estate and security services, ensuring satisfaction and achieving the highest industry standards." id="description-english" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="description-arabic" className="form-Label">Description in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="textarea" defaultValue="مصدر موثوق به للعقارات والخدمات الأمنية الممتازة، وضمان الرضا وتحقيق أعلى معايير الصناعة." id="description-arabic" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <FormUpload name="Section Image" />
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

export default Section2form;
