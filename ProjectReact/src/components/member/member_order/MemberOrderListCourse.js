import React, { Component } from 'react';
import { FaRegClock } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

const MemberOrderListCourse = () => {
    return (
        <>
            <span>
                <p>訂單編號: 100001</p>
            </span>
            <li className="d-flex justify-content-between align-item-center my-4">
                <div>
                    <h5>Saturday February 20th</h5>
                    <div>
                        <h5>
                            <FaRegClock className="oderList_icons" />
                            商品名稱: 巧克先生
                  </h5>
                    </div>
                    <div className="d-flex flex-lg-wrap">
                        <h5>
                            <FaDollarSign className="oderList_icons" />
                            價格: 2000
                  </h5>
                    </div>
                </div>
                <div>
                    <figure>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBVl9lhK94mJ5MxzGptFKO5FLRXoXVNDmjYndWy1H4kCaqDqOw"
                            alt=""
                        />
                    </figure>
                </div>
            </li>
            <li className="d-flex justify-content-between align-item-center my-4">
                <div>
                    <h5>Saturday February 20th</h5>
                    <div>
                        <h5>
                            <FaRegClock className="oderList_icons" />
                            商品名稱: 白巧克小姐
                  </h5>
                    </div>
                    <div className="d-flex flex-lg-wrap">
                        <h5>
                            <FaDollarSign className="oderList_icons" />
                            價格: 2000
                  </h5>
                    </div>
                </div>
                <div>
                    <figure>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBVl9lhK94mJ5MxzGptFKO5FLRXoXVNDmjYndWy1H4kCaqDqOw"
                            alt=""
                        />
                    </figure>
                </div>
            </li>
            <li className="d-flex justify-content-between align-item-center my-4">
                <div>
                    <h5>Saturday February 20th</h5>
                    <div>
                        <h5>
                            <FaRegClock className="oderList_icons" />
                            商品名稱: 白巧克小姐
                  </h5>
                    </div>
                    <div className="d-flex flex-lg-wrap">
                        <h5>
                            <FaDollarSign className="oderList_icons" />
                            價格: 2000
                  </h5>
                    </div>
                </div>
                <div>
                    <figure>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBVl9lhK94mJ5MxzGptFKO5FLRXoXVNDmjYndWy1H4kCaqDqOw"
                            alt=""
                        />
                    </figure>
                </div>
            </li>
        </>
    )
}

export default MemberOrderListCourse