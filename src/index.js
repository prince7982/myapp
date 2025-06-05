import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './modules/auth/Loginpage';
import Registerpage from './modules/auth/Registerpage';
import Errorpage from './modules/shares/Errorpage';
import MyEffect from './MyEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Loginpage/>}></Route>
        <Route path='register' element={<Registerpage/>}></Route>
        <Route path='*' element={<Errorpage/>}></Route>
        <Route path='myeffect' element={<MyEffect/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
