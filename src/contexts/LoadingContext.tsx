import { createContext, useState } from "react";

export const LoadingContext = createContext({
  isLoading: true,
  setIsLoading: (value: boolean) => {},
});

export function LoadingProvider({ children }: { children: any }) {
  const [isLoading, setIsLoading] = useState(true);

  const context = {
    isLoading,
    setIsLoading: setIsLoading,
  };

  return (
    <LoadingContext.Provider value={context}>
      {children}
    </LoadingContext.Provider>
  );
}
