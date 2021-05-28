import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";
function Banner() {
  const [movie, setmovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]);
        setmovie(response.data.results[0]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="bannner-button">
          <button className="button">play</button>
          <button className="button">my list</button>
        </div>
        <h1 className="discription">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
