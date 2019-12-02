import React, { Component } from "react";
import Chart from "react-apexcharts";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../../commom/scss/member/memberChart.scss";
class MemberChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "apexchart-example",
          background: "#fff",
          foreColor: "#b8817d"
        },
        xaxis: {
          categories: []
        },
        colors: ["#b8817d"]
      },
      series: [
        {
          name: "series-1",
          data: []
        }
      ],
      AllData: [],
      totalPage: [],
      pageIndexNow: 0,
      pageTotal: ""
    };
    console.log(this.state.series[0].name);
  }
  componentDidMount() {
    //-------------------------------------------------------------------------------------------------------------------------------------------------
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
          this.setState(
            {
              AllData: rows.data
            },
            () => {
              let pageTotal = Math.ceil(this.state.AllData.length / 10);
              this.setState({ pageTotal: pageTotal });
              let pageTotalFn = [];
              for (let i = 1; i <= pageTotal; i++) {
                pageTotalFn.push(i);
              }
              this.setState({
                totalPage: pageTotalFn
              });
            }
          );
        }
      });
    //-----------------------------------------------------------------------------------------------------------------------------------------------
    fetch("http://localhost:5000/handmade/member/bonus10", {
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
      });
  }

  render() {
    const changePage = index => {
      fetch("http://localhost:5000/handmade/member/bonuspage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          member_sid: localStorage.getItem("member_id"),
          page_sid:
            index >= this.state.pageTotal || index < 0
              ? this.state.pageTotal
              : index
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
              ],
              AllData: rows.data,
              pageIndexNow: index
            });
          }
        });
      console.log(this.state.pageIndexNow);
    };

    return (
      <>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          maxWidth={1000}
          height={320}
        />
        <ul className="d-flex justify-content-center memberChart">
          <li
            className="page-item"
            onClick={() => changePage(this.state.pageIndexNow - 1)}
          >
            <FaAngleLeft />
          </li>
          {this.state.totalPage.map((v, index) => {
            return (
              <li
                key={index}
                onClick={() => changePage(index)}
                className={this.state.pageIndexNow === index && "active"}
              >
                {index + 1}
              </li>
            );
          })}
          <li
            className="page-item"
            onClick={() => changePage(this.state.pageIndexNow + 1)}
          >
            <FaAngleRight />
          </li>
        </ul>
      </>
    );
  }
}
export default MemberChart;
