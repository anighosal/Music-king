import React from "react";
import { FaArrowRight, FaSort } from "react-icons/fa";

const InstructorCard = ({ instructor }) => {
  const { instructorImage, musicInstructorName, instructorEmail } = instructor;
  return (
    <>
      <div className="rounded-md lg:w-[400px] w-full bg-slate-600 glass text-white">
        <div style={{ height: '300px' }}>
          <img className="w-full h-full rounded-md p-4 hover:shadow-lg transition-transform transform hover:scale-105" src={instructorImage} alt={musicInstructorName} />
        </div>
        <div className="card-body">
          <h2 >{musicInstructorName}</h2>
          <p >{instructorEmail}</p>
          <div className="card-actions justify-left">
            <FaArrowRight className="cursor cursor-pointer">Details</FaArrowRight>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
