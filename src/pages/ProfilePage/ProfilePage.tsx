import { useContext, useEffect, useState } from "react";

import UserCreds from "./components/UserCreds";
import SubmitButton from "../../components/SubmitButton";
import AboutField from "./components/AboutField";
import SocialsField from "./components/SocialsField";
import FieldLabel from "./components/FieldLabel";
import { getUser, updateUser } from "../../routes/profile";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function ProfilePage() {
  const host = useContext(UserContext).user;
  const [user, setUser] = useState({
    name: "",
    username: "",
    description: "",
    socials: {
      github: "",
      linkedin: "",
      facebook: "",
      twitter: "",
      instagram: "",
      website: "",
    },
    followers: [],
    following: [],
  });
  const id = useParams().id;

  useEffect(() => {
    const fetchUser = async (token: string) => {
      const User = await getUser(token, id);
      if (User.error) {
        alert(User.error.message);
        window.location.href = "/";
      } else {
        setUser({ ...User, token });
      }
    };
    if (host.token) {
      fetchUser(host.token);
    } else {
      alert("Please Login First!");
      window.location.href = "/";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const followHandler = async () => {
    console.log("Follow");
    const updatedUser = await updateUser(host.token, {
      followers: [...host.followers, id],
    });
    if (updatedUser.error) {
      alert(updatedUser.error);
    }
  };

  return (
    <>
      <UserCreds user={user}>
        <SubmitButton onClick={followHandler}>Follow</SubmitButton>
      </UserCreds>

      <FieldLabel label="About" disabled={true}>
        <AboutField value={user.description} disabled={true} />
      </FieldLabel>

      <FieldLabel label="Socials" disabled={true}>
        <SocialsField socials={user.socials} disabled={true} />
      </FieldLabel>
    </>
  );
}
