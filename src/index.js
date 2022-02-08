import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//React Hooks
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import App from "./App";

//Import Pages
import Home from './Pages/Home';
import Success from './Pages/Success';
import Fail from './Pages/Fail';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path='/success' element={<Success/>}/>
      <Route path='fail' element={<Fail/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);