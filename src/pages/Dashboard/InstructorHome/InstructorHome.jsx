import React from "react";
import useAuth from "../../../hooks/useAuth";

const InstructorHome = () => {
  const { user } = useAuth();
  return (
    <div className="w-full m-4 ml-28">
      <img
        className="rounded w-[200px] 
    "
        src={user.photoURL}
        alt=""
      />
      <h2 className="text-3xl mt-2">Name: {user.displayName}</h2>
      <h2 className="text-3xl">Email: {user.email}</h2>
      <h2 className="text-3xl">Instructor</h2>
    </div>
  );
};

export default InstructorHome;
