import React, { useState, useEffect } from 'react';
import { Col, Input, Label, Row, Card, CardBody, CardHeader, Container } from 'reactstrap';
import FormUpload from '../../../../pages/Forms/FormUpload.js';
import { Link, useParams, useNavigate } from "react-router-dom";
import Breadcrumbs from '../../../../components/Common/Breadcrumb.js';
import { getTableDataById, updateTableDataById } from './../../../../api/homeapi.js';
import axios from 'axios';

const Herosection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    sidebarSubtitleEn: '',
    sidebarSubtitleAr: '',
    sidebarNumberEn: '',
    sidebarNumberAr: '',
    buttonTitleEn: '',
    buttonTitleAr: '',
    titleEn: '',
    titleAr: '',
    subtitleEn: '',
    subtitleAr: '',
    descriptionEn: '',
    descriptionAr: '',
    buttonLink: '',
    bannerImage: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTableDataById(id);
        if (result.section === 'about') {
          setData({
            sidebarSubtitleEn: result.sidebarSubtitle_en || '',
            sidebarSubtitleAr: result.sidebarSubtitle_ar || '',
            sidebarNumberEn: result.sidebarNumber_en || '',
            sidebarNumberAr: result.sidebarNumber_ar || '',
            buttonTitleEn: result.buttonTitle_en || '',
            buttonTitleAr: result.buttonTitle_ar || '',
            titleEn: result.title_en || '',
            titleAr: result.title_ar || '',
            subtitleEn: result.subtitle_en || '',
            subtitleAr: result.subtitle_ar || '',
            descriptionEn: result.description_en || '',
            descriptionAr: result.description_ar || '',
            buttonLink: result.buttonLink || '',
            bannerImage: result.bannerImage || ''
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const result = await updateTableDataById(id, {
        sidebarSubtitle_en: data.sidebarSubtitleEn,
        sidebarSubtitle_ar: data.sidebarSubtitleAr,
        sidebarNumber_en: data.sidebarNumberEn,
        sidebarNumber_ar: data.sidebarNumberAr,
        buttonTitle_en: data.buttonTitleEn,
        buttonTitle_ar: data.buttonTitleAr,
        title_en: data.titleEn,
        title_ar: data.titleAr,
        subtitle_en: data.subtitleEn,
        subtitle_ar: data.subtitleAr,
        description_en: data.descriptionEn,
        description_ar: data.descriptionAr,
        buttonLink: data.buttonLink,
        bannerImage: data.bannerImage
      });
      alert('Data updated successfully');
      navigate('/home');
    } catch (error) {
      console.error('Error updating data:', error.response ? error.response.data : error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileUpload = async (files) => {
    if (files && files.length > 0) {
      const fileData = new FormData();
      fileData.append('media', files[0]);

      try {
        const response = await axios.post('http://localhost:4001/api/media', fileData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        const filePath = `/${response.data.filename}`;
        setData(prevState => ({ 
          ...prevState, 
          bannerImage: filePath 
        }));
      } catch (error) {
        console.error('Error in file upload:', error.response ? error.response.data : error.message);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className='d-flex justify-content-between'>
            <div>
              <Link to="/home" className='icon-demo-content mb-4'><i className='fas fa-arrow-left'></i></Link>
              <Breadcrumbs title="Forms" breadcrumbItem="Section 4" />
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
                  <h4 className="card-title">About Section</h4>
                  <p className="card-title-desc">Here you can change each <code>HEADING & IMAGE</code></p>
                </CardHeader>
                <CardBody className="p-4">
                  <Row>
                    {[
                      { label: 'Title in English', name: 'titleEn' },
                      { label: 'Title in Arabic', name: 'titleAr', dir: 'rtl' },
                      { label: 'Subtitle in English', name: 'subtitleEn' },
                      { label: 'Subtitle in Arabic', name: 'subtitleAr', dir: 'rtl' },
                      { label: 'Description in English', name: 'descriptionEn', type: 'textarea' },
                      { label: 'Description in Arabic', name: 'descriptionAr', dir: 'rtl', type: 'textarea' },
                      { label: 'Sidebar Subtitle in English', name: 'sidebarSubtitleEn' },
                      { label: 'Sidebar Subtitle in Arabic', name: 'sidebarSubtitleAr', dir: 'rtl' },
                      { label: 'Sidebar Number in English', name: 'sidebarNumberEn' },
                      { label: 'Sidebar Number in Arabic', name: 'sidebarNumberAr', dir: 'rtl' },
                      { label: 'Button Title in English', name: 'buttonTitleEn' },
                      { label: 'Button Title in Arabic', name: 'buttonTitleAr', dir: 'rtl' },
                      { label: 'Button Link', name: 'buttonLink' }
                    ].map(({ label, name, dir, type = 'text' }) => (
                      <Col lg={6} key={name}>
                        <div className="mb-3">
                          <Label htmlFor={name} className="form-label">{label}</Label>
                          <Input 
                            dir={dir} 
                            className="form-control" 
                            type={type} 
                            id={name} 
                            name={name} 
                            value={data[name]} 
                            onChange={handleChange} 
                          />
                        </div>
                      </Col>
                    ))}
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="bannerImage" className="form-label">Banner Image</Label>
                        <FormUpload
                          name="Banner Image"
                          onFileUpload={handleFileUpload}
                          existingImage={`http://localhost:4001/media${data.bannerImage}`}
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <button className="btn btn-primary" onClick={handleUpdate}>Save Changes</button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Herosection;
