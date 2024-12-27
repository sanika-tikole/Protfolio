import React from 'react';
import Home from './Home/Home';
import Project from './component/Project';
import{ Route, Routes } from 'react-router-dom';
import Projects from './Projects/Projects';
import CustomCursor from './component/customcursor';

function App() {
  return (
    <>
    {/* <Home/>
     <Project/>*/}
     <CustomCursor/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/project" element={<Projects/>}/>
    </Routes>
   
    </>
  )
}

export default App

