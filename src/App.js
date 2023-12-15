import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./LoginPage";
import Dashboard from "./Dashboard"
// import './index.css';
import './App.css';
import Navbar from "./Navbar";
import Landing from "./LandingPage";
import InstructorContact from "./InstructorContact";
import Complaints from "./Complaints";
import MissingGradeReport from "./missingGradeform";
import GradeReport from "./gradeReport";
import Help from './help';


export default function App(){
  return (
  <BrowserRouter>
    {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/contact" element={<InstructorContact /> } />
        <Route path="/report-grade" element={<MissingGradeReport />} />
        <Route path="/gradebook" element={<GradeReport />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  
  );
}