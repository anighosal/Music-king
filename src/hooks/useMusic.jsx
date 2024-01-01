import { useQuery } from "@tanstack/react-query";
import React from "react";

const useMusic = () => {
  const {
    data: musicData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["musicData"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/musicData"
      );
      return res.json();
    },
  });
  return [musicData, loading, refetch];
};

export default useMusic;
