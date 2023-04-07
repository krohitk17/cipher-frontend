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
  onChange,
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
  onChange: (socials: {
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
          onChange={(e: any) => {
            onChange({ ...socials, github: e.target.value });
          }}
          disabled={disabled}
          value={socials.github}
        >
          <div className="flex flex-row gap-2 items-center">
            <BsGithub />
            GitHub
          </div>
        </InputField>
        <InputField
          onChange={(e: any) => {
            onChange({ ...socials, linkedin: e.target.value });
          }}
          disabled={disabled}
          value={socials.linkedin}
        >
          <div className="flex flex-row gap-2 items-center">
            <BsLinkedin />
            LinkedIn
          </div>
        </InputField>
        <InputField
          onChange={(e: any) => {
            onChange({ ...socials, facebook: e.target.value });
          }}
          disabled={disabled}
          value={socials.facebook}
        >
          <div className="flex flex-row gap-2 items-center">
            <BsFacebook />
            Facebook
          </div>
        </InputField>
      </div>
      <div className="w-full">
        <InputField
          onChange={(e: any) => {
            onChange({ ...socials, twitter: e.target.value });
          }}
          disabled={disabled}
          value={socials.twitter}
        >
          <div className="flex flex-row gap-2 items-center">
            <BsTwitter />
            Twitter
          </div>
        </InputField>
        <InputField
          onChange={(e: any) => {
            onChange({ ...socials, instagram: e.target.value });
          }}
          disabled={disabled}
          value={socials.instagram}
        >
          <div className="flex flex-row gap-2 items-center">
            <BsInstagram />
            InstaGram
          </div>
        </InputField>
        <InputField
          onChange={(e: any) => {
            onChange({ ...socials, website: e.target.value });
          }}
          disabled={disabled}
          value={socials.website}
        >
          <div className="flex flex-row gap-2 items-center">
            <BsGlobe />
            Website
          </div>
        </InputField>
      </div>
    </div>
  );
}
