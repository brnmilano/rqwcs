import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/index.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
