import React from "react";
import { Route, Routes , Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/directors" element={<Directors />}></Route>
        <Route path="/actors" element={<Actors />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
