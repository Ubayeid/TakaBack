import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Stack,
  Paper,
  Divider,
} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TimerIcon from '@mui/icons-material/Timer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const deals = [
  {
    id: 1,
    title: 'Daraz 12.12 Sale',
    retailer: 'Daraz',
    image: 'https://logo.clearbit.com/daraz.com.bd',
    description: 'Up to 80% off on electronics and fashion',
    originalPrice: '৳50,000',
    discountedPrice: '৳25,000',
    cashbackRate: '3%',
    expiryDate: '2024-12-12',
    category: 'Electronics',
    isHot: true,
  },
  {
    id: 2,
    title: 'Chaldal Weekly Grocery Sale',
    retailer: 'Chaldal',
    image: 'https://logo.clearbit.com/chaldal.com',
    description: 'Get 20% off on all grocery items',
    originalPrice: '৳2,000',
    discountedPrice: '৳1,600',
    cashbackRate: '2%',
    expiryDate: '2024-12-15',
    category: 'Groceries',
    isHot: false,
  },
  {
    id: 3,
    title: 'Pickaboo Mobile Festival',
    retailer: 'Pickaboo',
    image: 'https://logo.clearbit.com/pickaboo.com',
    description: 'Special discounts on smartphones and accessories',
    originalPrice: '৳35,000',
    discountedPrice: '৳28,000',
    cashbackRate: '2.5%',
    expiryDate: '2024-12-20',
    category: 'Electronics',
    isHot: true,
  },
  {
    id: 4,
    title: 'Rokomari Book Fair',
    retailer: 'Rokomari',
    image: 'https://logo.clearbit.com/rokomari.com',
    description: 'Up to 50% off on all books',
    originalPrice: '৳1,500',
    discountedPrice: '৳750',
    cashbackRate: '2%',
    expiryDate: '2024-12-25',
    category: 'Books',
    isHot: false,
  },
];

const categories = ['All', 'Electronics', 'Groceries', 'Books', 'Fashion', 'Beauty'];

const Deals = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDeals = deals.filter(
    (deal) => selectedCategory === 'All' || deal.category === selectedCategory
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
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
            Best Deals & Discounts
          </Typography>
          <Typography variant="h6" align="center" sx={{ opacity: 0.9 }}>
            Discover the best offers from your favorite Bangladeshi retailers
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Category Filter */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                color={selectedCategory === category ? 'primary' : 'default'}
                variant={selectedCategory === category ? 'filled' : 'outlined'}
                sx={{
                  borderRadius: 2,
                  transition: 'all 0.2s',
                  '&:hover': {
                    transform: 'translateY(-1px)',
                    boxShadow: 1,
                  },
                }}
              />
            ))}
          </Stack>
        </Paper>

        {/* Deals Grid */}
        <Grid container spacing={3}>
          {filteredDeals.map((deal) => (
            <Grid item xs={12} sm={6} md={4} key={deal.id}>
              <Card
                sx={{
                  height: '100%',
                  position: 'relative',
                  transition: 'all 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3,
                  },
                }}
              >
                {deal.isHot && (
                  <Chip
                    label="HOT DEAL"
                    color="error"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      zIndex: 1,
                    }}
                  />
                )}
                <CardMedia
                  component="img"
                  height="140"
                  image={deal.image}
                  alt={deal.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {deal.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {deal.description}
                  </Typography>
                  <Box sx={{ my: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      <del>{deal.originalPrice}</del>
                    </Typography>
                    <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                      {deal.discountedPrice}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <LocalOfferIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" color="primary">
                      {deal.cashbackRate}% Cashback
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      color: 'error.main',
                    }}
                  >
                    <TimerIcon sx={{ mr: 1 }} />
                    <Typography variant="body2">
                      Expires on {formatDate(deal.expiryDate)}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<ShoppingBagIcon />}
                    component="a"
                    href={`https://www.${deal.retailer.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Deals; 