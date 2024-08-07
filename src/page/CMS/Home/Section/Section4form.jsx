import React, { useState } from "react";

import { Col, Input, Label, Row } from 'reactstrap';
import { Card, CardBody, CardHeader, Container,Button} from "reactstrap"
import FormUpload from './../../../../pages/Forms/FormUpload.js';
import { Link } from "react-router-dom"
import Breadcrumbs from './../../../../components/Common/Breadcrumb.js';

const Section4form = () => {
    const [inputs, setInputs] = useState([{ id: 1, value: '' }]);
  
    const handleAddInput = () => {
      setInputs([...inputs, { id: inputs.length + 1, value: '' }]);
    };
  
    const handleRemoveInput = (id) => {
      setInputs(inputs.filter(input => input.id !== id));
    };
  
    const handleChange = (id, event) => {
      const newInputs = inputs.map(input => {
        if (input.id === id) {
          return { ...input, value: event.target.value };
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
                    
                    <div className=''><Link to="/home" className='icon-demo-content mb-4'><i className='fas fa-arrow-left'></i></Link><Breadcrumbs title="Forms" breadcrumbItem=" Section 4" /></div>
                    <div className='d-flex flex-end gap-3 p-4'>
                        
            <Link to="/form-elements"className=" d-flex align-items-center gap-2 btn btn-outline-light"><i className="mdi mdi-file-document"></i>Guidelines</Link>
            <Link to="https://enmaa-previews.vercel.app/" className=" d-flex align-items-center gap-2 btn btn-outline-light" target="_blank"><i className="mdi mdi-open-in-new"></i>Preview</Link></div>
                </div>
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">About Section</h4>
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
                    <div className="mb-3">
                        <Label htmlFor="example-text-input" className="form-Label">Paragraph in English</Label>
                        <Input className="form-control" type="textarea" defaultValue="With a commitment to excellence and a focus on innovation, we strive to provide top-notch solutions tailored to meet your needs. Experience peace of mind knowing that your property is in safe hands with us." id="example-text-input" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-search-input" className="form-Label">Paragraph in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="textarea" defaultValue="مع الالتزام بالتميز والتركيز على الابتكار، فإننا نسعى جاهدين لتقديم حلول من الدرجة الأولى مصممة خصيصًا لتلبية احتياجاتك. استمتع براحة البال عندما تعلم أن ممتلكاتك في أيدٍ أمينة معنا." id="example-text-input" />
                    </div>

                </Col>
                
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-text-input" className="form-Label">Sidebar Subtitle in English</Label>
                        <Input className="form-control" type="text" defaultValue="YEARS EXPERIENCES IN THIS FIELD" id="example-text-input" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-search-input" className="form-Label">Sidebar Subtitle in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="سنوات من الخبرةفي هذا الحقل" id="example-text-input" />

                    </div>

                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-text-input" className="form-Label">Sidebar Number in English</Label>
                        <Input className="form-control" type="text" defaultValue="30+" id="example-text-input" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-search-input" className="form-Label">Sidebar Number in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="٣٠+" id="example-text-input" />
                    </div>

                </Col>
                
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-text-input" className="form-Label">Button Title in English</Label>
                        <Input className="form-control" type="text" defaultValue="READ MORE" id="example-text-input" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="example-search-input" className="form-Label">Button Title in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="اقرأ أكثر" id="example-text-input" />
                    </div>

                </Col>
                <Col lg={12}>
                    <div className="mb-3">
                        <Label htmlFor="example-text-input" className="form-Label">Button link</Label>
                        <Input className="form-control" type="text" defaultValue="" id="example-text-input" />
                    </div>
                </Col>
                <div>
      {inputs.map((input, index) => (
        <Row key={input.id} className="mb-0">
          <Row >
            <Col lg={5}  className="mb-1">
              <Label htmlFor={`input-${input.id}`} className="form-Label">Points In English</Label>
              <Input
                className="form-control"
                type="text"
                value={input.value}
                id={`input-${input.id}`}
                onChange={(event) => handleChange(input.id, event)}
              />
            </Col>
            <Col lg={6} className="mb-1">
              <Label htmlFor={`input-${input.id}`} className="form-Label">Points In Arabic</Label>
              <Input
                className="form-control"
                type="text"
                 dir="rtl"
                value={input.value}
                id={`input-${input.id}`}
                onChange={(event) => handleChange(input.id, event)}
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
            </Row>
            <div className="mt-4">
            <FormUpload name="Banner Image" /></div>
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

export default Section4form;