import React from "react";
import changeYears from "../lib/getYears";

export default function TopRatedCard({ image, title, years }) {
  const urlImage = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <div className="p-2">
        <div className="card" style={{ width: "15rem", backgroundColor: "#050E12" }}>
          <div className="position-relative">
            <img src={`${urlImage}${image}`} className="card-img-top" alt="image-film" />
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
