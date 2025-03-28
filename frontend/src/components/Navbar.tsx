import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Avatar,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ShoppingBag as ShoppingBagIcon,
  Person as PersonIcon,
  History as HistoryIcon,
  AccountBalance as AccountBalanceIcon,
  People as PeopleIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
    handleClose();
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { text: 'Profile', icon: <PersonIcon />, path: '/profile' },
    { text: 'Orders', icon: <ShoppingBagIcon />, path: '/orders' },
    { text: 'Cashback', icon: <AccountBalanceIcon />, path: '/cashback' },
    { text: 'Referral', icon: <PeopleIcon />, path: '/referral' },
  ];

  const renderMobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    >
      <Box sx={{ width: 250 }}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => handleNavigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <Divider />
          <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  const renderDesktopMenu = () => (
    <>
      <Button
        color="inherit"
        startIcon={<ShoppingBagIcon />}
        onClick={() => navigate('/retailers')}
      >
        Stores
      </Button>
      {user ? (
        <>
          <IconButton
            onClick={handleMenu}
            color="inherit"
            sx={{ ml: 2 }}
          >
            <Avatar
              alt={user.name}
              sx={{ width: 32, height: 32 }}
            >
              {user.name.charAt(0)}
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item.text}
                onClick={() => {
                  handleNavigate(item.path);
                  handleClose();
                }}
              >
                {item.icon}
                <Typography sx={{ ml: 1 }}>{item.text}</Typography>
              </MenuItem>
            ))}
            <Divider />
            <MenuItem onClick={handleLogout}>
              <LogoutIcon />
              <Typography sx={{ ml: 1 }}>Logout</Typography>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <Button
            color="inherit"
            onClick={() => navigate('/login')}
            sx={{ ml: 2 }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/register')}
            sx={{ ml: 1 }}
          >
            Register
          </Button>
        </>
      )}
    </>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            mr: 2,
          }}
          onClick={() => navigate('/')}
        >
          <img
            src={logo}
            alt="TakaBack"
            style={{ height: 40, marginRight: 8 }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            TakaBack
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            {renderMobileMenu()}
          </>
        ) : (
          renderDesktopMenu()
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 