import { useState } from "react";

import Overlay from "../../components/Overlay";
import SubmitButton from "../../components/SubmitButton";
import InputField from "../../components/InputField";
import { loginUser } from "../../routes/login";

export default function LoginPage() {
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
      show={true}
      className="flex flex-col p-5 gap-5"
      onClose={() => {}}
      title="Login"
    >
      <InputField
        placeholder="Email"
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <InputField
        placeholder="Password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <SubmitButton onClickHandler={loginButtonHandler}>Login</SubmitButton>
      <p>
        Not Registered,{" "}
        <a href="/register" className="text-blue-500">
          Click Here!
        </a>
      </p>
    </Overlay>
  );
}
