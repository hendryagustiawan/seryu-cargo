import React, { Suspense, lazy, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getNowPlaying, getTopRated } from "../store/Actions";

const NowPlayingCard = lazy(() => import("../Components/NowPlayingCard"));
const TopRatedCard = lazy(() => import("../Components/TopRatedCard."));
const DataNotFound = lazy(() => import("../Components/DataNotFound"));

export default function Home() {
  const dispatch = useDispatch();

  const { nowPlaying, topRated } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getNowPlaying());
    dispatch(getTopRated());
  }, []);

  if (nowPlaying === undefined || topRated === undefined) {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <DataNotFound />;
        </Suspense>
      </>
    );
  }

  return (
    <div>
      <div className="bg-black">
        <div className="container py-5 ">
          <div>
            <h4 className="fs-bold text-white">Now Playing</h4>
            <Suspense fallback={<div>Loading...</div>}>
              <div className="d-flex flex-row mb-3 overflow-auto">
                {nowPlaying?.results?.map((el) => {
                  return <NowPlayingCard key={el?.id} id={el.id} image={el?.poster_path} title={el?.title} years={el?.release_date} />;
                })}
              </div>
            </Suspense>
          </div>
          <div className="my-4">
            <h4 className="text-white">Top Rated</h4>
            <Suspense fallback={<div>Loading...</div>}>
              <div className="d-flex   justify-content-between flex-wrap flex-row mb-3">
                {topRated?.results?.map((el) => {
                  return <TopRatedCard key={el?.id} id={el.id} image={el?.poster_path} title={el?.title} years={el?.release_date} />;
                })}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
