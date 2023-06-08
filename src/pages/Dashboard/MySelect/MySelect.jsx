import React from "react";
import { Helmet } from "react-helmet-async";
import useMySelect from "../../../hooks/useMySelect";
import { FaMoneyBill, FaRegUserCircle, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MySelect = () => {
  const [cart, refetch] = useMySelect();
  const handleDelete = (singleClass) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="lg:w-full">
      <Helmet>
        <title>Music King | My selected Classes</title>
      </Helmet>
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
            {cart.map((singleClass, index) => (
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
                  <button className="btn btn-ghost btn-sm ">
                    <FaMoneyBill></FaMoneyBill>
                  </button>
                  <button className="btn btn-ghost btn-sm ">
                    <FaRegUserCircle></FaRegUserCircle>
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
