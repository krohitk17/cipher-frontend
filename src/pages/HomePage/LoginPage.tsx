import { useState } from "react";

import Overlay from "../../components/Overlay";
import SubmitButton from "../../components/SubmitButton";
import InputField from "../../components/InputField";
import { loginUser } from "../../routes/auth";
import { BsEnvelopeFill, BsPersonFillLock } from "react-icons/bs";

export default function LoginPage({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginButtonHandler = async () => {
    const userToken = await loginUser(email, password);
    if (userToken.error) {
      alert(userToken.error.message);
    } else {
      localStorage.setItem("token", userToken.token);
      alert("Login Successful!");
      window.location.href = "/profile";
    }
  };

  return (
    <Overlay
      className="flex flex-col gap-5"
      isOpen={isOpen}
      onClose={onClose}
      title="Login"
    >
      <InputField
        label="Email"
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      >
        <BsEnvelopeFill />
      </InputField>

      <InputField
        label="Password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      >
        <BsPersonFillLock />
      </InputField>

      <SubmitButton onClick={loginButtonHandler} className="w-full">
        Login
      </SubmitButton>
      <p>
        Not Registered,{" "}
        <a href="/register" className="text-blue-500">
          Click Here!
        </a>
      </p>
    </Overlay>
  );
}
