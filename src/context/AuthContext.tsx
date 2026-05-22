"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  name: string;
  isGuest: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (name: string) => void;
  continueAsGuest: () => void;
  logout: () => void;
}

const AuthContext =
  createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(
    null
  );

  useEffect(() => {
    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      queueMicrotask(() => {
        setUser(JSON.parse(storedUser));
      });
    }
  }, []);

  const login = (name: string) => {
    const newUser = {
      name,
      isGuest: false,
    };

    setUser(newUser);

    localStorage.setItem(
      "user",
      JSON.stringify(newUser)
    );
  };

  const continueAsGuest = () => {
    const guestUser = {
      name: "Guest User",
      isGuest: true,
    };

    setUser(guestUser);

    localStorage.setItem(
      "user",
      JSON.stringify(guestUser)
    );
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        continueAsGuest,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return context;
}