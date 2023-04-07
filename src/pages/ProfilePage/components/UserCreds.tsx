import { useContext } from "react";
import { Avatar } from "@chakra-ui/react";
import { UserContext } from "../../../contexts/UserContext";

const Bold = ({ children }: { children: any }) => (
  <h1 className="font-bold text-2xl">{children}</h1>
);

const Text = ({ children }: { children: any }) => (
  <h1 className="text-l">{children}</h1>
);

const Link = ({
  children,
  disabled,
  href,
}: {
  children: any;
  disabled?: boolean;
  href: string;
}) => (
  <div
    className="flex flex-col items-center"
    onClick={
      disabled
        ? undefined
        : () => {
            window.location.href = window.location.href + href;
          }
    }
    onMouseEnter={
      disabled
        ? undefined
        : () => {
            document.body.style.cursor = "pointer";
          }
    }
    onMouseLeave={() => (document.body.style.cursor = "default")}
  >
    {children}
  </div>
);

export default function UserCreds({
  children,
  disabled,
}: {
  children: any;
  disabled?: boolean;
}) {
  const user = useContext(UserContext).user;

  return (
    <div className="bg-blue-100 flex justify-between items-center gap-10 sticky z-50 top-0 px-10 py-5">
      <div className="flex items-center gap-5">
        <Avatar size="2xl" src={user.avatar} />
        <div>
          <Bold>{user.name}</Bold>
          <Text>{user.email}</Text>
        </div>

        <div className="flex gap-20 ml-20">
          <Link disabled={disabled} href="/followers">
            <Bold>{user.followers.length}</Bold>
            <Text>Followers</Text>
          </Link>

          <Link disabled={disabled} href="/following">
            <Bold>{user.following.length}</Bold>
            <Text>Following</Text>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
