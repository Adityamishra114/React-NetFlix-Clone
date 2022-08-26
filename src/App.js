import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import { AuthContextProvider } from "./AuthContext";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import Account from "./pages/Account";
// import ProtectedRoute from "./components/Protected";
function App() {
  return (
    <>
      {/* <AuthContextProvider> */}
      <Navbar />
      <Routes>
        <Route exact path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          /> */}
      </Routes>
      {/* </AuthContextProvider> */}
    </>
  );
}

export default App;
