import React from "react";

const PopularClassCard = ({ allclass }) => {
  const { classImage, numberOfStudents, className } = allclass;
  return (
    <>
      <div className="rounded-md lg:w-[400px] w-full bg-slate-600 glass  text-center text-white">
        <div style={{ height: '300px' }}>
          <img className="w-full h-full rounded-md p-4 hover:shadow-lg transition-transform transform hover:scale-105" src={classImage} alt={className} />
        </div>
        <div className="card-body">
          <h2 className="">{className}</h2>
          <p> {numberOfStudents} Students</p>
        </div>
      </div>
    </>
  );
};

export default PopularClassCard;
