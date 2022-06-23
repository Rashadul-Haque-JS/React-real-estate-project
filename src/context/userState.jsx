import { createContext, useState, useEffect, useContext } from "react";
import { LoginContext } from "./authState/loginState";
import {
  allClients,
  allWorkers,
  users,
  // updateAccount,
  // deleteUser,
} from "../api/index";

const UserContext = createContext();

const UserContextProvider = (props) => {
  const { user } = useContext(LoginContext);
  const [usersList, setUList] = useState("");
  const [clientsList, setCList] = useState("");
  const [workersList, setWList] = useState("");
  const [email, setEmail] = useState(""); // to delete user
  const [payload, setPayload] = useState(""); // to update user
  const [error, setError] = useState("");

  useEffect(() => {
    const getUserList = async () => {
      if (usersList === "" && clientsList === "" && workersList === "") {
        switch (user.role) {
          case "admin":
            const resU = await users();
            setUList(resU.data);
            const resC = await allClients();
            setCList(resC.data);
            const resW = await allWorkers();
            setWList(resW.data);
            break;
          case "worker":
            const res = await allClients();
            setCList(res.data);
            break;
          default:
            setUList("");
            setCList("");
            setWList("");
        }
      }
    };
    getUserList();
  });

  return (
    <UserContext.Provider
      value={{
        usersList,
        clientsList,
        workersList,
        email,
        error,
        payload,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
