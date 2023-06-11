import React, { useEffect, useState } from "react";
import useMusic from "../../../hooks/useMusic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ManageClass = () => {
  const [music, refetch] = useMusic();
  const [axiosSecure] = useAxiosSecure();

  const handleStatusUpdate = async (classId, status) => {
    await axiosSecure.put(`/music/${classId}`, { status });

    // Refetch the music data to update the UI
    refetch();
  };

  const handleSendFeedback = async (myclass) => {};
  return (
    <div>
      <Helmet>
        <title>Music King | Manage Classes</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Class Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {music.map((myclass, index) => (
              <tr key={myclass._id}>
                <td>{index + 1}</td>
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
                <td>{myclass.musicInstructorName}</td>
                <td>{myclass.instructorEmail}</td>
                <td>{myclass.availableSeats}</td>
                <td>$ {myclass.classPrice}</td>
                <td>$ {myclass.status}</td>
                <td>
                  <button
                    onClick={() => handleStatusUpdate(myclass.id, "approved")}
                    disabled={myclass.status !== "pending"}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(myclass.id, "denied")}
                    disabled={myclass.status !== "pending"}
                  >
                    Deny
                  </button>
                  <button onClick={() => handleSendFeedback(myclass.id)}>
                    Send Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
