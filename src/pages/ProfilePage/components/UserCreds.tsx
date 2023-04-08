import { Avatar, useDisclosure } from "@chakra-ui/react";
import SearchPage from "../../SearchPage/SearchPage";
import { User } from "../../../contexts/UserContext";
import { useState } from "react";
import { getUserFollowers, getUserFollowing } from "../../../routes/profile";

const Bold = ({ children }: { children: any }) => (
  <h1 className="font-bold text-2xl">{children}</h1>
);

const Text = ({ children }: { children: any }) => (
  <h1 className="text-l">{children}</h1>
);

export default function UserCreds({
  user,
  children,
}: {
  user: any;
  children: any;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [users, setUsers] = useState<any>([new User()]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const detailHandler = async (type: string) => {
    setIsLoading(true);
    console.log(type);
    var func: any;
    if (type === "followers") {
      func = getUserFollowers;
    } else {
      func = getUserFollowing;
    }
    const details = await func(user.token, 1);
    setUsers(details);
    console.log(details);
    setPage(page + 1);
    onOpen();
    setIsLoading(false);
  };

  return (
    <div className="bg-blue-100 flex justify-between items-center gap-10 sticky z-50 top-0 px-10 py-5">
      <div className="flex items-center gap-5">
        <Avatar size="2xl" src={user.avatar} />
        <div>
          <Bold>{user.name}</Bold>
          <Text>{user.email}</Text>
        </div>

        <div className="flex gap-20 ml-20">
          <button
            onClick={async () => await detailHandler("followers")}
            className="flex flex-col items-center"
          >
            <Bold>{user.followers.length}</Bold>
            <Text>Followers</Text>
          </button>

          <button
            onClick={async () => await detailHandler("following")}
            className="flex flex-col items-center"
          >
            <Bold>{user.following.length}</Bold>
            <Text>Following</Text>
          </button>
        </div>
        <SearchPage
          isLoading={isLoading}
          isOpen={isOpen}
          onClose={onClose}
          users={[users]}
        />
      </div>
      {children}
    </div>
  );
}
