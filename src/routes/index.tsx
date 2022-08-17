import { App } from "../views/app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../views/login";

export const RoutesContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  ); 
};