import React from "react";

const PopularClassCard = ({ allclass }) => {
  const { classImage, numberOfStudents, className } = allclass;
  return (
    <>
      <div className="card w-96 glass">
        <figure>
          <img className="h-[150px]" src={classImage} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Class Name: {className}</h2>
          <p>Number Of Students: {numberOfStudents}</p>
        </div>
      </div>
    </>
  );
};

export default PopularClassCard;
