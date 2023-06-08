import React from "react";
import { Helmet } from "react-helmet-async";
import useMySelect from "../../../hooks/useMySelect";

const MySelect = () => {
  const [cart, refetch] = useMySelect();
  return (
    <div>
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
                <td>{singleClass.classPrice}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
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
