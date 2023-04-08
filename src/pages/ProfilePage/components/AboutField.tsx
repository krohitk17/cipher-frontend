import { Textarea } from "@chakra-ui/react";

export default function AboutField({
  value,
  onChange = (e: any) => {},
  disabled,
}: {
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}) {
  return (
    <Textarea
      _disabled={{
        textColor: "black",
      }}
      maxLength={150}
      disabled={disabled}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
}
