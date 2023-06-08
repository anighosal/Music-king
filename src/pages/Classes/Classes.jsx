import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://my-12th-work-server.vercel.app/musicData")
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Music King | Classes</title>
      </Helmet>
      <div>
        {classes.map((singleClass) => (
          <ClassCard
            key={singleClass._Id}
            singleClass={singleClass}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
