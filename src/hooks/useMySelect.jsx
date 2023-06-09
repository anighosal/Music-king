import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useMySelect = () => {
  const { user } = useAuth();
  // const token = localStorage.getItem("access-token");
  const [axios] = useAxiosSecure();

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await fetch(`/classes?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });
  return [classes, refetch];
};

export default useMySelect;
