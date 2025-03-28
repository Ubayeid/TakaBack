import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Alert,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 6,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Contact Us
          </Typography>
          <Typography variant="h6" align="center" sx={{ opacity: 0.9 }}>
            We're here to help you with any questions or concerns
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Have questions about cashback or need help with your account? Our
                support team is here to help.
              </Typography>
              <Stack spacing={3} sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1">Email</Typography>
                    <Typography variant="body2" color="text.secondary">
                      support@takaback.bd
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1">Phone</Typography>
                    <Typography variant="body2" color="text.secondary">
                      +880 1234-567890
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1">Address</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Dhaka, Bangladesh
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Send us a Message
              </Typography>
              {submitted ? (
                <Alert severity="success" sx={{ mt: 2 }}>
                  Thank you for your message! We'll get back to you soon.
                </Alert>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<SendIcon />}
                        fullWidth
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 