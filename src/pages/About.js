import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';

export default function About() {
    return (
        <Box
            sx={{
                width: '100vw',
                minHeight: '100vh',
                color: 'white',
                pt: 8,
                pb: 10,
                backgroundColor: 'rgba(25, 25, 30, 0.92)',
                backgroundImage: 'url(Drawer-Image.png)',
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#cce7f6', textShadow: '0 0 8pxrgb(10, 189, 156)' }}>
                    Hawaiian Legends Explorer
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                    An interactive app that brings Hawaiʻi’s sacred stories, the moʻolelo, to life wherever you are.
                    By using your location, the app reveals nearby legends connected to the land, sea,
                    and sky, offering you a deeper connection to the islands.
                </Typography>

                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mt: 1 }}>
                    Blending modern tech with ancient knowledge, we aim to help you feel the mana of the
                    places you’re in and connect with the magic of the past. These stories carry the wisdom
                    and values of Hawaiian culture, inviting everyone, locals and visitors alike, to explore
                    Hawaiʻi with respect and curiosity.
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'normal', mt: 1 }}>
                    <strong>Note:</strong> The legends shared on this page were gathered from various resources,
                    to which I do not hold rights. They are shared with the utmost respect for Hawaiian culture
                    and are intended to honor the traditions passed down through generations.
                </Typography>

                <Divider sx={{ my: 3, borderColor: '#80d0ff' }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                    <img
                        src="/grandpa.jpg"
                        alt="My Grandfather"
                        style={{
                            width: '150px',
                            height: '200px',
                            objectFit: 'cover',
                            borderRadius: '50%',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                        }}
                    />
                </Box>

                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Hawaiian Legends Explorer is inspired by and lovingly dedicated to my grandfather, <strong>Walter Kahiwa Sr.</strong>
                </Typography>

                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mt: 3 }}>
                    Born in Nāpoʻopoʻo, he was a true pillar of our ʻohana. A retired school teacher,
                    a proud veteran of both the U.S. Army and the Hawaiʻi Army National Guard,
                    a devoted member of the Lions Club of Kona, and a deacon at Hauʻoli Kamano Church.
                    His life was a beautiful reflection of love, service, and a deep commitment to his
                    family and community.
                </Typography>

                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mt: 3 }}>
                    He was widely known for his storytelling, especially his deep knowledge of Hawaiian legends,
                    which he shared with warmth, humor, and reverence. His love for our culture was so profound
                    that it was even acknowledged in print, as he was featured in a published book.
                </Typography>

                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mt: 3 }}>
                    This app is a small way to honor his memory and keep the moʻolelo he
                    so passionately shared alive for future generations. We miss him dearly
                    and through this project, his spirit lives on in every legend told.
                </Typography>
            </Container>
        </Box>
    );
}