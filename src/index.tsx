import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import { LoadingProvider } from "./contexts/LoadingContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <LoadingProvider>
    <App />
  </LoadingProvider>
);
