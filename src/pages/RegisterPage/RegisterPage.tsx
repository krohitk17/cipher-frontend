import { useContext, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import Overlay from "../../components/Overlay";
import SubmitButton from "../../components/SubmitButton";
import InputField from "../../components/InputField";
import { registerUser } from "../../routes/profile";

export default function LoginPage() {
  const auth = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerButtonHandler = async () => {
    const token = await registerUser(name, email, password);
    if (token.error) {
      alert(token.error.message);
    } else {
      auth.setAuth(token.token);
    }
  };

  return (
    <Overlay show={true} className="flex flex-col p-5 gap-5" onHide={() => {}}>
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
