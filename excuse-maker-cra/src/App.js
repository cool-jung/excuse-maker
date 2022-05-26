import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectPage from "./components/SelectPage";
import CategoryPage from "./components/CategoryPage";
import LandingPage from "./components/LandingPage";
import NoMatch from "./components/Error";
import Header from "components/Header";
import Layout from "components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />

        <Routes>
          <Route exact path="/select/:selected" element={<SelectPage />} />
          <Route exact path="/category" element={<CategoryPage />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
