import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const AddClass = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full px-10 bg-slate-500">
      <Helmet>
        <title>Music King | Add Class</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              type="name"
              name="name"
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("name", { required: true, maxLength: 120 })}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="Email"
              {...register("email", { required: true })}
              name="Email"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <input
          className="btn btn-primary mt-8 w-full"
          type="submit"
          value="Add Class"
        />
      </form>
    </div>
  );
};

export default AddClass;
