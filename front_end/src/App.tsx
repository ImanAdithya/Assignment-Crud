import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from "./view/common/navbar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Designation} from "./view/pages/designation/Designation";
import {Employee} from "./view/pages/employee/Employee";

function App() {
  return (
   <div>
     <NavBar/>

       <BrowserRouter>
           <Routes>
               <Route path="/" Component={Designation}></Route>
               <Route path="/employee" Component={Employee}></Route>
           </Routes>
       </BrowserRouter>
   </div>
  );
}

export default App;
