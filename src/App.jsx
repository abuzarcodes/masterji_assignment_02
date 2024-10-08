import { useState } from "react";
import ChaiCode from "./components/ChaiCode";
import RandomUsers from "./pages/RandomUsers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomJokes from "./pages/RandomJokes";
import CatListings from "./pages/CatListings";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RandomUsers />} />
        <Route path="random-user" element={<RandomUsers />} />
        <Route path="random-jokes" element={<RandomJokes />} />
        <Route path="cats-listing" element={<CatListings />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
