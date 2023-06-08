import React from "react";

const PopularCard = ({ teacher }) => {
  const { musicInstructorName, instructorImage, className, numberOfStudents } =
    teacher;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[200px]" src={instructorImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {musicInstructorName}</h2>
          <p className="text-blue-500 font-bold">Class: {className}</p>
          <p className="text-blue-500 font-bold">
            Number Of Students: {numberOfStudents}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
