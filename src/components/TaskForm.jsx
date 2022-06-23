import { useContext } from "react";
import { TaskCtx } from "../context/taskState";
import { UserContext } from "../context/userState";

const CreateTask = () => {
  const { clientsList } = useContext(UserContext);
  const {
    taskObject,
    setObject,
    createNewTask,
    setSelectedFile,
  } = useContext(TaskCtx);

  const handler = (e) => {
    const value = e.target.value;
    setObject({ ...taskObject, clientEmail: value });
    console.log(value);
  };

  return (
    <div className="container bootstrap snippets bootdey">
      <form onSubmit={createNewTask} encType="multipart/form-data" className="form-horizontal col-lg-3 mt-3" role="form ">
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Title"
          value={taskObject.title}
          onChange={(e) => setObject({ ...taskObject, title: e.target.value })}
          required
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Desc"
          value={taskObject.desc}
          onChange={(e) => setObject({ ...taskObject, desc: e.target.value })}
          required
        />

        <select className="form-control mt-3" value={taskObject.clientEmail} onChange={handler}>
          {Array.from(clientsList).map((client, index) => (
            <option value={client.email} key={index}>
              {client.name}
            </option>
          ))}
        </select>
        <input
          type="file"
          className="form-control mt-3"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />

        <button className="btn btn-primary">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
