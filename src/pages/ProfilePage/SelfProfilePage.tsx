import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../contexts/UserContext";
import { updateUser } from "../../routes/profile";
import UserCreds from "./components/UserCreds";
import AboutField from "./components/AboutField";
import SocialsField from "./components/SocialsField";
import FieldLabel from "./components/FieldLabel";

export default function SelfProfilePage() {
  const user = useContext(UserContext);
  const [about, setAbout] = useState("");
  const [aboutEdit, setAboutEdit] = useState(false);
  const [socials, setSocials] = useState({
    github: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    instagram: "",
    website: "",
  });
  const [socialsEdit, setSocialsEdit] = useState(false);

  useEffect(() => {
    if (!user.user) {
      alert("Please Login First!");
      window.location.href = "/";
    }
    setAbout(user.user.description);
    setSocials(user.user.socials);
  }, [user]);

  const submitHandler = async (
    setEdit: (value: boolean) => void,
    data: any
  ) => {
    const updatedUser = await updateUser(user.user.token!, data);
    if (updatedUser.error) {
      alert(updatedUser.error);
    } else {
      user.setUser({ ...updatedUser, token: user.user.token! });
      setEdit(false);
    }
  };

  return (
    <>
      <UserCreds user={user.user}></UserCreds>

      <FieldLabel
        label="About"
        edit={aboutEdit}
        setEdit={setAboutEdit}
        value={user.user.description}
        setValue={setAbout}
        onSubmit={() => submitHandler(setAboutEdit, { description: about })}
      >
        <AboutField value={about} onChange={setAbout} disabled={!aboutEdit} />
      </FieldLabel>

      <FieldLabel
        label="Socials"
        edit={socialsEdit}
        setEdit={setSocialsEdit}
        value={user.user.socials}
        setValue={setSocials}
        onSubmit={() => submitHandler(setSocialsEdit, { socials: socials })}
      >
        <SocialsField
          socials={socials}
          onChange={setSocials}
          disabled={!socialsEdit}
        />
      </FieldLabel>
    </>
  );
}
