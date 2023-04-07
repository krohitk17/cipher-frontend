import { useState, createContext } from "react";

class User {
  token: string;
  name: string;
  email: string;
  followers: string[];
  following: string[];
  description: string;
  avatar: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
    website: string;
  };
  constructor() {
    this.token = "";
    this.name = "";
    this.email = "";
    this.followers = [];
    this.following = [];
    this.description = "";
    this.avatar = "";
    this.socials = {
      github: "",
      linkedin: "",
      twitter: "",
      facebook: "",
      instagram: "",
      website: "",
    };
  }
}

export const UserContext = createContext({
  user: new User(),
  setUser: (user: User) => {},
});

export function UserProvider({ children }: { children: any }) {
  const [user, setUser] = useState(new User());

  const context = {
    user,
    setUser: setUser,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}
