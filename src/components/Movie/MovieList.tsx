"use client"

import Poster from "@/components/Poster";
import { fetchPopularMovies } from "@/lib/movies"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useCallback, useEffect } from "react";

function ListMovies() {
  const {
    data,
    fetchNextPage,
    isLoading,
    isError
  } = useInfiniteQuery({
    queryKey: ["pupular-movies"],
    queryFn: ({pageParam = 1}) => fetchPopularMovies(pageParam),
    getNextPageParam: lastPage => lastPage.nextPage,
  });

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    fetchNextPage();
  }, [fetchNextPage])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading])

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Error...</h1>

  return <div className="px-4 space-y-8">
    {data?.pages?.map((movies, index) => (
      <div key={index} className="grid grid-cols-4 gap-4">
        {movies.data?.map(movie => (
          <Poster key={`${movie.id}`} uri={movie.poster_path} tmdbid={movie.id.toString()} />
        ))}
      </div>
    ))}
  </div>
}

export default ListMovies
