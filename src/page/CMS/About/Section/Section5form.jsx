import React, { useState } from 'react';
import { Col, Row, Container, Button, FormGroup, Label, Input } from 'reactstrap';
import { Card, CardBody, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from './../../../../components/Common/Breadcrumb';
import FormUpload from './../../../../pages/Forms/FormUpload.js';

const Section5form = () => {
    const [images, setImages] = useState([]);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        setImages([...images, ...files]);
    };

    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

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
                                    <h4 className="card-title">Scrolling Images Section</h4>
                                    <p className="card-title-desc">Here you can upload multiple images to be displayed in a scrollable area.</p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <FormGroup>
                                        <Label for="imageUpload">Upload Images</Label>
                                        <Input type="file" id="imageUpload" multiple onChange={handleImageChange} />
                                    </FormGroup>
                                    <Row>
                                        {images.map((image, index) => (
                                            <Col key={index} lg={3} className="mb-3">
                                                <div className="d-flex flex-column align-items-center">
                                                    <img src={URL.createObjectURL(image)} alt={`uploaded-${index}`} className="img-fluid mb-2" />
                                                    <Button color="danger" onClick={() => handleRemoveImage(index)}>Remove</Button>
                                                </div>
                                            </Col>
                                        ))}
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
};

export default Section5form;
