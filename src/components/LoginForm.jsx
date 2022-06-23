import "../index.css";
import { useContext } from "react";
import { LoginContext } from "../context/authState/loginState";

const LoginForm = () => {
  const { inLogged, email, password, handleSubmit, setEmail, setPassword } =
    useContext(LoginContext);
  return (
    <div className="generalFlex">
      {!inLogged && (
        <form onSubmit={handleSubmit} className='col-lg-12 formStyle'>
          <div className="col-lg-3 mt-3">
            <input
              type="email"
              className="form-control"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-lg-3 mt-3">
            <input
              type="password"
              className="form-control"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="col-lg-3 mt-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary col-lg-3 mt-2">
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
