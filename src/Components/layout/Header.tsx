import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ThemeToggle from './ThemeToggle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Tooltip from '@mui/material/Tooltip';

const Header: React.FC<{ mode: 'light' | 'dark'; toggleTheme: () => void }> = ({ mode, toggleTheme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navItems = ['Home', 'About', 'Projects', 'Contact'];
  const location = useLocation();

  // Close drawer when route changes
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        elevation={4} 
        sx={{
          backgroundColor: (theme) => theme.palette.mode === 'light' ? 'primary.main' : 'primary.dark',
          borderBottom: (theme) => `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`,
          borderRadius: 0,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ 
            py: 1,
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            minHeight: { xs: '64px', sm: '64px' }
          }}>
            {/* Logo area - Desktop */}
            <Box sx={{ 
              position: 'absolute',
              left: 0,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}>
              <Link
                component={RouterLink}
                to="/"
                underline="none"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  letterSpacing: 1,
                  fontSize: '1.4rem',
                  position: 'relative',
                  '&:hover': { 
                    color: 'white',
                    '&::after': {
                      width: '100%',
                    } 
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    width: 0,
                    height: '2px',
                    backgroundColor: 'white',
                    transition: 'width 0.3s ease'
                  }
                }}
              >
                Ryan Casey
              </Link>
            </Box>

              {/* Desktop Navigation - Centered */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: 2,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item}
                    color="inherit"
                    component={RouterLink}
                    to={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
                    sx={{
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      position: 'relative',
                      px: 1.5,
                      py: 1,
                      overflow: 'hidden',
                      borderRadius: 1,
                      color: 'white',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'white',
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover': {
                        backgroundColor: 'transparent',
                        '&::after': {
                          transform: 'translateX(0)'
                        }
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>

              {/* Mobile Logo - Centered */}
              <Box sx={{ 
                display: { xs: 'flex', md: 'none' }, 
                alignItems: 'center', 
                justifyContent: 'center',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'auto',
                zIndex: 1
              }}>
                <Link
                  component={RouterLink}
                  to="/"
                  underline="none"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    letterSpacing: 1,
                    fontSize: '1.2rem',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    textAlign: 'center',
                    '&:hover': { 
                      color: 'white',
                      '&::after': {
                        width: '100%',
                      } 
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      width: 0,
                      height: '2px',
                      backgroundColor: 'white',
                      transition: 'width 0.3s ease'
                    }
                  }}
                >
                  Ryan Casey
                </Link>
              </Box>
              
              {/* Theme Toggle and Menu Icon - Right aligned */}
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                position: 'absolute',
                right: 0,
                zIndex: 2
              }}>
                <ThemeToggle mode={mode} toggleTheme={toggleTheme} />
                <Tooltip title="Open navigation menu">
                  <IconButton
                    color="inherit"
                    edge="end"
                    aria-label="menu"
                    onClick={() => setDrawerOpen(true)}
                    sx={{ 
                      ml: 1,
                      display: { xs: 'flex', md: 'none' },
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

      {/* Drawer for mobile navigation */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ 
          sx: { 
            backgroundColor: 'primary.dark', 
            color: 'white',
            width: '250px',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)'
          } 
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
            Menu
          </Typography>
          <IconButton 
            onClick={() => setDrawerOpen(false)}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ pt: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton 
                component={RouterLink}
                to={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  py: 1.5,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '& .MuiSvgIcon-root': {
                      transform: 'translateX(4px)',
                    }
                  }
                }}
              >
                <ListItemText 
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {item}
                      <ArrowRightAltIcon sx={{ 
                        ml: 0.5,
                        transition: 'transform 0.2s ease-in-out'
                      }} />
                    </Box>
                  }
                  primaryTypographyProps={{ fontSize: '1.1rem', fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;