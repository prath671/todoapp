//App.js
import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./components/Todo";

function App() {
  const headStyle = {
    textAlign: "center",
  };
  return (
    <div className="app-background">
    <div>
      <h1 style={headStyle}><u>Time Table Management</u></h1>
          <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
