
import { useContext } from "react";
import { RegiContext } from "../context/authState/regiState";
const RegisterForm = () => {
    const {name, setName,handleSubmit,setStreet, street,city,setCity, zip, setZip,email,setEmail, password, setPassword, role, setRole}= useContext(RegiContext)

    return (
      <form onSubmit={handleSubmit} className="col-lg-12 formStyle">
        <div className="col-lg-3 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="your full name" value={name} onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="col-lg-3 mt-3">
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="street" value={street} onChange={(e) => setStreet(e.target.value)}
              required
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="city " value={city} onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="zip " value={zip} onChange={(e) => setZip(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="col-lg-3 mt-3">
          <input
            type="email"
            className="form-control"
            placeholder="your email" value={email} onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-lg-3 mt-3">
          <input
            type="password"
            className="form-control"
            placeholder="choose password" value={password} onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="col-lg-3 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="user role" value={role} onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <div className="d-grid col-lg-3 mt-3">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    );
  };

  export default RegisterForm;