import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, CardHeader, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import pdf from "../../assets/images/pdf.png";

import { getCareers, getCareerById } from './../../api/getapi.js';

const Careeertable = () => {
  const [careers, setCareers] = useState([]);
  // const [selectedCareer, setSelectedCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [imageModal, setImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const data = await getCareers();
        console.log('Fetched careers data:', data); 
        setCareers(data.careerForm || []); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCareers();
  }, []);

  const handleSelectCareer = async (id) => {
    setLoading(true);
    try {
      const data = await getCareerById(id);
      setSelectedCareer(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggle = () => setModal(!modal);
  const toggleImageModal = () => setImageModal(!imageModal);

  const handleViewClick = (rowData) => {
    setSelectedRow(rowData);
    toggle();
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    toggleImageModal();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!Array.isArray(careers)) {
    return <p>Error: Fetched data is not an array</p>;
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Career Enquire" />

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
                            <Th data-priority="1">Position</Th>
                            <Th data-priority="1">Full Name</Th>
                            <Th data-priority="1">Degree Level</Th>
                            <Th data-priority="3">Resume</Th>
                            <Th data-priority="3">Actions</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {careers.map((rowData, index) => (
                            <Tr key={index}>
                              <Th>{rowData.position}</Th>
                              <Td>{rowData.fullName}</Td>
                              <Td>{rowData.degreeLevel}</Td>
                              <Td>
                              <a href={rowData.resumeUrl} target="_blank" rel="noopener noreferrer">
                              <img src={pdf} width={50}/></a>
                              </Td>
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
        <ModalHeader toggle={toggle}>Enquiry Details</ModalHeader>
        <ModalBody>
          {selectedRow && (
            <div>
              <p><strong>Position:</strong> {selectedRow.position}</p>
              <p><strong>Full Name:</strong> {selectedRow.fullName}</p>
              <p><strong>Degree Level:</strong> {selectedRow.degreeLevel}</p>
              <p><strong>Gender:</strong> {selectedRow.gender}</p>
              <p><strong>Email Address:</strong> {selectedRow.emailAddress}</p>
              <p><strong>Nationality:</strong> {selectedRow.nationality}</p>
              <p><strong>Career Level:</strong> {selectedRow.careerLevel}</p>
              <p><strong>Job Duties:</strong> {selectedRow.jobDuties}</p>
              <p><strong>Additional Info:</strong> {selectedRow.additionalInfo}</p>
              <p><strong>Resume URL:</strong> <a href={selectedRow.resumeUrl} target="_blank" rel="noopener noreferrer">{selectedRow.resumeUrl}</a></p>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={imageModal} toggle={toggleImageModal}>
        <ModalHeader toggle={toggleImageModal}>Image</ModalHeader>
        <ModalBody>
          {selectedImage && (
            <div className="text-center">
              <img src={selectedImage} alt="Enlarged" style={{ maxWidth: "100%", height: "auto" }} />
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleImageModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default Careeertable;
