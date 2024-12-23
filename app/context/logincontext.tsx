import React, { createContext, useContext, useState, ReactNode } from 'react';

// Membuat context
const LoginContext = createContext<{
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

// Membuat provider untuk membungkus aplikasi
export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setLoggedIn] = useState(false); // Status login

  return (
    <LoginContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

// Custom hook untuk menggunakan context
export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLoginContext harus digunakan di dalam LoginProvider');
  }
  return context;
};
