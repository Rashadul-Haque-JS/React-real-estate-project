
import CreateTask from "../components/TaskForm";
import PageBar from "../components/PageBar";
import { useContext } from "react";
import { TaskCtx } from "../context/taskState";

const Task = () => {
  const {error} = useContext(TaskCtx)
  const path = 'Task'
  return (
    <div className="wrapper col-md-12">
      <PageBar error={error} path={ path}/>
      <div>
      <CreateTask/>
      </div>
    </div>
  );
};

export default Task;
