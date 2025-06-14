import React, { useMemo, useState } from 'react';
import './App.css';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const muiTheme = useMemo(() => {
    if (mode === 'light') {
      return createTheme({
        ...theme,
        palette: {
          ...theme.palette,
          mode: 'light',
          primary: {
            light: '#7896b8',
            main: '#4e6c8a',
            dark: '#34495e',
            contrastText: '#ffffff',
          },
          secondary: {
            light: '#829cbe',
            main: '#5d7897',
            dark: '#34495e',
            contrastText: '#ffffff',
          },
          background: {
            default: '#f5f5f5',
            paper: '#ffffff',
          },
          text: {
            primary: '#333333',
            secondary: '#666666',
          },
          divider: 'rgba(0, 0, 0, 0.1)',
        },
      });
    }
    return createTheme({
      ...theme,
      palette: {
        ...theme.palette,
        mode: 'dark',
      },
    });
  }, [mode]);
  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  return (
    <BrowserRouter>
      <ThemeProvider theme={muiTheme}>
        <div className="App">
          <Header mode={mode} toggleTheme={toggleTheme} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
