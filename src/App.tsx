import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Home/home";
import Auth from "./Auth/auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </>
  );
}

export default App;
