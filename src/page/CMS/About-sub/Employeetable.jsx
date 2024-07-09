import React, { useState } from "react";
import { Row, Col, Card, CardBody, CardHeader, Button, Form, FormGroup, Label, Input } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import logoSvg from './../../../assets/images/logo-sm.png';

// Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb.js";

const initialProducts = [
  { id: 1, name: "David McHenry", position: "Board Member", photo: logoSvg },
  { id: 2, name: "Frank Kirk", position: "Chairman", photo: logoSvg },
  { id: 3, name: "Rafael Morales", position: "Senior manager", photo: logoSvg },
  { id: 4, name: "Mark Ellison", position: "Board Member", photo: logoSvg },
  { id: 5, name: "Minnie Walter", position: "Senior manager", photo: logoSvg },
];

// Custom editor component for file upload
const PhotoUploadEditor = (props) => {
  const [photo, setPhoto] = useState(props.defaultValue);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        setPhoto(upload.target.result);
        props.onUpdate(upload.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handlePhotoChange} />
      {photo && <img src={photo} alt="uploaded" style={{ width: "50px", marginTop: "10px" }} />}
    </div>
  );
};

const columns = [
  {
    dataField: "id",
    text: "ID",
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
    dataField: "photo",
    text: "Photo",
    formatter: (cellContent, row) => (
      <div>
        <img src={row.photo} alt={row.name} style={{ width: "50px" }} />
      </div>
    ),
    editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
      <PhotoUploadEditor {...editorProps} value={value} />
    ),
  },
  {
    dataField: "action",
    text: "Action",
    formatter: (cellContent, row) => (
      <div className="d-flex gap-4">
        <button className="btn btn-outline-light"> <i className="mdi mdi-delete"></i> Delete </button>
        <button className="btn btn-outline-light"> <i className="mdi mdi-view-dashboard-edit-outline"></i> Update </button>
      </div>
    ),
  },
];

const EditableTables = () => {
  const [products, setProducts] = useState(initialProducts);
  const [newPerson, setNewPerson] = useState({
    id: "",
    name: "",
    position: "",
    photo: logoSvg,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPerson({
      ...newPerson,
      [name]: value,
    });
  };

  const handleAddPerson = () => {
    setProducts([...products, { ...newPerson, id: products.length + 1 }]);
    setNewPerson({ id: "", name: "", position: "", photo: logoSvg });
  };

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
                      keyField="id"
                      data={products}
                      columns={columns}
                      cellEdit={cellEditFactory({ mode: "click" })}
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
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (upload) => {
                                  setNewPerson({ ...newPerson, photo: upload.target.result });
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col  className="align-self-end mb-3">
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
