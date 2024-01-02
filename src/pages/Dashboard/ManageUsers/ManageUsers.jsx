import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  // const [isAdmin] = useAdmin();
  const { user } = useAuth();
  const { data: users = [], refetch } = useQuery(
    ["users", user?.email],
    async () => {
      const res = await axiosSecure.get(`/users?email=${user?.email}`);
      return res.data;
    }
  );

  const handleInstructor = (user) => {
    fetch(
      `https://music-king-server.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire(
            "Good job!",
            `${user.name} is an Instructor Now`,
            "success"
          );
        }
      });
  };

  const handleAdmin = (user) => {
    fetch(
      `https://music-king-server.vercel.app/users/admin/${user._id}`,
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

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://music-king-server.vercel.app/users/${user._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
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
              <th>Action</th>
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
