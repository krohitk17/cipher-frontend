import { useEffect, useState } from "react";

import SubmitButton from "../../components/SubmitButton";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import { useDisclosure } from "@chakra-ui/react";

export default function HomePage() {
  const [login, setLogin] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log("Here");
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/profile";
    }
  });

  return (
    <div>
      <h1>Home Page</h1>
      <SubmitButton
        onClick={() => {
          onOpen();
          setLogin(true);
        }}
      >
        Login
      </SubmitButton>
      <SubmitButton
        onClick={() => {
          onOpen();
          setLogin(false);
        }}
      >
        Register
      </SubmitButton>
      <LoginPage isOpen={isOpen && login} onClose={onClose} />
      <RegisterPage isOpen={isOpen && !login} onClose={onClose} />
    </div>
  );
}
