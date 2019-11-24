import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "../../common/scss/store/styleStore.scss"
import "intersection-observer";

// Components

import StoreMap from './StoreMap'
import StoreMasonryCards from './StoreMasonryCards'
import StoreSelect from './StoreSelect'
import { element } from "prop-types";

const StoreAll = () => {

    const [storeDataLoad, setStoreDataLoad] = useState([]);
    const [storeAllData, setStoreAllData] = useState([]);
    const [areaNowName, setAreaNowName] = useState(0);
    const [areaNowCatch, setAreaNowCatch] = useState("全島")

    // const getAreaClick = (areaStoreMapValue) => {
        // console.log(areaStoreMapValue);
        // console.log(storeDataLoad);

        // storeDataLoad.filter(element => {
        //     element.area_sid == areaStoreMapValue;
        // })
        // let arr = [];
        // for (let i = 0; i < storeDataLoad.length; i++) {
        //     if (storeDataLoad[i].area_sid == areaStoreMapValue) {
        //         arr.push(storeDataLoad[i]);
        //     }
        // }
        // console.log(arr);
        // setStoreDataLoad(arr);
    // }

    useEffect(() => {
        storeData()
    }, [])

    useEffect(() => {
        storeAreaHoverNow(areaNowName);
    }, [areaNowName])
    
    useEffect(() => {
        allStoreData()
    },[])

    const allStoreData = async () => {
        const storeAllDataFirst = await fetch("http://localhost:5000/handmade/store");
        let storeAllDataJson = await storeAllDataFirst.json();
        setStoreAllData(storeAllDataJson);
    }

    const storeData = async (areaStoreMapValue) => {
        const storeDataFirst = await fetch("http://localhost:5000/handmade/store");
        let storeDataJson = await storeDataFirst.json();
        if(areaStoreMapValue) {
            let arr = [];
            for (let i = 0; i < storeDataLoad.length; i++) {
                if (storeDataLoad[i].area_sid == areaStoreMapValue) {
                    arr.push(storeDataLoad[i]);
                }
            }
            setStoreDataLoad(arr);
        }else{
            setStoreDataLoad(storeDataJson);
        }
        // console.log(storeDataJson);
    }

    const storeAreaHoverNow = async (locate_sid) => {
        // const storeDataFirst = await fetch("http://localhost:5000/handmade/store"+locate_sid);
        // let storeDataJson = await storeDataFirst.json();
        // // console.log(storeDataJson);
        // setStoreDataLoad(storeDataJson);
        const areaName = JSON.stringify({
            locate_sid: locate_sid
        });
        try {
            const url = 'http://localhost:5000/handmade/store/getLocateName';
            const dataJson = await fetch(url, {
                method: "POST",
                body: areaName,
                headers: { "Content-Type": "application/json" }
            });
            const data = await dataJson.json();
            setAreaNowCatch(data.area_name);
        } catch (e) {
            console.log(e);
        }
    };

    // console.log(storeDataLoad); // 是否抓到資料庫

    const areaHaveStore = {};
    storeDataLoad.forEach(v => {
        areaHaveStore[v.area_sid] = 1;
    });
    // console.log(areaHaveStore); // 地區是否有店家

    const areaAllHaveStoreData = {};
    storeAllData.forEach(v => {
        areaAllHaveStoreData[v.area_sid] = 1;
    });

    // console.log(areaNowName); // 資料庫回傳店家名稱

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
                            <StoreMap
                                areaAllHaveStoreData={areaAllHaveStoreData}
                                storeData={storeData}
                                areaHaveStore={areaHaveStore}
                                setAreaNowCatch={setAreaNowCatch}
                                setAreaNowName={setAreaNowName} />
                        </div>
                        <div className="storeCountryName">
                            <p className="areaNowName">{areaNowCatch}</p>
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
                    <StoreMasonryCards storeDataLoad={storeDataLoad} />
                </div>
            </div>
        </>
    );
};

export default StoreAll;