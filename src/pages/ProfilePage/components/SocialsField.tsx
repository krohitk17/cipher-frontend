import {
  BsFacebook,
  BsGithub,
  BsGlobe,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import InputField from "../../../components/InputField";

export default function SocialsField({
  socials,
  onChange = (e: any) => {},
  disabled,
}: {
  disabled?: boolean;
  socials: {
    github: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    website: string;
  };
  onChange?: (socials: {
    github: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    website: string;
  }) => void;
}) {
  return (
    <div className="flex flex-row justify-between gap-10">
      <div className="w-full">
        <InputField
          label="GitHub"
          onChange={(e: any) => {
            onChange({ ...socials, github: e.target.value });
          }}
          disabled={disabled}
          value={socials.github}
        >
          <BsGithub />
        </InputField>
        <InputField
          label="LinkedIn"
          onChange={(e: any) => {
            onChange({ ...socials, linkedin: e.target.value });
          }}
          disabled={disabled}
          value={socials.linkedin}
        >
          <BsLinkedin />
        </InputField>
        <InputField
          label="Facebook"
          onChange={(e: any) => {
            onChange({ ...socials, facebook: e.target.value });
          }}
          disabled={disabled}
          value={socials.facebook}
        >
          <BsFacebook />
        </InputField>
      </div>
      <div className="w-full">
        <InputField
          label="Twitter"
          onChange={(e: any) => {
            onChange({ ...socials, twitter: e.target.value });
          }}
          disabled={disabled}
          value={socials.twitter}
        >
          <BsTwitter />
        </InputField>
        <InputField
          label="Instagram"
          onChange={(e: any) => {
            onChange({ ...socials, instagram: e.target.value });
          }}
          disabled={disabled}
          value={socials.instagram}
        >
          <BsInstagram />
        </InputField>
        <InputField
          label="Website"
          onChange={(e: any) => {
            onChange({ ...socials, website: e.target.value });
          }}
          disabled={disabled}
          value={socials.website}
        >
          <BsGlobe />
        </InputField>
      </div>
    </div>
  );
}
