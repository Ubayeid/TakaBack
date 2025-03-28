import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Avatar,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Alert,
  IconButton,
} from '@mui/material';
import type { GridProps } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';

const GridItem = (props: GridProps) => <Grid {...props} />;

// Mock user data - replace with API call
const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  joinDate: '2024-01-15',
  paymentMethod: 'paypal',
  paypalEmail: 'john.doe@example.com',
  totalEarned: 245.50,
  pendingPayment: 22.50,
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    paymentMethod: userData.paymentMethod,
    paypalEmail: userData.paypalEmail,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API call to update user profile
    setIsEditing(false);
  };

  return (
    <Box>
      <Paper sx={{ p: 4, mb: 4 }}>
        {/* Profile Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              bgcolor: 'primary.main',
              mr: 3,
            }}
          >
            <AccountCircleIcon sx={{ fontSize: 50 }} />
          </Avatar>
          <Box>
            <Typography variant="h4" gutterBottom>
              {userData.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Member since {new Date(userData.joinDate).toLocaleDateString()}
            </Typography>
          </Box>
        </Box>

        {/* Earnings Summary */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* @ts-ignore */}
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 3, bgcolor: 'success.light', color: 'white' }}>
              <Typography variant="h6" gutterBottom>
                Total Earned
              </Typography>
              <Typography variant="h4">
                ${userData.totalEarned.toFixed(2)}
              </Typography>
            </Paper>
          </Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 3, bgcolor: 'warning.light', color: 'white' }}>
              <Typography variant="h6" gutterBottom>
                Pending Payment
              </Typography>
              <Typography variant="h4">
                ${userData.pendingPayment.toFixed(2)}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Profile Form */}
        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h5">Profile Settings</Typography>
            <Button
              variant="outlined"
              startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
              onClick={() => isEditing && handleSubmit}
              type={isEditing ? 'submit' : 'button'}
              color={isEditing ? 'success' : 'primary'}
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </Box>

          <Grid container spacing={3}>
            {/* @ts-ignore */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Payment Settings */}
          <Typography variant="h5" gutterBottom>
            Payment Settings
          </Typography>
          <Alert severity="info" sx={{ mb: 3 }}>
            Choose how you want to receive your cashback payments
          </Alert>

          <FormControl component="fieldset">
            <RadioGroup
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <FormControlLabel
                value="paypal"
                control={<Radio />}
                label="PayPal"
                disabled={!isEditing}
              />
              <FormControlLabel
                value="bank"
                control={<Radio />}
                label="Direct Bank Transfer"
                disabled={!isEditing}
              />
            </RadioGroup>
          </FormControl>

          {formData.paymentMethod === 'paypal' && (
            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="PayPal Email"
                name="paypalEmail"
                type="email"
                value={formData.paypalEmail}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile; 