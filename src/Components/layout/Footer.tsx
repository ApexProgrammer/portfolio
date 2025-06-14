import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer: React.FC = () => { 
    return (
        <Box component="footer" sx={{ backgroundColor: 'primary.main', color: 'white', py: 4 }}>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>                <Typography variant="body1" sx={{ fontFamily: '"JetBrains Mono", monospace' }}>
                    © {new Date().getFullYear()} Ryan Casey. All rights reserved.
                </Typography>
                <Box>
                    <IconButton color="inherit" href="https://github.com/ApexProgrammer" aria-label="GitHub">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton color="inherit" href="https://www.linkedin.com/in/ryan-casey-b0431125b/" aria-label="LinkedIn">
                        <LinkedInIcon />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer;