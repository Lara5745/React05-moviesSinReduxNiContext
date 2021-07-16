import React, { useState, useEffect, useContext } from "react";

import { Card, Segment } from "semantic-ui-react";

import MoviesContext from "../context/MoviesContext";

import Api from "../utils/Api";

import NavBar from "./NavBar";
import ItemMovie from "./ItemMovie";

const MoviesList = () => {
  const { titulo } = useContext(MoviesContext);

  const [movieslist, setMovieslist] = useState([]);

  useEffect(() => {
    fetchData(titulo);
  }, []);

  const fetchData = (title) => {
    Api.getMovies(title)
      .then((resp) => {
        if (resp.data.Response === "True") {
          setMovieslist(resp.data.Search);
        } else {
          console.log(resp.data.Error);
        }
      })
      .catch((err) => {
        console.log("ERROR mANEJADO POR MI", err);
      });
  };

  const createItems = () => {
    return movieslist.map((movie) => (
      <ItemMovie
        Poster={movie.Poster}
        Title={movie.Title}
        Year={movie.Year}
        imdbID={movie.imdbID}
        Movie={movie.Movie}
      />
    ));
  };

  return (
    <>
      <NavBar fetchData={fetchData} name="home" />
      <Segment raised>
        <Card.Group>{createItems()}</Card.Group>
      </Segment>
    </>
  );
};

export default MoviesList;
