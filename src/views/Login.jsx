
import LoginForm from "../components/LoginForm";
import PageBar from '../components/PageBar'
import { useContext } from "react";
import { LoginContext } from "../context/authState/loginState";

const Login = () => {

  const {error} = useContext(LoginContext)
  const path = 'Login'

  return (
    <div className="wrapper col-md-12 ">
      <PageBar error={error} path={ path}/>
      <LoginForm/>
    </div>
  );
};

export default Login;