import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useRedux } from "./hooks";
import './css/tailwind.css';
import { StartCampaign } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="bg-white h-screen w-screen overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<StartCampaign />}></Route>
        </Routes>
        <ToastContainer />
      </Router>
      </div>
  );
};

export default App;
