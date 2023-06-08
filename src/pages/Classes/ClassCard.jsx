import React from "react";

const ClassCard = ({ singleClass }) => {
  const {
    className,
    classImage,
    classPrice,
    availableSeats,
    musicInstructorName,
  } = singleClass;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-full" w-20 src={classImage} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p className="font-bold">Instructor :{musicInstructorName}</p>
          <p>Available Seats: {availableSeats}</p>
          <p className="text-red-700 font-bold">Price:$ {classPrice}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Select Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
