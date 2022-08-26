import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path={process.env.PUBLIC_URL + "/"} element={<Home />} />
    </>
  );
}

export default App;
