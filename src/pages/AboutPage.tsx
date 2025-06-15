import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Avatar,
  Divider,
  Fade,
  Stack,
} from '@mui/material';

const avatarImage = require('../static/images/avatar.png');

const AboutPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  
  // Create refs for scroll-based animation sections
  const educationSectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box sx={{ 
      backgroundColor: theme => theme.palette.background.default,
      minHeight: '100vh'
    }}>
      {/* Header Section */}
      <Box 
        sx={{ 
          background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
          color: theme => theme.palette.common.white,
          py: 8, 
          textAlign: "center",
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
              About Me
            </Typography>
          </Fade>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
          <Stack sx={{ width: { xs: '100%', md: '33%' } }}>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  position: 'relative',
                  width: 200,
                  height: 200,
                  mx: 'auto',
                  mb: 2,
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
                  src={avatarImage}
                  alt="Ryan Casey"
                  sx={{ 
                    width: 200, 
                    height: 200, 
                    bgcolor: "transparent",
                    border: theme => `4px solid ${theme.palette.secondary.main}`,
                    boxShadow: theme => `0 8px 24px ${theme.palette.primary.dark}50`,
                    position: 'relative',
                    zIndex: 1,
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: theme => `0 0 30px ${theme.palette.secondary.main}`
                    }
                  }}
                />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: theme => theme.palette.text.primary }}>
                Ryan Casey
              </Typography>
            </Box>
          </Stack>
          
          <Stack sx={{ width: { xs: '100%', md: '67%' } }}>
            <Paper elevation={2} sx={{ 
              p: 3,
              backgroundColor: theme => `${theme.palette.background.paper}b3`,
              backdropFilter: 'blur(10px)',
              borderLeft: theme => `4px solid ${theme.palette.secondary.main}`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: theme => `0 8px 16px ${theme.palette.primary.dark}`
              }
            }}>
              <Typography variant="h6" gutterBottom>
                My Journey
              </Typography>
             <Typography variant="body1" sx={{ textAlign: 'left', mb: 2 }}>
              My journey into technology started at a young age, driven by pure curiosity. I was always fascinated by how things work—I loved taking things apart and trying to rebuild or improve them. My dad also played a big role in sparking and fueling my interest by sharing his knowledge and supporting me along the way. Over time, this curiosity turned into a hobby where I began building digital solutions to real-life problems, especially those related to farming and everyday life.
            </Typography>

            <Typography variant="body1" sx={{ textAlign: 'left', mb: 2 }}>
              What I enjoy most about software development is solving problems. It’s a fun and engaging challenge, and I naturally like to take the lead when it comes to bringing ideas to life. There's something deeply rewarding about turning a concept into working software that can actually help someone or improve a task.
            </Typography>

            <Typography variant="body1" sx={{ textAlign: 'left', mb: 2 }}>
              I had my "aha" moment when I realized I could automate tasks and build functions to solve real-world problems. That discovery is what made me truly passionate about programming and innovation.
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body1" sx={{ textAlign: 'left', mb: 2 }}>
            I'm always exploring new areas of technology, with a strong curiosity that drives me to keep learning. I believe skill is built through consistent hands-on practice, so I regularly work on personal projects and experiment with new ideas to grow as a developer. Staying curious and adaptable helps me stay sharp, no matter how the tech landscape evolves.
            </Typography>

            <Typography variant="body1" sx={{ textAlign: 'left', mb: 2 }}>
              Outside of coding, I enjoy weightlifting, helping out on the family farm, and playing sports. I'm also passionate about working on cars—there's something rewarding about understanding and improving mechanical systems just like with software. More than anything, I’m driven by the goal of making a positive impact. I believe that if you want to change the world, you have to start by finding problems—and fixing them.
            </Typography>

            </Paper>
          </Stack>
        </Stack>
        
        <Box sx={{ mt: 6 }} ref={educationSectionRef}>
          <Typography variant="h4" gutterBottom sx={{ 
            fontWeight: 600,
            color: theme => theme.palette.text.primary,
            textShadow: theme => theme.palette.mode === 'light' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
          }}>
            Education & Experience
          </Typography>
          
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mt: 2 }}>
            <Stack sx={{ width: { xs: '100%', md: '50%' } }}>
              <Paper elevation={2} sx={{ 
                p: 3,
                height: '100%',
                backgroundColor: theme => `${theme.palette.background.paper}b3`,
                backdropFilter: 'blur(10px)',
                borderLeft: theme => `4px solid ${theme.palette.secondary.main}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme => `0 8px 16px ${theme.palette.primary.dark}`
                }
              }}>
                <Typography variant="h6" component="h3" gutterBottom color="text.primary">
                  Education
                </Typography>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    BS in Computer Science
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Kansas State University
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Expected Graduation: May 2029
                  </Typography>
                </Box>
              </Paper>
            </Stack>
            
            <Stack sx={{ width: { xs: '100%', md: '50%' } }}>
              <Paper elevation={2} sx={{ 
                p: 3,
                height: '100%',
                backgroundColor: theme => `${theme.palette.background.paper}b3`,
                backdropFilter: 'blur(10px)',
                borderLeft: theme => `4px solid ${theme.palette.secondary.main}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme => `0 8px 16px ${theme.palette.primary.dark}`
                }
              }}>
                <Typography variant="h6" component="h3" gutterBottom color="text.primary">
                  Technical Skills
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Areas of Expertise
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Web Development, Cybersecurity
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Career Focus
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cybersecurity, AI, DevSecOps
                  </Typography>
                </Box>
              </Paper>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;