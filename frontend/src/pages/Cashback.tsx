import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

// Mock data - replace with API call
const cashbackHistory = [
  {
    id: 1,
    retailer: 'Amazon',
    date: '2024-03-27',
    amount: 125.99,
    cashbackAmount: 3.15,
    status: 'Pending',
    orderReference: 'AMZ-123456',
  },
  {
    id: 2,
    retailer: 'Walmart',
    date: '2024-03-25',
    amount: 89.99,
    cashbackAmount: 1.35,
    status: 'Approved',
    orderReference: 'WMT-789012',
  },
  {
    id: 3,
    retailer: 'Best Buy',
    date: '2024-03-20',
    amount: 599.99,
    cashbackAmount: 18.00,
    status: 'Paid',
    orderReference: 'BBY-345678',
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'pending':
      return 'warning';
    case 'approved':
      return 'info';
    case 'paid':
      return 'success';
    default:
      return 'default';
  }
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

const Cashback = () => {
  const totalPending = cashbackHistory
    .filter((item) => item.status === 'Pending')
    .reduce((sum, item) => sum + item.cashbackAmount, 0);

  const totalApproved = cashbackHistory
    .filter((item) => item.status === 'Approved')
    .reduce((sum, item) => sum + item.cashbackAmount, 0);

  const totalPaid = cashbackHistory
    .filter((item) => item.status === 'Paid')
    .reduce((sum, item) => sum + item.cashbackAmount, 0);

  return (
    <Box>
      {/* Summary Cards */}
      <Box sx={{ mb: 4, display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' } }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Pending Cashback
          </Typography>
          <Typography
            variant="h4"
            color="warning.main"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <MonetizationOnIcon sx={{ mr: 1 }} />
            {formatCurrency(totalPending)}
          </Typography>
        </Paper>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Approved Cashback
          </Typography>
          <Typography
            variant="h4"
            color="info.main"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <MonetizationOnIcon sx={{ mr: 1 }} />
            {formatCurrency(totalApproved)}
          </Typography>
        </Paper>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Total Earned
          </Typography>
          <Typography
            variant="h4"
            color="success.main"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <MonetizationOnIcon sx={{ mr: 1 }} />
            {formatCurrency(totalPaid)}
          </Typography>
        </Paper>
      </Box>

      {/* Cashback History */}
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" component="h2">
            Cashback History
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingBagIcon />}
          >
            Shop Now
          </Button>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Retailer</TableCell>
                <TableCell align="right">Order Amount</TableCell>
                <TableCell align="right">Cashback</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order Reference</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cashbackHistory.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{new Date(row.date).toLocaleDateString()}</TableCell>
                  <TableCell>{row.retailer}</TableCell>
                  <TableCell align="right">{formatCurrency(row.amount)}</TableCell>
                  <TableCell align="right">{formatCurrency(row.cashbackAmount)}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.status}
                      color={getStatusColor(row.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{row.orderReference}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Cashback; 