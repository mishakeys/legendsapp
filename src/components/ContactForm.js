import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

export default function ContactForm() {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                alert('Message sent!\nMahalo!');
                form.current.reset();
            }, (error) => {
                alert('Failed to send message.');
            });
    };
    return (
        <Box
            component="form"
            ref={form}
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}
        >
            <Typography variant="h5"></Typography>
            <TextField name="user_name" label="Name" fullWidth required />
            <TextField name="user_email" label="Email" type="email" fullWidth required />
            <TextField name="message" label="Message" multiline rows={4} fullWidth required />
            <Button type="submit" variant="contained" sx={{ alignSelf: 'flex-start' }}>
                Send
            </Button>
        </Box>
    );
}