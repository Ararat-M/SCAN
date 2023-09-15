import "./index.scss";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootNode = document.getElementById("root");
if (rootNode != null) {
  const root = createRoot(rootNode);
  root.render(
    <App />
  );
}