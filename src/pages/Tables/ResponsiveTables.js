import React, { useMemo, useState } from "react"

import { Row, Col, Card, CardBody, CardHeader } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { tabledata } from "../../common/data"
import Pagination from "../../components/Common/Pagination"

const ResponsiveTables = () => {
  //meta title
  document.title = "Responsive Table | enmaa.com";

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Home page" />

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
                            <Th>section</Th>
                            <Th data-priority="1">Title</Th>
                            <Th data-priority="3">Sub Title</Th>
                            <Th data-priority="1">description </Th>
                            <Th data-priority="3">Banner</Th>
                            <Th data-priority="3">Action</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {tabledata.map((rowData, index) => (
                            <Tr key={index}>
                              <Th>
                                {rowData.ticker} <span className="">{rowData.companyName}</span>
                              </Th>
                              <Td>{rowData.price}</Td>
                              <Td>{rowData.time}</Td>
                              <Td>{rowData.change}</Td>
                              <Td><img src="" alt=""/></Td>
                              <Td className="d-flex align-items-center justify-content-center"><button className="btn btn-primary">Edit</button></Td>
                           
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

export default ResponsiveTables
