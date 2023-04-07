import { useContext, useEffect } from "react";

import { UserContext } from "../../contexts/UserContext";
import { getUser } from "../../routes/profile";
import UserCreds from "./components/UserCreds";

export default function ProfilePage() {
  const user = useContext(UserContext);

  useEffect(() => {
    async function fetchUser(token: string) {
      const User = await getUser(token);
      if (User.error) {
        alert(User.error.message);
        window.location.href = "/";
      } else {
        user.setUser(User);
      }
    }
    if (user.user.email) return;
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please Login First!");
      window.location.href = "/";
    } else {
      fetchUser(token);
    }
  }, [user]);
  return <UserCreds />;
}
