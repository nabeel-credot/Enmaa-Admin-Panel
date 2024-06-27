import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
import Dashboard from "../page/Dashboard/Dashboard";
// CMS
//HOME
import Hometable from "../page/CMS/Home/Hometable";
import Section1 from "../page/CMS/Home/Section/Section1form";
import Section2 from "../page/CMS/Home/Section/Section2form";
import Section3 from "../page/CMS/Home/Section/Section3form";
import Section4 from "../page/CMS/Home/Section/Section4form";
import Section5 from "../page/CMS/Home/Section/Section5form";
import Section6 from "../page/CMS/Home/Section/Section6form";
import Section7 from "../page/CMS/Home/Section/Section7form";
import Section8 from "../page/CMS/Home/Section/Section8form";
import Section9 from "../page/CMS/Home/Section/Section9form";
import Section10 from "../page/CMS/Home/Section/Section10form";
import Section11 from "../page/CMS/Home/Section/Section11form";


import Abouttable from "../page/CMS/About/Abouttable";
import SectionA1 from "../page/CMS/About/Section/Section1form";
import SectionA2 from "../page/CMS/About/Section/Section2form";
import SectionA3 from "../page/CMS/About/Section/Section3form";
import SectionA4 from "../page/CMS/About/Section/Section4form";
import SectionA5 from "../page/CMS/About/Section/Section5form";
import SectionA6 from "../page/CMS/About/Section/Section6form";
import Aboutsubtable from "../page/CMS/About-sub/Aboutsubtable";
import SectionAS1 from "../page/CMS/About-sub/Section/Section1form";
import SectionAS2 from "../page/CMS/About-sub/Section/Section2form";
import SectionAS3 from "../page/CMS/About-sub/Section/Section3form";
import SectionAS4 from "../page/CMS/About-sub/Section/Section4form";
import SectionAS5 from "../page/CMS/About-sub/Section/Section5form";

// Government

import  Governmenttable from "../page/CMS/Government-bot/Governmenttable";
import SectionG1 from "../page/CMS/Government-bot/Section/Section1form";
import SectionG2 from "../page/CMS/Government-bot/Section/Section2form";
import SectionG3 from "../page/CMS/Government-bot/Section/Section3form";
import SectionG4 from "../page/CMS/Government-bot/Section/Section4form";
import SectionG5 from "../page/CMS/Government-bot/Section/Section5form";

// Corporate

import Corporatetable from "../page/CMS/Corporate/Corporatetable";
import SectionC1 from "../page/CMS/Corporate/Section/Section1form";
import SectionC2 from "../page/CMS/Corporate/Section/Section2form";
import SectionC3 from "../page/CMS/Corporate/Section/Section3form";
import SectionC4 from "../page/CMS/Corporate/Section/Section4form";

// Disclosure

import Disclosuretable from "../page/CMS/Disclosure/Disclosuretable";
import SectionD1 from "../page/CMS/Disclosure/Section/Section1form";
import SectionD2 from "../page/CMS/Disclosure/Section/Section2form";
import SectionD3 from "../page/CMS/Disclosure/Section/Section3form";
import SectionD4 from "../page/CMS/Disclosure/Section/Section4form";

// Service
import Servicetable from "../page/CMS/Service/Servicetable";
import SectionS1 from "../page/CMS/Service/section/Section1form.jsx";
import SectionS2 from "../page/CMS/Service/section/Section2form.jsx";
import SectionS3 from "../page/CMS/Service/section/Section3form.jsx";
import SectionS4 from "../page/CMS/Service/section/Section4form.jsx";

// Annual-report
import Annualreportable from "../page/CMS/Annual-report/Annual-reporttable.jsx";
import SectionAR1 from "../page/CMS/Annual-report/Section/Section1form";
import SectionAR2 from "../page/CMS/Annual-report/Section/Section2form";
import SectionAR3 from "../page/CMS/Annual-report/Section/Section3form";
import SectionAR4 from "../page/CMS/Annual-report/Section/Section4form";

import Calendar from "../pages/Calendar/index";

//Chat
import Chat from "../pages/Chat/Chat";

//Email
import EmailInbox from "../pages/Email/email-inbox";
import EmailRead from "../pages/Email/email-read";

//Invoice
import InvoicesList from "../pages/Invoices/invoices-list";
import InvoiceDetail from "../pages/Invoices/invoices-detail";

//Contact
import ContactsGrid from "../pages/Contacts/contacts-grid";
import ContactsList from "../pages/Contacts/ContactList/contacts-list";
import ContactsProfile from "../pages/Contacts/ContactsProfile/contacts-profile";

//blog
import BlogGrid from "../pages/Blog/blogGrid"
import BlogList from "../pages/Blog/blogList"
import BlogDetails from "../pages/Blog/blogDetails"

//Utility
import PagesStarter from "../pages/Utility/StarterPage";
import PageMaintenance from "../pages/Utility/PageMaintenance";
import PagesComingsoon from "../pages/Utility/PageComingsoon";
import PageTimeline from "../pages/Utility/PageTimeline";
import PageFaqs from "../pages/Utility/PageFaqs";
import PagePricing from "../pages/Utility/PagePricing/index";
import Error404 from "../pages/Utility/Error404";
import Error500 from "../pages/Utility/Error500";

// Ui Components
import UiAlert from "../pages/UiElements/UiAlert";
import UiButton from "../pages/UiElements/UiButton";
import UiCard from "../pages/UiElements/UiCard";
import UiCarousel from "../pages/UiElements/UiCarousel";
import UiDropdowns from "../pages/UiElements/UiDropdowns";
import UiGrid from "../pages/UiElements/UiGrid";
import UiImages from "../pages/UiElements/UiImages";
import UiModal from "../pages/UiElements/UiModals";
import UiOffCanvas from "../pages/UiElements/UiOffCanvas";
import UiProgressbar from "../pages/UiElements/UiProgressbar";
import UiPlaceholders from "../pages/UiElements/UiPlaceholders";
import UiTabsAccordions from "../pages/UiElements/UiTabsAccordions";
import UiTypography from "../pages/UiElements/UiTypography";
import UiToasts from "../pages/UiElements/UiToast";
import UiVideo from "../pages/UiElements/UiVideo";
import UiGeneral from "../pages/UiElements/UiGeneral";
import UiColors from "../pages/UiElements/UiColors";
import UiUtilities from "../pages/UiElements/UiUtilities";

//Extended pages
import Lightbox from "../pages/Extended/Lightbox";
import SessionTimeout from "../pages/Extended/SessionTimeout";
import UiRating from "../pages/Extended/UiRating";
import Notifications from "../pages/Extended/Notifications";

//Forms
import FormElements from "../pages/Forms/FormElements/index";
import FormValidation from "../pages/Forms/FormValidation/";
import AdvancedPlugins from "../pages/Forms/AdvancedPlugins";
import FormEditors from "../pages/Forms/FormEditors";
import FormUpload from "../pages/Forms/FormUpload";
import FormWizard from "../pages/Forms/FormWizard";
import FormMask from "../pages/Forms/FormMask";

//Tables
import BasicTable from "../pages/Tables/BasicTables";
import DatatableTables from "../pages/Tables/DatatableTables";
import ResponsiveTables from "../pages/Tables/ResponsiveTables";
import Enquiretable from "../pages/Tables/Propertytable";
import TeamTable from "../pages/Tables/TeamTable";
import EditableTables from "../pages/Tables/EditableTables";

//Charts
import Apexchart from "../pages/Charts/Apexcharts";
import EChart from "../pages/Charts/EChart";
import ChartjsChart from "../pages/Charts/ChartjsChart";

//Icons
import IconBoxicons from "../pages/Icons/IconBoxicons";
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign";
import IconDripicons from "../pages/Icons/IconDripicons";
import IconFontawesomes from "../pages/Icons/Fontawesomes";

// Maps
import MapsGoogle from "../pages/Maps/MapsGoogle";
import MapsVector from "../pages/Maps/MapsVector";
import MapsLeaflet from "../pages/Maps/MapsLeaflet";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

//AuthenticationInner related pages
import PageLogin from "../pages/AuthenticationInner/PageLogin";
import PageRegister from "../pages/AuthenticationInner/PageRegister";
import RecoverPassword from "../pages/AuthenticationInner/RecoverPassword";
import LockScreen from "../pages/AuthenticationInner/LockScreen";
import ConfirmMail from "../pages/AuthenticationInner/ConfirmMail";
import EmailVerification from "../pages/AuthenticationInner/EmailVerification";
import TwoStepVerfication from "../pages/AuthenticationInner/TwoStepVerfication";
import AuthLogout from "../pages/AuthenticationInner/Logout";
import UserProfile from "../pages/Authentication/user-profile";
import RangeSlider from "../pages/Extended/RangeSlider/Index";

const userRoutes = [
  { path: "/", component: <Dashboard/> },
  //dashboard
  { path: "/dashboard", component: <Dashboard/> },
  { path: "/home", component:  <Hometable/>},
  { path: "/home/Section-1", component:  <Section1/>},
  { path: "/home/Section-2", component:  <Section2/>},
  { path: "/home/Section-3", component:  <Section3/>},
  { path: "/home/Section-4", component:  <Section4/>},
  { path: "/home/Section-5", component:  <Section5/>},


  { path: "/home/Section-6", component:  <Section6/>},
  { path: "/home/Section-7", component:  <Section7/>},
  { path: "/home/Section-8", component:  <Section8/>},
  { path: "/home/Section-9", component:  <Section9/>},
  { path: "/home/Section-10", component:  <Section10/>},
  { path: "/home/Section-11", component:  <Section11/>},

  //about
  { path: "/about", component:  <Abouttable/>},
  { path: "/about/Section-1", component:  <SectionA1/>},
  { path: "/about/Section-2", component:  <SectionA2/>},
  { path: "/about/Section-3", component:  <SectionA3/>},
  { path: "/about/Section-4", component:  <SectionA4/>},
  { path: "/about/Section-5", component:  <SectionA5/>},
  { path: "/about/Section-6", component:  <SectionA6/>},
  //about-sub
  { path: "/about-sub", component:  <Aboutsubtable/>},
  { path: "/about-sub/Section-1", component:  <SectionAS1/>},
  { path: "/about-sub/Section-2", component:  <SectionAS2/>},
  { path: "/about-sub/Section-3", component:  <SectionAS3/>},
  { path: "/about-sub/Section-4", component:  <SectionAS4/>},
  { path: "/about-sub/Section-5", component:  <SectionAS5/>},

  //government-bot
  { path: "/government-bot", component:  <Governmenttable/>},
  { path: "/government-bot/Section-1", component:  <SectionG1/>},
  { path: "/government-bot/Section-2", component:  <SectionG2/>},
  { path: "/government-bot/Section-3", component:  <SectionG3/>},
  { path: "/government-bot/Section-4", component:  <SectionG4/>},
  { path: "/government-bot/Section-5", component:  <SectionG5/>},

  // { path: "/government-bot/Section-5", component:  <SectionG5/>},

  //service
  { path: "/service", component:  <Servicetable/>},
  { path: "/service/Section-1", component:  <SectionS1/>},
  { path: "/service/Section-2", component:  <SectionS2/>},
  { path: "/service/Section-3", component:  <SectionS3/>},
  { path: "/service/Section-4", component:  <SectionS4/>},
  // { path: "/service/Section-5", component:  <SectionS5/>},
  { path: "/corporate", component:  <Corporatetable/>},
  { path: "/corporate/Section-1", component:  <SectionC1/>},
  { path: "/corporate/Section-2", component:  <SectionC2/>},
  { path: "/corporate/Section-3", component:  <SectionC3/>},
  { path: "/corporate/Section-4", component:  <SectionC4/>},
  // { path: "/corporate/Section-5", component:  <SectionC5/>},
  //disclosure
  { path: "/disclosure", component:  <Disclosuretable/>},
  { path: "/disclosure/Section-1", component:  <SectionD1/>},
  { path: "/disclosure/Section-2", component:  <SectionD2/>},
  { path: "/disclosure/Section-3", component:  <SectionD3/>},
  { path: "/disclosure/Section-4", component:  <SectionD4/>},
  // { path: "/disclosure/Section-5", component:  <SectionD5/>},
  // annual-report
  { path: "/annual-report", component: <Annualreportable/> },
  { path: "/annual-report/Section-1", component:  <SectionAR1/>},
  { path: "/annual-report/Section-2", component:  <SectionAR2/>},
  { path: "/annual-report/Section-3", component:  <SectionAR3/>},
  { path: "/annual-report/Section-4", component:  <SectionAR4/>},
  // { path: "/annual-report/Section-5", component:  <SectionAR5/>},


  //profile
  { path: "/profile", component: <UserProfile/> },

  //Calendar
  { path: "/apps-calendar", component: <Calendar/> },


  //CMS
  //Chat
  { path: "/apps-chat", component: <Chat/> },

  //Email
  { path: "/email-inbox", component: <EmailInbox/> },
  { path: "/email-read", component: <EmailRead/> },

  //Invoice
  { path: "/invoices-list", component: <InvoicesList/> },
  { path: "/invoices-detail", component: <InvoiceDetail/> },

  //Contact
  { path: "/contacts-grid", component: <ContactsGrid/> },
  { path: "/contacts-list", component: <ContactsList/> },
  { path: "/contacts-profile", component: <ContactsProfile/> },

  //blog
  {path: "/blog-grid", component: <BlogGrid/> },
  {path: "/blog-list", component: <BlogList/> },
  {path: "/blog-details", component: <BlogDetails/> },

  //Utility
  { path: "/pages-starter", component: <PagesStarter/> },
  { path: "/pages-timeline", component: <PageTimeline/> },
  { path: "/pages-faqs", component: <PageFaqs/> },
  { path: "/pages-pricing", component: <PagePricing/> },

  //Components
  { path: "/ui-alerts", component: <UiAlert/> },
  { path: "/ui-buttons", component: <UiButton/> },
  { path: "/ui-cards", component: <UiCard/> },
  { path: "/ui-carousel", component: <UiCarousel/> },
  { path: "/ui-dropdowns", component: <UiDropdowns/> },
  { path: "/ui-grid", component: <UiGrid/> },
  { path: "/ui-images", component: <UiImages/> },
  { path: "/ui-modals", component: <UiModal/> },
  { path: "/ui-offcanvas", component: <UiOffCanvas/> },
  { path: "/ui-progressbars", component: <UiProgressbar/> },
  { path: "/ui-placeholders", component: <UiPlaceholders/> },
  { path: "/ui-tabs-accordions", component: <UiTabsAccordions/> },
  { path: "/ui-typography", component: <UiTypography/> },
  { path: "/ui-toasts", component: <UiToasts/> },
  { path: "/ui-video", component: <UiVideo/> },
  { path: "/ui-general", component: <UiGeneral/> },
  { path: "/ui-colors", component: <UiColors/> },
  { path: "/ui-utilities", component: <UiUtilities/> },

  //Extended pages
  { path: "/extended-lightbox", component: <Lightbox/> },
  { path: "/extended-rangeslider", component: <RangeSlider/> },
  { path: "/extended-session-timeout", component: <SessionTimeout/> },
  { path: "/extended-rating", component: <UiRating/> },
  { path: "/extended-notifications", component: <Notifications/> },

  //Forms
  { path: "/section", component:  <FormElements/>},
  { path: "/enquire-property", component:  <Enquiretable/>},
  { path: "/home", component:  <ResponsiveTables/>},
  { path: "/our-team", component:  <TeamTable/>},

  { path: "/form-validation", component: <FormValidation/> },
  { path: "/form-advanced", component: <AdvancedPlugins/> },
  { path: "/form-editors", component: <FormEditors/> },
  { path: "/form-uploads", component: <FormUpload/> },
  { path: "/form-wizard", component: <FormWizard/> },
  { path: "/form-mask", component: <FormMask/> },

  //tables
  { path: "/tables-basic", component: <BasicTable/> },
  { path: "/tables-datatable", component: <DatatableTables/> },
  { path: "/tables-responsive", component: <ResponsiveTables/> },
  { path: "/tables-editable", component: <EditableTables/> },

  //Charts
  { path: "/charts-apex", component: <Apexchart/> },
  { path: "/charts-echart", component: <EChart/> },
  { path: "/charts-chartjs", component: <ChartjsChart/> },

  //Icons
  { path: "/icons-boxicons", component: <IconBoxicons/> },
  { path: "/icons-materialdesign", component: <IconMaterialdesign/> },
  { path: "/icons-dripicons", component: <IconDripicons/> },
  { path: "/icons-fontawesome", component: <IconFontawesomes/> },

  // Maps
  { path: "/maps-google", component: <MapsGoogle/> },
  { path: "/maps-vector", component: <MapsVector/> },
  { path: "/maps-leaflet", component: <MapsLeaflet/> },

  // this route should be at the end of all other routes
  // { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
];

const authRoutes = [
  //authencation page
  { path: "/logout", component: <Logout/> },
  { path: "/login", component: <Login/> },
  { path: "/forgot-password", component: <ForgetPwd/> },
  { path: "/register", component: <Register/> },

  //AuthenticationInner pages
  { path: "/page-login", component: <PageLogin/> },
  { path: "/page-register", component: <PageRegister/> },
  { path: "/page-recoverpw", component: <RecoverPassword/> },
  { path: "/page-lock-screen", component: <LockScreen/> },
  { path: "/page-confirm-mail", component: <ConfirmMail/> },
  { path: "/page-email-verification", component: <EmailVerification/> },
  { path: "/page-two-step-verification", component: <TwoStepVerfication/> },
  { path: "/page-logout", component: <AuthLogout/>  },

  //Utility page
  { path: "/pages-maintenance", component: <PageMaintenance/> },
  { path: "/pages-comingsoon", component: <PagesComingsoon/> },
  { path: "/pages-404", component: <Error404/> },
  { path: "/pages-500", component: <Error500/> },
];

export { userRoutes, authRoutes };
