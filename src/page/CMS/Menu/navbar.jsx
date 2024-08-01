import React, { useState } from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import { Card, CardBody, CardHeader, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
// import Breadcrumbs from '../../../../components/Common/Breadcrumb';
import Select from 'react-select';

const navbar = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = [
        { value: 0, label: 'blog-1' },
        { value: 1, label: 'blog-2' },
        { value: 2, label: 'blog-3' },
        { value: 3, label: 'blog-4' },
        { value: 4, label: 'blog-5' },
        { value: 5, label: 'blog-6' },
        { value: 6, label: 'blog-7' },
        { value: 7, label: 'blog-8' },
    ];

    const handleChange = (selected) => {
        setSelectedOptions(selected);
    };

    const handleSave = () => {
        if (selectedOptions.length === 3) {
            // Handle the save logic here
            console.log('Saved:', selectedOptions);
        } else {
            alert('Please select only 3 blogs.');
        }
    };

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
                            {/* <Breadcrumbs title="Forms" breadcrumbItem="Section 11" /> */}
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
                                    <h4 className="card-title">Featured News and Insights Section</h4>
                                    <p className="card-title-desc">Here you can change the each <code>HEADING, DESCRIPTION, BLOG SELECTION</code></p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="heading-english" className="form-label">Heading in English</Label>
                                                <Input className="form-control" type="text" defaultValue="Featured News And Insights" id="heading-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="heading-arabic" className="form-label">Heading in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="أخبار ورؤى مميزة" id="heading-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label className="form-label">Select Blogs</Label>
                                                <Select
                                                    options={options}
                                                    id="select-blogs"
                                                    isMulti
                                                    value={selectedOptions}
                                                    onChange={handleChange}
                                                    closeMenuOnSelect={false}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-end gap-3 p-4">
                                        <Button className="d-flex align-items-center gap-1 btn btn-success" onClick={handleSave}>
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

export default navbar;
