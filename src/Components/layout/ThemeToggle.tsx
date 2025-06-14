import React from 'react';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Tooltip from '@mui/material/Tooltip';

interface ThemeToggleProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ mode, toggleTheme }) => {
  return (
    <Tooltip title={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
      <IconButton 
        color="inherit" 
        onClick={toggleTheme} 
        aria-label="toggle theme" 
        sx={{
          transition: 'all 0.3s ease',
          '&:hover': { 
            color: mode === 'dark' ? '#ffcc80' : 'primary.light',
            transform: 'scale(1.1)' 
          }
        }}
      >
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
