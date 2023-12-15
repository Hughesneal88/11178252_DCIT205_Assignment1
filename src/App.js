import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./LoginPage";
import Dashboard from "./Dashboard"
// import './index.css';
import './App.css';
import Navbar from "./Navbar";
import Landing from "./LandingPage";
import InstructorContact from "./InstructorContact";
import Complaints from "./Complaints";


export default function App(){
  return (
  <BrowserRouter>
    {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/complaints" element={<><Navbar /><Complaints /></>} />
        <Route path="/contact" element={<><Navbar /><InstructorContact /></>} />
        <Route path="/report-grade" element={<><Navbar /><MissingGradeReport /></>} />
        <Route path="/gradebook" element={<><Navbar /><GradeReport /></>} />
        <Route path="/help" element={<><Navbar /><Help /></>} />
      </Routes>
    </BrowserRouter>
  
  );
}