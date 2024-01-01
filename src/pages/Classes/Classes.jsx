import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ClassCard from "../../components/ClassCard/ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/musicData")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    <div className="pt-[200px]">
      <Helmet>
        <title>Music King | Classes</title>
      </Helmet>
      <h2 className="text-center font-bold lg:text-3xl text-lg mb-6 text-slate-800">
        Our All Class
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 lg:mx-[70px]">
        {classes.map((singleClass) => (
          <ClassCard
            key={singleClass._id}
            singleClass={singleClass}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
