import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Stack,
  Container,
  Paper,
  Fade,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CategoryIcon from '@mui/icons-material/Category';
import LaunchIcon from '@mui/icons-material/Launch';
import { retailers, categories } from '../data/retailers';

const Retailers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const theme = useTheme();

  const filteredRetailers = retailers.filter((retailer) => {
    const matchesSearch = retailer.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' ||
      retailer.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const handleRetailerClick = (websiteUrl: string) => {
    window.open(websiteUrl, '_blank');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            backgroundClip: 'text',
            textFillColor: 'transparent',
          }}
        >
          Shop and Earn Cashback
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Discover the best deals from your favorite Bangladeshi retailers
        </Typography>
      </Box>

      {/* Search and Filter Section */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 2,
          background: `linear-gradient(45deg, ${theme.palette.background.paper} 30%, ${theme.palette.background.default} 90%)`,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search retailers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', pb: 1 }}>
              {categories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => setSelectedCategory(category)}
                  color={selectedCategory === category ? 'primary' : 'default'}
                  icon={<CategoryIcon />}
                  sx={{ minWidth: '100px' }}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Retailers Grid */}
      <Grid container spacing={3}>
        {filteredRetailers.map((retailer) => (
          <Grid item xs={12} sm={6} md={4} key={retailer.id}>
            <Fade in timeout={500}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={retailer.image}
                  alt={retailer.name}
                  sx={{ objectFit: 'contain', p: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6" component="h2" sx={{ flexGrow: 1 }}>
                      {retailer.name}
                    </Typography>
                    <Chip
                      icon={<MonetizationOnIcon />}
                      label={retailer.cashbackRate}
                      color="success"
                      size="small"
                    />
                  </Box>
                  <Typography color="text.secondary" paragraph>
                    {retailer.description}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    {retailer.categories.map((category) => (
                      <Chip
                        key={category}
                        label={category}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    endIcon={<LaunchIcon />}
                    onClick={() => handleRetailerClick(retailer.website)}
                  >
                    Visit Store
                  </Button>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Retailers; 