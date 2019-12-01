import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyles from "../data/mapStyles";
import NavBar from "../components/NavBar";

// ICON import

import { MdPeopleOutline } from "react-icons/md";
import { MdChildCare } from "react-icons/md";
import { MdGpsFixed } from "react-icons/md";
import { FaStore } from "react-icons/fa";

// style scss
import "../common/scss/store/styleFindStore.scss";
import StoreSelect from "../components/store/StoreSelect";

function Map({
  selectedPark,
  setSelectedPark,
  storeData,
  defaultLng,
  defaultLat,
  defaultZoomMap,
  setDefaultZoomMap,
  setDefaultLat,
  setDefaultLng,
  setCrdUserPosition,
  crdUserPosition
}) {
  return (
    <GoogleMap
      // defaultZoom={8}
      defaultCenter={{ lat: 23.6, lng: 121 }}
      defaultOptions={{ styles: mapStyles }}
      zoom={defaultZoomMap}
      center={{ lat: defaultLat, lng: defaultLng }}
    >
      {crdUserPosition && (
        <Marker
          position={{
            lat: crdUserPosition.lat,
            lng: crdUserPosition.lng
          }} //定位
        />
      )}
      {storeData.map(store => (
        <Marker
          key={store.store_sid}
          position={{
            lat: parseFloat(store.store_latitude),
            lng: parseFloat(store.store_longitude)
          }} //定位
          onClick={() => {
            console.log(parseFloat(store.store_latitude));
            console.log(store.store_latitude);
            setDefaultLat(store.store_latitude);
            setDefaultLng(store.store_longitude);
            setDefaultZoomMap(15);
            setSelectedPark(store);
          }}
          icon={{
            url: `/image/store/${store.store_logo}`,
            scaledSize: new window.google.maps.Size(30, 30)
          }}
          animation={{ animation: "DROP" }}
        />
      ))}
      {/* 點擊息提示 */}
      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            console.log(parseFloat(selectedPark.store_latitude * 1 + 10));
            setSelectedPark(null);
            setDefaultZoomMap(null);
          }}
          position={{
            lat: parseFloat(selectedPark.store_latitude * 1 + 0.0001),
            lng: parseFloat(selectedPark.store_longitude * 1)
          }}
        >
          <div style={{ padding: "30px" }}>
            <li className="findStoreCardGroupLi">
              <img
                className="findStoreSpacePhoto"
                src={`/image/store/${selectedPark.store_space_photo}`}
              />
              <div className="findStoreCardTop">
                <div className="findStoreName">
                  <p>{selectedPark.store_name}</p>
                </div>
              </div>
              <div className="findStoreCardDown">
                <div className="findStoreCardDownMain">
                  <img
                    className="findStoreLogoPhoto"
                    src={`/image/store/${selectedPark.store_logo}`}
                  />
                  <div className="findStoreIntroduce">
                    <p>{selectedPark.store_introduce}</p>
                  </div>
                </div>
                <div className="findStoreEnterButton">
                  <a
                    className="findStoreEnterStore"
                    href={`/handmade/store/${selectedPark.store_sid}/course`}
                  >
                    <FaStore /> GO TO Store
                  </a>
                </div>
              </div>
            </li>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));
function FindStore(props) {
  console.log(navigator.geolocation);
  const [selectedPark, setSelectedPark] = useState(null);
  const [storeData, setStoreData] = useState([]);
  const [defaultLat, setDefaultLat] = useState(23.6);
  const [defaultLng, setDefaultLng] = useState(121);
  const [defaultZoomMap, setDefaultZoomMap] = useState(8);
  const [crdUserPosition, setCrdUserPosition] = useState("");

  //---------
  const [accompanyChild, setAccompanyChild] = useState(0);
  const [accompanyPartner, setAccompanyPartner] = useState(0);
  const [location_sid, setLocationSid] = useState(0);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  //------------------------------------
  function nowPosition(props) {
    if (navigator.geolocation) {
      console.log("a");
      function success(pos) {
        var crd = pos.coords;
        console.log("Your current position is:");
        console.log("Latitude : " + crd.latitude);
        console.log("Longitude: " + crd.longitude);
        console.log("More or less " + crd.accuracy + " meters.");
        setDefaultLat(25.040741099999998);
        setDefaultLng(121.543399);
        setDefaultZoomMap(15);
        setCrdUserPosition({ lat: 25.040741099999998, lng: 121.543399 });
      }
      function error() {
        alert("無法取得你的位置");
      }
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Sorry, 你的裝置不支援地理位置功能。");
    }
  }
  //---------------------------------------child
  const storeConditionSelect = async (
    location_sid,
    accompanyPartner,
    accompanyChild
  ) => {
    const condition = JSON.stringify({
      locate_sid: location_sid,
      accompanyPartner: accompanyPartner,
      accompanyChild: accompanyChild
    });
    console.log("child:" + condition);
    try {
      const url = "http://localhost:5000/handmade/store";
      const dataJson = await fetch(url, {
        method: "POST",
        body: condition,
        headers: { "Content-Type": "application/json" }
      });
      const data = await dataJson.json();
      console.log(data);
      setStoreData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log("click");
    // setLocationSid(location_sid);
    // storeAreaHoverNow(location_sid);
    // setAreaNowCatch(areaNowCatch);
    storeConditionSelect(location_sid, accompanyPartner, accompanyChild);
  }, [accompanyChild, accompanyPartner, location_sid]);
  //------------------------------------
  return (
    <>
      {console.log("render")}
      <NavBar login={props.login} checkLogIn={props.checkLogIn}></NavBar>
      <div className="findStoreAll">
        <div className="findStoreLeft">
          <div className="findStoreLeftTop">
            <p className="findStoreLeftTopName">FIND</p>
          </div>
          <div className="findStoreLeftDown">
            <p className="findStoreLeftDownName">FIND</p>
          </div>
          <div className="findStoreCardGroup">
            <div className="findStoreCardButton">
              <div className="findStoreHere">
                <ul class="findStoreHereCheckbox list">
                  <li
                    onClick={nowPosition}
                    class="findStoreHereCheckboxItem findStoreHereCheckboxItem1"
                  >
                    <label class="number-item">
                      <input
                        type="checkbox"
                        name="numbers[]"
                        value="1"
                        class="item-checkbox"
                      />
                      <span>
                        <MdGpsFixed />
                        目前位置
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="findStoreButtonCheckbox">
                <ul class="findStoreCheckboxGroup list">
                  <li class="findStoreCheckboxItem findStoreCheckboxItem1">
                    <label class="number-item">
                      <input
                        type="checkbox"
                        name="numbers[]"
                        value="1"
                        class="item-checkbox"
                        onClick={() => {
                          setAccompanyPartner(
                            accompanyPartner
                              ? accompanyPartner - 1
                              : accompanyPartner + 1
                          );
                        }}
                      />
                      <span>
                        <MdPeopleOutline />
                        攜伴同行
                      </span>
                    </label>
                  </li>
                  <li class="findStoreCheckboxItem findStoreCheckboxItem2">
                    <label class="number-item">
                      <input
                        onClick={e => {
                          e.stopPropagation();
                          console.log(11111, accompanyChild);
                          setAccompanyChild(
                            accompanyChild
                              ? accompanyChild - 1
                              : accompanyChild + 1
                          );
                        }}
                        type="checkbox"
                        name="numbers[]"
                        value="1"
                        class="item-checkbox"
                      />
                      <span>
                        <MdChildCare />
                        攜伴孩童
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="findStoreCardGroupUl">
              {storeData.map(value => (
                <>
                  <li className="findStoreCardGroupLi">
                    <img
                      className="findStoreSpacePhoto"
                      src={`/image/store/${value.store_space_photo}`}
                    />
                    <div className="findStoreCardTop">
                      <div className="findStoreName">
                        <p>{value.store_name}</p>
                      </div>
                    </div>
                    {/* 篩選ICON */}
                    <div className="findShowConditionGroup">
                      <div className="findShowConditionPeople"><MdPeopleOutline /></div>
                      <div className="findShowConditionChild"><MdChildCare /></div>
                    </div>
                    <div className="findStoreCardDown">
                      <div className="findStoreCardDownMain">
                        <img
                          className="findStoreLogoPhoto"
                          src={`/image/store/${value.store_logo}`}
                        />
                        <div className="findStoreIntroduce">
                          <p>{value.store_introduce}</p>
                        </div>
                      </div>
                      <div className="findStoreEnterButton">
                        <a
                          className="findStoreEnterStore"
                          href={`/handmade/store/${value.store_sid}/course`}
                        >
                          <FaStore /> GO TO Store
                        </a>
                      </div>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
        <div className="findStoreRight">
          <div className="findStoreRightTop"></div>
          <div className="findStoreGoogleMap">
            <div
              className="findStoreGoogleMapIn"
              style={{ width: "100wh", height: "calc( 100vh - 60px )" }}
            >
              <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBFbHL-7A0VFRRARWIQCNJsE2HXq53z1g`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                selectedPark={selectedPark}
                setSelectedPark={setSelectedPark}
                storeData={storeData}
                setStoreData={setStoreData}
                defaultLat={defaultLat}
                defaultLng={defaultLng}
                defaultZoomMap={defaultZoomMap}
                setDefaultLat={setDefaultLat}
                setDefaultLng={setDefaultLng}
                setDefaultZoomMap={setDefaultZoomMap}
                setCrdUserPosition={setCrdUserPosition}
                crdUserPosition={crdUserPosition}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindStore;
