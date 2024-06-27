import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import { Card, CardBody, CardHeader, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from '../../../../components/Common/Breadcrumb';

const Section3form = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className='d-flex justify-content-between'>
            <div className=''>
              <Link to="/government-bot" className='icon-demo-content mb-4'>
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
                  <h4 className="card-title">Section 3</h4>
                  <p className="card-title-desc">Here you can change each <code>HEADING, DESCRIPTION, AND LINK</code></p>
                </CardHeader>
                <CardBody className="p-4">
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="title-english" className="form-label">Title in English</Label>
                        <Input className="form-control" type="text" defaultValue="Souq Al Wataniya" id="title-english" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="title-arabic" className="form-label">Title in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="سوق الوطنية" id="title-arabic" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="subtitle-english" className="form-label">Subtitle in English</Label>
                        <Input className="form-control" type="text" defaultValue="The distinctive location of the Souq Al Wataniya Market" id="subtitle-english" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="subtitle-arabic" className="form-label">Subtitle in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="الموقع المميز لسوق الوطنية" id="subtitle-arabic" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="description-english" className="form-label">Description in English</Label>
                        <Input className="form-control" type="textarea" defaultValue="The distinctive location of the Souq Al Wataniya Market located in the heart of the commercial district of the Kuwait city gave it high importance. This is in addition to shops and administrative offices constituting the market. The view is wonderful. Car parks there serve the market tenants and the region's visitors in general. The building is located near several markets, ancient commercial complexes, and hotels that many tourists visit throughout the year." id="description-english" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="description-arabic" className="form-label">Description in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="textarea" defaultValue="الموقع المميز لسوق الوطنية الواقع في قلب المنطقة التجارية لمدينة الكويت أعطاه أهمية كبيرة. بالإضافة إلى المتاجر والمكاتب الإدارية التي تشكل السوق. المنظر رائع. تخدم مواقف السيارات هناك مستأجري السوق وزوار المنطقة بشكل عام. يقع المبنى بالقرب من العديد من الأسواق والمجمعات التجارية القديمة والفنادق التي يزورها العديد من السياح على مدار العام." id="description-arabic" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="link-english" className="form-label">Link Text in English</Label>
                        <Input className="form-control" type="text" defaultValue="VIEW DETAILS" id="link-english" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="link-arabic" className="form-label">Link Text in Arabic</Label>
                        <Input dir="rtl" className="form-control" type="text" defaultValue="عرض التفاصيل" id="link-arabic" />
                      </div>
                    </Col>
                    <Col lg={12}>
                    <div className="mb-3">
                        <Label htmlFor="example-text-input" className="form-Label">Button Link</Label>
                        <Input className="form-control" type="text" defaultValue="https://enmaa-previews.vercel.app/services/service-1" id="example-text-input" />
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
