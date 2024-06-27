
import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import { Card, CardBody, CardHeader, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from './../../../../components/Common/Breadcrumb';
import FormUpload from './../../../../pages/Forms/FormUpload.js';

const Section2form = () => {
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
                            <Breadcrumbs title="Forms" breadcrumbItem="Section 2" />
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
                                    <h4 className="card-title">About Company Detailed Section</h4>
                                    <p className="card-title-desc">Here you can change the <code>TITLE, SUBTITLE, DESCRIPTION, IMAGES & BUTTON</code> for both languages.</p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="subtitle-english" className="form-label">Subtitle in English</Label>
                                                <Input className="form-control" type="text" defaultValue="Lorem ipsum dolor sit amet consectetur. Orci" id="subtitle-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="subtitle-arabic" className="form-label">Subtitle in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="لوريم إيبسوم دولار سيت أميت كونسيتتيور. أورسي" id="subtitle-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="title-english" className="form-label">Title in English</Label>
                                                <Input className="form-control" type="text" defaultValue="Lorem ipsum dolor sit amet congue ornare elit" id="title-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="title-arabic" className="form-label">Title in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="لوريم إيبسوم دولار سيت أميت كونغي أورناري إليت" id="title-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="description-english" className="form-label">Description in English</Label>
                                                <Input className="form-control" type="textarea" defaultValue="Al Enma’a Real Estate Company K.S.C.P was registered and incorporated in State of Kuwait in 1993. The company shares are listed on Boursa Kuwait and all the activities of the company are conducted in accordance with Islamic Sharia. The parent company is subsidiary of Kuwait Finance House K.S.C.P a registered Islamic bank in Kuwait whose shares are listed on Boursa Kuwait. Al Enmaa Real Estate Company is engaged in real estate activities inside and outside Kuwait. In the field of the real estate, the Company manages, markets, leases and maintains all types of real estate whether owned by the company or managed for other through its qualified personnel." id="description-english" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="description-arabic" className="form-label">Description in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="textarea" defaultValue="تم تسجيل شركة الإنماء العقارية ش.م.ك.ع ودمجها في دولة الكويت في عام 1993. يتم إدراج أسهم الشركة في بورصة الكويت وتتم جميع أنشطة الشركة وفقًا لأحكام الشريعة الإسلامية. الشركة الأم هي شركة تابعة لبيت التمويل الكويتي ش.م.ك.ع وهو بنك إسلامي مسجل في الكويت وتدرج أسهمه في بورصة الكويت. شركة الإنماء العقارية تعمل في الأنشطة العقارية داخل وخارج الكويت. في مجال العقارات، تدير الشركة جميع أنواع العقارات سواء المملوكة من قبل الشركة أو المدارة للغير من خلال موظفيها المؤهلين." id="description-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <FormUpload name="Main Image" />
                                        </Col>
                                        <Col lg={12}>
                                            <FormUpload name="Secondary Image" />
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="sidebar-title-english" className="form-label">Sidebar Title in English</Label>
                                                <Input className="form-control" type="text" defaultValue="30+ Years of Experiences Property management & Investment" id="sidebar-title-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="sidebar-title-arabic" className="form-label">Sidebar Title in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="30+ سنوات من الخبرة في إدارة الممتلكات والاستثمار" id="sidebar-title-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="button-title-english" className="form-label">Button Title in English</Label>
                                                <Input className="form-control" type="text" defaultValue="CONTACT WITH US" id="button-title-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="button-title-arabic" className="form-label">Button Title in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="تواصل معنا" id="button-title-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="button-link" className="form-label">Button Link</Label>
                                                <Input className="form-control" type="text" defaultValue="https://enmaa-previews.vercel.app/contact" id="button-link" />
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

export default Section2form;
