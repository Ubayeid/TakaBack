export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  retailerId: number;
  category: string;
  discount?: number;
  isNew?: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Smartphone Pro X',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
    description: 'Latest smartphone with advanced features and high-performance camera',
    retailerId: 5, // TechGadget
    category: 'Electronics',
    discount: 10,
    isNew: true,
    rating: 4.8,
    reviews: 128
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Premium wireless headphones with noise cancellation',
    retailerId: 5,
    category: 'Accessories',
    discount: 15,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Fitness tracking smartwatch with heart rate monitoring',
    retailerId: 5,
    category: 'Electronics',
    isNew: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: 'Tablet Pro',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'High-performance tablet perfect for work and entertainment',
    retailerId: 5,
    category: 'Electronics',
    discount: 20,
    rating: 4.9,
    reviews: 92
  }
]; 