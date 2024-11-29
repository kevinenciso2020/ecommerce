import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import Productos from "./productos";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </div>
  );
};

export default App;
