import React, { useMemo, useState } from "react"

import { Row, Col, Card, CardBody, CardHeader ,Input, Label} from "reactstrap"

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "./../../../components/Common/Breadcrumb"
import { tabledata } from "./../../../common/data"
import logoSvg from './../../../assets/images/logo-sm.png';
import { Link } from "react-router-dom"
import Pagination from './../../../components/Common/Pagination.js';
const Hometable = () => {
  //meta title
  document.title = "Responsive Table | enmaa.com";

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Home page" />
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
                    </div></Col>
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
                <Link to="/form-elements"className="  d-flex align-items-center gap-1 btn btn-success"><i className="mdi mdi-content-save"></i>Update</Link>
                </div>
           
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <h4 className="card-title"></h4>
                  <p className="card-title-desc">This is an experimental awesome solution for responsive tables with complex data.</p>
                </CardHeader>
                <CardBody>
                  <div className="table-rep-plugin">
                    <div
                      className="table-responsive mb-0"
                      data-pattern="priority-columns"
                    >
                      <Table
                        id="tech-companies-1"
                        className="table table-striped table-bordered"
                      >
                        <Thead>
                          <Tr>
                            <Th data-priority="1">section</Th>
                            <Th data-priority="1">Title</Th>
                            {/* <Th data-priority="3">Sub Title</Th> */}
                            <Th data-priority="1">Description </Th>
                            {/* <Th data-priority="3">Banner</Th> */}
                            <Th data-priority="3">Action</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {tabledata.map((rowData, index) => (
                            <Tr key={index}>
                              <Th>
                                 {rowData.section}
                              </Th>
                              <Td>{rowData.title}</Td>
                              {/* <Td>{rowData.subtitle}</Td> */}
                              <Td className="w-30 h-20 overflow-hidden">{rowData.description}</Td>
                              {/* <Td className=""><img src={logoSvg} alt="" height="24" /></Td> */}
                              <Td className="d-flex align-items-center justify-content-center  gap-3 "><Link to="https://enmaa-previews.vercel.app/" className=" d-flex align-items-center gap-2 btn btn-outline-light" target="_blank"><i className="mdi mdi-open-in-new"></i>Preview</Link>
                              <Link to={rowData.sectionlink} className=" d-flex align-items-center gap-2  btn btn-outline-light "><i className="mdi  mdi-view-dashboard-edit-outline"></i>Edit</Link></Td>
                           
                            </Tr>
                          ))}
                        </Tbody>
                        {/* <Pagination
                          perPageData={perPageData}
                          data={tabledata}
                          currentPage={currentPage}
                          setCurrentPage={setCurrentPage}
                          currentData={tabledata}
                          className="d-flex align-items-center justify-content-between text-center text-sm-start mb-3" /> */}
                      </Table>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hometable
