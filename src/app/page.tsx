import ListMovies from "@/components/Movie/MovieList";
import getQueryClient from "@/lib/get_query_client";
import Hydrate from "@/lib/hydrate.client";
import { fetchPopularMovies } from "@/lib/movies";
import { dehydrate } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery(["pupular-movies"], ({pageParam}) => fetchPopularMovies(pageParam), {
    getNextPageParam: lastPage => lastPage.nextPage
  });
  const dehydratedState = dehydrate(queryClient)

  return <Hydrate state={dehydratedState}>
    <ListMovies />
  </Hydrate>
}
