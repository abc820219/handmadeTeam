import React, { Component } from 'react';
import { FaRegClock } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

const MemberOrderListCourse = ({key,courseOrderSid,courseName,courseOrderChoose,coursePrice,orderDetailData,courseList}) => {
    // if(courseOrderChoose) {
    //     courseOrderChoose = courseOrderChoose.splice("T")[0];
    // }
    console.log(courseName);
    return (
        <>
            <li className="d-flex justify-content-between align-item-center my-4 flex-wrap" 
            onClick={()=>{orderDetailData(1,courseOrderSid)}}>
            <span className='w-100'>
                <p>訂單編號: {key}</p>
            </span>
                <div>
                    <h5>{courseOrderChoose}</h5>
                    <div>
                        <h5>
                            <FaRegClock className="oderList_icons" />
                            商品名稱: {courseName}
                  </h5>
                    </div>
                    <div className="d-flex flex-lg-wrap">
                        <h5>
                            <FaDollarSign className="oderList_icons" />
                            價格: {coursePrice}
                  </h5>
                    </div>
                </div>
                <div>
                    <figure>
                        <img
                            src={`/image/course_img/360/${courseList}`}
                            alt=""
                        />
                    </figure>
                </div>
            </li>
        </>
    )
}

export default MemberOrderListCourse