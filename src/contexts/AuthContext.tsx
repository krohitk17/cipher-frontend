import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({
  token: "",
  setAuth(token: string): void {},
});

export function AuthProvider({ children }: { children: any }) {
  const [token, setAuth] = useState("");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const context = {
    token,
    setAuth,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
