import React, { createContext, useContext, useState, ReactNode } from 'react';

// Membuat context
const LoginContext = createContext<{
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  user: { name: string; email: string } | null;
  setUser: React.Dispatch<React.SetStateAction<{ name: string; email: string } | null>>;
} | null>(null);

// Membuat provider untuk membungkus aplikasi
export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setLoggedIn] = useState(false); // Status login
  const [user, setUser] = useState<{ name: string; email: string } | null>(null); // Menyimpan data pengguna

  return (
    <LoginContext.Provider value={{ isLoggedIn, setLoggedIn, user, setUser }}>
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
