import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import ContactForm from '../components/ContactForm';

export default function Contact() {
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
                backgroundImage: 'url(hawaiian-background.png)',
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom sx={{
                        fontWeight: 'bold',
                        color: '#cce7f6',
                        textShadow: '0 0 8px rgb(10, 189, 156)'
                    }}>
                    Contact Us
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}
                >
                    Have a question, suggestion, or want to connect? Fill out the form below and we’ll get back to you as soon as possible.
                </Typography>

            </Container>
            <Card variant="outlined" sx={{ width: '100%', maxWidth: 600, boxShadow: 6, borderRadius: 8, bgcolor: 'rgba(235, 239, 247, 0.95)' }}>
                <CardContent sx={{ padding: 3 }}>
                    <ContactForm />
                </CardContent>
            </Card>

        </Box>
    );
}

