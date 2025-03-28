import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Retailers from './pages/Retailers';
import Deals from './pages/Deals';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Cashback from './pages/Cashback';
import BlogPost from './pages/BlogPost';
import CashbackHistory from './pages/CashbackHistory';
import Orders from './pages/Orders';
import Referral from './pages/Referral';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: '#4CAF50',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/retailers" element={<Retailers />} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cashback" element={<Cashback />} />
                <Route path="/cashback-history" element={<CashbackHistory />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/referral" element={<Referral />} />
              </Routes>
            </Container>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Box>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
