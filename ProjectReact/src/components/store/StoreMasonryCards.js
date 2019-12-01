import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StoreData } from "./StoreData"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


// ICON import

import { MdPeopleOutline } from "react-icons/md";
import { MdChildCare } from "react-icons/md";
import { FaStore } from 'react-icons/fa';

const StoreMasonryCards = ({ storeDataLoad }) => {

  return (
    <Root>
      {storeDataLoad.map((item, index) => (
        <Brick className="storeMasonryCard">
          <img className="storeSpacePhoto" src={`/image/store/${item.store_space_photo}`} />
          <div className="storeCardTop">
            <div className="storeName">
              <p>{item.store_name}</p>
            </div>
            {/* 篩選ICON */}
            <div className="showConditionGroup">
              <div className="showConditionPeople"><MdPeopleOutline /></div>
              <div className="showConditionChild"><MdChildCare /></div>
            </div>
          </div>
          <div className="storeCardDown">
            <div className="storeCardDownMain">
              <img className="storeLogoPhoto" src={`/image/store/${item.store_logo}`} />
              <div className="storeIntroduce">
                <p>{item.store_introduce}</p>
              </div>
            </div>
            <div className="storeEnterButton">
              {/* <Button className="storeEnterStore" variant="contained" color="secondary">
                                Go To Store
                            </Button> */}
              <a className="storeEnterStore" href={`/handmade/store/${item.store_sid}/course`}><FaStore /> GO TO Store</a>
            </div>
          </div>
        </Brick>
      ))}
    </Root>
  );
};

export default StoreMasonryCards;

const Root = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const Brick = styled.div`
  background-color: ${props => props.bg};
  flex: auto;
  min-width: 300px;
  margin: 0 15px 15px 0;
  font-size: 3rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;

  &:nth-child(1n) {
    width: 40%;
  }
  &:nth-child(2n) {
    width: 30%;
  }
  &:nth-child(3n) {
    width: 20%;
  }

  &:nth-child(2n + 2) {
    width: 15%;
  }
`;
