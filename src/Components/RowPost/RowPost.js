import React, { useEffect, useState } from "react";
import "../RowPost/RowPost.css";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../constants/constants";
import Youtube from "react-youtube";
import YouTube from "react-youtube";
function RowPost(props) {
  const [movies, setmovies] = useState([]);
  const [urlid, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setmovies(response.data.results);
      })
      .catch((err) => {
        alert("network error");
      });
    return () => {};
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&languages=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          alert("trailer not avilable");
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>
      {urlid && <YouTube opts={opts} videoId={urlid.key} />}
    </div>
  );
}

export default RowPost;
