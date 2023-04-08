import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";

export default function Loading({ children }: { children: any }) {
  const loading = useContext(LoadingContext);

  if (loading.isLoading) {
    return (
      <div className="loading">
        <div className="loading__spinner"></div>
      </div>
    );
  } else {
    return <>{children} </>;
  }
}
