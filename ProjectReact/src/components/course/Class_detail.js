import React, { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import { GiSunflower } from "react-icons/gi";
import { FaShoppingBasket, FaMinus, FaPlus } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import CartStore from "../cart/CartStore";
import "../../commom/scss/course/course_detail.scss";
import "react-datepicker/dist/react-datepicker.css";
import { Switch, Route, NavLink, Redirect, withRouter } from 'react-router-dom';
import {
  addCourse,
  cancelCourse,
} from "../../components/cart/CartAction";
import { IoIosClose, IoIosRewind } from "react-icons/io";
import $ from "jquery";

function Class_detail(props) {
  let productDetail;
  console.log(props)
  const { courseCart, id, cartCourseDispatch } = useContext(CartStore);
  console.log(courseCart);
  const course_sid = props.match.params.cSid;
  const store_sid = props.match.params.sid;
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
  const [data_total, setData_total] = useState("")
  const [order_data, setOrder_data] = useState("")
  const [order_total, setOrder_total] = useState("")
  const [test, setTest] = useState("")
  const [order_morning, setOrder_morning] = useState("");
  const [order_afternoon, setOrder_afternoon] = useState("")
  const [order_noon, setOrder_noon] = useState("")
  const [start, setStart] = useState("")
  const [course_note_title, setCourse_note_title] = useState(["體驗包含", "費用包含", "注意事項", "取消辦法"])
  const [note_btn_now, setNote_btn_now] = useState("體驗包含")

  const [correctDay, setCorrectDay] = useState("")

  const [checkCart, setCheckCart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:5000/handmade/store/course/${store_sid}/${course_sid}`)
      const data = await res.json();
      console.log(data)
      setData_total(data);
      setOrder_total(data[0])//訂單全部
      let note = [];
      note = [...note, data[1][0].course_cancel, data[1][0].course_content, data[1][0].course_experience, data[1][0].course_object, data[1][0].course_precautions, data[1][0].store_introduce];
      setDataNote(note)
      let time = [];
      let noon = "12:00"
      let afternoon = "15:00"
      let noon_str = "T04:00:00.000Z";
      let afternoon_str = "T07:00:00.000Z";

      //////////////////////////
      $(".detail_note_title_txt").click(function (event) {
        $(this).addClass("detail_title_click").siblings().removeClass("detail_title_click")
        setNote_btn_now($(event.target).text())
      })

      $(".note_content_close").click(function () {
        $(".course_detail_note_wrap").addClass("detail_img_note_wrap_move")
      })
      $(".detail_img_note_wrap_move_open").click(function () {
        $(".course_detail_note_wrap").removeClass("detail_img_note_wrap_move")
      })

      //////////人數相加////////
      let person_sum = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i]
        }
        return sum
      }
      //////人數相加//////



      let big_filter = () => {
        let now = new Date()
        let year = now.getFullYear();
        console.log(typeof year)
        let total = data[2] && data[2].filter(obj => {
          let data = obj.course_order_choose
          data = data.slice(0, 4)
          if (data == year) {
            return obj.course_order_choose
          }
        })
        console.log("塞年分", total)

        now = parseInt((now.getMonth()) + "") + 1
        console.log(now)
        let order = total && total.filter(obj => {
          let data = obj.course_order_choose
          data = data.slice(5, 7)
          data = parseInt(data + "")
          if (data == now) {
            return obj.course_order_choose
          }
        })
        console.log("塞月份", order)
        //////塞月份

        let month = [];
        for (let i = 0; i < 13; i++) {
          month.push(total && total.filter(obj => {
            let data = obj.course_order_choose
            data = data.slice(5, 7)
            return data == i
          }))
        }
        console.log("月份", month)

        let day = [];
        for (let i = 0; i < 32; i++) {
          day.push(order && order.filter(obj => {
            let data = obj.course_order_choose
            data = (data).slice(8, 10)
            return data == i
          }))
        }
        console.log("日期訂單", day)

      }



      time = [...time, data[1][0].store_open, noon, afternoon, data[1][0].store_end]
      setCourse_time(time)
      let max_store = data[1][0].store_max_number
      await setMax_person(max_store)
      let select = []
      select = [...select, data[1][0].store_open.slice(0, 5), noon, afternoon]
      setSelect_time(select)
      await setCourse_total(data[1])
      let filter = data[1] && data[1].filter(obj => {
        return obj.course_sid == course_sid
      })
      console.log(filter)


      let order_morning = data[0] && data[0].filter(obj => {
        let date = obj.course_order_choose
        date = (date + "").slice(10)
        if ((date + "") == "T01:00:00.000Z") {
          return obj.course_order_choose
        }
      });
      let course_time = parseInt(filter[0].course_spend_time)
      console.log("course_time", course_time)


      let morning_person = order_morning && order_morning.map(el => el.course_order_applicants)
      console.log("morning_person", morning_person)
      let morning_person_total = person_sum(morning_person)
      console.log(" morning_person_total", morning_person_total)

      let order_afternoon = data[0] && data[0].filter(obj => {
        let date = obj.course_order_choose
        date = (date + "").slice(10)
        if ((date + "") == afternoon_str) {
          return obj.course_order_choose
        }
      })
      let afternoon_person = order_afternoon && order_afternoon.map(el => el.course_order_applicants)
      console.log("afternoon_person", afternoon_person)
      let afternoon_person_total = person_sum(afternoon_person)
      console.log("afternoon_person_total", afternoon_person_total)

      let order_noon = data[0] && data[0].filter(obj => {
        let date = obj.course_order_choose
        date = (date + "").slice(10)
        if ((date + "") == noon_str) {
          return obj.course_order_choose
        }
      })
      let noon_person = order_noon && order_noon.map(el => el.course_order_applicants)
      console.log("noon_person", noon_person)
      let noon_person_total = person_sum(noon_person)
      console.log("noon_person_total", noon_person_total)



      await setOrder_afternoon(order_afternoon)
      await setOrder_morning(order_morning)
      await setOrder_noon(order_noon)
      await setDifficult(parseInt(filter[0].course_difficult))
      await setOrder_data(filter[0]) //課程詳細全部
      await setNeed_time(parseInt(filter[0].course_spend_time))
      await setImg_detail(filter[0].course_detail)
      big_filter()
    }
    fetchData()
  }, []
  )

  // console.log("max_person", max_person)
  // console.log("order_noon", order_noon)
  // console.log(start, "4564546")
  // console.log("data_total", data_total)
  // console.log({ dataNote });
  // console.log(order_data)
  // console.log(course_time)
  // console.log(startDate)
  // console.log("order_total", order_total)
  // console.log("vdvd", order_morning)
  // console.log("(order_afternoon)", order_afternoon)
  // console.log("選擇時間", course_time_select)
  // console.log(img_detail)
  // console.log("Need_time", need_time)
  // console.log(course_person)
  // console.log(price)



  const setCorrectDate = (correctDate) => {
    console.log(correctDate);
    let date = (correctDate) => {
      let str;
      // str = startDate + ""
      str = correctDate + "";
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
      return data
    }
    setStartDate(correctDate);
    setCorrectDay(date(correctDate));
  }

  console.log(test)


  let Star = []
  if (difficult) {
    for (let i = 0; i < difficult; i++) {
      Star.push(<MdStar className="star" key={i} />)
    }
  }
  console.log(Star)

  if (order_data) {
    productDetail = {
      courseSid: order_data.course_sid,
      courseName: order_data.course_name,
      coursePrice: order_data.course_price,
      courseList: order_data.course_list
    };
  }

  const checkBottom = () => {
    if (correctDay && course_time_select) {
      console.log("checkcheckTrue");
      setCheckCart(true);
    } else {
      console.log("checkcheckFalse");
      setCheckCart(false);
    }
  }

  console.log(id);

  const putInCart = (productDetail, choseDate, courseTimeSelect, course_person, courseCart, id) => {
    console.log(productDetail);
    console.log(choseDate);
    console.log(courseTimeSelect);
    if (id) {
      const courseSid = productDetail.courseSid;
      const courseTime = `${choseDate} ${courseTimeSelect}`;
      let checkCart;
      if (courseCart) {
        checkCart = courseCart.filter(courseC => {
          return courseC.course_sid == courseSid && courseC.course_choose == courseTime;
        });
        console.log(checkCart);
        if (checkCart.length) {
          alert("已經加入重複時間課程");
        } else {
          console.log(checkCart);
          let orderCf = {
            course_sid: productDetail.courseSid,
            course_name: productDetail.courseName,
            course_price: productDetail.coursePrice,
            course_order_applicants: course_person,
            course_list: productDetail.courseList,
            course_order_choose: courseTime
          }
          cartCourseDispatch(addCourse(orderCf, id));
        }
      } else {
        let orderCf2 = {
          course_sid: productDetail.courseSid,
          course_name: productDetail.courseName,
          course_price: productDetail.coursePrice,
          course_order_applicants: course_person,
          course_list: productDetail.courseList,
          course_order_choose: courseTime
        }
        cartCourseDispatch(addCourse(orderCf2, id));
      }
    } else {
      alert("請先登入")
    }
  }

  useEffect(() => {
    checkBottom(correctDay, course_time_select)
  }, [correctDay, course_time_select])


  // let a="029";
  // $(".react-datepicker__day--"+a).css("background-color","black");
  return (
    <div className="course_detail">
      <div className="detail_navbar_wrap">
        <div className="course_detail_wordBox">
          <div className="course_detail_wordBoxUp course_detail_bar">
            <p className="course_detail_wordHalfUp">CLASS</p>
          </div>
          <div className="course_detail_wordBoxDown course_detail_bar">
            <p className="course_detail_wordHalfDown">CLASS</p>
          </div>
        </div>
        <div className="detail_navbar">
          <div className="course_detail_info">
            <div className="course_detail_name">
              <div className="course_name">{order_data.course_name}
                <span className="course_mark">
                  / {order_data.course_mark}
                </span>
              </div>
              <div className="course_size_kid">
                {order_data.course_size == '"' ? '無尺寸' : order_data.course_size}
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
                // onClick={() => date()}
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
            <button type="button" className="detail_cart_icon_btn">
                <FaShoppingBasket className="cart_icon" />
                <div>Add to Cart</div>
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="detail_img_note_wrap">
        <figure className="course_detail_img_wrap">
          <img className="course_detail_img" src={`/image/course_img/detail/${order_data.course_detail}`} />
        </figure>
        <IoIosRewind className="detail_img_note_wrap_move_open" />
        <div className="course_detail_note_wrap ">
          <div className="detail_note_title">
            {course_note_title && course_note_title.map((str, index) => <button className={note_btn_now == str ? "detail_note_title_txt detail_title_click" : "detail_note_title_txt "} key={index}>{str}</button>)}
          </div>
          <div className="note_content">
            <div className="note_content_close_title">
              <IoIosClose className="note_content_close" />
              {course_note_title && course_note_title.map((str, index) => <div className={note_btn_now == str ? "note_content_title " : "note_content_none"} key={index}>{str}</div>)}
            </div>
            <div className="note_content_txt_wrap">
              <div style={{ whiteSpace: 'pre-wrap' }} className={note_btn_now == course_note_title[0] ? "note_content_txt" : "note_content_none"}>{dataNote[1]}</div>
              <div style={{ whiteSpace: 'pre-wrap' }} className={note_btn_now == course_note_title[1] ? "note_content_txt" : "note_content_none"} >{dataNote[2]}</div>
              <div style={{ whiteSpace: 'pre-wrap' }} className={note_btn_now == course_note_title[2] ? "note_content_txt" : "note_content_none"}>{dataNote[4]}</div>
              <div style={{ whiteSpace: 'pre-wrap' }} className={note_btn_now == course_note_title[3] ? "note_content_txt" : "note_content_none"} >{dataNote[0]}</div>
            </div>
          </div>
        </div>

      </div>


    </div>

  )

}





export default withRouter(Class_detail);