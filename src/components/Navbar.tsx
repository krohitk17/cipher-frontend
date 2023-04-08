import { Avatar, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Navbar() {
  const user = useContext(UserContext);
  const [search, setSearch] = useState("");

  const searchHandler = (arg: string) => {
    setSearch(arg);
  };

  return (
    <div className="sticky top-0 z-50 px-10 py-2 flex items-center justify-between bg-gray-100 border-b-2">
      <a
        className="flex items-center gap-2 font-sans font-bold"
        href="https://www.cipherschools.com/courses"
      >
        <img
          className="w-10 h-10"
          src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
          alt=""
        />
        CipherSchools
      </a>
      <div className="flex items-center gap-5">
        <Input className="w-96" placeholder="Search" onChange={(e) => {}} />
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
    </div>
  );
}
