import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from '@mui/material';
import {
  PersonAdd as PersonAddIcon,
  AccountBalance as AccountBalanceIcon,
  People as PeopleIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const Referral = () => {
  const { user } = useAuth();

  // Dummy data for referrals
  const referrals = [
    {
      id: '1',
      name: 'John Doe',
      date: '2024-03-15',
      status: 'Active',
      earnings: 500,
    },
    {
      id: '2',
      name: 'Jane Smith',
      date: '2024-03-14',
      status: 'Active',
      earnings: 750,
    },
  ];

  const referralCode = 'TAKABACK123'; // This would come from the backend

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Referral Program
      </Typography>

      <Grid container spacing={3}>
        {/* Referral Stats */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PeopleIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Total Referrals</Typography>
              </Box>
              <Typography variant="h3" color="primary">
                {referrals.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccountBalanceIcon sx={{ mr: 1, color: 'success.main' }} />
                <Typography variant="h6">Total Earnings</Typography>
              </Box>
              <Typography variant="h3" color="success.main">
                ৳{referrals.reduce((sum, ref) => sum + ref.earnings, 0)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PersonAddIcon sx={{ mr: 1, color: 'info.main' }} />
                <Typography variant="h6">Referral Code</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TextField
                  fullWidth
                  value={referralCode}
                  InputProps={{ readOnly: true }}
                  size="small"
                />
                <Button
                  variant="contained"
                  onClick={handleCopyCode}
                  size="small"
                >
                  Copy
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Referral List */}
        <Grid item xs={12}>
          <Paper>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Your Referrals
              </Typography>
              <List>
                {referrals.map((referral, index) => (
                  <React.Fragment key={referral.id}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>{referral.name.charAt(0)}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={referral.name}
                        secondary={`Joined: ${referral.date}`}
                      />
                      <Typography variant="body1" color="success.main">
                        ৳{referral.earnings}
                      </Typography>
                    </ListItem>
                    {index < referrals.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Referral; 