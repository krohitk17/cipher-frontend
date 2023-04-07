import { Textarea } from "@chakra-ui/react";

export default function AboutField({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}) {
  return (
    <Textarea
      maxLength={150}
      className="text-black"
      disabled={disabled}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
}
