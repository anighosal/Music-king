import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://my-12th-work-server.vercel.app/users");
    return res.json();
    const handleDelete = (user) => {};
  });
  return (
    <div>
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
              <th>Instructor Role</th>
              <th>Student Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>Blue</td>
                <td>Blue</td>
                <button
                  onClick={() => handleDelete(user)}
                  className="btn btn-ghost btn-sm"
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
