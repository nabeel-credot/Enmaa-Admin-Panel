// addserver.js

import React, { useState } from "react";
import { Row, Col, Card, CardBody, CardHeader, Input } from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Link } from "react-router-dom";
import { aboutsubtabledata } from "../../../common/data/index.js"; // Ensure the correct path

const AddServer = () => {
  return (
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
                      <Th data-priority="1">Description</Th>
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
                <div className="d-flex justify-content-end gap-3 p-4">
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
  );
};

export default AddServer;
