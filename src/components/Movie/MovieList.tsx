"use client"

import Poster from "@/components/Poster";
import { fetchPopularMovies } from "@/lib/movies"
import { useInfiniteQuery } from "@tanstack/react-query"
import InfiniteScroll from "react-infinite-scroll-component";

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

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Error...</h1>

  return <div className="sm:px-2 md:px-4 pt-12">
    <h1 className="text-2xl sm:text-3xl leading-tight">Treading</h1>
    {data?.pages?.map((movies, index) => (
      <InfiniteScroll 
        key={index} 
        dataLength={movies.data.length}
        next={fetchNextPage}
        hasMore={!!movies.nextPage}
        loader={<p>Loading...</p>}
        endMessage={<p>No More data</p>}
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 sm:gap-2">
        {movies.data?.map(movie => (
          <Poster key={`${movie.id}`} uri={movie.poster_path} tmdbid={movie.id.toString()} />
        ))}
      </InfiniteScroll>
    ))}
  </div>
}

export default ListMovies
