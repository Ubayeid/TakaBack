# TakaBack Cashback Platform

A full-featured cashback and affiliate platform allowing users to earn cashback from online shopping and retailers to promote their stores through sponsored listings.

## Features

- User authentication and profiles
- Cashback tracking and rewards
- Retailer management
- Product browsing and search
- Shopping cart functionality
- Order management
- Referral program
- Blog and content management
- Admin dashboard

## Tech Stack

- Frontend: React with TypeScript, Material-UI
- Backend: Node.js with Express, TypeScript
- Database: MongoDB
- Authentication: JWT
- Payment Processing: Stripe integration

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env` in both backend and frontend directories
   - Update the variables with your configuration
4. Start the development servers:
   ```bash
   # Start backend server
   cd backend
   npm run dev

   # Start frontend server
   cd frontend
   npm start
   ```

## Project Structure

```
TakaBack/
├── backend/           # Backend server
├── frontend/         # Frontend application
├── demo-retailers/   # Demo retailer websites
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
