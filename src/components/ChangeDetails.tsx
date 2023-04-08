import { FormControl } from "@chakra-ui/react";
import { BsEnvelopeFill, BsPersonFill, BsPersonFillLock } from "react-icons/bs";
import InputField from "./InputField";
import Overlay from "./Overlay";
import SubmitButton from "./SubmitButton";
import { useContext, useState } from "react";
import { updateUser } from "../routes/profile";
import { UserContext } from "../contexts/UserContext";

export default function ChangeDetails({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  const user = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const submitHandler = async (data: any) => {
    const updatedUser = await updateUser(user.user.token!, data);
    if (updatedUser.error) {
      alert(updatedUser.error);
    } else {
      user.setUser({ ...updatedUser, token: user.user.token! });
    }
  };

  const changeDetailsHandler = async () => {
    const data: any = {};
    if (name) data.name = name;
    if (email) data.email = email;
    if (oldPassword && newPassword) {
      data.password = oldPassword;
      data.newPassword = newPassword;
    }
    await submitHandler(data);
    onClose();
  };

  return (
    <Overlay isOpen={isOpen} onClose={onClose} title="Change User Details">
      <FormControl className="flex flex-col gap-5">
        <InputField
          label="New Name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        >
          <BsPersonFill />
        </InputField>
        <InputField
          label="New Email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        >
          <BsEnvelopeFill />
        </InputField>

        <InputField
          label="Old Password"
          type="password"
          onChange={(e) => {
            setOldPassword(e.target.value);
          }}
        >
          <BsPersonFill />
        </InputField>

        <InputField
          label="New Password"
          type="password"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        >
          <BsPersonFillLock />
        </InputField>
        <SubmitButton onClick={changeDetailsHandler}>Submit</SubmitButton>
      </FormControl>
    </Overlay>
  );
}
