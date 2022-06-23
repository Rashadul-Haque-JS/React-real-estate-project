import { createContext, useState, useEffect } from "react";
import { login, saveToken } from "../../api/index";


const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("")
  const [user, setUser] = useState("");
  const [inLogged, setLogged] = useState(false);
  const [error, setError] = useState("");

  //   methods

  useEffect(() => {
    if (
      localStorage.getItem("TOKEN") !== null &&
      localStorage.getItem("USER") !== null
    ) {
      const currentToken = JSON.parse(localStorage.getItem("TOKEN"));
      const currentUser = JSON.parse(localStorage.getItem("USER"));
      setLogged(true);

      setUser(currentUser);
      saveToken(currentToken);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      setLogged(true);
      setToken(response.data.token);
      setUser(response.data.userData);
      localStorage.setItem("TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("USER", JSON.stringify(response.data.userData));
    } catch (err) {
      // setError(err.message)
      setError(err.response.data);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        token,
        setToken,
        inLogged,
        setLogged,
        handleSubmit,
        user,
        setUser,
        error
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContextProvider, LoginContext };
