import React, { useState, useEffect, useRef } from 'react';
import { Col, Input, Label, Row, FormGroup, Button, Container, Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from "react-router-dom";
import Select from 'react-select';
import Breadcrumbs from './../../../components/Common/Breadcrumb';

const BlogForm = ({ initialData = {}, onSubmit }) => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  
  const [author, setAuthor] = useState(initialData.author || '');
  const [category, setCategory] = useState(initialData.category || '');
  const [tags, setTags] = useState(initialData.tags || []);
  const [contentEn, setContentEn] = useState(initialData.contentEn || '');
  const [contentAr, setContentAr] = useState(initialData.contentAr || '');
  
  const categories = [
    { value: 'technology', label: 'Technology' },
    { value: 'health', label: 'Health' },
    { value: 'travel', label: 'Travel' },
    { value: 'finance', label: 'Finance' }
  ];
  
  const tagOptions = [
    { value: 'react', label: 'React' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'css', label: 'CSS' },
    { value: 'html', label: 'HTML' }
  ];

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
    setEditorLoaded(true);
  }, []);

  const handleFormSubmit = () => {
    const formData = {
      author,
      category,
      tags: tags.map(tag => tag.value),
      contentEn,
      contentAr,
    };
    console.log('Form Data:', JSON.stringify(formData));
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className='d-flex justify-content-between'>
            <div className=''>
              <Link to="/blog" className='icon-demo-content mb-4'>
                <i className='fas fa-arrow-left'></i>
              </Link>
              <Breadcrumbs title="Forms" breadcrumbItem="Blog" />
            </div>
            <div className='d-flex flex-end gap-3 p-4'>
              <Link to="/form-elements" className="d-flex align-items-center gap-2 btn btn-outline-light">
                <i className="mdi mdi-file-document"></i>Guidelines
              </Link>
              <Link to="https://enmaa-previews.vercel.app/" className="d-flex align-items-center gap-2 btn btn-outline-light" target="_blank">
                <i className="mdi mdi-open-in-new"></i>Preview
              </Link>
            </div>
          </div>
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Blog Form</h4>
                  <p className="card-title-desc">Fill out the form to add or update a blog post</p>
                </CardHeader>
                <CardBody className="p-4">
                  <Row>
                    <Col lg={6}>
                      <FormGroup>
                        <Label htmlFor="author" className="form-label">Author</Label>
                        <Input
                          type="text"
                          id="author"
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg={6}>
                      <FormGroup>
                        <Label htmlFor="category" className="form-label">Category</Label>
                        <Input
                          type="select"
                          id="category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="">Select Category</option>
                          {categories.map((cat, index) => (
                            <option key={index} value={cat.value}>{cat.label}</option>
                          ))}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col lg={12}>
                      <FormGroup>
                        <Label htmlFor="tags" className="form-label">Tags</Label>
                        <Select
                          isMulti
                          name="tags"
                          options={tagOptions}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          value={tags}
                          onChange={setTags}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg={12}>
                      <FormGroup>
                        <Label htmlFor="contentEn" className="form-label">Content in English</Label>
                        {editorLoaded ? (
                          <CKEditor
                            editor={ClassicEditor}
                            data={contentEn}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              setContentEn(data);
                            }}
                          />
                        ) : (
                          <p>Loading Editor...</p>
                        )}
                      </FormGroup>
                    </Col>
                    <Col lg={12}>
                      <FormGroup>
                        <Label htmlFor="contentAr" className="form-label">Content in Arabic</Label>
                        {editorLoaded ? (
                          <CKEditor
                            editor={ClassicEditor}
                            data={contentAr}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              setContentAr(data);
                            }}
                          />
                        ) : (
                          <p>Loading Editor...</p>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-end gap-3 p-4">
                    <Button color="success" onClick={handleFormSubmit}>
                      <i className="mdi mdi-content-save"></i>SAVE
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default BlogForm;
