import { useState } from "react";

import Overlay from "../../components/Overlay";
import SubmitButton from "../../components/SubmitButton";
import InputField from "../../components/InputField";
import { loginUser } from "../../routes/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const token = localStorage.getItem("token");

  if (token) {
    window.location.href = "/profile";
  }

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
    <Overlay show={true} onClose={() => {}} title="Login">
      <InputField
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      >
        Email
      </InputField>

      <InputField
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      >
        Password
      </InputField>

      <SubmitButton onClickHandler={loginButtonHandler} className="w-full my-5">
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
