import React, { useState } from "react";
import { Col, Input, Label, Row } from 'reactstrap';
import { Card, CardBody, CardHeader, Container, Button } from "reactstrap";
import FormUpload from './../../../../pages/Forms/FormUpload.js';
import { Link } from "react-router-dom";
import Breadcrumbs from './../../../../components/Common/Breadcrumb.js';

const Section9form = () => {
    const [inputs, setInputs] = useState([{ id: 1, valueEn: '', valueAr: '' }]);

    const handleAddInput = () => {
        setInputs([...inputs, { id: inputs.length + 1, valueEn: '', valueAr: '' }]);
    };

    const handleRemoveInput = (id) => {
        setInputs(inputs.filter(input => input.id !== id));
    };

    const handleChange = (id, event, lang) => {
        const newInputs = inputs.map(input => {
            if (input.id === id) {
                return { ...input, [lang]: event.target.value };
            }
            return input;
        });
        setInputs(newInputs);
    };

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
                            <Breadcrumbs title="Forms" breadcrumbItem="Section 9" />
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
                                    <h4 className="card-title">Innovating Excellence Section</h4>
                                    <p className="card-title-desc">Here you can change the each <code>HEADING, DESCRIPTION, LIST ITEMS, BUTTON, & IMAGE</code></p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="heading-english" className="form-Label">Heading in English</Label>
                                                <Input className="form-control" type="text" defaultValue="Innovating Excellence in Real Estate Solutions" id="heading-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="heading-arabic" className="form-Label">Heading in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="ابتكار التميز في حلول العقارات" id="heading-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="description-english" className="form-Label">Description in English</Label>
                                                <Input className="form-control" type="textarea" defaultValue="We strive to be your trusted partner, offering sustainable management solutions, setting new standards, and maximising profits through innovation." id="description-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="description-arabic" className="form-Label">Description in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="textarea" defaultValue="نحن نسعى جاهدين لنكون شريكك الموثوق، حيث نقدم حلول إدارة مستدامة، ونحدد معايير جديدة، ونعظم الأرباح من خلال الابتكار." id="description-arabic" />
                                            </div>
                                        </Col>
                                        <div>
                                            {inputs.map((input, index) => (
                                                <Row key={input.id} className="mb-0">
                                                    <Row >
                                                        <Col lg={5} className="mb-1">
                                                            <Label htmlFor={`input-en-${input.id}`} className="form-Label">Points In English</Label>
                                                            <Input
                                                                className="form-control"
                                                                type="text"
                                                                value={input.valueEn}
                                                                id={`input-en-${input.id}`}
                                                                onChange={(event) => handleChange(input.id, event, 'valueEn')}
                                                            />
                                                        </Col>
                                                        <Col lg={6} className="mb-1">
                                                            <Label htmlFor={`input-ar-${input.id}`} className="form-Label">Points In Arabic</Label>
                                                            <Input
                                                                className="form-control"
                                                                type="text"
                                                                dir="rtl"
                                                                value={input.valueAr}
                                                                id={`input-ar-${input.id}`}
                                                                onChange={(event) => handleChange(input.id, event, 'valueAr')}
                                                            />
                                                        </Col>
                                                        <Col lg={1} className="d-flex mt-4 gap-2 align-items-center">
                                                            <Button
                                                                className="d-flex align-items-center gap-2"
                                                                onClick={() => handleRemoveInput(input.id)}
                                                                disabled={inputs.length === 1}
                                                            >
                                                                -
                                                            </Button>
                                                            {index === inputs.length - 1 && (
                                                                <Button
                                                                    className="d-flex align-items-center gap-2"
                                                                    onClick={handleAddInput}
                                                                >
                                                                    +
                                                                </Button>
                                                            )}
                                                        </Col>
                                                    </Row>
                                                </Row>
                                            ))}
                                        </div>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="button-text-english" className="form-Label">Button Text in English</Label>
                                                <Input className="form-control" type="text" defaultValue="READ MORE" id="button-text-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="button-text-arabic" className="form-Label">Button Text in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="اقرأ أكثر" id="button-text-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="button-link" className="form-Label">Button Link</Label>
                                                <Input className="form-control" type="text" defaultValue="https://enmaa-previews.vercel.app/services/service-1" id="button-link" />
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

export default Section9form;
