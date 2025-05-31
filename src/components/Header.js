import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from 'react-router-dom';

const navItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'About', icon: <InfoIcon />, path: '/about' },
  { text: 'Contact', icon: <ContactMailIcon />, path: '/contact' },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(25, 25, 30, 0.4)',
          backdropFilter: 'blur(6px)',
          borderBottom: '2px solid rgba(255,255,255,0.1)',
          backgroundImage: 'url(/Hawaiian-background.png)',
            backgroundSize: 'cover',
            backgroundBlendMode: 'soft-light',
        }}

      >
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Hawaii Legends Explorer
          </Typography>
          {!isMobile &&
            navItems.map((item) => (
              <Box key={item.text} sx={{ ml: 2 }}>
                <Link to={item.path} style={{ textDecoration: 'none', color: 'white' }}>
                  {item.text}
                </Link>
              </Box>
            ))}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: 'rgba(25, 25, 30, 0.92)',
            backdropFilter: 'blur(8px)',
            color: '#fff',
            backgroundImage: 'url(Drawer-Image.png)',
            backgroundSize: 'cover',
            backgroundBlendMode: 'overlay',
          },
        }}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemIcon sx={{ color: '#9be3ff' }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      color: '#cce7f6',
                      '&:hover': {
                        color: '#fff',
                        textShadow: '0 0 10px #80d0ff',
                      },
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}





