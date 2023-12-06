import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./LoginPage";
// import './index.css';
import './App.css';
// import Navbar from "./Navbar";


export default function App(){
  return (
  <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InstructorComplaints" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  
  );
}