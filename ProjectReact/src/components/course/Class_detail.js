import React, { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import { GiSunflower } from "react-icons/gi";
import { FaShoppingBasket, FaMinus, FaPlus } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import CartStore from "../cart/CartStore";
import "../../commom/scss/course/course_detail.scss";
import "react-datepicker/dist/react-datepicker.css";





function Class_detail() {
  const { courseCart } = useContext(CartStore);
  console.log(courseCart);
  const course_sid = (window.location.href).substr(44);
  const store_sid = 1;
  const [startDate, setStartDate] = useState(new Date());
  const [dataNote, setDataNote] = useState('')
  const [course_total, setCourse_total] = useState('')
  const [course_time, setCourse_time] = useState('')
  const [select_time, setSelect_time] = useState("")
  const [course_person, setCourse_person] = useState(1)
  const [max_person, setMax_person] = useState("")
  const [need_time, setNeed_time] = useState('')
  const [price, setPrice] = useState("")
  const [sid, setSid] = useState("")
  const [img_detail, setImg_detail] = useState("")
  const [difficult, setDifficult] = useState("")
  const [course_time_select, setCourse_time_select] = useState("")
  const [test, setTest] = useState("")
  const [data_total, setData_total] = useState("")
  const [order_data, setOrder_data] = useState("")


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:5000/handmade/store/course/${store_sid}/${course_sid}`)
      const data = await res.json();
      console.log(data)
      setData_total(data);
      setOrder_data(data[0])
      let note = [];
      note = [...note, data[1][0].course_cancel, data[1][0].course_content, data[1][0].course_experience, data[1][0].course_object, data[1][0].course_precautions, data[1][0].store_introduce];
      setDataNote(note)
      let time = [];
      let noon = "12:00"
      let afternoon = "15:00"
      time = [...time, data[1][0].store_open, noon, afternoon, data[1][0].store_end]
      setCourse_time(time)
      let max_store = data[1][0].store_max_number
      setMax_person(max_store)
      let select = []
      select = [...select, data[1][0].store_open.slice(0, 5), noon, afternoon]
      setSelect_time(select)
      await setCourse_total(data[1])
      let filter = data[1] && data[1].filter(obj => {
        return obj.course_sid == course_sid
      })
      console.log(filter)
      await setDifficult(parseInt(filter[0].course_difficult))
      await setOrder_data(filter[0])
    }

    fetchData()

  }, []
  )


  console.log(data_total)
  console.log({ dataNote });
  console.log(order_data)
  console.log(course_time)
  console.log(startDate)
 
  console.log("選擇時間", course_time_select)
  // console.log(select_time)
  // console.log(course_person)
  // console.log(price)

  let date = () => {
    let str;
    str = startDate + ""
    let arr;
    str = str.slice(4, 15)
    arr = str.split(" ")
    let data = [];
    let mon = "";
    switch (arr[0]) {
      case "Jan":
        mon = "1";
        break;
      case "Feb":
        mon = "2";
        break;
      case "Mar":
        mon = "3";
        break;
      case "Apr":
        mon = "4";
        break;
      case "May":
        mon = "5";
        break;
      case "Jun":
        mon = "6";
        break;
      case "Jul":
        mon = "7";
        break;
      case "Aug":
        mon = "8";
        break;
      case "Sep":
        mon = "9";
        break;
      case "Oct":
        mon = "10";
        break;
      case 'Nov':
        mon = "11";
        break;
      case "Dec":
        mon = "12";
        break;
    }
    data = [...data, arr[2], mon, arr[1]]
    data = data.join("-")
    console.log(data)
  }



  let Star = []
  if (difficult) {
    for (let i = 0; i < difficult; i++) {
      Star.push(<MdStar className="star" key={i} />)
    }
  }
  console.log(Star)
  return (
    <div className="course_detail">
      <div className="detail_navbar_wrap">
        <div className="detail_navbar">
          <div className="course_detail_info">
            <div className="course_detail_name">
              <div className="course_name">{order_data.course_name}
                <span className="course_mark">
                  / {order_data.course_mark}
                </span>
              </div>
              <div className="course_size_kid">
                {order_data.course_size=='"'?'無尺寸':order_data.course_size}
                / {order_data.course_kid}
              </div>
              <div className="course_difficult">
                <div>難易度</div>
                <div>
                  {difficult && Star.map((starr) => starr)}
                </div>
              </div>
            </div>
            <div className="course_detail_price">
              ${order_data.course_price * course_person}
            </div>
          </div>
          <div className="course_detail_data">
            <div className="course_detail_time">
              <h5>Choose your time</h5>
              <div className="detail_time_btn_wrap" >
                {select_time && select_time.map((str, index) => {
                  return (
                    <button key={index} className={course_time_select == str ? "activeColor time_btn" : "time_btn"} onClick={() => setCourse_time_select(str)}>
                      <div>
                        <GiSunflower className="time_btn_icon" />
                      </div>
                      <div className="detail_time_btn" key={index}>{str}</div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="course_detail_mon_cart_wrap">

            <div className="course_detail_mon">
              <h5>Choose date</h5>
              <div
                onClick={() => date()}
              >
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  inline
                />
              </div>
            </div>
            <div className="course_detail_person">
              <button className="detail_person_btn" onClick={course_person > 1 ? () => setCourse_person(course_person - 1) : null}><FaMinus className="person_icon" /></button>
              <p className="person_count">{course_person}</p>
              <button className="detail_person_btn" onClick={() => setCourse_person(course_person + 1)}><FaPlus className="person_icon" /></button>
            </div>
            <div className="course_detail_cart">
              <button className="detail_cart_icon_btn">
                <FaShoppingBasket className="cart_icon" />
                <div>Add to Cart</div>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

  )

}





export default Class_detail;