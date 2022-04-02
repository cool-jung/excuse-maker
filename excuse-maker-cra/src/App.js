import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SelectPage from "./components/SelectPage";
import CategoryPage from "./components/CategoryPage";
import LandingPage from "./components/LandingPage";

function App() {
  return (
      <BrowserRouter>
            <Routes>
              <Route exact path="/select" element={<SelectPage/>}/>
              <Route exact path="/category" element={<CategoryPage/>}/>
              <Route exact path="/" element={<LandingPage />}/>
            </Routes>
          </BrowserRouter>
    
  );
}

export default App;

