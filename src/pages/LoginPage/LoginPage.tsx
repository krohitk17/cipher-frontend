import { useContext, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import Overlay from "../../components/Overlay";
import SubmitButton from "../../components/SubmitButton";
import InputField from "../../components/InputField";
import { loginUser } from "../../routes/profile";

export default function LoginPage() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginButtonHandler = async () => {
    const token = await loginUser(email, password);
    if (token.error) {
      alert(token.error.message);
    } else {
      auth.setAuth(token.token);
    }
  };

  return (
    <Overlay show={true} className="flex flex-col p-5 gap-5" onHide={() => {}}>
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
