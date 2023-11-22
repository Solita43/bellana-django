// import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Splash from "./components/SplashPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
