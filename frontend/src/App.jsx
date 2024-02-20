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
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Nav from "./components/navbar/Nav";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Login from "./pages/login/Login";
import { AdminNavbar } from "./components";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <AdminNavbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/ip-assets" element={<IPassets />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
