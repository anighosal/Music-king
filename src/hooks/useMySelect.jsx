import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProviders";

const useMySelect = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://my-12th-work-server.vercel.app/classes?email=${user.email}`
      );
      return res.json();
    },
  });
  return [classes, refetch];
};

export default useMySelect;
