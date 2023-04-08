import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

export default function InputField({
  className,
  children,
  label,
  type = "text",
  onChange,
  onSubmit,
  disabled,
  value,
}: {
  className?: string;
  children?: any;
  label: string;
  type?: string;
  onChange?: (e: any) => void;
  onSubmit?: (e: any) => void;
  disabled?: boolean;
  value?: string;
}) {
  return (
    <InputGroup className={className}>
      <InputLeftAddon children={children} />
      <Input
        _disabled={{
          textColor: "black",
        }}
        onChange={onChange}
        placeholder={label}
        type={type}
        disabled={disabled}
        defaultValue={value}
      />
    </InputGroup>
  );
}
