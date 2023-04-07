import { FormLabel, Input } from "@chakra-ui/react";

export default function InputField({
  className,
  children,
  type = "text",
  onChange,
  disabled,
  value,
}: {
  className?: string;
  children: any;
  type?: string;
  onChange: (e: any) => void;
  disabled?: boolean;
  value?: string;
}) {
  return (
    <>
      <FormLabel className="pt-2">{children}</FormLabel>
      <Input
        className={className}
        onChange={onChange}
        placeholder="Enter"
        type={type}
        bgColor={"white"}
        disabled={disabled}
        defaultValue={value}
      />
    </>
  );
}
