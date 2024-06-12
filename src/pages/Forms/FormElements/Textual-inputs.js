import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import FormUpload from './../FormUpload';
const TextualInputs = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={6}>
                    <div>
                        <div className="mb-3">
                            <Label htmlFor="example-text-input" className="form-Label">Text</Label>
                            <Input className="form-control" type="text" defaultValue="Property Management & Security Services" id="example-text-input" />
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="example-search-input" className="form-Label">Text</Label>
                            <Input className="form-control" type="textarea" defaultValue="With a commitment to excellence and a focus on innovation, we strive to provide top-notch solutions tailored to meet your needs. Experience peace of mind knowing that your property is in safe hands with us." id="example-search-input" />
                        </div>
                       </div>
                       
                </Col>
                
                <div className="col-lg-6">
                    <div className="mt-3 mt-lg-0">
                        <div className="mb-3">
                            <Label htmlFor="example-date-input" className="form-Label">Update</Label>
                            <Input className="form-control" type="text" placeholder='minimum 8 words' id="example-date-input" />
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="example-month-input" className="form-Label">Update</Label>
                            <Input className="form-control" type="textarea" placeholder="minimum 25 words" id="example-month-input" />
                        </div>
                        

                        
                    </div>
                </div>
            </Row>
            <FormUpload/>
        </React.Fragment>
    );
}

export default TextualInputs;