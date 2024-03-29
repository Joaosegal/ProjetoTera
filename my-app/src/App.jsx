import React from 'react';
import Home from './components/pages/Home';
import Registermodal from './components/modal/Registermodal';
import Registerlogin from './components/modal/Registerlogin';
import UserDetail from './components/modal/Userdetail';
import Feed from './components/pages/Feed'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/style.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Registermodal />} />
        <Route path="/login" element={<Registerlogin />} />
        <Route path="/UserDetail" element={<UserDetail />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
