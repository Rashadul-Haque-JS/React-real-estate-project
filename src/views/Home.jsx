import { useContext } from "react";
import { TaskCtx } from "../context/taskState";
const Home = () => {
    const { value, setValue } = useContext(TaskCtx);
    return(
        <div className="wrapper col-md-12">
            <h1>{value}</h1>
        </div>
    )
}

export default Home