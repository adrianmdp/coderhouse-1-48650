import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { UserDetail, Users } from "./pages";

import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
