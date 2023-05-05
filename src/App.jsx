import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./section/Home";
import Login from "./components/Login";
import Register from "./components/register/Register";

// const ProtectedRoute = () => {
//   const token = localStorage.getItem("isLogin");
//   if (token == true) {
//   } else {
//   }
// };

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            <Fragment>
              <h1>Not Found</h1>
              <Link to={"/"} style={{ color: "red" }}>
                Click here for Login page
              </Link>
            </Fragment>
          }
        />
      </Routes>
    </>
  );
}
