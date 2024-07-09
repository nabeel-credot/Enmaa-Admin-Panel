import React, { useEffect, useRef, useState } from "react";

import {
    Form,
    Card,
    CardBody,
    Col,
    Row,
    CardHeader,
    Container,
} from "reactstrap";

// Form Editor
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const FormEditors = (props) => {
    //meta title
    document.title = "Form Editors | enmaa.com";

    const editorRef = useRef();
    const [editor, setEditor] = useState(false);
    const { CKEditor, ClassicEditor } = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
        };
        setEditor(true);
    }, []);
    const [data, setData] = useState('');

    return (
        <React.Fragment>
            
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h6 className=""> {props.name}</h6>
                                    
                                </CardHeader>
                                <CardBody>
                                    {editor ? <CKEditor
                                        editor={ClassicEditor}
                                        data={data}
                                        onReady={() => {
                                            // You can store the "editor" and use when it is needed.
                                        }}
                                        onChange={(editor) => {
                                            const data = editor.getData();
                                            setData(data);
                                        }}
                                    /> : <p>ckeditor5</p>}

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
              
        </React.Fragment>
    );
};

export default FormEditors;
