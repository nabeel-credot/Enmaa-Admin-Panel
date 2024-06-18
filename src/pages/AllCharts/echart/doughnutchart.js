import React, { Component } from "react"
import ReactEcharts from "echarts-for-react"

class Doughnut extends Component {
  getOption = () => {
    return {
      toolbox: {
        show: !1,
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        x: "left",
        data: ["Closed", "Pending","Incomplete", ],
        // textStyle: {
        //   color: ["#858d98"],
        // },
      },
      color: ['#5156be', '#ffbf53', '#fd625e'],
      series: [
        {
          name: "Enquiries",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: !1,
          label: {
            normal: {
              show: !1,
              position: "center",
            },
            emphasis: {
              show: !0,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold",
              },
            },
          },
          labelLine: {
            normal: {
              show: !1,
            },
          },
          data: [
            { value: 335, name: "Closed" },
            { value: 310, name: "Pending" },
            { value: 234, name: "Incomplete" },
            ],
        },
      ],
    }
  }
  render() {
    return (
      <React.Fragment>
        <ReactEcharts style={{ height: "350px" }} option={this.getOption()} />
      </React.Fragment>
    )
  }
}
export default Doughnut
