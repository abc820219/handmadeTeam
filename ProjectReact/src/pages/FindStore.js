import React, { useState } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
function Map() {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 12, lng: 12 }} />;
}

const MapWrapped = withScriptjs(withGoogleMap(Map));
function FindStore() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBFbHL-7A0VFRRARWIQCNJsE2HXq53z1g`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </>
  );
}

export default FindStore;
