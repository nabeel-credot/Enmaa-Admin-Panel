import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardHeader, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Breadcrumbs from './../../../components/Common/Breadcrumb';
import { Link } from 'react-router-dom';
import { getTableData, updateTableData, updateTableDataById } from './../../../api/homeapi.js';

const Hometable = () => {
  document.title = 'Responsive Table | enmaa.com';

  const [tableData, setTableData] = useState([]);
  const [metaData, setMetaData] = useState({
    metaNameEn: '',
    metaNameAr: '',
    metaContentEn: '',
    metaContentAr: '',
    metaSlug: '',
  });

  const [modal, setModal] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTableData();
        const filteredData = data.filter(row => row.page === "home");
        setTableData(filteredData);
      } catch (error) {
        console.error('Failed to fetch table data:', error);
      }
    };
  
    fetchData();
  }, []);

  const toggleModal = () => setModal(!modal);

  const handleUpdate = async () => {
    try {
      await updateTableData(tableData);
      alert('Table data updated successfully');
    } catch (error) {
      console.error('Failed to update table data:', error);
    }
  };

  const handleStatusChange = (index) => {
    setSelectedRowIndex(index);
    toggleModal();
  };

  const confirmStatusChange = async () => {
    const updatedTableData = [...tableData];
    updatedTableData[selectedRowIndex].status = !updatedTableData[selectedRowIndex].status;

    setTableData(updatedTableData);
    toggleModal();

    try {
      await updateTableDataById(updatedTableData[selectedRowIndex]._id, updatedTableData[selectedRowIndex]);
      alert('Status updated successfully');
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Row className=''>
            <Breadcrumbs title="Tables" breadcrumbItem="Home page" />
            <h4>Meta Section</h4>
            <Col lg={6}>
              <div className="mb-3">
                <Label htmlFor="meta-name-en" className="form-Label">Meta Name in English</Label>
                <Input
                  className="form-control"
                  type="text"
                  value={metaData.metaNameEn}
                  onChange={(e) => setMetaData({ ...metaData, metaNameEn: e.target.value })}
                  id="meta-name-en"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-3">
                <Label htmlFor="meta-name-ar" className="form-Label">Meta Name in Arabic</Label>
                <Input
                  dir="rtl"
                  className="form-control"
                  type="text"
                  value={metaData.metaNameAr}
                  onChange={(e) => setMetaData({ ...metaData, metaNameAr: e.target.value })}
                  id="meta-name-ar"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-3">
                <Label htmlFor="meta-content-en" className="form-Label">Meta Content in English</Label>
                <Input
                  className="form-control"
                  type="text"
                  value={metaData.metaContentEn}
                  onChange={(e) => setMetaData({ ...metaData, metaContentEn: e.target.value })}
                  id="meta-content-en"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-3">
                <Label htmlFor="meta-content-ar" className="form-Label">Meta Content in Arabic</Label>
                <Input
                  dir="rtl"
                  className="form-control"
                  type="text"
                  value={metaData.metaContentAr}
                  onChange={(e) => setMetaData({ ...metaData, metaContentAr: e.target.value })}
                  id="meta-content-ar"
                />
              </div>
            </Col>
            <Col lg={4}>
              <div className="mb-3">
                <Label htmlFor="meta-slug" className="form-Label">Meta Slug</Label>
                <Input
                  className="form-control"
                  type="text"
                  value={metaData.metaSlug}
                  onChange={(e) => setMetaData({ ...metaData, metaSlug: e.target.value })}
                  id="meta-slug"
                />
              </div>
            </Col>
            <div className="d-flex justify-content-end gap-3 p-4">
              <Link to=" " className="d-flex align-items-center gap-1 btn btn-success" onClick={handleUpdate}>
                <i className="mdi mdi-content-save"></i>Update
              </Link>
            </div>
          </Row>

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
                            <Th data-priority="1">Section</Th>
                            <Th data-priority="1">Title (EN)</Th>
                            <Th data-priority="1">Title (AR)</Th>
                            <Th data-priority="1">Description (EN)</Th>
                            <Th data-priority="1">Image</Th>
                            <Th data-priority="3">ON/OFF</Th>
                            <Th data-priority="3">Action</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                        {/* {tableData.filter(rowData => rowData.page === "home").map((rowData, index) => ( */}
                          {tableData.map((rowData, index) => (
                            <Tr key={index}>
                              <Th>{rowData.section}</Th>
                              <Td>{rowData.title_en}</Td>
                              <Td>{rowData.title_ar}</Td>
                              <Td className="w-30 h-20 overflow-hidden">{rowData.description_en}</Td>
                              <img src={`http://localhost:4001/media/${rowData.bannerImage}`} alt="Banner Image" width={200} />
                              <Td>
                                <div className="form-check form-switch">
                                  <Input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id={`flexSwitchCheckDefault-${index}`}
                                    checked={rowData.status}
                                    onChange={() => handleStatusChange(index)}
                                  />
                                </div>
                              </Td>
                              <Td className="d-flex align-items-center justify-content-center gap-3">
                                <Link to="https://enmaa-previews.vercel.app/" className="d-flex align-items-center gap-2 btn btn-outline-light" target="_blank">
                                  <i className="mdi mdi-open-in-new"></i>Preview
                                </Link>
                                <Link to={`section-1/${rowData._id}`} className="d-flex align-items-center gap-2 btn btn-outline-light">
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
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Confirm Status Change</ModalHeader>
        <ModalBody>
          Are you sure you want to update the status?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={confirmStatusChange}>Confirm</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  ); 
};

export default Hometable;
