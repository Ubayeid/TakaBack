export interface CashbackOrder {
  orderId: string;
  productId: number;
  productName: string;
  price: number;
  cashbackRate: number;
  cashbackAmount: number;
  retailerId: number;
  retailerName: string;
  timestamp: string;
}

export const initiateCashback = (productId: number, price: number, retailerId: number, retailerName: string): CashbackOrder => {
  const orderId = `ORDER-${Date.now()}`;
  const cashbackRate = 0.04; // 4% for TechGadget
  const cashbackAmount = price * cashbackRate;

  const order: CashbackOrder = {
    orderId,
    productId,
    productName: '', // Will be filled by the product data
    price,
    cashbackRate,
    cashbackAmount,
    retailerId,
    retailerName,
    timestamp: new Date().toISOString()
  };

  // Store the order in localStorage for demo purposes
  const existingOrders = JSON.parse(localStorage.getItem('cashbackOrders') || '[]');
  existingOrders.push(order);
  localStorage.setItem('cashbackOrders', JSON.stringify(existingOrders));

  return order;
};

export const getCashbackOrders = (): CashbackOrder[] => {
  return JSON.parse(localStorage.getItem('cashbackOrders') || '[]');
}; 