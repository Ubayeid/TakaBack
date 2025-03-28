# Demo Retailer Websites

This directory contains dummy retailer websites for testing the Rakuten cashback platform. Each website is a fully functional demo store with product browsing, shopping cart, user authentication, and cashback integration.

## Features

- Modern, responsive design
- Product browsing and search
- Shopping cart functionality
- User authentication (login/register)
- Wishlist management
- Product reviews and ratings
- Cashback tracking
- Order history
- Mobile-friendly interface

## Prerequisites

- Python 3.x
- PowerShell

## Directory Structure

```
demo-retailers/
├── store-template/           # Template files for store websites
│   ├── index.html           # HTML template
│   ├── styles.css           # CSS styles
│   └── script.js            # JavaScript functionality
├── fashionista/             # Fashion store website
├── freshmart/               # Grocery store website
├── beautystore/             # Beauty store website
├── bookworm/                # Book store website
├── homeplus/                # Home goods store website
├── sportzone/               # Sports store website
├── toyland/                 # Toy store website
├── healthcare/              # Health store website
├── petstore/                # Pet store website
├── generate-stores.ps1      # Script to generate store websites
└── start-servers.ps1        # Script to start all store servers
```

## Getting Started

1. Generate the store websites:
   ```powershell
   .\generate-stores.ps1
   ```

2. Start all the store servers:
   ```powershell
   .\start-servers.ps1
   ```

3. Access the stores in your web browser:
   - Fashionista: http://localhost:8001
   - FreshMart: http://localhost:8002
   - Beauty Store: http://localhost:8003
   - BookWorm: http://localhost:8004
   - HomePlus: http://localhost:8005
   - SportZone: http://localhost:8006
   - ToyLand: http://localhost:8007
   - HealthCare: http://localhost:8008
   - PetStore: http://localhost:8009

## Store Features

### User Authentication
- Login and registration functionality
- User profile management
- Session persistence

### Shopping Features
- Product browsing and search
- Shopping cart with real-time updates
- Wishlist management
- Product reviews and ratings
- Order history

### Cashback Integration
- Automatic cashback calculation
- Cashback rate display
- Cashback tracking in user profile

### Additional Features
- Responsive design for all devices
- Modern UI with animations
- Toast notifications for user feedback
- Loading states and error handling

## Testing the Integration

1. Visit any store website (e.g., http://localhost:8001)
2. Register a new account
3. Browse products and add items to cart
4. Complete a purchase to test cashback calculation
5. Check your Rakuten account for cashback credit

## Development

To modify or enhance the stores:

1. Edit the template files in `store-template/`
2. Update the store configurations in `generate-stores.ps1`
3. Regenerate the store websites
4. Restart the servers

## Notes

- All data is stored in localStorage for demo purposes
- Cashback rates are configured per store
- Images are loaded from placeholder services
- The websites are for demonstration only and not meant for production use 