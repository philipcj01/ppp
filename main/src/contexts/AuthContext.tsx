import React, { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./authTypes";
import type { User } from "./authTypes";
import type { AuthContextType } from "./authTypes";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start - defer setState to avoid synchronous update
    const initializeAuth = () => {
      const storedUser = localStorage.getItem("phinova_user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          localStorage.removeItem("phinova_user");
        }
      }
      setIsLoading(false);
    };

    const timer = setTimeout(initializeAuth, 0);
    return () => clearTimeout(timer);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call - replace with actual authentication service
    return new Promise((resolve) => {
      setTimeout(() => {
        // Demo credentials for testing
        if (
          email === import.meta.env.VITE_ADMIN_USER_ID &&
          password === import.meta.env.VITE_ADMIN_PASSWORD
        ) {
          const userData: User = {
            id: "1",
            email: email,
            name: "admin",
          };
          setUser(userData);
          localStorage.setItem("phinova_user", JSON.stringify(userData));
          setIsLoading(false);
          resolve(true);
        } else {
          setIsLoading(false);
          resolve(false);
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("phinova_user");
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
