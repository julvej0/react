import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Publications,
  Home,
  IPassets,
  SignUp,
  UserProfile,
} from "../src/pages/public-user";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Login from "./pages/login/Login";
import AdminPublications from "./pages/admin/publications/AdminPublications";
import AdminIPassets from "./pages/admin/ipassets/AdminIPassets";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/ip-assets" element={<IPassets />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/publications" element={<AdminPublications />} />
          <Route path="/admin/ipassets" element={<AdminIPassets />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
