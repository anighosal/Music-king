import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import InstructorCard from "./instructorCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/musicData")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  return (
    <div className="pt-[220px]">
      <Helmet>
        <title>Music King | Instructors</title>
      </Helmet>
      <h2 className="text-center font-bold lg:text-3xl text-lg mb-6 text-slate-800">
        Our All Instructor
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 lg:mx-[70px]">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
