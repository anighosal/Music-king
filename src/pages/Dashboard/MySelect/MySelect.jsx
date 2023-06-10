import React from "react";
import { Helmet } from "react-helmet-async";
import useMySelect from "../../../hooks/useMySelect";
import { FaMoneyBill, FaRegUserCircle, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelect = () => {
  const [classes, refetch] = useMySelect();
  const total = classes.reduce(
    (sum, singleClass) => singleClass.price + sum,
    0
  );
  const handleDelete = (singleClass) => {
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
        fetch(`http://localhost:5000/classes/${singleClass._id}`, {
          method: "DELETE",
        })
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
        <title>Music King | My selected Classes</title>
      </Helmet>
      <h3 className="text-3xl">Total Items: {classes.length}</h3>
      <h3 className="text-3xl">Total Price: {classes.length}</h3>
      <Link to="/dashboard/payment">
        {" "}
        <button className="btn btn-warning btn-sm">Pay</button>
      </Link>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={singleClass.classImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{singleClass.className}</td>
                <td>
                  <div className="font-bold">
                    {singleClass.musicInstructorName}
                  </div>
                </td>
                <td className="text-red-500">$ {singleClass.classPrice}</td>
                <td className="grid grid-cols-1 gap-2">
                  <button
                    onClick={() => handleDelete(singleClass)}
                    className="btn btn-ghost btn-sm"
                  >
                    <FaTrash></FaTrash>
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

export default MySelect;
