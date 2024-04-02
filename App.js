import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
import Account_Page from "./Components/Account_Page";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account_Page />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
