import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { LoginContext } from "./authState/loginState";
import {
  createTask,
  taskByMeClient,
  taskByMeWorker,
  allTasks,
  // taskUpdate,
  // deleteTask,
} from "../api/index";

const TaskCtx = createContext();

const TaskCtxProvider = (props) => {
  const { user } = useContext(LoginContext);
  const [tasks, setTasks] = useState("");
  const [myTasks, setMyTasks] = useState("");
  const [error, setError] = useState("");
  const [taskObject, setObject] = useState({
    title: "",
    desc: "",
    clientEmail: "",
  });
  const [selectedFile, setSelectedFile] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      if (tasks === "" && myTasks === "") {
        try {
          switch (user.role) {
            case "admin":
              const resAllTask = await allTasks();
              setTasks(resAllTask.data);
              break;
            case "worker":
              const resWorker = await taskByMeWorker(user._id);
              setMyTasks(resWorker.data);
              break;
            case "client":
              const resClient = await taskByMeClient(user._id);
              setMyTasks(resClient.data);
              break;
            default:
              setTasks("");
              setMyTasks("");
          }
        } catch (err) {
          setError(err.response.data);
          setTimeout(() => {
            setError("");
          }, 3000);
        }
      }
    };
    fetchTasks();
  },[tasks, user._id,user.role,myTasks]);

  const createNewTask = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", taskObject.title);
      formData.append("desc", taskObject.title);
      formData.append("clientEmail", taskObject.clientEmail);
      formData.append("image", selectedFile);
      const res = await createTask(formData);
      if (res.status === 200) {
        toast.success("Task created!", {
          position: "top-center",
        });
      }
    } catch (err) {
      setError(err.response.data);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  // const taskByClient = () => {}; // to be continue...

  return (
    <TaskCtx.Provider
      value={{
        tasks,
        myTasks,
        setTasks,
        error,
        taskObject,
        setObject,
        createNewTask,
        selectedFile,
        setSelectedFile,
      }}
    >
      {props.children}
    </TaskCtx.Provider>
  );
};

export { TaskCtxProvider, TaskCtx };
