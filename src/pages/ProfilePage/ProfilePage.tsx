import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UserCreds from "./components/UserCreds";
import SubmitButton from "../../components/SubmitButton";
import AboutField from "./components/AboutField";
import SocialsField from "./components/SocialsField";
import FieldLabel from "./components/FieldLabel";
import { getUser, updateUser } from "../../routes/profile";
import { User, UserContext } from "../../contexts/UserContext";

export default function ProfilePage() {
  const host = useContext(UserContext);
  const [user, setUser] = useState(new User());
  const id = useParams().id;

  useEffect(() => {
    console.log(host);
    (async () => {
      if (host.user.token) {
        const User = await getUser(host.user.token, id);
        if (User.error) {
          alert(User.error.message);
          window.location.href = "/";
        } else {
          setUser({ ...User });
        }
      } else {
        alert("Please Login First!");
        window.location.href = "/";
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const followHandler = async () => {
    console.log("Follow");
    const following = host.user.following;
    if (following.includes(id!)) {
      const index = following.indexOf(id!);
      following.splice(index, 1);
    } else {
      following.push(id!);
    }
    const updatedUser = await updateUser(host.user.token, {
      following: following,
    });
    console.log(updatedUser);
    if (updatedUser.error) {
      alert(updatedUser.error);
    } else {
      host.setUser({ ...host.user, following: updatedUser.following });
    }
  };

  return (
    <>
      <UserCreds user={user}>
        <SubmitButton onClick={followHandler}>
          {host.user.following.includes(id!) ? "Unfollow" : "Follow"}
        </SubmitButton>
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
