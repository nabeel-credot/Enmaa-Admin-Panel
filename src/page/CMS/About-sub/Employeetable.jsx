import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, CardHeader, Button, Form, FormGroup, Label, Input } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import axios from 'axios';
import Breadcrumbs from "../../../components/Common/Breadcrumb.js";

import { getTableData, createTableData, deleteTableDataById } from './../../../api/team.js';

const handleFileUpload = async (files) => {
  if (files && files.length > 0) {
    const fileData = new FormData();
    fileData.append('media', files[0]);

    try {
      const response = await axios.post('http://localhost:4001/api/media', fileData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const filePath = `/${response.data.filename}`;
      return filePath;
    } catch (error) {
      console.error('Error in file upload:', error.response ? error.response.data : error.message);
      throw error;
    }
  }
};

const EditableTables = () => {
  const [team, setTeam] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    position: "",
    imageUrl: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTableData();
      setTeam(data);
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPerson({
      ...newPerson,
      [name]: value,
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const filePath = await handleFileUpload([file]);
        setNewPerson({ ...newPerson, imageUrl: filePath });
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleAddPerson = async () => {
    try {
      const addedPerson = await createTableData(newPerson);
      if (addedPerson) {
        setTeam([...team, addedPerson]);
        setNewPerson({ name: "", position: "", imageUrl: '' });
      }
    } catch (error) {
      console.error('Error adding person:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTableDataById(id);
      setTeam(team.filter(product => product._id !== id));
      
      window.location.reload();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const columns = [
    {
      dataField: "_id",
      text: "ID",
      hidden: true
    },
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "position",
      text: "Position",
    },
    {
      dataField: "imageUrl",
      text: "Photo",
      formatter: (cellContent, row) => (
        <div>
          <img src={`http://localhost:4001/media${row.imageUrl}`}alt={row.name} style={{ width: "50px" }} />
        </div>
      ),
    },
    {
      dataField: "action",
      text: "Action",
      formatter: (cellContent, row) => (
        <div className="d-flex gap-4">
          <button className="btn btn-outline-light" onClick={() => handleDelete(row._id)}> <i className="mdi mdi-delete"></i> Delete </button>
        </div>
      ),
    },
  ];

  // meta title
  document.title = "Editable | enmaa.com";

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Employee table" />

          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Datatable Editable</h4>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <BootstrapTable
                      keyField="_id"
                      data={team}
                      columns={columns}
                    />
                  </div>
                  <Form className="mt-4">
                    <Row form>
                      <Col md={3}>
                        <FormGroup>
                          <Label for="name">Name</Label>
                          <Input
                            type="text"
                            name="name"
                            id="name"
                            value={newPerson.name}
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={3}>
                        <FormGroup>
                          <Label for="position">Position</Label>
                          <Input
                            type="text"
                            name="position"
                            id="position"
                            value={newPerson.position}
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={3}>
                        <FormGroup>
                          <Label for="photo">Photo</Label>
                          <Input
                            type="file"
                            name="photo"
                            id="photo"
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="align-self-end mb-3">
                        <Button color="primary" onClick={handleAddPerson}>
                          Add Person
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditableTables;
