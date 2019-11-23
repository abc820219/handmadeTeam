import React from "react";
import styled from "styled-components";
import { StoreData } from "./StoreData"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const bg = [
    "#7FDBFF",
    "#39CCCC",
    "#85144b",
    "#FF851B",
    "#996666",
    "#cc6666",
    "#cccc99",
    "#7FDBFF",
    "#39CCCC",
    "#85144b",
    "#FF851B",
    "#996666",
    "#7FDBFF",
    "#39CCCC",
    "#85144b",
    "#FF851B",
    "#996666",
    "#cc6666",
    "#cccc99",
    "#7FDBFF",
    "#39CCCC",
    "#85144b",
    "#FF851B",
    "#996666"
];

const StoreMasonryCards = () => {
    return (
        <Root>
            {bg.map((item, index) => (
                <Brick className="storeMasonryCard" bg={item}>
                    <img className="storeSpacePhoto" src={`/image/store/aMaFaconCafeSpace.jpg`} />
                    <div className="storeCardTop">
                        <div className="storeName">
                            <p>À ma façon Café & Dessert 焙窩手工甜點</p>
                        </div>

                    </div>
                    <div className="storeCardDown">
                        <div className="storeCardDownMain">
                            <img className="storeLogoPhoto" src={`/image/store/aMaFaconCafeLogo.jpg`} />
                            <div className="storeIntroduce">
                                <p>焙窩從一人工作室起家，每一個甜點都是經由我們的雙手一步一步完成。不追求大量生產製造，是相信手工製作的溫度是機械化無法比擬的，就像家常菜一樣讓人感到回味和想念。但也因為純手工製作，為了維持住品質，一直以來焙窩的產出雖有經過時間的淬鍊而成長，但仍無法與工廠製造量相比。對我們來說，每一個甜點不單單只是一項商品，更是我們視為作品的呈現。</p>
                            </div>
                        </div>
                        <div className="storeEnterButton">
                            <Button className="storeEnterStore" variant="contained" color="secondary">
                                Go To Store
                            </Button>
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
