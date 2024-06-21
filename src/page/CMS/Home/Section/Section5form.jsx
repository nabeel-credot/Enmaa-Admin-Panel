import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from './../../../../components/Common/Breadcrumb';
import Select from 'react-select'; // Assuming you use react-select for better select box handling

const Section5form = () => {
    const options = [
        { value: 0, label: 'service-1', isSelected: true },
        { value: 1, label: 'service-2', isSelected: true, },
        { value: 2, label: 'service-3' },
        { value: 3, label: 'service-4' },
       { value: 4, label: 'service-5' },
       { value: 5, label: 'service-6',  },
       { value: 6, label: 'service-7' },
       { value: 7, label: 'service-8' },

       
    ];

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <div className="d-flex justify-content-between">
                        <div>
                            <Link to="/home" className="icon-demo-content mb-4">
                                <i className="fas fa-arrow-left"></i>
                            </Link>
                            <Breadcrumbs title="Forms" breadcrumbItem="Section 5" />
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
                                    <h4 className="card-title">Banner Section</h4>
                                    <p className="card-title-desc">Here you can change each <code>HEADING & IMAGE</code></p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="subtitle-english" className="form-label">Subtitle in English</Label>
                                                <Input className="form-control" type="text" defaultValue="AL ENMA’A REAL ESTATE COMPANY K.S.C.P" id="subtitle-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="subtitle-arabic" className="form-label">Subtitle in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="شركة الإنماء العقارية ش.م.ك.ع" id="subtitle-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="title-english" className="form-label">Title in English</Label>
                                                <Input className="form-control" type="text" defaultValue="Property Management & Security Services" id="title-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="title-arabic" className="form-label">Title in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="إدارة الممتلكات وخدمات الأمن" id="title-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label className="form-label">Select Services </Label>
                                                <Select
                                                    options={options}
                                                    id="select-framework"
                                                    isMulti
                                                />
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

export default Section5form;
