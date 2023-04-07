import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { UserProvider } from "./contexts/UserContext";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Navbar from "./pages/ProfilePage/components/Navbar";

export default function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*">404 Not Found</Route>
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}
