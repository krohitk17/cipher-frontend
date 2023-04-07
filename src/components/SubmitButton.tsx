import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function SubmitButton({
  children,
  onClickHandler,
  className,
}: {
  children: ReactNode;
  onClickHandler: () => void;
  className?: string;
}) {
  return (
    <Button
      type="submit"
      onClick={onClickHandler}
      className={" bg-blue-500 " + className}
    >
      {children}
    </Button>
  );
}
