import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/authState/loginState";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
  const { user } = useContext(LoginContext);

  return (
      <div className="wrapper col-md-12">
          <ProfileCard user={ user}/>

    </div>
  );
};

export default Profile;
