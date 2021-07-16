import React, { useState } from "react";

import { Card, Button, Icon, Image } from "semantic-ui-react";

import Api from "../utils/Api";

import DetailMovie from "./DetailMovie";

const ItemMovie = ({ Poster, Title, Year, imdbID, Movie }) => {
  const [detail, setDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const clickShowDetail = (e) => {
    console.log(e.target.id);
    Api.getMoviesDetail(e.target.id)
      .then((resp) => {
        // console.log(resp.data);
        if (resp.data.Response === "True") {
          setDetail(resp.data);
          setShowDetail(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Card style={{ with: "270px" }}>
        <Card.Content header={Title} />
        <Card.Content
          style={{
            height: "300px",
            backgroundImage: `url(${Poster})`,
            backgroundSize: "cover",
          }}
        ></Card.Content>

        <Card.Content extra>
          <Button
            color="blue"
            floated="right"
            id={imdbID}
            onClick={clickShowDetail}
          >
            Details
          </Button>
        </Card.Content>
      </Card>

      <DetailMovie
        detail={detail}
        showDetail={showDetail}
        setShowDetail={setShowDetail}
      />
    </>
  );
};
export default ItemMovie;
