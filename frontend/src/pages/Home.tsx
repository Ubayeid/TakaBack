import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Tabs,
  Tab,
  Chip,
  Stack,
  Paper,
  IconButton,
  useTheme,
  Fade,
  Rating,
} from '@mui/material';
import type { GridProps } from '@mui/material/Grid';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion, AnimatePresence } from 'framer-motion';
import { retailers } from '../data/retailers';
import { products } from '../data/products';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import LaunchIcon from '@mui/icons-material/Launch';
import { promotions } from '../data/promotions';
import CashbackDialog from '../components/CashbackDialog';
import { initiateCashback } from '../services/cashback';

const GridItem = (props: GridProps) => <Grid {...props} />;

const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Groceries',
  'Beauty',
  'Books',
  'Home',
  'Mobile',
];

const Home = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPromotion, setCurrentPromotion] = useState(0);
  const [cashbackDialog, setCashbackDialog] = useState({
    open: false,
    product: null as any,
    retailer: null as any,
  });

  const filteredRetailers = retailers.filter(
    (retailer) => selectedCategory === 'All' || retailer.category === selectedCategory
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextPromotion = () => {
    setCurrentPromotion((prev) => (prev + 1) % promotions.length);
  };

  const prevPromotion = () => {
    setCurrentPromotion((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  const handleProductClick = (product: any) => {
    const retailer = retailers.find(r => r.id === product.retailerId);
    if (retailer) {
      setCashbackDialog({
        open: true,
        product,
        retailer,
      });
    }
  };

  const handleCashbackConfirm = () => {
    const { product, retailer } = cashbackDialog;
    // Initiate cashback tracking
    initiateCashback(product.id, product.price, retailer.id, retailer.name);
    // Close dialog and redirect to retailer
    setCashbackDialog({ open: false, product: null, retailer: null });
    window.open(retailer.websiteUrl, '_blank');
  };

  return (
    <Box>
      {/* Hero Section with Promotions Carousel */}
      <Box sx={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPromotion}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${promotions[currentPromotion].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
                display: 'flex',
                alignItems: 'center',
                padding: '0 5%',
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{ color: 'white', mb: 2 }}
                >
                  {promotions[currentPromotion].title}
                </Typography>
                <Typography variant="h5" sx={{ color: 'white', mb: 3 }}>
                  {promotions[currentPromotion].description}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<LaunchIcon />}
                  onClick={() => handleProductClick(products[0])}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Categories and Retailers */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ display: 'flex', alignItems: 'center', mb: 4 }}
        >
          <TrendingUpIcon sx={{ mr: 2 }} />
          Shop by Category
        </Typography>
        
        {/* Category Tabs */}
        <Box sx={{ mb: 4 }}>
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
        </Box>

        {/* Retailers Grid */}
        <Grid container spacing={3}>
          {filteredRetailers.map((retailer) => (
            /* @ts-ignore */
            <Grid item xs={12} sm={6} md={4} key={retailer.id}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={retailer.image}
                  alt={retailer.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {retailer.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {retailer.description}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <MonetizationOnIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" color="primary">
                      {retailer.cashbackRate}% Cashback
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<ShoppingBagIcon />}
                    component="a"
                    href={retailer.website}
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

      {/* Featured Products Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            mb: 6,
          }}
        >
          Featured Products
        </Typography>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
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
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: 'contain', p: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6" component="h3" sx={{ flexGrow: 1 }}>
                      {product.name}
                    </Typography>
                    {product.isNew && (
                      <Chip
                        icon={<NewReleasesIcon />}
                        label="New"
                        color="primary"
                        size="small"
                        sx={{ mr: 1 }}
                      />
                    )}
                    {product.discount && (
                      <Chip
                        icon={<LocalOfferIcon />}
                        label={`${product.discount}% OFF`}
                        color="error"
                        size="small"
                      />
                    )}
                  </Box>
                  <Typography color="text.secondary" paragraph>
                    {product.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Rating value={product.rating} precision={0.1} readOnly />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      ({product.reviews})
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" color="primary" sx={{ mr: 1 }}>
                      ৳{product.price.toLocaleString()}
                    </Typography>
                    <Chip
                      icon={<MonetizationOnIcon />}
                      label="4% Cashback"
                      color="success"
                      size="small"
                    />
                  </Box>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    endIcon={<LaunchIcon />}
                    onClick={() => handleProductClick(product)}
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom align="center">
            How It Works
          </Typography>
          <Grid container spacing={3}>
            {/* @ts-ignore */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    1. Sign Up
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Create your free account and link your payment methods.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    2. Shop
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Browse through our partner retailers and make your purchase.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    3. Earn
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Get cashback credited to your account after your purchase is
                    confirmed.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Cashback Dialog */}
      {cashbackDialog.product && cashbackDialog.retailer && (
        <CashbackDialog
          open={cashbackDialog.open}
          onClose={() => setCashbackDialog({ open: false, product: null, retailer: null })}
          onConfirm={handleCashbackConfirm}
          productName={cashbackDialog.product.name}
          price={cashbackDialog.product.price}
          cashbackRate={0.04}
          retailerName={cashbackDialog.retailer.name}
        />
      )}
    </Box>
  );
};

export default Home; 