import RegisterForm from "../components/RegiForm";
import { useContext } from "react";
import { RegiContext } from "../context/authState/regiState";
import PageBar from "../components/PageBar";
const Register = () => {
  const { error } = useContext(RegiContext)
  const path = 'Register'

  return (
    <div className="wrapper col-md-12">
      <PageBar error={error} path={path} />

      <RegisterForm />


    </div>
  );
};

export default Register;