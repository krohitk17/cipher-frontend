import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*">404 Not Found</Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}
