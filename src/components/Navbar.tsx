import { useContext } from "react";
import { Avatar, Button, useDisclosure } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

import { UserContext } from "../contexts/UserContext";
import SearchPage from "../pages/SearchPage/SearchPage";

export default function Navbar() {
  const user = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="sticky top-0 z-50 px-10 py-2 flex items-center justify-between bg-gray-100 border-b-2">
      <a className="flex items-center gap-2 font-sans font-bold" href="/">
        <img
          className="w-10 h-10"
          src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
          alt=""
        />
        CipherSchools
      </a>
      <div className="flex items-center gap-5">
        <Button className="border rounded-full" onClick={onOpen}>
          <BsSearch />
        </Button>
        <Avatar
          src={user.user.avatar ?? null}
          onClick={() => {
            if (user.user.token) {
              window.location.href = "/profile";
            } else {
              window.location.href = "/";
            }
          }}
        ></Avatar>
      </div>
      <SearchPage
        isLoading={false}
        isOpen={isOpen}
        onClose={onClose}
        users={[]}
      />
    </div>
  );
}
