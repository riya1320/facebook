import React from "react";
import { BrowserRouter, Router, Routes } from "react-router-dom";

import {Route, Switch} from "react-router-dom";
import './App.css';
import Header from  "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import Layout from "./Layout";




function App() {
  // const user = null;
  return (
   
     <div className="app">
         <div >
           
           <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route style={{display:"flex"}} exact path='/layout' element={< Layout  />}></Route>
                
          </Routes>

         </div>
       
      
     </div>
  
   
    
  
    
  );

}

export default App;