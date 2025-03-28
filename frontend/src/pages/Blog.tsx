import React from 'react';
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
  Avatar,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';

const blogPosts = [
  {
    id: 1,
    title: 'How to Maximize Your Cashback Earnings',
    excerpt: 'Learn the best strategies to earn more cashback on your online shopping in Bangladesh.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: 'TakaBack Team',
    date: '2024-03-15',
    category: 'Tips & Tricks',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Best Time to Shop Online in Bangladesh',
    excerpt: 'Discover the optimal times to shop online and get the best deals from your favorite retailers.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: 'TakaBack Team',
    date: '2024-03-14',
    category: 'Shopping Guide',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Top 10 Electronics Deals This Week',
    excerpt: 'Check out the hottest electronics deals from Daraz, Pickaboo, and other retailers.',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: 'TakaBack Team',
    date: '2024-03-13',
    category: 'Deals',
    readTime: '3 min read',
  },
  {
    id: 4,
    title: 'Shopping Guide: Fashion in Bangladesh',
    excerpt: 'A comprehensive guide to finding the best fashion deals from local and international brands.',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: 'TakaBack Team',
    date: '2024-03-12',
    category: 'Shopping Guide',
    readTime: '6 min read',
  },
  {
    id: 5,
    title: 'How to Compare Prices Across Retailers',
    excerpt: 'Learn how to find the best prices and maximize your savings when shopping online.',
    image: 'https://images.unsplash.com/photo-1556742393-75e8dcaa8ef3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: 'TakaBack Team',
    date: '2024-03-11',
    category: 'Tips & Tricks',
    readTime: '4 min read',
  },
  {
    id: 6,
    title: 'Best Grocery Shopping Apps in Bangladesh',
    excerpt: 'Compare the top grocery shopping apps and find the best deals for your daily needs.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: 'TakaBack Team',
    date: '2024-03-10',
    category: 'Shopping Guide',
    readTime: '5 min read',
  },
];

const categories = ['All', 'Tips & Tricks', 'Shopping Guide', 'Deals'];

const Blog = () => {
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
            Shopping Tips & Guides
          </Typography>
          <Typography variant="h6" align="center" sx={{ opacity: 0.9 }}>
            Learn how to save more and shop smarter
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
                color="primary"
                variant="outlined"
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

        {/* Blog Posts Grid */}
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={6} key={post.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={post.category}
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Chip
                      icon={<AccessTimeIcon />}
                      label={post.readTime}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ mr: 2 }}>
                      <PersonIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="body2">{post.author}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {formatDate(post.date)}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    component="a"
                    href={`/blog/${post.id}`}
                  >
                    Read More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog; 