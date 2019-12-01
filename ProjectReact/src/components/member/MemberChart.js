import React, { Component } from "react";
import Chart from "react-apexcharts";
class MemberChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "apexchart-example"
        },
        xaxis: {
          categories: []
        }
      },
      series: [
        {
          name: "series-1",
          data: []
        }
      ]
    };
    console.log(this.state.series[0].name);
  }

  componentDidMount() {
    fetch("http://localhost:5000/handmade/member/bonus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        member_sid: localStorage.getItem("member_id")
      })
    })
      .then(res => {
        return res.json();
      })
      .then(rows => {
        console.log(rows.data);
        if (rows.data) {
          let newArray = [];
          let sidArray = [];
          rows.data.forEach(v => {
            newArray.push(v.total);
          });
          rows.data.forEach(v => {
            sidArray.push("單號" + v.order_sid);
          });
          console.log(newArray);
          this.setState({
            options: {
              chart: {
                id: "apexchart-example"
              },
              xaxis: {
                categories: sidArray
              }
            },
            series: [
              {
                name: "單筆紅利計算",
                data: newArray
              }
            ]
          });
        }
        // console.log(this.state.memberData.valueOf());
      });
  }

  render() {
    return (
      <>
        <div>最新10筆</div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          maxWidth={1000}
          height={320}
        />
      </>
    );
  }
}
export default MemberChart;
