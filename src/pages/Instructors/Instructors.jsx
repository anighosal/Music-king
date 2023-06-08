import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import InstructorCard from "./instructorCard";

const Instructors = () => {
  const [instructos, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://my-12th-work-server.vercel.app/musicData")
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
      <h2 className="text-center font-bold text-3xl text-red-800 mb-6">
        Our All Instructor
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {instructos.map((instructor) => (
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
