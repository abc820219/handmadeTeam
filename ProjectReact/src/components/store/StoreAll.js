import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "../../common/scss/store/styleStore.scss"
import "intersection-observer";

// Components

import StoreMap from './StoreMap'
import StoreMasonryCards from './StoreMasonryCards'
import StoreSelect from './StoreSelect'

class StoreAll extends Component {
    render() {
        return (
            <>
                <div className="storeAll">
                    <div className="storeChoose">
                        <div className="storeUp">
                            <p>STORE</p>
                        </div>
                        <div className="storeDown">
                            <div className="storeDownName">
                                <p>STORE</p>
                            </div>
                            <div className="storeMap">
                                <StoreMap />
                            </div>
                            <div className="storeCountryName">
                                <p className="keelung">基隆市</p>
                                <p className="taipei">台北市</p>
                                <p className="newTaipei">新北市</p>
                                <p className="taoyuan">桃園市</p>
                                <p className="hsinchu_1">新竹市</p>
                                <p className="hsinchu_2">新竹縣</p>
                                <p className="yilan">宜蘭縣</p>
                                <p className="taichung">台中市</p>
                                <p className="changhua">彰化縣</p>
                                <p className="nantou">南投縣</p>
                                <p className="hualien">花蓮縣</p>
                                <p className="chiayi">嘉義縣</p>
                                <p className="tainan">台南市</p>
                                <p className="kaohsiung">高雄市</p>
                                <p className="taitung">台東縣</p>
                                <p className="pingtung">屏東縣</p>
                            </div>
                            <div className="storeSelect">
                                <StoreSelect />
                            </div>
                            <div className="storeButtonGroup">
                                <Grid item>
                                    <ButtonGroup
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        aria-label="large contained secondary button group"
                                    >
                                        <Button>攜伴同行</Button>
                                        <Button>攜帶孩童</Button>
                                    </ButtonGroup>
                                </Grid>
                            </div>
                        </div>
                    </div>
                    <div className="storeList">
                        <div className="storeListTop"></div>
                        <StoreMasonryCards />
                    </div>
                </div>
            </>
        );
    }
}

export default StoreAll;