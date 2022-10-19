import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';


const icon = L.icon({
    iconUrl:require('./../../assets/img/pinmap.png'),
    iconSize:     [38, 95],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76]
});

export default function SearchMap() {
  const position = [51.505, -0.09];
  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '86vh', width: '100wh' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=OAqBc7YJDgQo0IbdUBwA"
        />
        <Marker position={position}>
          <Popup>
            500$
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
