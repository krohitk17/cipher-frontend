import { Avatar } from "@chakra-ui/react";

export default function UserCreds({
  email,
  name,
  avatar,
  followers,
}: {
  email: string;
  name: string;
  avatar: string;
  followers: string[];
}) {
  return (
    <div className="flex flex-row items-center gap-10">
      <Avatar size="2xl" src={avatar} />
      <div>
        <h1 className="font-bold text-2xl">{name}</h1>
        <h1 className="text-l">{email}</h1>
        <a href="/followers">{followers.length} Followers</a>
      </div>
    </div>
  );
}
