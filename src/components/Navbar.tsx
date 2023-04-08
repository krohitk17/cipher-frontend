import { useContext } from "react";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";

import { UserContext } from "../contexts/UserContext";
import ChangeDetails from "./ChangeDetails";
import ChangeAvatar from "./ChangeAvatar";
import ChangePassword from "./ChangePassword";

export default function Navbar() {
  const user = useContext(UserContext);
  const {
    isOpen: isDetailOverlayOpen,
    onOpen: onDetailOverlayOpen,
    onClose: onDetailOverlayClose,
  } = useDisclosure();
  const {
    isOpen: isAvatarOverlayOpen,
    onOpen: onAvatarOverlayOpen,
    onClose: onAvatarOverlayClose,
  } = useDisclosure();
  const {
    isOpen: isPasswordOverlayOpen,
    onOpen: onPasswordOverlayOpen,
    onClose: onPasswordOverlayClose,
  } = useDisclosure();

  const logoutButtonHandler = () => {
    localStorage.removeItem("token");
    alert("Successfully logged out");
    window.location.href = "/";
  };

  return (
    <div className="sticky top-0 z-30 px-10 py-2 flex items-center justify-between bg-gray-100 border-b-2">
      <a className="flex items-center gap-2 font-sans font-bold" href="/">
        <img
          className="w-10 h-10"
          src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
          alt=""
        />
        CipherSchools
      </a>
      <div className="flex items-center gap-5">
        <Menu z-index="dropDown">
          <MenuButton>
            <Avatar src={user.user.avatar ?? null} />
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => {
                window.location.href = "/profile";
              }}
            >
              My Profile
            </MenuItem>
            <MenuItem onClick={onDetailOverlayOpen}>Change Details</MenuItem>
            <MenuItem onClick={onAvatarOverlayOpen}>Change Avatar</MenuItem>
            <MenuItem onClick={onPasswordOverlayOpen}>Change Password</MenuItem>
            <MenuItem onClick={logoutButtonHandler}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </div>

      <ChangeAvatar
        isOpen={isAvatarOverlayOpen}
        onClose={onAvatarOverlayClose}
      />

      <ChangeDetails
        isOpen={isDetailOverlayOpen}
        onClose={onDetailOverlayClose}
      />

      <ChangePassword
        isOpen={isPasswordOverlayOpen}
        onClose={onPasswordOverlayClose}
      />
    </div>
  );
}
