import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Authpage from "./pages/auth/Authpage";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProblemPage from "./pages/problems/[pid]";
import Dummy from "./components/Dummy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth" element={<Authpage />} />
          <Route path="/problems/*" element={<ProblemPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="dummy" element={<Dummy />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
    <ToastContainer />
  </RecoilRoot>
);
