import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Upload from "./components/Upload";
import VideoList from "./components/VideoList";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/videos" element={<VideoList />} />
    </Routes>
  </Router>
);

export default App;
