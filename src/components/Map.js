import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default function() {
  const state = {
    lat: 37.0902,
    lng: -95.7129,
    zoom: 4
  };

  const position = [state.lat, state.lng];

  return (
    <div
      style={{
        marginBottom: `24px`
      }}
    >
      <Map center={position} zoom={state.zoom} id="leaflet-us-map">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  );
}
