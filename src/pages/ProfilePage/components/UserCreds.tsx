import { useContext, useState } from "react";
import { Avatar } from "@chakra-ui/react";

import { UserContext } from "../../../contexts/UserContext";
import Overlay from "../../../components/Overlay";

export default function UserCreds() {
  const user = useContext(UserContext).user;
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="w-[100%] bg-blue-100 sticky top-0 z-50 mb-2 p-5 flex flex-row justify-between items-center px-10">
      <div className="flex flex-row items-center gap-10">
        <Avatar
          size="2xl"
          src={user.avatar}
          onClick={() => {
            console.log("Hello World");
            setOverlay(true);
          }}
        />
        <div>
          <h1 className="pb-2 font-bold text-2xl">{user.name}</h1>
          <h1 className="text-xl">{user.email}</h1>
        </div>
      </div>
      <div className="text-xl">
        <a href="/followers">{user.followers.length} Followers</a>
      </div>
      <Overlay
        show={overlay}
        onClose={() => {
          setOverlay(false);
        }}
      >
        <p>Hello World</p>
      </Overlay>
    </div>
  );
}
