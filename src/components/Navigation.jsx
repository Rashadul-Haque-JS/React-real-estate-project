import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/authState/loginState";

const Navigation = () => {
  const { inLogged, setLogged, user, setToken, setUser } =
    useContext(LoginContext);
  const nav = useNavigate();

  const logout = () => {
    localStorage.clear(["TOKEN", "USER"]);
    setLogged(false);
    setToken("");
    setUser("");
    nav("/");
  };

  return (
    <div className="navBar">
      <Link to="/">HOME</Link>
      {!inLogged && (
        <Link style={{ color: "hotpink" }} to="/login">
          LOGIN
        </Link>
      )}

      {inLogged && (
        <div>
          <Link to="/profile" className="text-uppercase">{user.name}</Link>
          {user.role == "admin" && (
            <Link style={{ color: "hotpink" }} to="/register">
              REGISTER
            </Link>
          )}

          <button className="btnGroup" onClick={logout}>
            LOGOUT
          </button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
