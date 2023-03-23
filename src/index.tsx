import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HelmetProvider>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </HelmetProvider>
);

reportWebVitals();
