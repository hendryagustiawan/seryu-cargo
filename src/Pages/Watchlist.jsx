import React, { useEffect, useState } from "react";
import WatchListCard from "../Components/WatchListCard";
import DataNotFound from "../Components/DataNotFound";

export default function Watchlist() {
  const [watchlistData, setWatchlistData] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem("dataWatchList")) || [];
    setWatchlistData(storedWatchlist);
  }, []);

  const handleRemoveFromWatchlist = (movieId) => {
    const updatedWatchlist = watchlistData.filter((movie) => movie.id !== movieId);
    setWatchlistData(updatedWatchlist);
    localStorage.setItem("dataWatchList", JSON.stringify(updatedWatchlist));
  };

  if (watchlistData.length === 0) {
    return <DataNotFound />;
  }

  return (
    <div className="bg-black" style={{ height: "100vh" }}>
      <div className="container py-5 ">
        <div className="my-4">
          <h4 className="text-white">Your Watchlist</h4>
          <div class="d-flex justify-content-between flex-wrap flex-row mb-3">
            {watchlistData?.map((el) => {
              return <WatchListCard key={el?.id} handleRemoveFromWatchlist={handleRemoveFromWatchlist} id={el.id} image={el?.image} title={el?.title} years={el?.years} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
