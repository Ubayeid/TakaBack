import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { getCashbackOrders } from '../services/cashback';

const CashbackHistory = () => {
  const theme = useTheme();
  const orders = getCashbackOrders();

  // Calculate total earnings
  const totalEarnings = orders.reduce((sum, order) => sum + order.cashbackAmount, 0);
  const totalSpent = orders.reduce((sum, order) => sum + order.price, 0);
  const averageCashback = orders.length > 0 ? totalEarnings / orders.length : 0;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
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
          Your Cashback History
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Track your savings and earnings
        </Typography>
      </Box>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <MonetizationOnIcon color="success" sx={{ mr: 1, fontSize: 40 }} />
                <Typography variant="h4" color="success.main">
                  ৳{totalEarnings.toLocaleString()}
                </Typography>
              </Box>
              <Typography variant="subtitle1" color="text.secondary">
                Total Cashback Earned
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ShoppingBagIcon color="primary" sx={{ mr: 1, fontSize: 40 }} />
                <Typography variant="h4" color="primary">
                  ৳{totalSpent.toLocaleString()}
                </Typography>
              </Box>
              <Typography variant="subtitle1" color="text.secondary">
                Total Spent
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUpIcon color="info" sx={{ mr: 1, fontSize: 40 }} />
                <Typography variant="h4" color="info.main">
                  ৳{averageCashback.toLocaleString()}
                </Typography>
              </Box>
              <Typography variant="subtitle1" color="text.secondary">
                Average Cashback per Order
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Orders Table */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Retailer</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Cashback Rate</TableCell>
                <TableCell align="right">Cashback Amount</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.orderId}>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{order.productName}</TableCell>
                  <TableCell>{order.retailerName}</TableCell>
                  <TableCell align="right">৳{order.price.toLocaleString()}</TableCell>
                  <TableCell align="right">
                    <Chip
                      icon={<MonetizationOnIcon />}
                      label={`${(order.cashbackRate * 100).toFixed(0)}%`}
                      color="success"
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Typography color="success.main">
                      ৳{order.cashbackAmount.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {new Date(order.timestamp).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
              {orders.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    <Typography color="text.secondary">
                      No cashback orders found. Start shopping to earn cashback!
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default CashbackHistory; 