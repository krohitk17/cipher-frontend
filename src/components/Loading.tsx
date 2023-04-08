import { Spinner } from "@chakra-ui/react";

export default function Loading({
  children,
  isLoading,
}: {
  children: any;
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className="h-full w-full items-center justify-center">
        <Spinner />
      </div>
    );
  } else {
    return <>{children} </>;
  }
}
