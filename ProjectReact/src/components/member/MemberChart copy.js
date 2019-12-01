import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Pagination } from "react-bootstrap";
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
      ],
      AllData: [],
      totalPage: []
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

          this.setState(
            {
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
              ],
              AllData: rows.data
            },
            () => {
              let totalPage = Math.ceil(this.state.AllData.length / 10);
              console.log(totalPage)
                this.setState
                this.setState







            }
          );
        }
      });
  }
  render() {
    // let active = 2;
    // let items = [];
    // for (let number = 1; number <= 5; number++) {
    //   items.push(
    //     <Pagination.Item key={number} active={number === active}>
    //       {number}
    //     </Pagination.Item>
    //   );
    // }

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
        <Pagination className="d-flex justify-content-center">
          <Pagination.Prev />
          {this.state.AllData.map((v, index) => {
            return <Pagination.Item>{index}</Pagination.Item>;
          })}
          <Pagination.Next />
        </Pagination>
      </>
    );
  }
}
export default MemberChart;
