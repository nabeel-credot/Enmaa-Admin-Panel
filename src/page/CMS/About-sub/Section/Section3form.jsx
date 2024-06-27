import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import { Card, CardBody, CardHeader, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from './../../../../components/Common/Breadcrumb';
import Select from 'react-select';

const employeeOptions = [
  { value: 'MR. Saleh Turki Al Khamees', label: 'MR. Saleh Turki Al Khamees - Chairman' },
  { value: 'MR. Abdul Mohsen Hamad Al Hamd', label: 'MR. Abdul Mohsen Hamad Al Hamd - Board Member' },
  { value: 'MR. Saleh Turki Al Khamees', label: 'MR. Saleh Turki Al Khamees - Board Member' },
  { value: 'MR. Ahmad Abdulmohsen Alfarhan', label: 'MR. Ahmad Abdulmohsen Alfarhan - Board Member' },
];

const Section3form = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className='d-flex justify-content-between'>
            <div className=''>
              <Link to="/about-sub" className='icon-demo-content mb-4'>
                <i className='fas fa-arrow-left'></i>
              </Link>
              <Breadcrumbs title="Forms" breadcrumbItem="Section 3" />
            </div>
            <div className='d-flex flex-end gap-3 p-4'>
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
                  <h4 className="card-title">Board of Directors Section</h4>
                  <p className="card-title-desc">Here you can change each <code>HEADING, SUBTITLE, DESCRIPTION, AND EMPLOYEES</code></p>
                </CardHeader>
                <CardBody className="p-4">
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="heading-english" className="form-label">Heading in English</Label>
                        <Input className="form-control" type="text" defaultValue="Meet the Visionaries Steering Our Success" id="heading-english" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="heading-arabic" className="form-label">Heading in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="تعرف على رواد قيادتنا نحو النجاح" id="heading-arabic" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="subtitle-english" className="form-label">Subtitle in English</Label>
                        <Input className="form-control" type="text" defaultValue="Our power of choice is untrammelled and when nothing prevents being able to do what we like best every pleasure." id="subtitle-english" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="subtitle-arabic" className="form-label">Subtitle in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="قوتنا في الاختيار لا تزعجها وعندما لا شيء يمنعنا من فعل ما نحب أفضل متعة." id="subtitle-arabic" />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="description-english" className="form-label">Description in English</Label>
                        <Input className="form-control" type="textarea" defaultValue="Description text goes here" id="description-english" />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="description-arabic" className="form-label">Description in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="textarea" defaultValue="نص الوصف هنا" id="description-arabic" />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label className="form-label">Select Employees</Label>
                        <Select
                          options={employeeOptions}
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

export default Section3form;
