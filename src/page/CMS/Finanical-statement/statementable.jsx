import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, CardHeader, Button, Form, FormGroup, Label, Input } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import axios from 'axios';
import Breadcrumbs from "../../../components/Common/Breadcrumb.js";

const fetchFinancialStatements = async () => {
  try {
    const response = await axios.get('http://localhost:4001/api/financial-statements');
    return response.data.financialStatements;
  } catch (error) {
    console.error('Error fetching financial statements:', error);
    return [];
  }
};

const EditableFinancialStatements = () => {
  const [financialStatements, setFinancialStatements] = useState([]);
  const [newStatement, setNewStatement] = useState({
    year: '',
    statements: [
      {
        viewLinks: []
      }
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFinancialStatements();
      setFinancialStatements(data);
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStatement({
      ...newStatement,
      [name]: value,
    });
  };

  const handleFileChange = (index, e) => {
    const files = Array.from(e.target.files);
    const updatedStatements = newStatement.statements.map((statement, i) =>
      i === index ? { ...statement, viewLinks: files } : statement
    );
    setNewStatement({ ...newStatement, statements: updatedStatements });
  };

  const handleFileUpload = async (files) => {
    const uploadedFiles = [];
    const fileUploadPromises = files.map(file => {
      const fileData = new FormData();
      fileData.append('media', file);

      return axios.post('http://localhost:4001/api/media', fileData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(response => {
        const filePath = `/${response.data.filename}`;
        return filePath; // Only returning the file path
      })
      .catch(error => {
        console.error('Error in file upload:', error.response ? error.response.data : error.message);
        throw error;
      });
    });

    try {
      const results = await Promise.all(fileUploadPromises);
      uploadedFiles.push(...results);
    } catch (error) {
      console.error('Error uploading files:', error);
    }

    return uploadedFiles;
  };

  const handleAddStatement = async () => {
    try {
      const updatedStatements = await Promise.all(newStatement.statements.map(async (statement) => {
        const viewLinks = await handleFileUpload(statement.viewLinks);
        return { ...statement, viewLinks };
      }));
      
      const response = await axios.post('http://localhost:4001/api/financial-statements', { ...newStatement, statements: updatedStatements });

      if (response.data) {
        setFinancialStatements([...financialStatements, response.data]);
        setNewStatement({ year: '', statements: [{ viewLinks: [] }] });
      }
    } catch (error) {
      console.error('Error adding statement:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/api/financial-statements/${id}`);
      setFinancialStatements(financialStatements.filter(statement => statement._id !== id));
    } catch (error) {
      console.error("Error deleting statement:", error);
    }
  };

  const columns = [
    {
      dataField: "_id",
      text: "ID",
      hidden: true
    },
    {
      dataField: "year",
      text: "Year",
    },
    {
      dataField: "statements",
      text: "Statements",
      formatter: (cellContent, row) => (
        row.statements ? row.statements.map((statement, index) => (
          <div key={index}>
            {statement.viewLinks ? statement.viewLinks.map((link, linkIndex) => (
              <div key={linkIndex}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </div>
            )) : null}
          </div>
        )) : null
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

  document.title = "Editable Financial Statements | enmaa.com";

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Financial Statements Table" />

          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Editable Financial Statements Table</h4>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <BootstrapTable
                      keyField="_id"
                      data={financialStatements}
                      columns={columns}
                    />
                  </div>
                  <Form className="mt-4">
                    <Row form>
                      <Col md={3}>
                        <FormGroup>
                          <Label for="year">Year</Label>
                          <Input
                            type="text"
                            name="year"
                            id="year"
                            value={newStatement.year}
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      {newStatement.statements.map((statement, index) => (
                        <React.Fragment key={index}>
                          <Col md={6}>
                            <FormGroup>
                              <Label for={`viewLinks-${index}`}>View Links</Label>
                              <Input
                                type="file"
                                name="viewLinks"
                                id={`viewLinks-${index}`}
                                multiple
                                onChange={(e) => handleFileChange(index, e)}
                              />
                            </FormGroup>
                          </Col>
                        </React.Fragment>
                      ))}
                      <Col className="align-self-end mb-3">
                        <Button color="primary" onClick={handleAddStatement}>
                          Add Statement
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

export default EditableFinancialStatements;
