import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import mapStyles from "../data/mapStyles";
//
import NavBar from "../components/NavBar";

// ICON import

import { MdPeopleOutline } from "react-icons/md";
import { MdChildCare } from "react-icons/md";
import { MdGpsFixed } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";

// style scss
import "../common/scss/store/styleFindStore.scss";
import StoreSelect from "../components/store/StoreSelect";
//

// const markerClustererCalculator = (markers, numStyles) => {
//   //create an index for icon styles
//   var index = 4,
//     //Count the total number of markers in this cluster
//     count = markers.length,
//     //Set total to loop through (starts at total number)
//     index = Math.min(index);
// // Cluster level 1 (index = 1)
// // Cluster level 2 (index = 2)
// // Cluster level 3 (index = 3)
// // Cluster level 4 (index = 4)
// // Cluster level 5 (index = 5)
//   //Tell MarkerCluster this clusters details (and how to style it)
//   return {
//     text: count,
//     index: index
//   };
// };
const markerClustererCalculator = (markers, numStyles) => {
  const index = markers.find(marker => marker.icon.condition === "anormal")
    ? 3
    : markers.find(marker => marker.icon.condition === "alerta")
    ? 2
    : markers.find(marker => marker.icon.condition === "normal")
    ? 1
    : 4;
  return {
    index: index,
    text: markers.length
  };
};

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
  crdUserPosition,
  nowPositionHandler
}) {
  return (
    <GoogleMap
      // defaultZoom={8}
      defaultCenter={{ lat: 23.6, lng: 121 }}
      defaultOptions={{ styles: mapStyles }}
      zoom={defaultZoomMap}
      center={{ lat: defaultLat, lng: defaultLng }}
      // options={{
      //   mapTypeControl: false
      //  }}
    >
      {nowPositionHandler && (
        <Marker
          position={{
            lat: crdUserPosition.lat,
            lng: crdUserPosition.lng
          }} //定位
        />
      )}

      <MarkerClusterer
        averageCenter
        calculator={markerClustererCalculator}
        enableRetinaIcons
        gridSize={30}
      >
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
              url: `/image/store/circleLogo/${store.store_logo}`,
              scaledSize: new window.google.maps.Size(30, 30)
            }}
            animation={{ animation: "DROP" }}
          />
        ))}
      </MarkerClusterer>
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
          <div style={{ padding: "0 15px 0 0" }}>
            <li className="findStoreMapCardGroupLi">
              <img
                className="findStoreMapSpacePhoto"
                src={`/image/store/${selectedPark.store_space_photo}`}
              />
              <img
                className="findStoreMapLogoPhoto"
                src={`/image/store/${selectedPark.store_logo}`}
              />
              <div className="findStoreMapCardTop">
                <div className="findStoreMapName">
                  <p>{selectedPark.store_name}</p>
                </div>
              </div>
              <div className="findStoreMapCardDown">
                <div className="findStoreMapCardDownMain">
                  <div className="findStoreMapIntroduce">
                    <p>{selectedPark.store_introduce}</p>
                  </div>
                </div>
                <div className="findStoreMapEnterButton">
                  <a
                    className="findStoreMapEnterStore"
                    href={`/handmade/store/${selectedPark.store_sid}/course`}
                  >
                    <FaStore /> &nbsp;&nbsp;
                    <p>GO TO Store</p>
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
  // const [markOpen, setMarkOpen] = useState(fasle);
  //---------
  const [accompanyChild, setAccompanyChild] = useState(0);
  const [accompanyPartner, setAccompanyPartner] = useState(0);
  const [location_sid, setLocationSid] = useState(0);
  const [lot, setLot] = useState(0);
  const [lat, setLat] = useState(0);
  const [nowPositionHandler, setNowPositionHandler] = useState(false);

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
    if (nowPositionHandler == false) {
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
          setCrdUserPosition({ lat: 25.033934, lng: 121.543398 });
          setLot(121.543399);
          setLat(25.040741099999998);
          setNowPositionHandler(true);
        }
        function error() {
          alert("無法取得你的位置");
        }
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        alert("Sorry, 你的裝置不支援地理位置功能。");
      }
    }
    if (nowPositionHandler == true) {
      if (navigator.geolocation) {
        console.log("a");
        function success(pos) {
          var crd = pos.coords;
          console.log("Your current position is:");
          console.log("Latitude : " + crd.latitude);
          console.log("Longitude: " + crd.longitude);
          console.log("More or less " + crd.accuracy + " meters.");
          setDefaultLat(23.6);
          setDefaultLng(121);
          setDefaultZoomMap(8);
          setCrdUserPosition({ lat: 25.033934, lng: 121.543398 });
          setLot(0);
          setLat(0);
          setNowPositionHandler(false);
        }
        function error() {
          alert("無法取得你的位置");
        }
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        alert("Sorry, 你的裝置不支援地理位置功能。");
      }
    }
  }
  //---------------------------------------child
  const storeConditionSelect = async (
    location_sid,
    accompanyPartner,
    accompanyChild,
    lot,
    lat
  ) => {
    const condition = JSON.stringify({
      locate_sid: location_sid,
      accompanyPartner: accompanyPartner,
      accompanyChild: accompanyChild,
      lot: lot,
      lat: lat
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
    storeConditionSelect(
      location_sid,
      accompanyPartner,
      accompanyChild,
      lot,
      lat
    );
  }, [accompanyChild, accompanyPartner, location_sid, lot, lat]);
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
              <div className="findStoreToStoreForGoogle">
                <a className="findStoreToStoreForIconA" href="/handmade/store">
                  <MdArrowBack />
                  <p className="findStoreToStoreForIconText"> 回店家列表</p>
                </a>
              </div>
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
                      {value.store_partner === 1 && (
                        <div className="findShowConditionPeople">
                          <MdPeopleOutline />
                        </div>
                      )}
                      {value.store_child === 1 && (
                        <div className="findShowConditionChild">
                          <MdChildCare />
                        </div>
                      )}
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
                nowPositionHandler={nowPositionHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindStore;
