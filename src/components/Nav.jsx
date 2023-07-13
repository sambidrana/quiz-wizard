import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  const checkPlayer = localStorage.getItem("Playername");
  // console.log(checkPlayer);

  return (
    <div className="navbar">
      { !checkPlayer &&
      location.pathname !== "/" && (
        <Link to="/" style={{ textDecoration: "none" }} className="nav-home">
          Home
        </Link>
      )}
      {location.pathname !== "/result" &&
        location.pathname !== "/questions" && (
          <Link
            to="/result"
            style={{ textDecoration: "none" }}
            className="nav-leaderboard"
          >
            Leaderboard
          </Link>
        )}
      {checkPlayer &&
        location.pathname !== "/" &&
        location.pathname !== "/settings" && 
          location.pathname !== "/result" && (
          <Link
            to="/settings"
            style={{ textDecoration: "none" }}
            className="nav-settings"
          >
            Settings
          </Link>
        )}
    </div>
  );
};

export default Nav;
