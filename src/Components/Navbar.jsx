import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const access_token = localStorage.getItem("access_token");
  const navigation = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigation("/login");
  };
  return (
    <nav className={`navbar navbar-expand-lg pt-3 text-white`} style={{ backgroundColor: "#0EA5E9" }}>
      <div className="container">
        <Link className={`navbar-brand fs-4 fw-bold text-white `} style={{ letterSpacing: "5px" }} to="/">
          CINEMA
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <ul className="navbar-nav ms-md-5">
              <li className="nav-item mx-1" style={{ fontSize: "14px" }}>
                <Link className={`nav-link text-dark text-white fs-6 `} to="/favorite">
                  Favorite
                </Link>
              </li>
              <li className="nav-item mx-1" style={{ fontSize: "14px" }}>
                <Link className={`nav-link text-dark text-white fs-6 `} to="/watchlist">
                  Watchlist
                </Link>
              </li>
            </ul>
            {access_token ? (
              <button className="btn text-white rounded-pill px-4 fs-6" type="submit" style={{ backgroundColor: "#004e92", fontSize: "14px" }} onClick={handleLogout}>
                Log Out
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="btn text-white rounded-pill px-4 fs-6" type="submit" style={{ backgroundColor: "#004e92", fontSize: "14px" }}>
                  Sign Up
                </button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
