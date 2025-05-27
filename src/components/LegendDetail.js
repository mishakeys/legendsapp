import React from "react";
import { useParams, Link } from "react-router-dom";
import legends from "./LegendsList";
import { Box, Typography, Container, Button } from "@mui/material";

export default function LegendDetail() {
  const { id } = useParams();
  const legend = legends.find((l) => l.id === id);

  if (!legend) {
    return (
      <Container>
        <Typography variant="h5">Legend not found</Typography>
        <Button component={Link} to="/" variant="outlined" sx={{ mt: 2 }}>
          Back to Map
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom>{legend.title}</Typography>
        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {legend.fullStory || legend.description}
        </Typography>
        <Button component={Link} to="/" variant="contained" sx={{ mt: 4 }}>
          Back to Map
        </Button>
      </Box>
    </Container>
  );
}