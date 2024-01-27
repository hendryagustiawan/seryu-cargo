import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { errorMsg } from "../lib/toastNotification";

const baseURL = "https://api.themoviedb.org/4/";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(
        `${baseURL}auth/request_token`,
        {},
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDA4MGM3N2JjNWM1MmE2MTZhNmY0ODZkYTdlMTUwOSIsInN1YiI6IjYyZjFiNzE2ODViMTA1MDA3ZGYxMTQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8y01q_8I6xvyqfZRtl209Fyycu4piwNAf03wg-u_0ZE",
          },
        }
      )
      .then(({ data }) => {
        localStorage.setItem("access_token", data.request_token);
        navigate("/");
      })
      .catch((error) => {
        errorMsg(error);
      });
  };

  return (
    <div className="container-fluid d-flex py-5 justify-content-center align-items-center" style={{ backgroundColor: "#020916", height: "100vh" }}>
      <div className="border py-5 rounded-3 shadow border-0" style={{ backgroundCcolor: "#182131" }}>
        <div className="row gx-5">
          <div className="col-md-6 col-lg-6 col-xl-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 align-self-center">
            <form onSubmit={handleLogin}>
              <button type="submit" className="btn btn-primary btn-floating w-100 h-75 fw-semibold mt-3 border-0 text-white" style={{ backgroundColor: "#ffbb00" }}>
                Login with TMDB
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
