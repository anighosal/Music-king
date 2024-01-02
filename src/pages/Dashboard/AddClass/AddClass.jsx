import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const {
      className,
      classImage,
      classPrice,
      AvailableSeats,
      user: email,
      name,
    } = data;

    console.log(data);
    const formData = {
      className,
      classImage,
      classPrice: parseFloat(classPrice),
      AvailableSeats,
      user: email,
      name,
    };

    try {
      const response = await axiosSecure.post(
        "https://music-king-server.vercel.app/musicData",
        formData
      );
      console.log(response.data);
      if (response.success) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "user successfully login",
          showConfirmButton: false,
          timer: 1500,
        });
      } // Reset the form after successful submission
    } catch (error) {
      console.error(error);
    }
    // fetch("https://music-king-server.vercel.app/musicData", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newClass),
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);
    //   if (newClass.success) {
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: "Item added successfully",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   }
    // });
  };

  return (
    <div className="w-full h-[500px] px-10 bg-slate-500 ml-6">
      <Helmet>
        <title>Music King | Add Class</title>
      </Helmet>
      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white">Class Image</span>
          </label>
          <select
            defaultValue="Pick One"
            {...register("classImage", { required: true })}
            className="select select-bordered"
          >
            <option disabled selected>
              Pick one
            </option>
            <option>https://imgtr.ee/images/2023/06/07/phWs3.jpg</option>
            <option>https://imgtr.ee/images/2023/06/07/phCAF.jpg</option>
            <option>https://imgtr.ee/images/2023/06/07/phslU.jpg</option>
            <option>https://imgtr.ee/images/2023/06/07/phcnR.jpg</option>
            <option>https://imgtr.ee/images/2023/06/07/phFtb.jpg</option>
            <option>https://imgtr.ee/images/2023/06/07/phjbA.jpg</option>
            <option>https://imgtr.ee/images/2023/06/07/phHlx.jpg</option>
            <option>https://imgtr.ee/images/2023/06/07/phgfi.jpg</option>
            <option>https://imgtr.ee/images/2023/06/07/p4MZn.jpg</option>
            <option>https://imgtr.ee/images/2023/06/07/p4oRY.jpg</option>
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white">Class Name</span>
          </label>
          <select
            defaultValue="Pick One"
            {...register("className", { required: true })}
            className="select select-bordered"
          >
            <option disabled selected>
              Pick one
            </option>
            <option>Guiter Basics</option>
            <option>Piano Masterclass</option>
            <option>Drumming Techniques</option>
            <option>Violin Masterclass</option>
            <option>Piano for Beginners</option>
            <option>Jazz Improvisation</option>
            <option>Flute Fundamentals</option>
            <option>Saxophone Ensemble</option>
            <option>Music Theory Foundations</option>
            <option>Bass Guitar Basics</option>
          </select>
        </div>

        <div className="flex gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Available Seats</span>
            </label>
            <input
              type="number"
              {...register("availableSeats", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Price</span>
            </label>
            <input
              type="number"
              {...register("classPrice", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              defaultValue={user?.displayName}
              className="input input-bordered w-full"
              {...register("name", { required: true, maxLength: 120 })}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: true })}
              name="Email"
              defaultValue={user?.email}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <input
          className="btn btn-error mt-8 w-full"
          type="submit"
          value="Add Class"
        />
      </form>
    </div>
  );
};

export default AddClass;
