import { useState } from "react";

import Overlay from "../../components/Overlay";
import SubmitButton from "../../components/SubmitButton";
import InputField from "../../components/InputField";
import { registerUser } from "../../routes/profile";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerButtonHandler = async () => {
    const user = await registerUser(name, email, password);
    if (user.error) {
      alert(user.error.message);
    } else {
      alert("Registration Successful!");
      window.location.href = "/";
    }
  };

  return (
    <Overlay
      show={true}
      className="flex flex-col p-5 gap-5"
      onClose={() => {}}
      title="Register"
    >
      <InputField
        placeholder="Name"
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
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
      <SubmitButton onClickHandler={registerButtonHandler}>
        Register
      </SubmitButton>
      <p>
        Already Registered,{" "}
        <a href="/" className="text-blue-500">
          Click Here!
        </a>
      </p>
    </Overlay>
  );
}
