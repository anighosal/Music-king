import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://my-12th-work-server.vercel.app/users");
    return res.json();
  });

  const handleAdmin = (user) => {
    fetch(
      `https://my-12th-work-server-anighosal.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire("Good job!", `${user.name} is an Admin Now`, "success");
        }
      });
  };

  const handleDelete = (user) => {};
  return (
    <div className="lg:w-full">
      <Helmet>
        <title>Music King | All Users</title>
      </Helmet>
      {users.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin Role</th>
              <th>Instructor role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleAdmin(user)}
                      className="btn btn-ghost bg-red-500"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button
                      onClick={() => handleInstructor(user)}
                      className="btn btn-ghost bg-red-500"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>

                <button
                  onClick={() => handleDelete(user)}
                  className="btn btn-ghost bg-red-500"
                >
                  <FaTrash></FaTrash>
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
