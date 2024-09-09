import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WheatherProvider } from "./context/Wheather.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WheatherProvider>
      <App />
    </WheatherProvider>
  </StrictMode>
);
