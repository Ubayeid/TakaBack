import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  referralCode?: string;
  referredBy?: string;
  balance: number;
}

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  register: (userData: Omit<User, 'id' | 'balance'>, referralCode?: string) => void;
  updateBalance: (amount: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const generateReferralCode = (email: string) => {
    return email.split('@')[0].toUpperCase() + Math.random().toString(36).substr(2, 6);
  };

  const register = (userData: Omit<User, 'id' | 'balance'>, referralCode?: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (users.some((u: User) => u.email === userData.email)) {
      throw new Error('Email already registered');
    }

    // Generate unique ID and referral code
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      referralCode: generateReferralCode(userData.email),
      balance: 0,
    };

    // If referral code is provided, add bonus to referrer
    if (referralCode) {
      const referrer = users.find((u: User) => u.referralCode === referralCode);
      if (referrer) {
        referrer.balance += 30; // Add 30 BDT referral bonus
        newUser.referredBy = referrer.id;
      }
    }

    // Add new user to users array
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Set as current user
    setUser(newUser);
  };

  const updateBalance = (amount: number) => {
    if (!user) return;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex((u: User) => u.id === user.id);
    
    if (userIndex !== -1) {
      users[userIndex].balance += amount;
      localStorage.setItem('users', JSON.stringify(users));
      setUser(users[userIndex]);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        register,
        updateBalance,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 