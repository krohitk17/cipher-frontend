import { useState, createContext } from "react";

export const AuthContext = createContext({
  token: "",
  setAuth(user: { _id: string; token: string }): void {},
});

export function AuthProvider({ children }: { children: any }) {
  const [user, setAuth] = useState({
    token: "",
  });
  const context = {
    ...user,
    setAuth,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
