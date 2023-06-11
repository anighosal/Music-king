import React, { useState } from "react";
import useMusic from "../../../hooks/useMusic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ManageClass = () => {
  const [music, refetch] = useMusic();
  const [axiosSecure] = useAxiosSecure();
  const [classes, setClasses] = useState([]);

  const handleApprove = (myclass) => {
    const updatedClass = { status: "approved" };
    console.log(myclass);

    fetch(`http://localhost:5000/classes/${myclass._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedClass),
    })
      .then((res = res.json()))
      .then((data) => {
        console.log(data);
        const updatedClasses = classes.map((myclass) =>
          myclass._id === id ? { ...myclass, status: "approved" } : myclass
        );
        setClasses(updatedClasses);
      });
  };

  const handleDeny = (myclass) => {
    const updatedClass = { status: "denied" };

    // Send the updatedClass data to the server
    fetch(`http://localhost:5000/classes/${myclass._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedClass),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Update the classes state with the updated class
        const updatedClasses = classes.map((myclass) =>
          myclass._id === id ? { ...myclass, status: "denied" } : myclass
        );
        setClasses(updatedClasses);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Music King | Manage class</title>
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

                <td>
                  {myclass.status === "pending" && (
                    <>
                      <button onClick={() => handleApprove(myclass._id)}>
                        Approve
                      </button>
                      <button onClick={() => handleDeny(myclass._id)}>
                        Deny
                      </button>
                    </>
                  )}
                  {myclass.status !== "pending" && (
                    <button disabled>Approve</button>
                  )}
                  {/* Open the modal using ID.showModal() method */}
                  <button className="btn" onClick={() => toggleModal}>
                    Feedback
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
