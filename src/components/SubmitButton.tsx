import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function SubmitButton({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick: () => void | Promise<void>;
  className?: string;
}) {
  return (
    <Button
      type="submit"
      onClick={onClick}
      className={className}
      colorScheme="blue"
    >
      {children}
    </Button>
  );
}
