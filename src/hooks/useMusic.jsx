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
        "https://my-12th-work-server-anighosal.vercel.app/musicData"
      );
      return res.json();
    },
  });
  return [musicData, loading, refetch];
};

export default useMusic;
