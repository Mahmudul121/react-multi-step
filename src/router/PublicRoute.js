import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Result from "../pages/result/Result";

const PublicRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
};

export default PublicRoute;
