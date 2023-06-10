import React from "react";
import useMusic from "../../../hooks/useMusic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ManageClass = () => {
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
    <div>
      <Helmet>
        <title>Music King | Manage</title>
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
                <td className="grid grid-cols-1 gap-2">
                  <button
                    className="btn btn-outline btn-error btn-sm"
                    onClick={() => handleApprove(myclass)}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-outline btn-warning btn-sm"
                    onClick={() => handleDeny(myclass)}
                  >
                    Deny
                  </button>
                  <button
                    className="btn btn-outline btn-success btn-sm"
                    onClick={() => handleFeedback(myclass)}
                  >
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
