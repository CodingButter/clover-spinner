import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Manager from "./pages/manager";
import reportWebVitals from "./reportWebVitals";
import Providers from "./providers";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Providers>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="manager" element={<Manager />} />
          </Route>
        </Routes>
      </Providers>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
