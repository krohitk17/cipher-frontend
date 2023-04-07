import { Input } from "@chakra-ui/react";

export default function InputField({
  className,
  placeholder,
  type,
  onChange,
}: {
  className?: string;
  placeholder?: string;
  type?: string;
  onChange: (e: any) => void;
}) {
  return (
    <Input
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      bgColor={"white"}
    />
  );
}
