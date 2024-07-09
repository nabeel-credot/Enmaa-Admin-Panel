import React, { useState } from "react";
import { Row, Col, Card, CardBody, CardHeader, Input, Label } from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Breadcrumbs from "../../../components/Common/Breadcrumb.js";
import { aboutsubtabledata, anotherTableData } from "../../../common/data/index.js"; // Assuming you have anotherTableData in your data file
import { Link } from "react-router-dom";
const Servicetable = () => {
  // Meta title
  document.title = "Responsive Table | enmaa.com";

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Service page" />
          <Row>
            <h4>Meta Section</h4>
            <Col lg={6}>
              <div className="mb-3">
                <Label htmlFor="example-text-input" className="form-Label">Meta Name in English</Label>
                <Input className="form-control" type="text" defaultValue="READ MORE" id="example-text-input" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-3">
                <Label htmlFor="example-search-input" className="form-Label">Meta Name in Arabic</Label>
                <Input dir="rtl" className="form-control" type="text" defaultValue="اقرأ أكثر" id="example-text-input" />
              </div>
            </Col>
            <Col lg={6}>
             <div className="mb-3">
                <Label htmlFor="example-text-input" className="form-Label">Meta Content in English</Label>
                <Input className="form-control" type="text" defaultValue="READ MORE" id="example-text-input" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-3">
                <Label htmlFor="example-search-input" className="form-Label">Meta Content in Arabic</Label>
                <Input dir="rtl" className="form-control" type="text" defaultValue="٣٠+" id="example-text-input" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="mb-3">
                <Label htmlFor="example-text-input" className="form-Label">Meta Slug</Label>
                <Input className="form-control" type="text" defaultValue="/home" id="example-text-input" />
              </div>
            </Col>
          </Row>
          <div className='d-flex justify-content-end gap-3 p-4'>
            <Link to="/form-elements" className="d-flex align-items-center gap-1 btn btn-success">
              <i className="mdi mdi-content-save"></i>Update
            </Link>
          </div>

          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Service Section Table</h4>
                  <p className="card-title-desc">This is an experimental awesome solution for responsive tables with complex data.</p>
                </CardHeader>
                <CardBody>
                  <div className="table-rep-plugin">
                    <div className="table-responsive mb-0" data-pattern="priority-columns">
                      <Table id="tech-companies-1" className="table table-striped table-bordered">
                        <Thead>
                          <Tr>
                            <Th data-priority="1">Section</Th>
                            <Th data-priority="1">Title</Th>
                            <Th data-priority="1">Description </Th>
                            <Th data-priority="3">ON/OFF</Th>
                            <Th data-priority="3">Action</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {aboutsubtabledata.map((rowData, index) => (
                            <Tr key={index}>
                              <Th>{rowData.section}</Th>
                              <Td>{rowData.title}</Td>
                              <Td className="w-30 h-20 overflow-hidden">{rowData.description}</Td>
                              <Td>
                                <div className="form-check form-switch">
                                  <Input className="form-check-input" type="checkbox" role="switch" id={`flexSwitchCheckDefault${index}`} />
                                </div>
                              </Td>
                              <Td className="d-flex align-items-center justify-content-center gap-3">
                                <Link to="https://enmaa-previews.vercel.app/" className="d-flex align-items-center gap-2 btn btn-outline-light" target="_blank">
                                  <i className="mdi mdi-open-in-new"></i>Preview
                                </Link>
                                <Link to={rowData.sectionlink} className="d-flex align-items-center gap-2 btn btn-outline-light">
                                  <i className="mdi mdi-view-dashboard-edit-outline"></i>Edit
                                </Link>
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Service list</h4>
                  <p className="card-title-desc">This is another table with the same properties for demonstration purposes.</p>
                </CardHeader>
                <CardBody>
                  <div className="table-rep-plugin">
                    <div className="table-responsive mb-0" data-pattern="priority-columns">
                      <Table id="tech-companies-2" className="table table-striped table-bordered">
                        <Thead>
                          <Tr>
                            <Th data-priority="1">Section</Th>
                            <Th data-priority="1">Title</Th>
                            <Th data-priority="1">Description </Th> 
                            <Th data-priority="3"></Th>
                            <Th data-priority="3">ON/OFF</Th>

                            <Th data-priority="3">Action</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {aboutsubtabledata.map((rowData, index) => (
                            <Tr key={index}>
                              <Th>{rowData.section}</Th>
                              <Td>{rowData.title}</Td>
                              
                              <Td className="w-30 h-20 overflow-hidden">{rowData.description}</Td>
                              <Td>{rowData.type}</Td>
                              <Td>
                                <div className="form-check form-switch">
                                  <Input className="form-check-input" type="checkbox" role="switch" id={`flexSwitchCheckDefault${index}`} />
                                </div>
                              </Td>
                              <Td className="d-flex align-items-center justify-content-center gap-3">
                                <Link to="https://enmaa-previews.vercel.app/" className="d-flex align-items-center gap-2 btn btn-outline-light" target="_blank">
                                  <i className="mdi mdi-delete"></i>Delete
                                </Link>
                                <Link to="Serviceform" className="d-flex align-items-center gap-2 btn btn-outline-light">
                                  <i className="mdi mdi-view-dashboard-edit-outline"></i>Update
                                </Link>
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                      <div className='d-flex justify-content-end gap-3 p-4'>
            <Link to="Serviceform" className="d-flex align-items-center gap-1 btn btn-success">
              <i className="mdi mdi-content-save"></i>Add Service
            </Link>
          </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Servicetable;
