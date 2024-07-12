import React, { useState } from "react";
import { Row, Col, Card, CardBody, CardHeader, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { janTopSellingData } from "../../common/data";
import logoSvg from "../../assets/images/logo-sm.png";
import { Link } from "react-router-dom";
const investortable = () => {
   // Meta title
   document.title = "Responsive Table | enmaa.com";

   // State to manage modal visibility
   const [modal, setModal] = useState(false);
 
   // State to store selected row data
   const [selectedRow, setSelectedRow] = useState(null);
 
   // Function to toggle modal visibility
   const toggle = () => setModal(!modal);
 
   // Function to handle view button click
   const handleViewClick = (rowData) => {
     setSelectedRow(rowData);
     toggle();
   };
 
   return (
     <React.Fragment>
       <div className="page-content">
         <div className="container-fluid">
           <Breadcrumbs title="Tables" breadcrumbItem="Investor Enquire " />
 
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
                             <Th data-priority="1">Enquire ID</Th>
                             <Th data-priority="1">Name</Th>
                             <Th data-priority="1">Position</Th>
                             <Th data-priority="3">CV</Th>
                             <Th data-priority="3"></Th>
                           </Tr>
                         </Thead>
                         <Tbody>
                           {janTopSellingData.map((rowData, index) => (
                             <Tr key={index}>
                               <Th>{rowData.property}</Th>
                               <Td>{rowData.enquire}</Td>
                               <Td>{rowData.name}</Td>
                               <Td className="">
                                 <img src={logoSvg} alt="" height="24" />
                               </Td>
                               <Td className="d-flex align-items-center justify-content-center">
                                 <Button onClick={() => handleViewClick(rowData)} className="btn btn-primary">
                                   View
                                 </Button>
                               </Td>
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
 
       <Modal isOpen={modal} toggle={toggle}>
         <ModalHeader toggle={toggle}>Enquiry Details</ModalHeader>
         <ModalBody>
           {selectedRow && (
             <div>
               <p><strong>Enquire ID:</strong> {selectedRow.property}</p>
               <p><strong>Property ID:</strong> {selectedRow.enquire}</p>
               <p><strong>Name:</strong> {selectedRow.name}</p>
               <p><strong>Phone Number:</strong>   <Link to={`tel:${selectedRow.phone}`}>{selectedRow.phone}</Link>
               </p>
               <p><strong>Email:</strong>  <Link to={`mailto:${selectedRow.email}`}>{selectedRow.email}</Link></p>
 
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
 
 export default investortable
