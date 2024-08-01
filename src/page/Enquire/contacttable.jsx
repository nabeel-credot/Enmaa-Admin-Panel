import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, CardHeader, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";
import { getContact } from './../../api/getapi.js';

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getContact();
        console.log('Fetched contacts data:', data); 
        setContacts(data.contactform || []); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const toggle = () => setModal(!modal);

  const handleViewClick = (rowData) => {
    setSelectedRow(rowData);
    toggle();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!Array.isArray(contacts)) {
    return <p>Error: Fetched data is not an array</p>;
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Contact Enquire" />

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
                            <Th data-priority="1">Name</Th>
                            <Th data-priority="1">Email</Th>
                            <Th data-priority="1">Phone</Th>
                            <Th data-priority="1">Message</Th>
                            <Th data-priority="3">Actions</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {contacts.map((rowData, index) => (
                            <Tr key={index}>
                              <Td>{rowData.name}</Td>
                              <Td>{rowData.email}</Td>
                              <Td>{rowData.phone}</Td>
                              <Td>{rowData.message}</Td>
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
        <ModalHeader toggle={toggle}>Contact Details</ModalHeader>
        <ModalBody>
          {selectedRow && (
            <div>
              <p><strong>Name:</strong> {selectedRow.name}</p>
              <p><strong>Email:</strong> <Link to={`mailto:${selectedRow.email}`}>{selectedRow.email}</Link></p>
              <p><strong>Phone:</strong> <Link to={`tel:${selectedRow.phone}`}>{selectedRow.phone}</Link></p>
              <p><strong>Message:</strong> {selectedRow.message}</p>
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

export default ContactTable;
