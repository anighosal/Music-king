import React from "react";

const PopularCard = ({ teacher }) => {
  const { musicInstructorName, instructorImage, className, numberOfStudents } =
    teacher;
  return (
    <div className="text-center text-white">
      <div className="rounded-md lg:w-[400px] w-full bg-slate-600 glass ">
        <div style={{ height: '300px' }}>
          <img
            className="w-full h-full rounded-md p-4 hover:shadow-lg transition-transform transform hover:scale-105" src={instructorImage} alt={className}
           
          />
        </div>
        <div className="card-body">
          <h2 className="font-bold"> {musicInstructorName}</h2>
          <p >{className}</p>
          <p >
            {numberOfStudents} Students
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
