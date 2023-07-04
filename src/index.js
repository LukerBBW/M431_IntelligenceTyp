import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import Quiz from "./quiz";
import Result from "./Result";
import {BrowserRouter, Route, Routes} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<App/>}/>
              <Route path={"/quiz"} element={<Quiz/>}/>
              <Route path={"/result"} element={<Result/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
