"use client"

import Poster from "@/components/Poster";
import { fetchPopularMovies } from "@/lib/movies"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useCallback, useEffect } from "react";

function ListMovies() {
  const {
    data,
    fetchNextPage,
    isLoading
  } = useInfiniteQuery({
    queryKey: ["pupular-movies"],
    queryFn: ({pageParam = 1}) => fetchPopularMovies(pageParam),
    getNextPageParam: lastPage => lastPage.length ?? false,
    getPreviousPageParam: firstPage => firstPage.length ?? false
  });

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    fetchNextPage();
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading])

  return <div className="px-4 space-y-8">
    <div className="grid grid-cols-4 gap-4">
      {data?.pages?.map(movies => (
        <>
          {movies.map(movie => (
            <Poster key={`${movie.id}`} uri={movie.poster_path} />
          ))}
        </>
      ))}
    </div>
  </div>
}

export default ListMovies
