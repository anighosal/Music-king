import React from "react";

const InstructorCard = ({ instructor }) => {
  const { instructorImage, musicInstructorName, instructorEmail } = instructor;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[200px]" src={instructorImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {musicInstructorName}</h2>
          <p>{instructorEmail}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
