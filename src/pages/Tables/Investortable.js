import React, { useMemo, useState } from "react"

import { Row, Col, Card, CardBody, CardHeader } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { tabledata } from "../../common/data"
import Pagination from "../../components/Common/Pagination"
import logoSvg from "../../assets/images/logo-sm.png";
import { Link } from "react-router-dom"

const Investortable = () => {
  //meta title
  document.title = "Responsive Table | enmaa.com";

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Investor page" />

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
                            <Th data-priority="1">Enquire ID</Th>
                            <Th data-priority="1">Property ID</Th>
                            <Th data-priority="1">description </Th>
                            <Th data-priority="3">Image</Th>
                            <Th data-priority="3"></Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {tabledata.map((rowData, index) => (
                            <Tr key={index}>
                              <Th>
                                 {rowData.companyName}
                              </Th>
                              <Td>{rowData.price}</Td>
                              <Td>{rowData.change}</Td>
                              <Td className=""><img src={logoSvg} alt="" height="24" /></Td>
                              <Td className="d-flex align-items-center justify-content-center"><Link to="/"className="btn btn-primary">View</Link></Td>
                           
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

export default Investortable
