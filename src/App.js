import React, { useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import MoviesContext from "./context/MoviesContext";

import MoviesList from "./components/MoviesList";
import MoviesFavs from "./components/MoviesFavs";

import "semantic-ui-css/semantic.min.css";

export const App = () => {
  const [titulo, setTitulo] = useState("John Wick");

  return (
    <>
      <MoviesContext.Provider value={{ titulo, setTitulo }}>
        <Router>
          <Route path="/" exact component={MoviesList} />
          <Route path="/favs" exact component={MoviesFavs} />
        </Router>
      </MoviesContext.Provider>
    </>
  );
};
