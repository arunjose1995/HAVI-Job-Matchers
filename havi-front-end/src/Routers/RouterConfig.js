import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/Home";
import SignIn from "../Components/Login";
import SignUp from "../Components/Registration";
// import DashBoard from '../Components/Dashboard';
// import DashBoard1 from "../Components/Dashboard1";

function RouterConfig() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/Forget" element={<SignIn />} />
        <Route path="/Registration" element={<SignUp />} />

      </Routes>
    </div>
  );
}
export default RouterConfig;
