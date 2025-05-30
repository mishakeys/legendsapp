import React from "react";
import { useParams, Link } from "react-router-dom";
import legends from "./LegendsList";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

export default function LegendDetail() {
  const { id } = useParams();
  const legend = legends.find((l) => l.id === Number(id));

  if (!legend) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h5">Legend not found.</Typography>
        <Button component={Link} to="/" variant="contained" sx={{ mt: 2 }}>
          Back to Search
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 600, width: "100%", bgcolor: "rgba(255,255,255,0.95)" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ fontFamily: 'fantasy, Papyrus, Copperplate, cursive' }}>
            {legend.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {legend.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Location: {legend.lat}, {legend.lon}
          </Typography>
          <Button component={Link} to="/" variant="contained">
            Back to Search
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}