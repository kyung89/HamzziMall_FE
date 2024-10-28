import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage1 from "../pages/TestPage1";
import TestPage2 from "../pages/TestPage2";

export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage1 />} />
          <Route path="/2" element={<TestPage2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
