import { useContext, useState } from "react";
import { FormControl } from "@chakra-ui/react";
import { BsPersonFill, BsPersonFillLock } from "react-icons/bs";

import InputField from "./InputField";
import Overlay from "./Overlay";
import SubmitButton from "./SubmitButton";
import { UserContext } from "../contexts/UserContext";
import { changePassword } from "../routes/auth";

export default function ChangePassword({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  const user = useContext(UserContext);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const changeDetailsHandler = async () => {
    console.log(oldPassword, newPassword);
    await changePassword(user.user.token!, oldPassword, newPassword);
    onClose();
  };

  return (
    <Overlay isOpen={isOpen} onClose={onClose} title="Change User Details">
      <FormControl className="flex flex-col gap-5">
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
