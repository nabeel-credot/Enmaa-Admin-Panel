import React from 'react'
import NouiSliders from './NouiSlider';
import ColorScheme from './ColorScheme';
import { Breadcrumb, Container } from 'reactstrap';

const RangeSlider = () => {
    document.title = "Range Slider | enmaa.com";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Components" breadcrumbItem="Range Slider" />
                    <NouiSliders />
                    <ColorScheme />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default RangeSlider