import React, { useState } from 'react';
import { Col, Input, Label, Row, FormGroup, Button } from 'reactstrap';
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from '../../../../components/Common/Breadcrumb';
import FormEditors from './../../../../pages/Forms/FormEditors.js';

const Serviceform = () => {
  const [iconFile, setIconFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isSubService, setIsSubService] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [services, setServices] = useState([
    { id: 1, name: 'Service 1' },
    { id: 2, name: 'Service 2' },
    { id: 3, name: 'Service 3' }
  ]);

  const handleIconChange = (event) => {
    setIconFile(event.target.files[0]);
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleRemoveIcon = () => {
    setIconFile(null);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
  };

  const handleServiceChange = (event) => {
    const value = event.target.value;
    if (value === 'sub-service') {
      setIsSubService(true);
    } else {
      setIsSubService(false);
      setSelectedService(value);
    }
  };

  const handleSubmit = () => {
    // Handle the form submission, including file uploads
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className='d-flex justify-content-between'>
            <div className=''>
              <Link to="/service" className='icon-demo-content mb-4'>
                <i className='fas fa-arrow-left'></i>
              </Link>
              <Breadcrumbs title="Forms" breadcrumbItem="Service" />
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
                  <h4 className="card-title">Service Section</h4>
                  <p className="card-title-desc">Here you can change each <code>TITLE, SUBTITLE, DESCRIPTION, AND SINGLE IMAGE AND ICON</code></p>
                </CardHeader>
                <CardBody className="p-4">
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="title-english" className="form-label">Title in English</Label>
                        <Input className="form-control" type="text" defaultValue="Sample Service Title" id="title-english" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="title-arabic" className="form-label">Title in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="عنوان الخدمة" id="title-arabic" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="subtitle-english" className="form-label">Subtitle in English</Label>
                        <Input className="form-control" type="text" defaultValue="Sample Service Subtitle" id="subtitle-english" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="subtitle-arabic" className="form-label">Subtitle in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="عنوان فرعي للخدمة" id="subtitle-arabic" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <FormGroup>
                        <Label for="serviceSelect">Service or Sub-service</Label>
                        <Input type="select" id="serviceSelect" onChange={handleServiceChange}>
                          <option value="">Select</option>
                          <option value="service">Service</option>
                          <option value="sub-service">Sub-service</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    {isSubService && (
                      <Col lg={6}>
                        <FormGroup>
                          <Label for="subServiceSelect">Select Service</Label>
                          <Input type="select" id="subServiceSelect" onChange={(e) => setSelectedService(e.target.value)}>
                            <option value="">Select Service</option>
                            {services.map((service) => (
                              <option key={service.id} value={service.name}>{service.name}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                    )}
                    <Col lg={12}>
                      <FormEditors name="Service Points in English" /></Col>
                    <Col lg={12}>
                      <FormEditors name="Service Points in Arabic" /></Col>
                    <Col lg={6}>
                      <FormGroup>
                        <Label for="iconUpload">Upload Icon</Label>
                        <Input type="file" id="iconUpload" onChange={handleIconChange} />
                      </FormGroup>
                      {iconFile && (
                        <Col lg={3} className="mb-3">
                          <div className="d-flex flex-column align-items-center">
                            <img src={URL.createObjectURL(iconFile)} alt="uploaded-icon" className="img-fluid mb-2" />
                            <Button color="danger" onClick={handleRemoveIcon}>Remove</Button>
                          </div>
                        </Col>
                      )}
                    </Col>
                    <Col lg={6}>
                      <FormGroup>
                        <Label for="imageUpload">Upload Image</Label>
                        <Input type="file" id="imageUpload" onChange={handleImageChange} />
                      </FormGroup>
                      {imageFile && (
                        <Col lg={3} className="mb-3">
                          <div className="d-flex flex-column align-items-center">
                            <img src={URL.createObjectURL(imageFile)} alt="uploaded-image" className="img-fluid mb-2" />
                            <Button color="danger" onClick={handleRemoveImage}>Remove</Button>
                          </div>
                        </Col>
                      )}
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

export default Serviceform;
