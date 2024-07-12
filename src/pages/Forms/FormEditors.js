import React, { useEffect, useRef, useState } from "react";
import { Card, CardBody, Col, Row, CardHeader } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const FormEditors = (props) => {
    // Meta title
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

    const [data, setData] = useState(props.initialData || '');

    // Function to handle the editor data change
    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setData(data);
        if (props.onChange) {
            props.onChange({ [props.name]: data });
        }
    };

    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <CardHeader>
                            <h6 className="">{props.name}</h6>
                        </CardHeader>
                        <CardBody>
                            {editor ? (
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={data}
                                    onReady={() => {
                                        // You can store the "editor" and use when it is needed.
                                    }}
                                    onChange={handleEditorChange}
                                />
                            ) : (
                                <p>Loading editor...</p>
                            )}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormEditors;
