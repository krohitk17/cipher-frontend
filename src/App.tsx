import { useContext } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import SelfProfilePage from "./pages/ProfilePage/SelfProfilePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { LoadingContext } from "./contexts/LoadingContext";
import { UserProvider } from "./contexts/UserContext";
import Loading from "./components/Loading";
import HomePage from "./pages/HomePage/HomePage";

export default function App() {
  console.log("App");
  const loading = useContext(LoadingContext);

  return (
    <ChakraProvider>
      <UserProvider>
        <Navbar />
        <Loading isLoading={loading.isLoading}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*">404 Not Found</Route>
              <Route path="/profile">
                <Route index={true} element={<SelfProfilePage />} />
                <Route path=":id" element={<ProfilePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Loading>
      </UserProvider>
    </ChakraProvider>
  );
}
