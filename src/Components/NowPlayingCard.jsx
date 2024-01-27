import React, { useState } from "react";
import changeYears from "../lib/getYears";
import { Link } from "react-router-dom";
import { errorMsg } from "../lib/toastNotification";

export default function NowPlayingCard({ id, image, title, years }) {
  const [watchList, setWatchList] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const urlImage = "https://image.tmdb.org/t/p/original";

  const saveWatchListToLocalStorage = (data) => {
    localStorage.setItem("dataWatchList", JSON.stringify(data));
    setWatchList(data);
  };

  const addToWatchlist = (dataWatchList) => {
    const isDuplicate = watchList.some((item) => item.id === dataWatchList.id);

    if (!isDuplicate) {
      const updatedWatchList = [...watchList, dataWatchList];
      saveWatchListToLocalStorage(updatedWatchList);
    } else {
      errorMsg("Item with the same ID already exists in watchlist.");
    }
  };

  const saveFavoriteToLocalStorage = (data) => {
    localStorage.setItem("dataFavoriteList", JSON.stringify(data));
    setFavorite(data);
  };

  const addFavorite = (favorites) => {
    const isDuplicate = favorite.some((item) => item.id === favorites.id);

    if (!isDuplicate) {
      const updatedFavoriteList = [...favorite, favorites];
      saveFavoriteToLocalStorage(updatedFavoriteList);
    } else {
      errorMsg("Item with the same ID already exists in favorites.");
    }
  };

  return (
    <div>
      <div className="p-2">
        <div className="card" style={{ width: "15rem", backgroundColor: "#050E12" }}>
          <div className="position-relative">
            <Link to={`detail/${id}`}>
              {" "}
              <img src={`${urlImage}${image}`} className="card-img-top" alt="image-film" />{" "}
            </Link>

            <i onClick={() => addFavorite({ id, image, title, years })} className="fa-regular fa-heart position-absolute fa-xl " style={{ bottom: 30, left: 200, cursor: "pointer", color: "#ffff" }}></i>
            <i onClick={() => addToWatchlist({ id, image, title, years })} className="fa-regular fa-bookmark position-absolute fa-xl" style={{ bottom: 30, left: 170, cursor: "pointer", color: "#ffff" }}></i>
          </div>

          <div className="card-body">
            <p className="card-title text-sm fw-semibold" style={{ color: "#B6B6B6" }}>
              {title}
            </p>
            <p className="card-text" style={{ color: "#828282" }}>
              {changeYears(years)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
