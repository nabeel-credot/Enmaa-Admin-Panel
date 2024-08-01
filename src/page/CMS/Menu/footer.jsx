import React, { useState ,useEffect } from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import { Card, CardBody, CardHeader, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
// import Breadcrumbs from '../../../../components/Common/Breadcrumb';
import { fetchfooterData ,updatefooterData } from'./../../../api/footerapi.js';
const footer = () => {
    const [ footerData, setfooterData]= useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const data = await fetchfooterData ();
                fetchfooterData(data);
            } catch (error) {
                console.error('failed to fetch data:',error);
                throw error ;
            }
        };
        fetchData();
    }, []);

    // const [selectedOptions, setSelectedOptions] = useState([]);

    // const options = [
    //     { value: 0, label: 'blog-1' },
    //     { value: 1, label: 'blog-2' },
    //     { value: 2, label: 'blog-3' },
    //     { value: 3, label: 'blog-4' },
    //     { value: 4, label: 'blog-5' },
    //     { value: 5, label: 'blog-6' },
    //     { value: 6, label: 'blog-7' },
    //     { value: 7, label: 'blog-8' },
    // ];

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
                                                <Label htmlFor="heading-english" className="form-label">Address in English</Label>
                                                <Input className="form-control" type="textarea" defaultValue="Featured News And Insights" id="heading-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="heading-arabic" className="form-label">Address in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="textarea" defaultValue="أخبار ورؤى مميزة" id="heading-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="heading-arabic" className="form-label">Phone Number</Label>
                                                <Input className="form-control" type="number" defaultValue="992299292" id="heading-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="heading-arabic" className="form-label">Email Address</Label>
                                                <Input  className="form-control" type="text" defaultValue=" email@mail.com " id="heading-arabic" />
                                            </div>
                                        </Col>
                                         {inputs.map((input, index) => (
        <Row key={input.id} className="mb-0">
          <Row >
            <Col lg={3}  className="mb-1">
              <Label htmlFor={`input-${input.id}`} className="form-Label">Title In English</Label>
              <Input
                className="form-control"
                type="text"
                value={input.value}
                id={`input-${input.id}`}
                onChange={(event) => handleChange(input.id, event)}
              />
            </Col>
            <Col lg={3} className="mb-1">
              <Label htmlFor={`input-${input.id}`} className="form-Label">Title In Arabic</Label>
              <Input
                className="form-control"
                type="text"
                 dir="rtl"
                value={input.value}
                id={`input-${input.id}`}
                onChange={(event) => handleChange(input.id, event)}
              />
            </Col>
            <Col lg={3} className="mb-1">
              <Label htmlFor={`input-${input.id}`} className="form-Label">Slug</Label>
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
                                 
                                    </Row>
                                    <div className="d-flex justify-content-end gap-3 p-4">
                                        <Button className="d-flex align-items-center gap-1 btn btn-success" onClick={handleChange}>
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

export default footer;
