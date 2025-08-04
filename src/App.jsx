import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function LoginPage() {
  return <h1>Страница входа</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
