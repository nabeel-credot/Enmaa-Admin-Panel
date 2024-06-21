import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import { Card, CardBody, CardHeader, Container} from "reactstrap"
import FormUpload from './../../../../pages/Forms/FormUpload.js';
import { Link } from "react-router-dom"
import Breadcrumbs from './../../../../components/Common/Breadcrumb.js';
const Section3form = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <div className='d-flex justify-content-between'>
                    
                    <div className=''><Link to="/home" className='icon-demo-content mb-4'><i className='fas fa-arrow-left'></i></Link><Breadcrumbs title="Forms" breadcrumbItem=" Section 3" /></div>
                    <div className='d-flex flex-end gap-3 p-4'>
                        
            <Link to="/form-elements"className=" d-flex align-items-center gap-2 btn btn-outline-light"><i className="mdi mdi-file-document"></i>Guidelines</Link>
            <Link to="https://enmaa-previews.vercel.app/" className=" d-flex align-items-center gap-2 btn btn-outline-light" target="_blank"><i className="mdi mdi-open-in-new"></i>Preview</Link></div>
                </div>
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Counter Section</h4>
                                    <p className="card-title-desc">Here you can change the each <code> HEADING & IMAGE</code> </p>
                                </CardHeader>
                                <CardBody className="p-4">
                                <Row>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-text-input" className="form-Label">Subtitle in English</Label>
                        <Input className="form-control" type="text" defaultValue="AL ENMA’A REAL ESTATE COMPANY K.S.C.P" id="example-text-input" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-search-input" className="form-Label">Subtitle in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="شركة الإنماء العقارية ش.م.ك.ع" id="example-text-input" />
                    </div>

                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-text-input" className="form-Label">Title in English</Label>
                        <Input className="form-control" type="text" defaultValue="Property Management & Security Services" id="example-text-input" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-search-input" className="form-Label">Title in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="إدارة الممتلكات وخدمات الأمن" id="example-text-input" />
                    </div>

                </Col>
         
                <Col lg={6}>
              <FormUpload name="Icon Image"/>
                </Col>
            </Row>
            
            <Row>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-text-input" className="form-Label">Subtitle in English</Label>
                        <Input className="form-control" type="text" defaultValue="AL ENMA’A REAL ESTATE COMPANY K.S.C.P" id="example-text-input" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-search-input" className="form-Label">Subtitle in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="شركة الإنماء العقارية ش.م.ك.ع" id="example-text-input" />
                    </div>

                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-text-input" className="form-Label">Title in English</Label>
                        <Input className="form-control" type="text" defaultValue="Property Management & Security Services" id="example-text-input" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-search-input" className="form-Label">Title in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="إدارة الممتلكات وخدمات الأمن" id="example-text-input" />
                    </div>

                </Col>
         
                <Col lg={6}>
              <FormUpload name="Icon Image"/>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-text-input" className="form-Label">Subtitle in English</Label>
                        <Input className="form-control" type="text" defaultValue="AL ENMA’A REAL ESTATE COMPANY K.S.C.P" id="example-text-input" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-search-input" className="form-Label">Subtitle in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="شركة الإنماء العقارية ش.م.ك.ع" id="example-text-input" />
                    </div>

                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-text-input" className="form-Label">Title in English</Label>
                        <Input className="form-control" type="text" defaultValue="Property Management & Security Services" id="example-text-input" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-search-input" className="form-Label">Title in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="إدارة الممتلكات وخدمات الأمن" id="example-text-input" />
                    </div>

                </Col>
         
                <Col lg={6}>
              <FormUpload name="Icon Image"/>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-text-input" className="form-Label">Subtitle in English</Label>
                        <Input className="form-control" type="text" defaultValue="AL ENMA’A REAL ESTATE COMPANY K.S.C.P" id="example-text-input" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-search-input" className="form-Label">Subtitle in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="شركة الإنماء العقارية ش.م.ك.ع" id="example-text-input" />
                    </div>

                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-text-input" className="form-Label">Title in English</Label>
                        <Input className="form-control" type="text" defaultValue="Property Management & Security Services" id="example-text-input" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-search-input" className="form-Label">Title in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="إدارة الممتلكات وخدمات الأمن" id="example-text-input" />
                    </div>

                </Col>
         
                <Col lg={6}>
              <FormUpload name="Icon Image"/>
                </Col>
            </Row>
            <div className='d-flex justify-content-end gap-3 p-4'>
                <Link to="/form-elements"className="  d-flex align-items-center gap-1 btn btn-success"><i className="mdi mdi-content-save"></i>SAVE</Link>
                </div>

                                    {/* import TextualInputs */}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                       
                </Container>
            </div>
                        
        </React.Fragment>
    );
}

export default Section3form;