import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useMusic from "../../../hooks/useMusic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyClasses = () => {
  const [music, refetch] = useMusic();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (myclass) => {
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
        axiosSecure.delete(`/musicData/${myclass._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Music King | My selected Classes</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Class Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {music.map((myclass) => (
              <tr key={myclass._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={myclass.classImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{myclass.className}</td>
                <td>$ {myclass.classPrice}</td>
                <td>
                  <button
                    onClick={() => handleApprove(myclass)}
                    className="btn btn-ghost btn-xs"
                  >
                    Approve
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(myclass)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyClasses;
