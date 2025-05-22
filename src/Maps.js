import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


function RecenterMap({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, 13, { animate: true });
    }
  }, [position]);
  return null;
}

export default function Maps({ position }) {
  const defaultPosition = [19.649, -155.994];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <MapContainer
        center={position || defaultPosition}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=bKCyPdYXLerlHv38N6r1"
        />

        {position && (
          <>
            <Marker
              position={position}
              icon={L.icon({
                iconUrl: markerIcon,
                shadowUrl: markerShadow,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })}
            >
              <Popup>You are here.</Popup>
            </Marker>
            <RecenterMap position={position} />
          </>
        )}
      </MapContainer>
    </div>
  );
}