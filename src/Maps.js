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

export default function Maps() {
  const defaultPosition = [19.649, -155.994];
  const [position, setPosition] = useState(defaultPosition);

  function RecenterMap({ position }) {
    const map = useMap();
    useEffect(() => {
      if (position) {
        map.setView(position, 13, { animate: true });
      }
    }, [position]);
    return null;
  }

  const handleLocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
        },
        (err) => {
          console.error(err);
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=bKCyPdYXLerlHv38N6r1"
        />
        <Marker position={position} icon={L.icon({ iconUrl: markerIcon, shadowUrl: markerShadow, iconSize: [25, 41], iconAnchor: [12, 41] })}>
          <Popup>
            You are here.
          </Popup>
        </Marker>
        <RecenterMap position={position} />
      </MapContainer>
      <button
        onClick={handleLocate}
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Use Current Location
      </button>
    </div>
  );
}
