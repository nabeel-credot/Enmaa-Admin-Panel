import React from "react";
import { Container, Row } from "reactstrap";

//import components
import ProfileTab from "./ProfileTab";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

const ContactsProfile = (props) => {
  //meta title
  document.title = "Profile | enmaa.com";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="Profile" />

          {/* Render profilemenu */}
          <ProfileTab />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ContactsProfile;
