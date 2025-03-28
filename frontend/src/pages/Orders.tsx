import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const Orders = () => {
  const { user } = useAuth();

  // Dummy data for orders
  const orders = [
    {
      id: '1',
      date: '2024-03-15',
      store: 'TechGadget',
      amount: 1500,
      cashback: 75,
      status: 'Completed',
    },
    {
      id: '2',
      date: '2024-03-14',
      store: 'FashionHub',
      amount: 2500,
      cashback: 125,
      status: 'Processing',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'processing':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        My Orders
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Store</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Cashback</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.store}</TableCell>
                <TableCell align="right">৳{order.amount}</TableCell>
                <TableCell align="right">৳{order.cashback}</TableCell>
                <TableCell>
                  <Chip
                    label={order.status}
                    color={getStatusColor(order.status)}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Orders; 