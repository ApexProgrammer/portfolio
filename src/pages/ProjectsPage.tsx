import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Fade,
  Chip,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Import project images
import corvetteImage from '../static/images/projects/project-corvette-project-display.png';
import portfolioImage from '../static/images/projects/portfolio-project-display.png';
import alphaImage from '../static/images/projects/alpha-project-dashboard.png';

// Project data
const projects = [
  {
    id: 1,
    title: 'Portfolio',
    description: 'My first portfolio website built with React and TypeScript. Features a modern UI with Material UI components, dark/light theme toggle, and elegant animations. This project showcases my frontend skills and design sensibilities.',
    image: portfolioImage,
    tags: ['React', 'TypeScript', 'Material UI', 'Responsive Design'],
    githubLink: 'https://github.com/ApexProgrammer/portfolio',
    liveLink: 'https://ryancasey.us',
  },
  {
    id: 2,
    title: 'Project Corvette',
    description: 'An open source Corvette enthusiast website I founded to provide resources and community for Corvette owners and fans. This passion project combines my love for Corvettes with my web development skills, featuring interactive galleries and technical resources.',
    image: corvetteImage,
    tags: ['React.js', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design'],
    githubLink: 'https://github.com/ApexProgrammer/project-corvette',
    liveLink: 'https://project-corvette.com',
  },
  { id: 3,
    title: 'AI Honeypot Solution',
    description: 'AI powered honeypot for cybersecurity research and practical use.',
    image: alphaImage,
    tags: ['Python', 'AI', 'Cybersecurity', 'Machine Learning', 'Flask'],
    githubLink: 'https://github.com/ApexProgrammer/alpha',
    liveLink: '',
  },
];

const ProjectsPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Filter projects based on search term
  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
              My Projects
            </Typography>
          </Fade>
          <Fade in={loaded} timeout={1500}>
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: '600px',
                mx: 'auto',
                color: 'inherit',
                opacity: 0.9
              }}
            >
              Here are some of the projects I've worked on. Each project represents different skills and technologies I've mastered.
            </Typography>
          </Fade>        </Container>
      </Box>      {/* Search Section */}
      <Container maxWidth="lg" sx={{ pt: 4, pb: 2 }}>
        <Fade in={loaded} timeout={2000}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: 2
          }}>
            <TextField
              placeholder="Search projects or technologies..."
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ 
                      color: theme => theme.palette.primary.main,
                      fontSize: '1.2rem'
                    }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                maxWidth: '600px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  backgroundColor: theme => theme.palette.background.paper,
                  boxShadow: theme => `0 4px 20px ${theme.palette.primary.main}20`,
                  border: theme => `2px solid transparent`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: theme => `0 6px 25px ${theme.palette.primary.main}30`,
                    transform: 'translateY(-2px)',
                  },
                  '&.Mui-focused': {
                    border: theme => `2px solid ${theme.palette.primary.main}`,
                    boxShadow: theme => `0 8px 30px ${theme.palette.primary.main}40`,
                    transform: 'translateY(-3px)',
                  }
                },
                '& .MuiOutlinedInput-input': {
                  padding: '14px 16px',
                  fontSize: '1rem',
                  fontWeight: 500,
                }
              }}
            />
            {searchTerm && (
              <Typography 
                variant="body2" 
                sx={{ 
                  color: theme => theme.palette.text.secondary,
                  fontWeight: 500,
                  opacity: 0.8
                }}
              >
                {filteredProjects.length === 1 
                  ? `Found 1 project` 
                  : `Found ${filteredProjects.length} projects`
                }
                {searchTerm && ` matching "${searchTerm}"`}
              </Typography>
            )}
          </Box>
        </Fade>
      </Container>
        {/* Projects Grid */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {filteredProjects.length === 0 && searchTerm ? (
          <Fade in={loaded} timeout={1000}>
            <Box sx={{ 
              textAlign: 'center', 
              py: 8,
              opacity: 0.7
            }}>
              <SearchIcon sx={{ 
                fontSize: '4rem', 
                color: theme => theme.palette.text.secondary,
                mb: 2,
                opacity: 0.5
              }} />
              <Typography variant="h5" color="text.secondary" gutterBottom>
                No projects found
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Try searching for different keywords or technologies
              </Typography>
            </Box>
          </Fade>
        ) : (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {filteredProjects.map((project, index) => (
            <Box key={project.id} sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.333% - 16px)' } }}>
              <Fade in={loaded} timeout={1000 + (index * 200)} style={{ transformOrigin: '0 0 0' }}>
                <Card sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: theme => `0 12px 20px ${theme.palette.primary.dark}30`,
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph sx={{ textAlign: 'left' }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                      {project.tags.map((tag, i) => (
                        <Chip 
                          label={tag} 
                          key={i} 
                          size="small" 
                          color="primary" 
                          variant="outlined" 
                          sx={{ 
                            borderRadius: 1,
                            color: 'white'
                          }} 
                        />
                      ))}
                    </Box>
                  </CardContent>                  <CardActions sx={{ padding: 2, pt: 0 }}>
                    {project.githubLink && (
                      <Button 
                        size="small" 
                        startIcon={<GitHubIcon />} 
                        href={project.githubLink} 
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
                    )}
                    {project.liveLink && (
                      <Button 
                        size="small" 
                        startIcon={<LaunchIcon />} 
                        href={project.liveLink} 
                        target="_blank"
                        sx={{ 
                          color: 'white',
                          transition: 'transform 0.2s ease',
                          '&:hover': { transform: 'translateY(-2px)' } 
                        }}
                      >
                        Live Demo
                      </Button>
                    )}                  </CardActions>
                </Card>
              </Fade>
            </Box>
          ))}
          </Box>
        )}

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8, mb: 4 }}>
          <Paper 
            elevation={2} 
            sx={{ 
              p: 4, 
              maxWidth: '800px', 
              mx: 'auto',
              borderRadius: 2,
              background: theme => `linear-gradient(45deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default}80 100%)`,
              backdropFilter: 'blur(10px)',
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: theme => theme.palette.text.primary, alignContent: 'left' }}>
              Interested in working together?
            </Typography>
            <Typography variant="body1" paragraph>
              I'm always open to new projects and collaborations. If you like my work and have a project in mind, let's discuss how I can help bring your ideas to life.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              href="/contact"
              sx={{ 
                mt: 2,
                color: 'white',
                background: theme => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme => `0 6px 12px ${theme.palette.primary.dark}50`,
                }
              }}
            >
              Contact Me
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsPage;