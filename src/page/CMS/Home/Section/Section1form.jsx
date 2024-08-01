import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Input, Label, Row, Container, Card, CardBody, CardHeader, Button } from 'reactstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Breadcrumbs from './../../../../components/Common/Breadcrumb.js';
import { getTableDataById, updateTableDataById } from './../../../../api/homeapi.js';
import FormUpload from'./../../../../pages/Forms/FormUpload.js';
const Section1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [section, setSection] = useState('');
  const [pointsEn, setPointsEn] = useState([]);
  const [pointsAr, setPointsAr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTableDataById(id);
        setFormData(data);
        setSection(data.section);
        if (data.points_en) {
          setPointsEn(Object.entries(data.points_en).map(([key, value]) => ({ id: key, value })));
        }
        if (data.points_ar) {
          setPointsAr(Object.entries(data.points_ar).map(([key, value]) => ({ id: key, value })));
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNestedChange = (e, parentKey, nestedKey) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [parentKey]: {
        ...formData[parentKey],
        [nestedKey]: value,
      },
    });
  };

  const handleFileUpload = async (files, key, isNested = false, nestedKey = '') => {
    if (files.length > 0) {
      const fileData = new FormData();
      fileData.append('media', files[0]);

      try {
        const response = await axios.post('http://localhost:4001/api/media', fileData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (isNested) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            [key]: {
              ...prevFormData[key],
              [nestedKey]: response.data.filePath,
            },
          }));
        } else {
          setFormData((prevFormData) => ({
            ...prevFormData,
            [key]: response.data.filePath,
          }));
        }
      } catch (error) {
        console.error('Failed to upload file:', error);
      }
    }
  };

  const handleSave = async () => {
    try {
      const updatedData = {
        ...formData,
        points_en: pointsEn.reduce((acc, point) => ({ ...acc, [point.id]: point.value }), {}),
        points_ar: pointsAr.reduce((acc, point) => ({ ...acc, [point.id]: point.value }), {}),
      };
      await updateTableDataById(id, updatedData);
      alert('Data updated successfully');
      navigate('/home');  
    } catch (error) {
      console.error('Failed to update data:', error);
    }
  };

  const handlePointChange = (index, event, language) => {
    const { value } = event.target;
    if (language === 'en') {
      const newPoints = [...pointsEn];
      newPoints[index].value = value;
      setPointsEn(newPoints);
    } else {
      const newPoints = [...pointsAr];
      newPoints[index] = newPoints[index] || { id: `point${index + 1}`, value: '' }; // Ensure the index exists
      newPoints[index].value = value;
      setPointsAr(newPoints);
    }
  };

  const handleAddPoint = () => {
    setPointsEn([...pointsEn, { id: `point${pointsEn.length + 1}`, value: '' }]);
    setPointsAr([...pointsAr, { id: `point${pointsAr.length + 1}`, value: '' }]);
  };

  const handleRemovePoint = (index) => {
    setPointsEn(pointsEn.filter((_, i) => i !== index));
    setPointsAr(pointsAr.filter((_, i) => i !== index));
  };

  const renderInputField = (key, value) => {
    if (key.includes('ar')) {
      return (
        <Col lg={6} key={key}>
          <div className="mb-3">
            <Label htmlFor={key} className="form-Label">{key.replace('_', ' ').replace('ar', ' (Arabic)')}</Label>
            <Input
              dir="rtl"
              className="form-control"
              type="text"
              name={key}
              value={value}
              onChange={handleChange}
              id={key}
            />
          </div>
        </Col>
      );
    }
    return (
      <Col lg={6} key={key}>
        <div className="mb-3">
          <Label htmlFor={key} className="form-Label">{key.replace('_', ' ').replace('en', ' (English)')}</Label>
          <Input
            className="form-control"
            type="text"
            name={key}
            value={value}
            onChange={handleChange}
            id={key}
          />
        </div>
      </Col>
    );
  };

  const renderNestedInputField = (parentKey, nestedKey, value) => {
    if (nestedKey.includes('ar')) {
      return (
        <Col lg={6} key={`${parentKey}-${nestedKey}`}>
          <div className="mb-3">
            <Label htmlFor={`${parentKey}-${nestedKey}`} className="form-Label">{nestedKey.replace('_', ' ').replace('ar', ' (Arabic)')}</Label>
            <Input
              dir="rtl"
              className="form-control"
              type="text"
              name={`${parentKey}-${nestedKey}`}
              value={value}
              onChange={(e) => handleNestedChange(e, parentKey, nestedKey)}
              id={`${parentKey}-${nestedKey}`}
            />
          </div>
        </Col>
      );
    }
    return (
      <Col lg={6} key={`${parentKey}-${nestedKey}`}>
        <div className="mb-3">
          <Label htmlFor={`${parentKey}-${nestedKey}`} className="form-Label">{nestedKey.replace('_', ' ').replace('en', ' (English)')}</Label>
          <Input
            className="form-control"
            type="text"
            name={`${parentKey}-${nestedKey}`}
            value={value}
            onChange={(e) => handleNestedChange(e, parentKey, nestedKey)}
            id={`${parentKey}-${nestedKey}`}
          />
        </div>
      </Col>
    );
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className='d-flex justify-content-between'>
            <div className=''>
              <Link to="/home" className='icon-demo-content mb-4'><i className='fas fa-arrow-left'></i></Link>
              <Breadcrumbs title="Forms" breadcrumbItem={`${section} Section`} />
            </div>
            <div className='d-flex flex-end gap-3 p-4'>
              <button className="d-flex align-items-center gap-2 btn btn-outline-light">
                <i className="mdi mdi-file-document"></i>Guidelines
              </button>
              <Link to="https://enmaa-previews.vercel.app/" className="d-flex align-items-center gap-2 btn btn-outline-light" target="_blank">
                <i className="mdi mdi-open-in-new"></i>Preview
              </Link>
            </div>
          </div>

          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Edit {section} Section</h4>
                  <p className="card-title-desc">Edit the fields as necessary</p>
                </CardHeader>
                <CardBody className="p-4">
                  <Row>
                    {Object.keys(formData).map((key) => {
                      if (['section', 'status', '_id', 'points_en', 'points_ar', 'bannerImage'].includes(key)) {
                        return null;
                      } else if (typeof formData[key] === 'object' && formData[key] !== null) {
                        return Object.keys(formData[key]).map((nestedKey) => {
                          if (nestedKey === 'iconpath') {
                            return (
                              <Col lg={12} key={`${key}-${nestedKey}`}>
                                <FormUpload
                                  name={`${key} Image`}
                                  onFileUpload={(files) => handleFileUpload(files, key, true, nestedKey)}
                                  existingImage={`http://localhost:4001/${formData[key][nestedKey]}`}
                                />
                              </Col>
                            );
                          } else {
                            return renderNestedInputField(key, nestedKey, formData[key][nestedKey]);
                          }
                        });
                      } else {
                        return renderInputField(key, formData[key]);
                      }
                    })}
                  </Row>
                  <h5>Points in English</h5>
                  {pointsEn.map((point, index) => (
                    <Row key={point.id} className="mb-0">
                      <Col lg={5} className="mb-1">
                        <Label htmlFor={`points-en-${index}`} className="form-Label">Point {index + 1} (English)</Label>
                        <Input
                          className="form-control"
                          type="text"
                          value={point.value}
                          id={`points-en-${index}`}
                          onChange={(event) => handlePointChange(index, event, 'en')}
                        />
                      </Col>
                      <Col lg={5} className="mb-1">
                        <Label htmlFor={`points-ar-${index}`} className="form-Label">Point {index + 1} (Arabic)</Label>
                        <Input
                          className="form-control"
                          type="text"
                          dir="rtl"
                          value={pointsAr[index]?.value || ''}
                          id={`points-ar-${index}`}
                          onChange={(event) => handlePointChange(index, event, 'ar')}
                        />
                      </Col>
                      <Col lg={2} className="d-flex mt-4 gap-2 align-items-center">
                        <Button
                          className="d-flex align-items-center gap-2"
                          onClick={() => handleRemovePoint(index)}
                          disabled={pointsEn.length === 1}
                        >
                          -
                        </Button>
                        {index === pointsEn.length - 1 && (
                          <Button
                            className="d-flex align-items-center gap-2"
                            onClick={handleAddPoint}
                          >
                            +
                          </Button>
                        )}
                      </Col>
                    </Row>
                  ))}
                  {formData.bannerImage && (
                    <Col lg={12}>
                      <FormUpload
                        name="Banner Image"
                        onFileUpload={(files) => handleFileUpload(files, 'bannerImage')}
                        existingImage={`http://localhost:4000/${formData.bannerImage}`}
                      />
                    </Col>
                  )}
                  <div className='d-flex justify-content-end gap-3 p-4'>
                    <button className="d-flex align-items-center gap-1 btn btn-success" onClick={handleSave}>
                      <i className="mdi mdi-content-save"></i>SAVE
                    </button>
            
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

export default Section1;
