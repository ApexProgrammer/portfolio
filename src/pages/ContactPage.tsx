import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  Stack,
  Fade,
  Divider,
  Link,
  IconButton,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCloseSnackbar = () => {
    setSnackbar({...snackbar, open: false});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields',
        severity: 'error',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSnackbar({
        open: true,
        message: 'Please enter a valid email address',
        severity: 'error',
      });
      return;
    }
    
    setSending(true);

    // Replace these with your actual EmailJS IDs from your EmailJS dashboard
    // You can find these at https://dashboard.emailjs.com/admin
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    emailjs.send(
      serviceId, 
      templateId, 
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      publicKey
    )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSnackbar({
          open: true,
          message: 'Thank you for your message! I will get back to you soon.',
          severity: 'success',
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setSending(false);
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        setSnackbar({
          open: true,
          message: 'Sorry, there was a problem sending your message. Please try again later.',
          severity: 'error',
        });
        setSending(false);
      });
  };

  return (
    <Box sx={{ 
      backgroundColor: theme => theme.palette.background.default,
      minHeight: '100vh'
    }}>
      {/* Snackbar for notifications */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      
      {/* Header Section - Keep centered */}
      <Box 
        sx={{ 
          background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
          color: theme => theme.palette.common.white,
          py: 8, 
          textAlign: "center", // Header stays centered
          position: "relative",
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="md" sx={{ 
          color: theme => theme.palette.common.white
        }}>
          <Fade in={loaded} timeout={1000}>
            <Typography 
              variant="h3" 
              component="h1" 
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                color: 'inherit',
                textShadow: theme => theme.palette.mode === 'light' ? '0 2px 10px rgba(0,0,0,0.3)' : 'none'
              }}
            >
              Contact Me
            </Typography>
          </Fade>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
          <Stack sx={{ width: { xs: '100%', md: '40%' } }}>
            <Paper elevation={2} sx={{ 
              p: 3,
              height: '100%',
              backgroundColor: theme => `${theme.palette.background.paper}b3`,
              backdropFilter: 'blur(10px)',
              borderLeft: theme => `4px solid ${theme.palette.secondary.main}`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              textAlign: 'left',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: theme => `0 8px 16px ${theme.palette.primary.dark}`
              }
            }}>
              <Typography variant="h5" gutterBottom sx={{ color: theme => theme.palette.text.primary }}>
                Get In Touch
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ textAlign: 'left' }}>
                Feel free to reach out if you have any questions, project inquiries, or just want to say hello. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </Typography>
              
              <Divider sx={{ my: 2 }} />
              
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon sx={{ color: 'white' }} />
                  <Typography variant="body1" sx={{ textAlign: 'left' }}>
                    Email: <Link href="mailto:ryan.casey1@outlook.com" sx={{ color: 'white', fontWeight: 500 }}>ryan.casey1@outlook.com</Link>
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon sx={{ color: 'white' }} />
                  <Typography variant="body1" sx={{ textAlign: 'left' }}>
                    Phone: <Link href="tel:+7856564179" sx={{ color: 'white', fontWeight: 500 }}>(785) 656-4179</Link>
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOnIcon sx={{ color: 'white' }} />
                  <Typography variant="body1" sx={{ textAlign: 'left' }}>
                    Location: Hays, KS
                  </Typography>
                </Box>
              </Stack>
              
              <Box sx={{ mt: 3, textAlign: 'left' }}>
                <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }}>
                  Follow Me
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton aria-label="GitHub profile" component="a" href="https://github.com/ApexProgrammer" target="_blank" sx={{ color: 'white' }}>
                    <GitHubIcon />
                  </IconButton>
                  <IconButton aria-label="LinkedIn profile" component="a" href="https://www.linkedin.com/in/ryan-casey-b0431125b/" target="_blank" sx={{ color: 'white' }}>
                    <LinkedInIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Paper>
          </Stack>
          
          <Stack sx={{ width: { xs: '100%', md: '60%' } }}>
            <Paper elevation={2} sx={{ 
              p: 3,
              backgroundColor: theme => `${theme.palette.background.paper}b3`,
              backdropFilter: 'blur(10px)',
              borderLeft: theme => `4px solid ${theme.palette.secondary.main}`,
              textAlign: 'left',
            }}>
              <Typography variant="h5" gutterBottom sx={{ color: theme => theme.palette.text.primary, textAlign: 'left' }}>
                Send Me a Message
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2, textAlign: 'left' }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  InputProps={{ sx: { textAlign: 'left' } }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Your Email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{ sx: { textAlign: 'left' } }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  InputProps={{ sx: { textAlign: 'left' } }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="message"
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  InputProps={{ sx: { textAlign: 'left' } }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ 
                    mt: 3, 
                    mb: 2,
                    background: theme => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: theme => `0 6px 12px ${theme.palette.primary.dark}50`,
                    }
                  }}
                  disabled={sending}
                >
                  {sending ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
                </Button>
              </Box>
            </Paper>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactPage;