import React from 'react';

import ReactApexChart from "react-apexcharts"

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";

import {
    Card,
    CardBody,
    Col,
    Container,
    Row
} from "reactstrap";

import CountUp from "react-countup";

/** import Mini Widget data */
import { WidgetsData } from "../../common/data/dashboard";
import Doughnut from "../AllCharts/echart/doughnutchart";
import {  CardHeader } from "reactstrap";

import WalletBalance from './WalletBalance';
import InvestedOverview from './InvestedOverview';
import MarketOverview from './MarketOverview';
import Locations from './Locations';
import Trading from './Trading';
import Transactions from './Transactions';
import RecentActivity from './RecentActivity';
import NewSlider from './NewSlider';

const options = {
    chart: {
        height: 50,
        type: "line",
        toolbar: { show: false },
        sparkline: {
            enabled: true
        }
    },
    colors: ["#5156be"],
    stroke: {
        curve: "smooth",
        width: 2,
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
    },
    tooltip: {
        fixed: {
            enabled: false,
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return "";
                },
            },
        },
        marker: {
            show: false,
        },
    },
};

const Dashboard = () => {

    //meta title
    document.title = "Dashboard | enmaa.com";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Dashboard" breadcrumbItem="Dashboard" />

                    <Row>
                        {(WidgetsData || []).map((widget, key) => (
                            <Col xl={3} md={6} key={key}>
                                <Card className="card-h-100">
                                    <CardBody>
                                        <Row className="align-items-center">
                                            <Col xs={6}>
                                                <span className="text-muted mb-3 lh-1 d-block text-truncate">
                                                    {widget.title}
                                                </span>
                                                <h4 className="mb-3">
                                                    <span className="counter-value">
                                                        <CountUp
                                                            start={0}
                                                            end={widget.number}
                                                            duration={2}
                                                            // decimals={2}
                                                            separator=""
                                                        />
                                                        <p className='font-size-4'>{widget.postFix}</p>
                                                    </span>
                                                </h4>
                                            </Col>
                                            {/* <Col xs={6}>
                                                <ReactApexChart
                                                    options={options}
                                                    series={[{ data: [...widget["series"]] }]}
                                                    type="line"
                                                    className="apex-charts mb-2"
                                                    dir="ltr"
                                                    height={50}
                                                />
                                            </Col> */}
                                        </Row>
                                        <div className="text-nowrap">
                                            <span
                                                className={
                                                    "badge bg-" +
                                                    widget.statusColor +
                                                    "-subtle text-" +
                                                    widget.textColor
                                                }
                                            >
                                                {widget.rank}
                                            </span>
                                            <span className="ms-1 text-muted font-size-13"> {widget.TextPreFix}
                                            </span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                    <Row>
                    <Col xl="6">
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0"> Chart</h4>
                </CardHeader>
                <CardBody>
                  <div id="doughnut-chart" className="e-chart">
                    <Doughnut />
                  </div>
                </CardBody>
              </Card>
            </Col>

                    </Row>
                    {/* <Row1>
                        <WalletBalance />
                        <Col>
                            <Row>
                                <InvestedOverview />
                                <NewSlider />
                            </Row>
                        </Col>
                    </Row1> */}
                    {/* <Row>
                        <MarketOverview />
                        <Locations />
                    </Row> */}
                    {/* <Row>
                        <Trading />
                        <Transactions />
                        <RecentActivity /> 
                    </Row> */}
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;