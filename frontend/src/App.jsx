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
import AdminAuthors from "./pages/admin/authors/AdminAuthors";
import UserAccounts from "./pages/admin/useraccounts/UserAccounts";
import Logs from "./pages/admin/logs/Logs";

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
          <Route path="/admin/authors" element={<AdminAuthors />} />
          <Route path="/admin/useraccounts" element={<UserAccounts />} />
          <Route path="/admin/logs" element={<Logs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
