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
        "https://music-king-server.vercel.app/musicData"
      );
      return res.json();
    },
  });
  return [musicData, loading, refetch];
};

export default useMusic;
