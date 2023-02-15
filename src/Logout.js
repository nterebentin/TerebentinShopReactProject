import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";

function Logout () {
   
    const navigate = useNavigate();
 
    useEffect(() => {

        localStorage.setItem("userName", "");
     
      }, [])
  
  return (
    <div className="App">

        <br /><br /><br /><br /><br />
        <h2>Çıkış Yapıldı</h2>

    </div>
  );
}

export default Logout;