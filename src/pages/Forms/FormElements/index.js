import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

//import Components
import Checkboxes from './Checkboxes';
import Formlayouts from './Formlayouts';
import RangeInputs from './RangeInputs';
import SizingInput from './SizingInput';
import TextualInputs from './Textual-inputs';

const FormElements = () => {
     //meta title
     document.title = "Basic Elements | enmaa.com";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Forms" breadcrumbItem="Home Page" />

                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Section 1</h4>
                                    <p className="card-title-desc">Here you can change the each <code> HEADING & IMAGE</code> </p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    {/* import TextualInputs */}
                                    <TextualInputs />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Section 2</h4>
                                    <p className="card-title-desc">Here you can change the each <code> HEADING & IMAGE</code> </p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    {/* import TextualInputs */}
                                    <TextualInputs />
                                </CardBody>
                            </Card>
                        </Col>
                    <Row>
                        {/* import SizingInput  */}
                        <SizingInput />
                        {/* import RangeInputs  */}
                        <RangeInputs />
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Form layouts</h4>
                                    <p className="card-title-desc">Form layout options : from inline, horizontal & custom grid implementations</p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    {/* import Formlayouts */}
                                    <Formlayouts />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    {/* import Checkbox */}
                    <Checkboxes />
                </Container>
            </div>
        </React.Fragment>
    );
}

export default FormElements;