import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Chip,
  Stack,
  Button,
  Divider,
  Grid,
  Card,
  CardContent,
  IconButton,
  Breadcrumbs,
  Link,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

// Mock data for blog post
const blogPost = {
  id: 1,
  title: 'How to Maximize Your Cashback Earnings',
  excerpt: 'Learn the best strategies to earn more cashback on your online shopping in Bangladesh.',
  content: `
    <h2>Introduction</h2>
    <p>In today's digital age, online shopping has become an integral part of our lives. With the right strategies, you can not only save money but also earn cashback on your purchases. This comprehensive guide will help you maximize your cashback earnings while shopping online in Bangladesh.</p>

    <h2>Understanding Cashback</h2>
    <p>Cashback is essentially a reward system where you get a percentage of your purchase amount back after making a transaction. It's like getting paid to shop! The percentage varies depending on the retailer and the type of product.</p>

    <h2>Top Strategies for Maximum Cashback</h2>
    <h3>1. Time Your Purchases</h3>
    <p>Many retailers offer higher cashback rates during special sales events. Keep an eye on:</p>
    <ul>
      <li>Seasonal sales (Eid, Puja, etc.)</li>
      <li>Flash sales</li>
      <li>Weekend specials</li>
    </ul>

    <h3>2. Stack Your Rewards</h3>
    <p>Combine multiple savings methods:</p>
    <ul>
      <li>Use cashback offers</li>
      <li>Apply discount codes</li>
      <li>Use credit card rewards</li>
    </ul>

    <h3>3. Choose the Right Retailers</h3>
    <p>Popular retailers with good cashback rates:</p>
    <ul>
      <li>Daraz (up to 5% cashback)</li>
      <li>Pickaboo (up to 4% cashback)</li>
      <li>Chaldal (up to 3% cashback)</li>
    </ul>

    <h2>Best Practices</h2>
    <p>To ensure you get your cashback:</p>
    <ol>
      <li>Always shop through the TakaBack app or website</li>
      <li>Complete your purchase in one session</li>
      <li>Keep your order confirmation emails</li>
      <li>Check your cashback status regularly</li>
    </ol>

    <h2>Common Mistakes to Avoid</h2>
    <p>Be aware of these common pitfalls:</p>
    <ul>
      <li>Using ad blockers that might interfere with tracking</li>
      <li>Closing the browser before completing the purchase</li>
      <li>Not checking the terms and conditions</li>
      <li>Ignoring the cashback tracking period</li>
    </ul>

    <h2>Conclusion</h2>
    <p>By following these strategies and best practices, you can significantly increase your cashback earnings. Remember to check for the latest offers and always shop through TakaBack to ensure your cashback is properly tracked.</p>
  `,
  image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  author: 'TakaBack Team',
  date: '2024-03-15',
  category: 'Tips & Tricks',
  readTime: '5 min read',
  tags: ['Cashback', 'Shopping Tips', 'Savings', 'Online Shopping'],
  relatedPosts: [
    {
      id: 2,
      title: 'Best Time to Shop Online in Bangladesh',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      excerpt: 'Discover the optimal times to shop online and get the best deals from your favorite retailers.',
    },
    {
      id: 3,
      title: 'Top 10 Electronics Deals This Week',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      excerpt: 'Check out the hottest electronics deals from Daraz, Pickaboo, and other retailers.',
    },
  ],
};

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs
            sx={{ mb: 4, color: 'white' }}
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link href="/" color="inherit" underline="hover">
              Home
            </Link>
            <Link href="/blog" color="inherit" underline="hover">
              Blog
            </Link>
            <Typography color="inherit">{blogPost.title}</Typography>
          </Breadcrumbs>
          <Typography variant="h3" component="h1" gutterBottom>
            {blogPost.title}
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
              <PersonIcon />
            </Avatar>
            <Box>
              <Typography variant="subtitle1">{blogPost.author}</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {formatDate(blogPost.date)} • {blogPost.readTime}
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={1}>
            {blogPost.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                color="secondary"
                variant="outlined"
                size="small"
              />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4, mb: 4 }}>
              <Box
                component="img"
                src={blogPost.image}
                alt={blogPost.title}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  mb: 4,
                }}
              />
              <Box
                sx={{
                  '& h2': {
                    mt: 4,
                    mb: 2,
                    color: 'primary.main',
                  },
                  '& h3': {
                    mt: 3,
                    mb: 2,
                    color: 'text.primary',
                  },
                  '& p': {
                    mb: 2,
                  },
                  '& ul, & ol': {
                    pl: 4,
                    mb: 2,
                  },
                  '& li': {
                    mb: 1,
                  },
                }}
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </Paper>

            {/* Share and Save Buttons */}
            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
              <Button
                variant="outlined"
                startIcon={<ShareIcon />}
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: blogPost.title,
                      text: blogPost.excerpt,
                      url: window.location.href,
                    });
                  }
                }}
              >
                Share
              </Button>
              <Button
                variant="outlined"
                startIcon={<BookmarkIcon />}
                onClick={() => {
                  // Implement bookmark functionality
                }}
              >
                Save
              </Button>
            </Stack>

            {/* Navigation */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button
                startIcon={<NavigateBeforeIcon />}
                onClick={() => navigate(`/blog/${Number(id) - 1}`)}
                disabled={Number(id) <= 1}
              >
                Previous Post
              </Button>
              <Button
                endIcon={<NavigateNextIcon />}
                onClick={() => navigate(`/blog/${Number(id) + 1}`)}
                disabled={Number(id) >= 6}
              >
                Next Post
              </Button>
            </Box>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Related Posts
              </Typography>
              {blogPost.relatedPosts.map((post) => (
                <Card key={post.id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Box
                      component="img"
                      src={post.image}
                      alt={post.title}
                      sx={{
                        width: '100%',
                        height: 120,
                        objectFit: 'cover',
                        borderRadius: 1,
                        mb: 2,
                      }}
                    />
                    <Typography variant="subtitle1" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.excerpt}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Categories
              </Typography>
              <Stack spacing={1}>
                {['Tips & Tricks', 'Shopping Guide', 'Deals'].map((category) => (
                  <Button
                    key={category}
                    startIcon={<CategoryIcon />}
                    variant="text"
                    fullWidth
                    sx={{ justifyContent: 'flex-start' }}
                    onClick={() => navigate(`/blog?category=${category}`)}
                  >
                    {category}
                  </Button>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPost; 