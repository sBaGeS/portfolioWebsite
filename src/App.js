import React from 'react';
import { HashRouter, Route, Routes} from "react-router-dom";
import './App.css';

import Navbar from './components/navbar/Navbar.js';
import Home from './components/home/Home.js';
import Footer from './components/footer/Footer.js';
import Profile from './components/profile/Profile.js';
import ProjectTemplate from './components/projectOverviewTemplate/projectOverviewTemplate.js';
import Project1 from "./components/projectInfoPages/Project1.js";
import Project2 from "./components/projectInfoPages/Project2.js";
import Project3 from "./components/projectInfoPages/Project3.js";
import Project4 from "./components/projectInfoPages/Project4.js";

function App() {
  return (
    <div>
    <HashRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/all_projects" element={<ProjectTemplate />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/project1" element={<Project1 />} />
    <Route path="/project2" element={<Project2 />} />
    <Route path="/project3" element={<Project3 />} />
    <Route path="/project4" element={<Project4 />} />
   </Routes>
   <Footer/>
   </HashRouter>
   </div>
  );
}


export default App;
