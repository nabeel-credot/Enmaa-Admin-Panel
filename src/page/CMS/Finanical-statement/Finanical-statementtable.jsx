import React, { useState } from "react";
import { Row, Col, Card, CardBody, CardHeader, Button, Form, FormGroup, Label, Input } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import axios from 'axios';
import Breadcrumbs from "../../../components/Common/Breadcrumb.js";
import { useQuery, useMutation, useQueryClient } from 'react-query';

const API_URL = 'http://localhost:4001/api';
const QUERY_KEY = 'financialStatements';

// API Service
const FinancialStatementService = {
  fetchAll: async () => {
    const { data } = await axios.get(`${API_URL}/financial-statements`);
    return data.financialStatements;
  },
  add: async (newStatement) => {
    const formData = new FormData();
    formData.append('year', newStatement.year);
    newStatement.viewLinks.forEach((file, index) => {
      formData.append('file', file);
    });
    const { data } = await axios.post(`${API_URL}/financial-statements`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  },
  delete: async (id) => {
    await axios.delete(`${API_URL}/financial-statements/${id}`);
    return id;
  }
};

// Custom Hooks
const useFinancialStatements = () => useQuery(QUERY_KEY, FinancialStatementService.fetchAll);

const useAddFinancialStatement = () => {
  const queryClient = useQueryClient();
  return useMutation(FinancialStatementService.add, {
    onSuccess: () => queryClient.invalidateQueries(QUERY_KEY),
  });
};

const useDeleteFinancialStatement = () => {
  const queryClient = useQueryClient();
  return useMutation(FinancialStatementService.delete, {
    onSuccess: () => queryClient.invalidateQueries(QUERY_KEY),
  });
};

const EditableTables = () => {
  const { data: statements, isLoading: isFetching } = useFinancialStatements();
  const addMutation = useAddFinancialStatement();
  const deleteMutation = useDeleteFinancialStatement();

  const [newStatement, setNewStatement] = useState({
    year: "",
    viewLinks: [],
  });
  const [files, setFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStatement({
      ...newStatement,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length === 0) return;
    const newStatementData = { ...newStatement, viewLinks: files };
    addMutation.mutate(newStatementData, {
      onSuccess: () => {
        setNewStatement({ year: "", viewLinks: [] });
        setFiles([]);
      },
      onError: (error) => {
        console.error('Error adding statement:', error);
      },
    });
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id, {
      onError: (error) => {
        console.error("Error deleting statement:", error);
      },
    });
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
      dataField: "viewLinks",
      text: "Statements",
      formatter: (cellContent, row) => (
        <ul>
          {row.viewLinks.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            </li>
          ))}
        </ul>
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
          <Breadcrumbs title="Tables" breadcrumbItem="Statements Table" />

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
                      data={statements || []}
                      columns={columns}
                      loading={isFetching}
                    />
                  </div>
                  <Form className="mt-4" onSubmit={handleSubmit}>
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
                      <Col md={3}>
                        <FormGroup>
                          <Label for="viewLinks">View Links</Label>
                          <Input
                            type="file"
                            name="viewLinks"
                            id="viewLinks"
                            multiple
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="align-self-end mb-3">
                        <Button color="primary" type="submit" disabled={addMutation.isLoading || files.length === 0}>
                          {addMutation.isLoading ? 'Uploading...' : 'Add Statement'}
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
