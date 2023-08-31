import axios from "axios";

const TOKEN = process.env.TMDB_TOKEN ?? "8265bd1679663a7ea12ac168da84d2e8"

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[]; // You can replace this with a specific array type if needed
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export async function fetchDetails(tmdbid: string | null): Promise<Movie> {
  if (!tmdbid) throw new Error("Not found tmdbid")
  try {
    const url = `https://api.themoviedb.org/3/movie/${tmdbid}?language=en-US&api_key=${TOKEN}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error('Error fetching details:', error);
    throw error;
  }
}

export async function fetchPopularMovies(
  page = 1,
): Promise<{data: Movie[], nextPage: number | undefined}> {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${TOKEN}`;
    const res = await axios.get(url);

    const data = res.data.results;
    const hasNext = page * 2 <= parseInt(data.length)
    return {
      data,
      nextPage: hasNext ? page + 1 : undefined
    }
  } catch (error) {
    console.error('Error fetching details:', error);
    throw error;
  }
}


