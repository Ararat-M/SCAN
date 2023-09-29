import "./styles/index.scss";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "store";

const rootNode = document.getElementById("root");
if (rootNode != null) {
  const root = createRoot(rootNode);

  root.render(
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  );
}