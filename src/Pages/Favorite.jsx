import React, { useEffect, useState } from "react";
import FavoriteCard from "../Components/FavoriteCard";
import DataNotFound from "../Components/DataNotFound";

export default function Favorite() {
  const [favoriteData, setFavoriteData] = useState([]);

  useEffect(() => {
    const storedFavorite = JSON.parse(localStorage.getItem("dataFavoriteList")) || [];
    setFavoriteData(storedFavorite);
  }, []);

  const handleRemoveFromFavoritelist = (favoriteId) => {
    const updatedFavoritelist = favoriteData.filter((movie) => movie.id !== favoriteId);
    setFavoriteData(updatedFavoritelist);
    localStorage.setItem("dataFavoriteList", JSON.stringify(updatedFavoritelist));
  };

  if (favoriteData.length === 0) {
    return <DataNotFound />;
  }

  return (
    <div className="bg-black" style={{ height: "100vh" }}>
      <div className="container py-5 ">
        <div className="my-4">
          <h4 className="text-white">Your Favorite Movies</h4>
          <div class="d-flex justify-content-between flex-wrap flex-row mb-3">
            {favoriteData?.map((el) => {
              return <FavoriteCard key={el?.id} handleRemoveFromFavoritelist={handleRemoveFromFavoritelist} id={el.id} image={el?.image} title={el?.title} years={el?.years} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
