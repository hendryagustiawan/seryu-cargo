import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById, getNowPlaying } from "../store/Actions";
import formatTime from "../lib/changeFormatTime";
import changeYears from "../lib/getYears";
import NowPlayingCard from "../Components/NowPlayingCard";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const urlImage = "https://image.tmdb.org/t/p/original";

  const { detailMovie, nowPlaying } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getNowPlaying());
    dispatch(getMovieById(id));
  }, []);

  return (
    <div>
      <div>
        <div>
          <div className="bg-image" style={{ backgroundImage: `url(${urlImage}${detailMovie?.backdrop_path})`, height: "400px" }}>
            <div className="d-flex py-5   align-items-center container">
              <div className="col-md-6 col-lg-3 col-xl-3">
                <img src={`${urlImage}${detailMovie?.poster_path}`} style={{ height: "300px" }} className="img-thumbnail" alt="..." />
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 text-white">
                <h5 className="fw-semibold ">
                  {detailMovie?.title} ({changeYears(detailMovie?.release_date)})
                </h5>
                <span>{detailMovie?.release_date}</span> -{" "}
                <span>
                  {detailMovie?.genres?.map((el) => {
                    return <span key={el.id}>{el?.name}, </span>;
                  })}
                </span>{" "}
                - <span>{formatTime(detailMovie?.runtime)}</span>
                <p>{detailMovie?.tagline}</p>
                <h6>Overview</h6>
                <p>{detailMovie?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-5">
        <div className="container ">
          <h4 className="fs-bold text-white">Recommendations</h4>
          <div className="d-flex flex-row mb-3 overflow-auto">
            {nowPlaying?.results?.map((el) => {
              return <NowPlayingCard key={el?.id} id={el.id} image={el?.poster_path} title={el?.title} years={el?.release_date} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
