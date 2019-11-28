import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "../../common/scss/store/styleStore.scss"
import "intersection-observer";

// ICON import

import { MdPeopleOutline } from 'react-icons/md';
import { MdChildCare } from 'react-icons/md';


// Components

import StoreMap from './StoreMap'
import StoreMasonryCards from './StoreMasonryCards'
import StoreSelect from './StoreSelect'
import { element } from "prop-types";

const StoreAll = () => {

    const [storeDataLoad, setStoreDataLoad] = useState([]);
    const [storeAllData, setStoreAllData] = useState([]);
    const [areaNowName, setAreaNowName] = useState(0);
    const [areaNowCatch, setAreaNowCatch] = useState("全島");
    const [accompanyChild, setAccompanyChild] = useState(0);
    const [accompanyPartner, setAccompanyPartner] = useState(0);
    const [location_sid, setLocationSid] = useState(0);
    let areaStoreMapValue;

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
        Promise.all([storeData(), allStoreData()])
    }, [])

    useEffect(() => {
        storeAreaHoverNow(areaNowName);
    }, [areaNowName])

    useEffect(() => {
        setLocationSid(location_sid);
        storeAreaHoverNow(location_sid);
        storeConditionSelect(location_sid,accompanyPartner, accompanyChild);
        // setAreaNowCatch(areaNowCatch);
    }, [accompanyPartner, accompanyChild])

    const allStoreData = async () => {
        const storeAllDataFirst = await fetch("http://localhost:5000/handmade/store");
        let storeAllDataJson = await storeAllDataFirst.json();
        setStoreAllData(storeAllDataJson);
    }

    const storeData = async (areaStoreMapValue) => {
        let url = "http://localhost:5000/handmade/store";
        if (areaStoreMapValue) {
            await setLocationSid(areaStoreMapValue);
            const storeDataSelect = await fetch(url + "/" + areaStoreMapValue);
            let storeDataSelectJson = await storeDataSelect.json();
            setStoreDataLoad(storeDataSelectJson);
        } else {
            const storeDataFirst = await fetch(url);
            let storeDataJson = await storeDataFirst.json();
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

    const storeConditionSelect = async (location_sid,accompanyPartner,accompanyChild) => {
        const condition = JSON.stringify({
            locate_sid: location_sid,
            accompanyPartner: accompanyPartner,
            accompanyChild: accompanyChild
        });
        console.log(condition);
        try {
            const url = 'http://localhost:5000/handmade/store';
            const dataJson = await fetch(url, {
                method: "POST",
                body: condition,
                headers: { "Content-Type": "application/json" }
            });
            const data = await dataJson.json();
            setStoreDataLoad(data);
        } catch (e) {
            console.log(e);
        }
    };

    // console.log(storeDataLoad); // 是否抓到資料庫

    const areaHaveStore = {};
    storeDataLoad.forEach(v => {
        areaHaveStore[v.area_sid] = 1;
    });
    
    console.log(areaHaveStore)
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
                            <StoreSelect storeDataLoad={storeDataLoad} storeAllData={storeAllData} areaHaveStore={areaHaveStore}/>
                        </div>
                        <div className="storeButtonGroup">
                            <ul class="storeCheckboxGroup list">
                                <li class="storeCheckboxItem storeCheckboxItem1">
                                    <label class="number-item">
                                        <input
                                            type="checkbox"
                                            name="numbers[]"
                                            value="1"
                                            class="item-checkbox"
                                            onClick={() => { setAccompanyPartner(accompanyPartner ? accompanyPartner - 1 : accompanyPartner + 1) }}
                                        />
                                        <span><MdPeopleOutline /><br />攜伴同行</span>
                                    </label>
                                </li>
                                <li class="storeCheckboxItem storeCheckboxItem2">
                                    <label class="number-item">
                                        <input
                                            type="checkbox"
                                            name="numbers[]"
                                            value="1"
                                            class="item-checkbox"
                                            onClick={() => { setAccompanyChild(accompanyChild ? accompanyChild - 1 : accompanyChild + 1) }}
                                        />
                                        <span><MdChildCare /><br />攜伴孩童</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="storeList">
                    <div className="storeListTop"></div>
                    <StoreMasonryCards className="storeListMasonryCardsGroup" storeDataLoad={storeDataLoad} />
                </div>
            </div>
        </>
    );
};

export default StoreAll;