import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyles from "../data/mapStyles";

function Map({ selectedPark, setSelectedPark, storeData, setStoreData }) {
  // const [mapZoom,setMapZoom]=
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 25.033858, lng: 121.543410 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {storeData.map(store => (
        <>
          <Marker
            key={store.store_sid}
            position={{
              lat: parseFloat(store.store_latitude),
              lng: parseFloat(store.store_longitude)
            }} //定位
            onClick={() => {
              setSelectedPark(store);
              console.log(selectedPark);
            }}
            // icon={{
            //   url: `/image/store/${store.properties.PICTURELogo}`,
            //   scaledSize: new window.google.maps.Size(20, 20)
            // }}
          />
        </>
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
  const [selectedPark, setSelectedPark] = useState(null);
  const [storeData, setStoreData] = useState([]);
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
  return (
    <>
      <div style={{ width: "100vh", height: "100vh" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBFbHL-7A0VFRRARWIQCNJsE2HXq53z1g`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          selectedPark={selectedPark}
          setSelectedPark={setSelectedPark}
          storeData={storeData}
          setStoreData={setStoreData}
        />
      </div>
    </>
  );
}

export default FindStore;
