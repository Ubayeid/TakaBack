-- Create Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    balance DECIMAL(10,2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Retailers table
CREATE TABLE retailers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    logo_url VARCHAR(255),
    base_cashback_rate DECIMAL(5,2) NOT NULL,
    is_sponsored BOOLEAN DEFAULT false,
    sponsored_rank INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Transactions table
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    retailer_id INTEGER REFERENCES retailers(id),
    amount DECIMAL(10,2) NOT NULL,
    cashback_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    order_reference VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Active Cashback table
CREATE TABLE active_cashback (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    retailer_id INTEGER REFERENCES retailers(id),
    activated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP,
    UNIQUE(user_id, retailer_id)
);

-- Create Sponsored Listings table
CREATE TABLE sponsored_listings (
    id SERIAL PRIMARY KEY,
    retailer_id INTEGER REFERENCES retailers(id),
    placement_type VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    cost_per_day DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Coupons table
CREATE TABLE coupons (
    id SERIAL PRIMARY KEY,
    retailer_id INTEGER REFERENCES retailers(id),
    code VARCHAR(50) NOT NULL,
    description TEXT,
    discount_value DECIMAL(10,2),
    discount_type VARCHAR(20),
    start_date DATE,
    end_date DATE,
    is_auto_applied BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_transactions_user_id ON transactions(user_id);
CREATE INDEX idx_transactions_retailer_id ON transactions(retailer_id);
CREATE INDEX idx_active_cashback_user_id ON active_cashback(user_id);
CREATE INDEX idx_sponsored_listings_retailer_id ON sponsored_listings(retailer_id);
CREATE INDEX idx_coupons_retailer_id ON coupons(retailer_id); 