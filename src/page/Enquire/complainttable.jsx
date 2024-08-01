import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, CardHeader, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";
import { getCompliants } from './../../api/getapi.js';

const ComplaintTable = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const data = await getCompliants();
        console.log('Fetched complaints data:', data); 
        setComplaints(data.Complaint || []); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchComplaints();
  }, []);

  const toggle = () => setModal(!modal);

  const handleViewClick = (rowData) => {
    setSelectedRow(rowData);
    toggle();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!Array.isArray(complaints)) {
    return <p>Error: Fetched data is not an array</p>;
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Complaint Enquire" />

          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <h4 className="card-title"></h4>
                  <p className="card-title-desc">This is an experimental awesome solution for responsive tables with complex data.</p>
                </CardHeader>
                <CardBody>
                  <div className="table-rep-plugin">
                    <div className="table-responsive mb-0" data-pattern="priority-columns">
                      <Table id="tech-companies-1" className="table table-striped table-bordered">
                        <Thead>
                          <Tr>
                            <Th data-priority="1">Description</Th>
                            <Th data-priority="1">Contact Number</Th>
                            <Th data-priority="1">Civil ID</Th>
                            <Th data-priority="1">First Name</Th>
                            <Th data-priority="1">Last Name</Th>
                            <Th data-priority="1">Phone Number</Th>
                            <Th data-priority="1">Email Address</Th>
                            <Th data-priority="3">Actions</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {complaints.map((rowData, index) => (
                            <Tr key={index}>
                              <Td>{rowData.description}</Td>
                              <Td>{rowData.contactNumber}</Td>
                              <Td>{rowData.civilId}</Td>
                              <Td>{rowData.firstName}</Td>
                              <Td>{rowData.lastName}</Td>
                              <Td>{rowData.phoneNumber}</Td>
                              <Td>{rowData.emailAddress}</Td>
                              <Td className="d-flex align-items-center justify-content-center">
                                <Button onClick={() => handleViewClick(rowData)} className="btn btn-primary">
                                  View
                                </Button>
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
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Complaint Details</ModalHeader>
        <ModalBody>
          {selectedRow && (
            <div>
              <p><strong>Description:</strong> {selectedRow.description}</p>
              <p><strong>Contact Number:</strong> {selectedRow.contactNumber}</p>
              <p><strong>Civil ID:</strong> {selectedRow.civilId}</p>
              <p><strong>First Name:</strong> {selectedRow.firstName}</p>
              <p><strong>Last Name:</strong> {selectedRow.lastName}</p>
              <p><strong>Phone Number:</strong> <Link to={`tel:${selectedRow.phoneNumber}`}>{selectedRow.phoneNumber}</Link> </p>
              <p><strong>Email Address:</strong> <Link to={`mailto:${selectedRow.emailAddress}`}>{selectedRow.emailAddress}</Link></p>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default ComplaintTable;
