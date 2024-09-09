import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { getAllMemes } from "./api";
import EditPage from "./pages/Edit";

function App() {
  return (
    <div>
      <h1>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
