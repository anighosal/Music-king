import React, { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";
import { FaSort } from "react-icons/fa";

const PopularClass = () => {
  const [popularAllClass, setPopularAllClass] = useState([]);
  const [asc, setAsc] = useState(true);

  useEffect(() => {
    fetch(
      `http://localhost:5000/musicDataSort?sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setPopularAllClass(data));
  }, [asc]);
  return (
    <div className="text-center ">
      <h2 className=" lg:text-3xl font-bold text-slate-800 mb-4 lg:ml-10 lg:pl-5">
       Our Popular top 6 class 
      </h2>
      <FaSort className="text-red-500 ml-16 lg:w-5 lg:h-8 " onClick={() => setAsc(!asc)}>
        {asc ? "Price: High to low" : "Price:Low to High"}
      </FaSort>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 lg:mx-[70px]">
        {popularAllClass.map((allclass) => (
          <PopularClassCard
            key={allclass._id}
            allclass={allclass}
          ></PopularClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
