import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://my-12th-work-server.vercel.app/users");
    return res.json();
  });
  return (
    <div>
      <Helmet>
        <title>Music King | All Users</title>
      </Helmet>
    </div>
  );
};

export default AllUsers;
