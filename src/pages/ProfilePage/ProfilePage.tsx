import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUser } from "../../routes/profile";

export default function ProfilePage() {
  const user = useContext(UserContext);

  useEffect(() => {
    async function fetchUser(token: string) {
      const User = await getUser(token);
      if (User.error) {
        alert(User.error.message);
      } else {
        user.setUser(User);
      }
    }
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please Login First!");
      window.location.href = "/";
    } else {
      fetchUser(token);
    }
  });
  return (
    <>
      <h1>{user.user.name}</h1>
      <h1>{user.user.email}</h1>
    </>
  );
}
