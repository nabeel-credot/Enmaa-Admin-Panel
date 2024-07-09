import React from 'react';
import { Col, Input, Label, Row, Button } from 'reactstrap';
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from '../../../../components/Common/Breadcrumb';

const Section1form = () => {
  const handleSubmit = () => {
    // Handle the form submission
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className='d-flex justify-content-between'>
            <div className=''>
              <Link to="/annual-report" className='icon-demo-content mb-4'>
                <i className='fas fa-arrow-left'></i>
              </Link>
              <Breadcrumbs title="Forms" breadcrumbItem="Annual Report" />
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
                  <h4 className="card-title">Annual Report Section</h4>
                  <p className="card-title-desc">Here you can change each <code>TITLE, SUBTITLE, AND DESCRIPTION</code> in both English and Arabic.</p>
                </CardHeader>
                <CardBody className="p-4">
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="title-english" className="form-label">Title in English</Label>
                        <Input className="form-control" type="text" defaultValue="Annual Report" id="title-english" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="title-arabic" className="form-label">Title in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="التقرير السنوي" id="title-arabic" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="subtitle-english" className="form-label">Subtitle in English</Label>
                        <Input className="form-control" type="text" defaultValue="Lorem ipsum dolor sit amet consectetur." id="subtitle-english" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="subtitle-arabic" className="form-label">Subtitle in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="عنوان فرعي للتقرير" id="subtitle-arabic" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="description-title-english" className="form-label">Description Title in English</Label>
                        <Input className="form-control" type="text" defaultValue="Lorem ipsum dolor sit amet congue ornare elit" id="description-title-english" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="description-title-arabic" className="form-label">Description Title in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="عنوان وصف التقرير" id="description-title-arabic" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="description-title-english" className="form-label">Description Subtitle in English</Label>
                        <Input className="form-control" type="text" defaultValue="Lorem ipsum dolor sit amet congue ornare elit" id="description-title-english" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="description-title-arabic" className="form-label">Description Subtitle in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="عنوان وصف التقرير" id="description-title-arabic" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="description-content-english" className="form-label">Description Content in English</Label>
                        <Input className="form-control" type="textarea" defaultValue="This is a detailed description of the annual report." id="description-content-english" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="description-content-arabic" className="form-label">Description Content in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="textarea" defaultValue="هذا وصف مفصل للتقرير السنوي." id="description-content-arabic" />
                      </div>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-end gap-3 p-4">
                    <Button color="success" onClick={handleSubmit}>
                      <i className="mdi mdi-content-save"></i>SAVE
                    </Button>
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
