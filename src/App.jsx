import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastComponent } from "./Components/ToastComponent";

const Home = lazy(() => import("./Pages/Home"));
const Watchlist = lazy(() => import("./Pages/Watchlist"));
const Favorite = lazy(() => import("./Pages/Favorite"));
const Detail = lazy(() => import("./Pages/Detail"));
const Login = lazy(() => import("./Pages/Login"));
const Navbar = lazy(() => import("./Components/Navbar"));
const ProtectRouter = lazy(() => import("./Components/ProtectRouter"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectRouter />}>
              <Route path="/" element={<Home />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Route>
          </Routes>
        </Suspense>

        <ToastComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
