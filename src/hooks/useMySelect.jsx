import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";

const useMySelect = () => {
  const { user } = useContext(AuthContext);
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
