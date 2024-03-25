
import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage"

function App() {
  return (
  <>
   <BrowserRouter> <Routes>
 
 <Route  path="/" element={<Homepage/>}/>
 <Route  path="/nav" element={<Navbar/>}/>
 
    

 </Routes>

 </BrowserRouter>

   

     </>
  );
}

export default App;
