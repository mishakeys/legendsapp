import React from "react";
import { useParams, Link } from "react-router-dom";
import legends from "./LegendsList";
import { Box, Typography, Button, Card, CardContent, Container, Divider, List, ListItem, Link as MuiLink } from "@mui/material";
import poliahuPeleLegend from "./legends/poliahu-pele";

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
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        pt: 8,
        pb: 10,
        backgroundColor: 'rgba(25, 25, 30, 0.82)',
        backgroundImage: 'url(/hawaiian-background.png)',
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
      }}
    >
      <Container>
        <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
          <Card sx={{ maxWidth: 900, width: "100%", bgcolor: "rgba(255,255,255,0.95)" }}>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: 'fantasy, Papyrus, Copperplate, cursive' }}>
                {legend.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {legend.fullLegend}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              </Typography>
              {/* Sources Section */}
              {legend.sources && legend.sources.length > 0 && (
                <>
                  <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontStyle: 'italic' }}
                    >
                      Aloha Note: These stories do not belong to me. They are the treasured traditions of Hawaiʻi, passed down through generations. 
                      I have included sources and references below to give proper respect to their origins and storytellers.
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
                    Sources & References:
                  </Typography>
                  <List>
                    {legend.sources.map((source, idx) => (
                      <ListItem key={idx} sx={{ pl: 1, mb: 1 }}>
                        <MuiLink href={source.url} target="_blank" rel="noopener noreferrer">
                          {source.title}
                        </MuiLink>
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
              <Button component={Link} to="/" variant="contained">
                Back to Search
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}