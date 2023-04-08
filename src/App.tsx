import { useContext } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SelfProfilePage from "./pages/ProfilePage/SelfProfilePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { LoadingProvider } from "./contexts/LoadingContext";
import { UserProvider } from "./contexts/UserContext";
import Loading from "./components/Loading";

export default function App() {
  console.log("App");

  return (
    <ChakraProvider>
      <LoadingProvider>
        <UserProvider>
          <Navbar />
          <Loading>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*">404 Not Found</Route>
                <Route path="/profile">
                  <Route index={true} element={<SelfProfilePage />} />
                  <Route path=":id" element={<ProfilePage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Loading>
        </UserProvider>
      </LoadingProvider>
    </ChakraProvider>
  );
}
