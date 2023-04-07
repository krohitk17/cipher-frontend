import { useContext, useEffect, useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

import { UserContext } from "../../contexts/UserContext";
import { getUser, updateUser } from "../../routes/profile";
import UserCreds from "./components/UserCreds";
import Overlay from "../../components/Overlay";
import SubmitButton from "../../components/SubmitButton";
import AboutField from "./components/AboutField";
import SocialsField from "./components/SocialsField";
import FieldLabel from "./components/FieldLabel";
import Navbar from "./components/Navbar";

export default function ProfilePage() {
  const user = useContext(UserContext);
  const [overlay, setOverlay] = useState(false);
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
    const fetchUser = async (token: string) => {
      const User = await getUser(token);
      if (User.error) {
        localStorage.removeItem("token");
        window.location.href = "/";
      } else {
        user.setUser({ ...User, token });
      }
    };
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please Login First!");
      window.location.href = "/";
    } else {
      fetchUser(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
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
      user.setUser(updatedUser);
      setEdit(false);
    }
  };

  const logoutButtonHandler = () => {
    localStorage.removeItem("token");
    alert("Successfully logged out");
    window.location.href = "/";
  };

  return (
    <>
      <Navbar>
        <UserCreds
          email={user.user.email}
          name={user.user.name}
          avatar={user.user.avatar}
          followers={user.user.followers}
        />
        <div className="flex flex-col gap-5">
          <SubmitButton onClickHandler={logoutButtonHandler}>
            Logout
          </SubmitButton>
          <SubmitButton onClickHandler={() => setOverlay(true)}>
            Change Avatar
          </SubmitButton>
        </div>

        <Overlay
          show={overlay}
          onClose={() => {
            setOverlay(false);
          }}
          title="Change Profile Picture"
        >
          <FormControl>
            <FormLabel>Select Image</FormLabel>
            <Input type="file" />
          </FormControl>
        </Overlay>
      </Navbar>

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
