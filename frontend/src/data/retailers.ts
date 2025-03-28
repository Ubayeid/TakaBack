export interface Retailer {
  id: string;
  name: string;
  description: string;
  logo: string;
  image: string;
  category: string;
  categories: string[];
  website: string;
  cashbackRate: number;
  featured: boolean;
}

export const retailers: Retailer[] = [
  {
    id: 'techgadget',
    name: 'TechGadget',
    description: 'Your one-stop shop for electronics and gadgets',
    logo: 'https://via.placeholder.com/150',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Electronics',
    categories: ['Electronics', 'Gadgets', 'Accessories'],
    website: 'http://localhost:8000',
    cashbackRate: 4,
    featured: true,
  },
  {
    id: 'fashionista',
    name: 'Fashionista',
    description: 'Trendy clothing and accessories for everyone',
    logo: 'https://via.placeholder.com/150',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Fashion',
    categories: ['Fashion', 'Clothing', 'Accessories'],
    website: 'http://localhost:8001',
    cashbackRate: 3,
    featured: true,
  },
  {
    id: 'freshmart',
    name: 'FreshMart',
    description: 'Fresh groceries and household items',
    logo: 'https://via.placeholder.com/150',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Groceries',
    categories: ['Groceries', 'Food', 'Household'],
    website: 'http://localhost:8002',
    cashbackRate: 2,
    featured: true,
  },
  {
    id: 'beautystore',
    name: 'Beauty Store',
    description: 'Cosmetics and beauty products',
    logo: 'https://via.placeholder.com/150',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Beauty',
    categories: ['Beauty', 'Cosmetics', 'Skincare'],
    website: 'http://localhost:8003',
    cashbackRate: 3,
    featured: true,
  },
  {
    id: 'bookworm',
    name: 'BookWorm',
    description: 'Books, magazines, and educational materials',
    logo: 'https://via.placeholder.com/150',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Books',
    categories: ['Books', 'Education', 'Magazines'],
    website: 'http://localhost:8004',
    cashbackRate: 2,
    featured: true,
  },
  {
    id: 'homeplus',
    name: 'HomePlus',
    description: 'Home decor and furniture',
    logo: 'https://via.placeholder.com/150',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Home',
    categories: ['Home', 'Furniture', 'Decor'],
    website: 'http://localhost:8005',
    cashbackRate: 3,
    featured: true,
  },
  {
    id: 'sportzone',
    name: 'SportZone',
    description: 'Sports equipment and accessories',
    logo: 'https://via.placeholder.com/150',
    image: 'https://images.unsplash.com/photo-1517649763962-0c6231940131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Sports',
    categories: ['Sports', 'Equipment', 'Fitness'],
    website: 'http://localhost:8006',
    cashbackRate: 2,
    featured: true,
  },
  {
    id: 'toyland',
    name: 'ToyLand',
    description: 'Toys and games for all ages',
    logo: 'https://via.placeholder.com/150',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Toys',
    categories: ['Toys', 'Games', 'Entertainment'],
    website: 'http://localhost:8007',
    cashbackRate: 2,
    featured: true,
  },
  {
    id: 'healthcare',
    name: 'HealthCare',
    description: 'Health and wellness products',
    logo: 'https://via.placeholder.com/150',
    image: 'https://images.unsplash.com/photo-1532938914959-9f8c79c5c1a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Health',
    categories: ['Health', 'Wellness', 'Medicine'],
    website: 'http://localhost:8008',
    cashbackRate: 3,
    featured: true,
  },
  {
    id: 'petstore',
    name: 'PetStore',
    description: 'Pet supplies and accessories',
    logo: 'https://via.placeholder.com/150',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Pets',
    categories: ['Pets', 'Supplies', 'Accessories'],
    website: 'http://localhost:8009',
    cashbackRate: 2,
    featured: true,
  },
];

export const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home',
  'Beauty',
  'Groceries',
  'Mobile',
  'Accessories',
  'Household'
]; 