import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

interface CashbackDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  productName: string;
  price: number;
  cashbackRate: number;
  retailerName: string;
}

const CashbackDialog: React.FC<CashbackDialogProps> = ({
  open,
  onClose,
  onConfirm,
  productName,
  price,
  cashbackRate,
  retailerName,
}) => {
  const cashbackAmount = price * cashbackRate;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Activate Cashback</DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            You're about to make a purchase from {retailerName}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Product: {productName}
          </Typography>
          <Typography variant="h6" color="primary" gutterBottom>
            Price: ৳{price.toLocaleString()}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Chip
              icon={<MonetizationOnIcon />}
              label={`${(cashbackRate * 100).toFixed(0)}% Cashback`}
              color="success"
              size="small"
            />
            <Typography variant="h6" color="success.main">
              You'll earn: ৳{cashbackAmount.toLocaleString()}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Your cashback will be automatically tracked and credited to your account after the purchase is confirmed.
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm} variant="contained" color="primary">
          Continue to {retailerName}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CashbackDialog; 