import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Button,
  Divider,
  Paper,
  Avatar,
  Stack,
  Fade,
  Zoom,
  Grow,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Chip
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
const avatarImage = require('../static/images/avatar.png');

const Home: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  // Adding a small delay before animations to ensure backgrounds are rendered
  const [initialRender, setInitialRender] = useState(true);
  
  // Create refs for scroll-based animation sections
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  
  // Animation visibility states
  const [aboutVisible, setAboutVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  
  useEffect(() => {    // Small delay to ensure backgrounds are fully rendered before animations
    const timer = setTimeout(() => {
      setLoaded(true);
      setInitialRender(false);
    }, 50);
    
    // Set up Intersection Observer for scroll-based animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
    
    const aboutObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAboutVisible(true);
        aboutObserver.disconnect(); // Only trigger once
      }
    }, observerOptions);
    
    const projectsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setProjectsVisible(true);
        projectsObserver.disconnect(); // Only trigger once
      }
    }, observerOptions);
    
    // Observe elements
    if (aboutSectionRef.current) aboutObserver.observe(aboutSectionRef.current);
    if (projectsSectionRef.current) projectsObserver.observe(projectsSectionRef.current);
      // Clean up
    return () => {
      clearTimeout(timer);
      aboutObserver.disconnect();
      projectsObserver.disconnect();
    };
  }, []);
  return (
    <Box sx={{
      backgroundColor: theme => theme.palette.background.default,
      minHeight: '100vh',
      // Ensure the entire page has the right background
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: theme => theme.palette.background.default,
        zIndex: -1,
      }
    }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
          color: theme => theme.palette.mode === 'light' ? '#ffffff' : theme.palette.text.primary,
          py: 10, 
          textAlign: "center",
          position: "relative",
          transition: 'all 0.5s ease-in-out',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
          },
          animation: loaded ? 'gradientShift 15s ease infinite' : 'none',
          '@keyframes gradientShift': {
            '0%': {
              backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '100% 50%',
            },
            '100%': {
              backgroundPosition: '0% 50%',
            },
          },
          backgroundSize: '200% 200%',
        }}
      >
        <Container maxWidth="sm">
          <Zoom in={loaded} style={{ transitionDelay: loaded ? '300ms' : '0ms' }}>
            <Box
              sx={{
                position: 'relative',
                width: 300,
                height: 300,
                mx: 'auto',
                mb: 4,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -8,
                  left: -8,
                  right: -8,
                  bottom: -8,
                  borderRadius: '50%',
                  background: theme => `radial-gradient(circle, ${theme.palette.primary.main}80 0%, transparent 70%)`,
                  opacity: 0,
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transform: 'scale(0.8)',
                  zIndex: 0,
                },
                '&:hover::before': {
                  opacity: 0.8,
                  transform: 'scale(1.1)',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: -4,
                  left: -4,
                  right: -4,
                  bottom: -4,
                  borderRadius: '50%',
                  background: theme => `radial-gradient(circle, ${theme.palette.secondary.main}90 0%, transparent 70%)`,
                  opacity: 0,
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                  transform: 'scale(0.9)',
                  zIndex: 0,
                },
                '&:hover::after': {
                  opacity: 0.7,
                  transform: 'scale(1.05)',
                }
              }}
            >
              <Avatar
                sx={{ 
                  width: 300, 
                  height: 300, 
                  bgcolor: "transparent",
                  border: theme => `4px solid ${theme.palette.secondary.dark}`,
                  boxShadow: theme => `0 0 20px ${theme.palette.secondary.dark}`,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  position: 'relative',
                  zIndex: 1,
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: theme => `0 0 30px ${theme.palette.secondary.main}`
                  }
                }}
                alt="Ryan Casey"
                src={avatarImage}
              />
            </Box>
          </Zoom>
          
          <Fade in={loaded} timeout={1000}>
            <Typography variant="h2" component="h1" sx={{ 
              fontWeight: 700, 
              mb: 2,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'transform 0.6s ease-out',
              opacity: loaded ? 1 : 0,
              color: theme => theme.palette.mode === 'light' ? '#ffffff' : theme.palette.text.primary,
              textShadow: theme => theme.palette.mode === 'light' ? '0 2px 10px rgba(0,0,0,0.3)' : 'none'
            }}>
              Ryan Casey
            </Typography>
          </Fade>
          
          <Fade in={loaded} timeout={1500} style={{ transitionDelay: loaded ? '500ms' : '0ms' }}>
            <Typography variant="h5" component="h2" sx={{ 
              mb: 4,
              color: theme => theme.palette.mode === 'light' ? '#ffffff' : theme.palette.text.primary,
              textShadow: theme => theme.palette.mode === 'light' ? '0 2px 8px rgba(0,0,0,0.3)' : 'none'
            }}>
              
            </Typography>
          </Fade>
          
          <Fade in={loaded} timeout={2000} style={{ transitionDelay: loaded ? '1000ms' : '0ms' }}>
            <Typography variant="body1" sx={{ 
              maxWidth: 600, 
              mx: "auto", 
              mb: 5,
              lineHeight: 1.7,
              textAlign: 'center',
              color: theme => theme.palette.mode === 'light' ? '#ffffff' : theme.palette.text.primary,
              textShadow: theme => theme.palette.mode === 'light' ? '0 1px 4px rgba(0,0,0,0.2)' : 'none'
            }}>
              I develop web applications with an emphasis on cybersecurity and cutting-edge technologies, bringing the work ethic of Kansas to the digital frontier. Given my experience, I tackle every coding project with a practical approach to problem-solving.
            </Typography>
          </Fade>
          
          <Grow in={loaded} timeout={1500} style={{ transitionDelay: loaded ? '1200ms' : '0ms' }}>
            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={2} 
              justifyContent="center"
              sx={{ mb: 3 }}
            >
              <Button 
                component={Link}
                to="/projects"
                variant="outlined" 
                size="large" 
                sx={{ 
                  color: theme => theme.palette.mode === 'light' ? '#ffffff' : theme.palette.text.primary,
                  borderColor: theme => theme.palette.mode === 'light' ? 'rgba(255,255,255,0.5)' : theme.palette.secondary.dark,
                  borderWidth: 2,
                  px: 4,
                  backgroundColor: theme => theme.palette.mode === 'light' ? 'rgba(52, 73, 94, 0.7)' : theme.palette.secondary.main,
                  fontWeight: 'bold',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  position: 'relative',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.6s ease',
                  },
                  '&:hover': {
                    borderColor: theme => theme.palette.secondary.main,
                    backgroundColor: theme => `${theme.palette.primary.dark}4d`,
                    transform: 'translateY(-3px)',
                    boxShadow: theme => theme.shadows[3],
                    textDecoration: 'none',
                    '&::before': {
                      transform: 'translateX(100%)',
                    }
                  }
                }}
              >
                View My Work
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                sx={{ 
                  color: theme => theme.palette.mode === 'light' ? '#ffffff' : theme.palette.text.primary,
                  borderColor: theme => theme.palette.mode === 'light' ? 'rgba(255,255,255,0.5)' : theme.palette.secondary.dark,
                  borderWidth: 2,
                  px: 4,
                  backgroundColor: theme => theme.palette.mode === 'light' ? 'rgba(52, 73, 94, 0.7)' : theme.palette.secondary.main,
                  fontWeight: 'bold',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.6s ease',
                  },
                  '&:hover': {
                    borderColor: theme => theme.palette.secondary.main,
                    backgroundColor: theme => `${theme.palette.primary.dark}4d`,
                    transform: 'translateY(-3px)',
                    boxShadow: theme => theme.shadows[3],
                    '&::before': {
                      transform: 'translateX(100%)',
                    }
                  }
                }}
              >
                Contact Me
              </Button>
            </Stack>
          </Grow>
        </Container>
      </Box>

      {/* About Section */}
      <Box 
        ref={aboutSectionRef}
        sx={{ 
          py: 8, 
          backgroundColor: theme => theme.palette.background.default,
          borderTop: theme => `1px solid ${theme.palette.divider}`,
          borderBottom: theme => `1px solid ${theme.palette.divider}`,
          backgroundImage: theme => `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.secondary.light}30)`,
          opacity: initialRender ? 0 : aboutVisible ? 1 : 0,
          transform: aboutVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          visibility: initialRender ? 'hidden' : 'visible',
        }}>
        <Container maxWidth="md">
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              mb: 4, 
              fontWeight: 600, 
              textAlign: "center",
              color: theme => theme.palette.text.primary,
              textShadow: theme => theme.palette.mode === 'light' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            About Me
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: theme => theme.palette.text.primary, textAlign: 'left'}}>
            I am an enthusiastic full-stack developer who is becoming more interested in web development, artificial intelligence, and cybersecurity. As a sixth-generation farmer who was born and raised in Kansas, I approach every project with a distinct viewpoint and a strong work ethic.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: theme => theme.palette.text.primary, textAlign: 'left'}}>
            My interest in software development started in my childhood, experimenting with computers and learning how things operate. Above all, I cherish relationships, people, and family.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: theme => theme.palette.text.primary, textAlign: 'left'}}>
           I like to work on cars, hunt, fish, and farm when I'm not coding. Project Corvette, which blends my passion and technical expertise, is my proudest endeavor to date. Right now, I want to increase my knowledge of cybersecurity, AI, drone technology, and IoT devices.
          </Typography>
          
          <Divider sx={{ my: 5, backgroundColor: theme => theme.palette.divider }} />
          
          <Paper elevation={2} sx={{ 
              p: 3, 
              backgroundColor: theme => `${theme.palette.background.paper}b3`,
              backdropFilter: 'blur(10px)',
              borderLeft: theme => `4px solid ${theme.palette.secondary.main}`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, transparent 50%, rgba(255,255,255,0.03) 50%)',
                transition: 'transform 0.6s ease',
                transformOrigin: 'top right',
                transform: 'scale(0)',
                zIndex: 0,
              },
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: theme => `0 8px 16px ${theme.palette.primary.dark}`,
                '&::after': {
                  transform: 'scale(2)'
                }
              }
            }}>
              <Typography variant="h6" component="h3" gutterBottom color="text.primary">
                Background & Education
              </Typography>
              <Typography variant="body2" color="text.primary" gutterBottom>
                Sixth-Generation Kansas Farmer
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Strong work ethic and practical problem-solving skills
              </Typography>
              <Typography variant="body2" color="text.primary" gutterBottom>
                BS in Computer Science
              </Typography>
              <Typography variant="body1">
                Kansas State University, 2025-2029
              </Typography>
            </Paper>
        </Container>
      </Box>



      {/* Projects Section Placeholder */}
      <Box 
        ref={projectsSectionRef}
        sx={{ 
          py: 8, 
          position: 'relative',
          backgroundColor: theme => theme.palette.background.default,
          backgroundImage: theme => `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.secondary.light}30)`,
          borderTop: theme => `1px solid ${theme.palette.divider}`,
          borderBottom: theme => `1px solid ${theme.palette.divider}`,
          textAlign: "center",
          overflow: 'hidden',
          opacity: initialRender ? 0 : projectsVisible ? 1 : 0,
          transform: projectsVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          visibility: initialRender ? 'hidden' : 'visible',
        }}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Fade in={true} timeout={1000}>
            <Typography 
              variant="h4" 
              component="h2" 
              sx={{ 
                mb: 4, 
                fontWeight: 600,
                color: theme => theme.palette.text.primary,
                textShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}
            >
              My Projects
            </Typography>
          </Fade>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {/* Portfolio Project */}
            <Zoom in={projectsVisible} timeout={800} style={{ transitionDelay: projectsVisible ? '300ms' : '0ms' }}>
              <Card sx={{
                width: { xs: '100%', sm: 'calc(50% - 16px)' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                backgroundColor: theme => `${theme.palette.background.paper}c0`,
                backdropFilter: 'blur(10px)',
                borderLeft: theme => `4px solid ${theme.palette.secondary.main}`,
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: theme => `0 12px 20px ${theme.palette.primary.dark}30`,
                }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={require('../static/images/projects/portfolio-project-display.png')}
                  alt="Portfolio Website"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Portfolio
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ textAlign: 'left' }}>
                    My first portfolio website built with React and TypeScript. Features a modern UI with Material UI components, dark/light theme toggle, and elegant animations.
                  </Typography>                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                    {['React', 'TypeScript', 'Material UI', 'Responsive Design'].map((tag, i) => (
                      <Chip 
                        label={tag} 
                        key={i} 
                        size="small" 
                        color="primary" 
                        variant="outlined"
                        sx={{ 
                          color: 'white',
                          borderRadius: 1
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ padding: 2, pt: 0 }}>
                  <Button 
                    size="small" 
                    startIcon={<GitHubIcon />} 
                    href="https://github.com" 
                    target="_blank"
                    sx={{ 
                      mr: 1,
                      color: 'white',
                      transition: 'transform 0.2s ease',
                      '&:hover': { transform: 'translateY(-2px)' } 
                    }}
                  >
                    Code
                  </Button>
                  <Button 
                    size="small" 
                    startIcon={<LaunchIcon />} 
                    href="https://example.com" 
                    target="_blank"
                    sx={{ 
                      color: 'white',
                      transition: 'transform 0.2s ease',
                      '&:hover': { transform: 'translateY(-2px)' } 
                    }}
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Zoom>
            
            {/* Project Corvette */}
            <Zoom in={projectsVisible} timeout={800} style={{ transitionDelay: projectsVisible ? '500ms' : '0ms' }}>
              <Card sx={{
                width: { xs: '100%', sm: 'calc(50% - 16px)' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                backgroundColor: theme => `${theme.palette.background.paper}c0`,
                backdropFilter: 'blur(10px)',
                borderLeft: theme => `4px solid ${theme.palette.secondary.main}`,
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: theme => `0 12px 20px ${theme.palette.primary.dark}30`,
                }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={require('../static/images/projects/project-corvette-project-display.png')}
                  alt="Project Corvette"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Project Corvette
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ textAlign: 'left' }}>
                    An open source Corvette enthusiast website I founded to provide resources and community for Corvette owners and fans.
                  </Typography>                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                    {['React.js', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design'].map((tag, i) => (
                      <Chip 
                        label={tag} 
                        key={i} 
                        size="small" 
                        color="primary" 
                        variant="outlined"
                        sx={{ 
                          color: 'white',
                          borderRadius: 1
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ padding: 2, pt: 0 }}>
                  <Button 
                    size="small" 
                    startIcon={<GitHubIcon />} 
                    href="https://github.com/ApexProgrammer/project-corvette" 
                    target="_blank"
                    sx={{ 
                      mr: 1,
                      color: 'white',
                      transition: 'transform 0.2s ease',
                      '&:hover': { transform: 'translateY(-2px)' } 
                    }}
                  >
                    Code
                  </Button>
                  <Button 
                    size="small" 
                    startIcon={<LaunchIcon />} 
                    href="https://project-corvette.com" 
                    target="_blank"
                    sx={{ 
                      color: 'white',
                      transition: 'transform 0.2s ease',
                      '&:hover': { transform: 'translateY(-2px)' } 
                    }}
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Zoom>
          </Box>
          
          <Zoom in={projectsVisible} timeout={800} style={{ transitionDelay: projectsVisible ? '700ms' : '0ms' }}>
            <Button 
              component={Link} 
              to="/projects" 
              variant="contained" 
              sx={{ 
                mt: 4,
                color: 'white',
                background: theme => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme => `0 6px 12px ${theme.palette.primary.dark}50`,
                }
              }}
            >
              View All Projects
            </Button>
          </Zoom>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;