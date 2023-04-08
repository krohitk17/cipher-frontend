import { FormControl, Input } from "@chakra-ui/react";
import { setUserAvatar } from "../routes/avatar";
import Overlay from "./Overlay";
import SubmitButton from "./SubmitButton";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function ChangeAvatar({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  const user = useContext(UserContext);
  const setAvatarHandler = async () => {
    const file = document.querySelector("input[type=file]") as HTMLInputElement;
    console.log(file.files);
    const formData = new FormData();
    formData.append("avatar", file.files![0]);
    await setUserAvatar(user.user.token!, formData);
    window.location.reload();
  };

  return (
    <Overlay isOpen={isOpen} onClose={onClose} title="Change Profile Picture">
      <FormControl className="flex flex-col gap-5">
        <Input type="file" variant="unstyled" placeholder="Select Image" />
        <SubmitButton onClick={setAvatarHandler}>Submit</SubmitButton>
      </FormControl>
    </Overlay>
  );
}
