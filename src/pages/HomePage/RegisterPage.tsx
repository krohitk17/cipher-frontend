import { useState } from "react";

import Overlay from "../../components/Overlay";
import SubmitButton from "../../components/SubmitButton";
import InputField from "../../components/InputField";
import { registerUser } from "../../routes/profile";
import { BsEnvelopeFill, BsPersonFill, BsPersonFillLock } from "react-icons/bs";

export default function RegisterPage({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
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
      isOpen={isOpen}
      onClose={onClose}
      title="Register"
      className="flex flex-col gap-5"
    >
      <InputField
        label="Name"
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      >
        <BsPersonFill />
      </InputField>

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

      <SubmitButton className="w-full" onClick={registerButtonHandler}>
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
