import { useContext, useEffect, useState } from "react";
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
import { checkApi } from "./routes/health";

export default function App() {
  console.log("App");
  const loading = useContext(LoadingContext);
  const [isApi, setIsApi] = useState(true);

  useEffect(() => {
    (async () => {
      const isApi = await checkApi();
      console.log("isApi", isApi);
      if (!isApi) {
        setIsApi(false);
      }
    })();
  });

  return (
    <ChakraProvider>
      <UserProvider>
        <Navbar />
        <Loading isLoading={loading.isLoading}>
          {!isApi ? (
            <div>API is not running</div>
          ) : (
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
          )}
        </Loading>
      </UserProvider>
    </ChakraProvider>
  );
}
