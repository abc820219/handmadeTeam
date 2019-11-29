import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyles from "../data/mapStyles";

function Map({
  selectedPark,
  setSelectedPark,
  storeData,
  defaultLng,
  defaultLat,
  defaultZoomMap,
  setDefaultLat,
  setDefaultLng,
  setDefaultZoomMap,
  setCrdUserPosition,
  crdUserPosition
}) {
  return (
    <GoogleMap
      defaultZoom={8}
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
            setSelectedPark(store);
            console.log(selectedPark);
            setDefaultLat(store.store_latitude);
            setDefaultLng(store.store_longitude);
            setDefaultZoomMap(25);
          }}
          icon={{
            url: `/image/store/${store.store_logo}`,
            scaledSize: new window.google.maps.Size(30, 30)
          }}
        />
      ))}
      {/* 點擊息提示 */}
      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: parseFloat(selectedPark.store_latitude),
            lng: parseFloat(selectedPark.store_longitude)
          }}
        >
          <div>
            <h2>{selectedPark.store_name}</h2>
            <p>{selectedPark.store_introduce}</p>
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
  useEffect(() => {
    const allStoreData = async () => {
      const storeAllDataFirst = await fetch(
        "http://localhost:5000/handmade/store"
      );
      let storeAllDataJson = await storeAllDataFirst.json();
      setStoreData(storeAllDataJson);
    };
    allStoreData();
  }, []);
  console.log(storeData);

  //------------------------------------
  function nowPosition() {
    if (navigator.geolocation) {
      console.log("a");
      function success(pos) {
        var crd = pos.coords;
        console.log("Your current position is:");
        console.log("Latitude : " + crd.latitude);
        console.log("Longitude: " + crd.longitude);
        console.log("More or less " + crd.accuracy + " meters.");
        setDefaultLat(crd.latitude);
        setDefaultLng(crd.longitude);
        setDefaultZoomMap(15);
        setCrdUserPosition({ lat: crd.latitude, lng: crd.longitude });
      }
      function error() {
        alert("無法取得你的位置");
      }
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Sorry, 你的裝置不支援地理位置功能。");
    }
  }
  //------------------------------------

  return (
    <>
      <p onClick={nowPosition}>目前位置</p>
      <div style={{ width: "50wh", height: "50vh" }}>
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
    </>
  );
}

export default FindStore;
