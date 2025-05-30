import { Typography, Divider, Box } from '@mui/material';

function LegendFooterNote() {
  return (
    <Box sx={{ mt: 8, textAlign: 'center' }}>
      <Divider sx={{ mb: 3, backgroundColor: 'grey.300' }} />
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontStyle: 'italic' }}
      >
        This story is part of Hawaiʻi’s oral tradition. Shared with respect — no rights claimed.
      </Typography>
    </Box>
  );
}

export default LegendFooterNote;