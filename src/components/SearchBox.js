import React, { useState } from "react";
import { Box, Button, OutlinedInput, Typography, List, ListItem, ListItemText, Paper, Container, Card, CardContent } from '@mui/material';
import { Link } from "react-router-dom";
import legends from "./LegendsList";
import "./SearchBox.css";

function getDistanceInMiles(lat1, lon1, lat2, lon2) {
  const R = 3958.8;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function SearchBox({
  position,
  setPosition,
  nearbyLegends = [],
  setNearbyLegends,
}) {

  const [query, setQuery] = useState("");

  const handleLocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const userPos = [latitude, longitude];
          setPosition(userPos);
          findNearbyLegends(latitude, longitude);
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

  const findNearbyLegends = (lat, lon) => {
    const nearby = legends.filter((legend) => {
      const dist = getDistanceInMiles(lat, lon, legend.lat, legend.lon);
      return dist <= 10;
    });
    setNearbyLegends(nearby);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query
      )}`
    );

    const data = await res.json();

    if (data && data.length > 0) {
      const { lat, lon } = data[0];
      const latNum = parseFloat(lat);
      const lonNum = parseFloat(lon);
      setPosition([latNum, lonNum]);
      findNearbyLegends(latNum, lonNum);
    } else {
      alert("Location not found.");
    }

    setQuery("");
  };

  return (
    <div className="searchbox-root">
      <form onSubmit={handleSearch} style={{ display: "flex", marginBottom: "20px" }}>
        <OutlinedInput
          placeholder="Search for a location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ flexGrow: 1, marginRight: 10 }}
        />
        <Button variant="contained" color="primary" type="submit">
          Go
        </Button>
      </form>

      <button
        onClick={handleLocate}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        See My Location
      </button>

      {nearbyLegends.length > 0 && (
        <Card sx={{ background: "rgba(255, 255, 255, 0.84)", mb: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: 'fantasy, Papyrus, Copperplate, cursive' }}>
            Nearby Hawaiian Legends
          </Typography>
          <List sx={{ fontFamily: 'fantasy, Papyrus, Copperplate, cursive' }}>
            {nearbyLegends.map((legend) => (
              <ListItem key={legend.id} sx={{ mb: 1 }}>
                <ListItemText
                  primary={
                    <Link
                      to={`/legend/${legend.id}`}
                      style={{ textDecoration: "none", color: "#2F4F4F", fontFamily: 'fantasy, Papyrus, Copperplate, cursive'}}
                    >
                      {legend.title}
                    </Link>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      {legend.description}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          </CardContent>
          </Card>
      )}
    </div>
  );
}