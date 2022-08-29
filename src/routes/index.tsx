import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "../views/app";
import { Login } from "../views/login";
import { Project } from "../views/project";

import { Header } from "../components/Header/Header";

export const RoutesContainer = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<App />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </BrowserRouter>
  ); 
};