import { useState, createContext } from "react";
import { registerUser } from "../../api/index";

const RegiContext = createContext();

function RegiContextProvider(props) {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const address = { street, city, zip };
      let response = await registerUser(name, address, email, password, role);
      if (response.data !== "Forbidden") {
      } else {
        throw new Error(response.data);
      }
    } catch (err) {
      setError(err.response.data);
      setTimeout(() => {
        setError('')
      },3000)
    }
  };

  return (
    <RegiContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        street,
        setStreet,
        city,
        setCity,
        zip,
        setZip,
        handleSubmit,
        name,
        role,
        setRole,
        setName,
        error
      }}
    >
      {props.children}
    </RegiContext.Provider>
  );
}

export { RegiContextProvider, RegiContext };
