import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import { Card, CardBody, CardHeader, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from './../../../../components/Common/Breadcrumb';

const Section4form = () => {
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
                            <Breadcrumbs title="Forms" breadcrumbItem="Section 4" />
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
                                    <h4 className="card-title">Mission and Vision Section</h4>
                                    <p className="card-title-desc">Here you can change the <code>TITLE, SUBTITLE, DESCRIPTION, MISSION, & VISION</code> for both languages.</p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="subtitle-english" className="form-label">Subtitle in English</Label>
                                                <Input className="form-control" type="text" defaultValue="Lorem ipsum dolor sit amet" id="subtitle-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="subtitle-arabic" className="form-label">Subtitle in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="لوريم إيبسوم دولار سيت أميت" id="subtitle-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="title-english" className="form-label">Title in English</Label>
                                                <Input className="form-control" type="text" defaultValue="Our Mission and Vision" id="title-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="title-arabic" className="form-label">Title in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="مهمتنا ورؤيتنا" id="title-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="description-english" className="form-label">Description in English</Label>
                                                <Input className="form-control" type="textarea" defaultValue="Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem.lacus enim eleifend vitae nibh sem it amet consectetur.orem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem.lacus enim eleifend vitae nibh sem it amet consectetur." id="description-english" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="description-arabic" className="form-label">Description in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="textarea" defaultValue="لوريم إيبسوم دولار سيت أميت كونسيتتور. موس إت رونكوس بريتيوم يوسمود بيللينتسكو. كونسيتتور لاكوس إينيم إيليفيإند فيتاي نيب سيم.لاكوس إينيم إيليفيإند فيتاي نيب سيم إت أميت كونسيتتور.لوريم إيبسوم دولار سيت أميت كونسيتتور. موس إت رونكوس بريتيوم يوسمود بيللينتسكو. كونسيتتور لاكوس إينيم إيليفيإند فيتاي نيب سيم.لاكوس إينيم إيليفيإند فيتاي نيب سيم إت أميت كونسيتتور." id="description-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="mission-title-english" className="form-label">Mission Title in English</Label>
                                                <Input className="form-control" type="text" defaultValue="Mission" id="mission-title-english" />
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="mission-description-english" className="form-label">Mission Description in English</Label>
                                                <Input className="form-control" type="textarea" defaultValue="To evolve as a trusted partner in property management and security services. To develop sustainable Property Management solutions." id="mission-description-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="mission-title-arabic" className="form-label">Mission Title in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="المهمة" id="mission-title-arabic" />
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="mission-description-arabic" className="form-label">Mission Description in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="textarea" defaultValue="التطور كشريك موثوق في إدارة الممتلكات والخدمات الأمنية. تطوير حلول إدارة الممتلكات المستدامة." id="mission-description-arabic" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="vision-title-english" className="form-label">Vision Title in English</Label>
                                                <Input className="form-control" type="text" defaultValue="Vision" id="vision-title-english" />
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="vision-description-english" className="form-label">Vision Description in English</Label>
                                                <Input className="form-control" type="textarea" defaultValue="To become the first-choice partner of real estate and security services and to achieve highest possible standards in the real estate sector" id="vision-description-english" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="vision-title-arabic" className="form-label">Vision Title in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="text" defaultValue="الرؤية" id="vision-title-arabic" />
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="vision-description-arabic" className="form-label">Vision Description in Arabic</Label>
                                                <Input dir="rtl" className="form-control" type="textarea" defaultValue="أن نصبح الشريك الأول المفضل في خدمات العقارات والأمن وأن نحقق أعلى المعايير الممكنة في قطاع العقارات." id="vision-description-arabic" />
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

export default Section4form;
