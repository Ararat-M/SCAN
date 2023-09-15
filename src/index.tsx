import "./styles/index.scss";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

const rootNode = document.getElementById("root");
if (rootNode != null) {
  const root = createRoot(rootNode);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}